// Import hooks atau fungsi biasa di baris ini
import { useState } from 'react'; 

// Import TYPE secara terpisah dengan kata kunci 'type' di depannya
import type { ReactNode } from 'react';
import { useCallback, useRef, useEffect} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from 'lucide-react';
import { RibbonBookmark } from './RibbonBookmark';

interface FlipBookProps {
  children: ReactNode[];
  onPageChange?: (page: number) => void;
}

export function FlipBook({ children, onPageChange }: FlipBookProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev'>('next');
  const [soundEnabled, setSoundEnabled] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const totalPages = children.length;

  // Initialize audio
  useEffect(() => {
    audioRef.current = new Audio();
    // Using a simple oscillator for page flip sound since we can't load external audio
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  // Play page flip sound using Web Audio API
  const playPageFlipSound = useCallback(() => {
    if (!soundEnabled) return;
    
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      // Create a "whoosh" sound
      oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 0.2);
      
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.2);
    } catch (e) {
      // Audio not supported
    }
  }, [soundEnabled]);

  const goToPage = useCallback((page: number) => {
    if (isFlipping || page < 0 || page >= totalPages) return;
    
    setIsFlipping(true);
    setFlipDirection(page > currentPage ? 'prev' : 'next');
    playPageFlipSound();
    
    setTimeout(() => {
      setCurrentPage(page);
      setIsFlipping(false);
      onPageChange?.(page);
    }, 600);
  }, [currentPage, isFlipping, totalPages, onPageChange, playPageFlipSound]);

  const nextPage = useCallback(() => {
    if (currentPage < totalPages - 1) {
      goToPage(currentPage + 1);
    }
  }, [currentPage, totalPages, goToPage]);

  const prevPage = useCallback(() => {
    if (currentPage > 0) {
      goToPage(currentPage - 1);
    }
  }, [currentPage, goToPage]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextPage();
      if (e.key === 'ArrowLeft') prevPage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextPage, prevPage]);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Book Container */}
 <div className="perspective-container w-full max-w-4xl mx-auto scale-75 md:scale-90">
        <div className="book-container relative aspect-[3/2] w-full">
          {/* Book Spine */}
          <div className="absolute left-1/2 top-0 bottom-0 w-4 -translate-x-1/2 bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 z-20 shadow-lg" />
          
          {/* Left Page (Previous) */}
          <div className="absolute left-0 top-0 w-1/2 h-full overflow-hidden rounded-l-lg shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={`left-${currentPage}`}
                initial={{ rotateY: flipDirection === 'prev' ? -90 : 0, opacity: flipDirection === 'prev' ? 0 : 1 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: flipDirection === 'next' ? 90 : 0, opacity: flipDirection === 'next' ? 0 : 1 }}
                transition={{ duration: 0.6, ease: [0.645, 0.045, 0.355, 1] }}
                className="w-full h-full origin-right"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {currentPage > 0 ? (
                  <div className="w-full h-full bg-amber-50">
                    {children[currentPage - 1]}
                  </div>
                ) : (
                  <div className="w-full h-full cover-texture flex items-center justify-center">
                    <div className="text-center text-amber-100">
                      <h1 className="handwritten text-5xl mb-4">1st Mensiversarry Book Edition</h1>
                      <p className="handwritten-alt text-xl opacity-80">A Scrapbook of Bacip</p>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Right Page (Current) */}
          <div className="absolute right-0 top-0 w-1/2 h-full overflow-hidden rounded-r-lg shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={`right-${currentPage}`}
                initial={{ rotateY: flipDirection === 'next' ? 90 : 0, opacity: flipDirection === 'next' ? 0 : 1 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: flipDirection === 'prev' ? -90 : 0, opacity: flipDirection === 'prev' ? 0 : 1 }}
                transition={{ duration: 0.6, ease: [0.645, 0.045, 0.355, 1] }}
                className="w-full h-full origin-left"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="w-full h-full bg-amber-50">
                  {children[currentPage]}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Ribbon Bookmarks */}
          <div className="absolute -top-2 right-4 flex gap-2 z-30">
            {[0, 1, 2, 3].map((i) => (
              <RibbonBookmark
                key={i}
                color={['red', 'blue', 'gold', 'pink'][i] as 'red' | 'blue' | 'gold' | 'pink'}
                pageNumber={i + 1}
                onClick={() => goToPage(i)}
                className={currentPage === i ? 'translate-y-4' : ''}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-8">
        {/* Previous Button */}
        <motion.button
          onClick={prevPage}
          disabled={currentPage === 0 || isFlipping}
          className="nav-arrow p-3 rounded-full bg-white/80 backdrop-blur shadow-lg disabled:opacity-30 disabled:cursor-not-allowed"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-6 h-6 text-amber-900" />
        </motion.button>
        
        {/* Page Indicator */}
        <div className="flex items-center gap-2">
          {children.map((_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === currentPage
                  ? 'bg-amber-700 w-4'
                  : 'bg-amber-300 hover:bg-amber-400'
              }`}
            />
          ))}
        </div>
        
        {/* Next Button */}
        <motion.button
          onClick={nextPage}
          disabled={currentPage === totalPages - 1 || isFlipping}
          className="nav-arrow p-3 rounded-full bg-white/80 backdrop-blur shadow-lg disabled:opacity-30 disabled:cursor-not-allowed"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="w-6 h-6 text-amber-900" />
        </motion.button>
      </div>
      
      {/* Sound Toggle */}
      {/* <motion.button
        onClick={() => setSoundEnabled(!soundEnabled)}
        className="absolute top-4 right-4 p-2 rounded-full bg-white/80 backdrop-blur shadow-lg z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {soundEnabled ? (
          <Volume2 className="w-5 h-5 text-amber-900" />
        ) : (
          <VolumeX className="w-5 h-5 text-amber-900" />
        )}
      </motion.button> */}
      
      {/* Instructions */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-amber-700/60 text-sm handwritten-note">
        Gunakan ← → atau klik untuk berpindah halaman
      </div>
    </div>
  );
}

export default FlipBook;

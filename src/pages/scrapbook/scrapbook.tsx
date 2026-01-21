import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Volume2, VolumeX } from 'lucide-react';

// --- Import Assets ---
// Pastikan path ini sesuai dengan struktur folder kamu
import Someday from '../../assets/us.png';
import Acip from '../../assets/acip.jpeg';
import rendi from '../../assets/rendi.jpeg';
import kalah from '../../assets/kalah.jpeg';
import kebalik from '../../assets/kebalik.jpeg';

// --- Import Components ---
import {
  FlipBook,
  ScrapbookPage,
  Polaroid,
  StickyNote,
  PressedFlower,
  WashiTape,
  HeartDoodle,
  StarDoodle,
} from '../../components/scrapbook';

// ==========================================
// PAGE 1: First Time (Vintage)
// ==========================================
function FirstTimePage() {
  return (
    <ScrapbookPage theme="vintage" title="First Day in 2026 💕">
      <div className="relative h-full">
        {/* Main Content */}
        <div className="grid grid-cols-2 gap-4 h-full">
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            <Polaroid
              imageSrc={Acip}
              caption="Pap pertama di tahun ini.."
              rotation={-3}
              tapeColor="gold"
              className="w-40"
            />
            
            <StickyNote color="yellow" rotation={2} pinned className="max-w-[180px]">
              <p className="text-sm">
                Hari itu langit cerah... dan aku tahu, ada sesuatu yang spesial akan datang 🌟
              </p>
            </StickyNote>
          </div>
          
          {/* Right Column */}
          <div className="flex flex-col gap-4 items-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-[200px]">
                <p className="handwritten text-amber-800 text-lg">
                  "Cinta sejati tak pernah mati, ia hidup selamanya..."
                </p>
              </div>
              <HeartDoodle className="absolute -top-3 -right-3" size="sm" />
            </motion.div>
            
            <Polaroid
              imageSrc={rendi}
              caption="Reaksi aku dapet pap itu.."
              rotation={-3}
              tapeColor="gold"
              className="w-40"
            />
          </div>
        </div>
        
        {/* Decorations */}
        <PressedFlower type="rose" className="absolute bottom-4 left-4" rotation={-15} />
        <PressedFlower type="leaf" className="absolute top-20 right-2" size="sm" rotation={30} />
        <WashiTape color="gold" rotation={-5} className="absolute top-2 left-1/4" width={60} />
      </div>
    </ScrapbookPage>
  );
}

// ==========================================
// PAGE 2: Funniest Moments (Floral + Interactive)
// ==========================================
function FunniestMomentsPage() {
  // State untuk fitur Tap-to-Hide quote
  const [showQuote, setShowQuote] = useState(true);

  return (
    <ScrapbookPage theme="floral" title="Funniest Moments 😂">
      <div className="relative h-full">
        <div className="grid grid-cols-2 gap-3">
          {/* Polaroid Gallery */}
          <Polaroid
            imageSrc={kalah}
            caption="Kalah sampe nangis.."
            rotation={-5}
            tapeColor="blue"
            className="w-36"
          />
          <StickyNote color="pink" rotation={3} className="max-w-[170px]">
            <p className="text-sm">
              "Inget ga waktu kita main Indo Voice aku kalah dan ga pernah menang haha" 🙈
            </p>
          </StickyNote>
          
          <StickyNote color="green" rotation={-2} className="max-w-[170px]">
            <p className="text-sm">
              Yang paling lucu: Kita main obby mobil tapi kebalik karena jembatannya naik sebelum kita lewat 😂
            </p>
          </StickyNote>
          
          <Polaroid
            imageSrc={kebalik}
            caption="Epic fail moment"
            rotation={4}
            tapeColor="mint"
            className="w-36"
          />
        </div>
        
        {/* Quote Interactive */}
        <AnimatePresence>
          {showQuote && (
            <motion.div 
              key="interactive-quote"
              onClick={() => setShowQuote(false)} // Hilang saat diklik
              className="absolute bottom-32 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur p-3 rounded-lg shadow-md max-w-[250px] z-50 cursor-pointer hover:bg-white/90"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0, transition: { duration: 0.2 } }}
              transition={{ delay: 4 }}
            >
              <p className="handwritten-casual text-pink-700 text-center text-lg select-none">
                "Ketawa bersamamu adalah obat terbaik" 💕
                <span className="block text-[10px] text-pink-400 mt-1 font-sans">(Tap to hide)</span>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Decorations */}
        <PressedFlower type="daisy" className="absolute top-2 right-2" size="sm" rotation={20} />
        <PressedFlower type="butterfly" className="absolute bottom-20 right-4" size="md" rotation={-10} />
        <StarDoodle className="absolute top-1/4 left-2" size="sm" color="#f687b3" />
      </div>
    </ScrapbookPage>
  );
}

// ==========================================
// PAGE 3: Deepest Conversations (Galaxy)
// ==========================================
function DeepestConversationsPage() {
  return (
    <ScrapbookPage theme="galaxy" title="Deepest Conversations ✨">
      <div className="relative h-full">
        <div className="space-y-4">
          {/* Quote Cards */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20"
          >
            <p className="handwritten text-purple-200 text-lg">
              "Terima kasih udah hadir di hidup aku.."
            </p>
            <p className="handwritten-alt text-purple-300 text-sm mt-2">
              — Percakapan jam 2 pagi
            </p>
          </motion.div>
          
          <StickyNote color="purple" rotation={-2} className="max-w-[200px]">
            <p className="text-sm text-gray-800">
              Malam itu kita bicara tentang mimpi dan ketakutan... 🌙
            </p>
          </StickyNote>
          
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20"
          >
            <p className="handwritten text-purple-200">
              "Bersama kamu, aku bisa jadi diriku sendiri"
            </p>
            <HeartDoodle className="absolute -right-2 -top-2" size="sm" color="#c084fc" />
          </motion.div>
        </div>
        
        {/* Decorations */}
        <StarDoodle className="absolute top-4 right-4" size="lg" color="#c084fc" />
        <StarDoodle className="absolute bottom-8 left-4" size="sm" color="#a855f7" />
        <StarDoodle className="absolute top-1/2 right-8" size="md" color="#e9d5ff" />
        <PressedFlower type="lavender" className="absolute bottom-4 right-4" size="sm" rotation={15} />
      </div>
    </ScrapbookPage>
  );
}

// ==========================================
// PAGE 4: Future Dreams (Watercolor)
// ==========================================
function FutureDreamsPage() {
  return (
    <ScrapbookPage theme="watercolor" title="Future Dreams 🌈">
      <div className="relative h-full">
        <div className="grid grid-cols-2 gap-4">
          {/* Bucket List */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white/60 backdrop-blur p-4 rounded-lg shadow-lg"
          >
            <h3 className="handwritten text-teal-700 text-xl mb-2">Bucket List 📝</h3>
            <ul className="handwritten-note text-teal-600 text-sm space-y-1">
              <li>☐ Liburan ke Jepang 🗾</li>
              <li>☐ Naik gunung bareng</li>
              <li>☐ Rumah dengan taman</li>
              <li>☐ Adopsi kucing 🐱</li>
              <li>☐ Menikah di pantai</li>
              <li>☐ Punya rumah di Bandung</li>
              <li>☐ Punya rumah di Surabaya</li>
            </ul>
          </motion.div>
          
          <Polaroid
            imageSrc={Someday}
            caption="Someday.."
            rotation={-3}
            tapeColor="gold"
            className="w-40"
          />
          
          <StickyNote color="blue" rotation={-3} className="max-w-[180px]">
            <p className="text-sm">
              "Dunia mungkin tak selalu ramah, tapi selama genggaman ini tak goyah, tak ada badai yang tak bisa kita sudah."
            </p>
          </StickyNote>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white/60 backdrop-blur p-3 rounded-lg shadow"
          >
            <p className="handwritten text-teal-700">
              "Terbuat dari berapa ribu cinta engkau, hingga aku jatuh sejatuh-jatuhnya, tapi tak sekalipun merasa hancur?"
            </p>
          </motion.div>
        </div>
        
        {/* Decorations */}
        <PressedFlower type="butterfly" className="absolute top-2 right-4" rotation={-20} />
        <PressedFlower type="leaf" className="absolute bottom-4 left-2" size="lg" rotation={45} />
        <HeartDoodle className="absolute bottom-8 right-8" color="#14b8a6" />
        <WashiTape color="mint" rotation={10} className="absolute top-16 right-0" width={50} />
      </div>
    </ScrapbookPage>
  );
}

// ==========================================
// PAGE 5: Terima Kasih (Letter Theme)
// ==========================================
function TerimaKasihPage() {
  return (
    <ScrapbookPage theme="vintage" title="Special Message 💌">
      <div className="relative h-full flex items-center justify-center p-4">
        
        {/* Container Surat */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-xl max-w-md w-full relative border border-stone-200"
          style={{ transform: 'rotate(-1deg)' }}
        >
          {/* Hiasan Washi Tape di atas surat */}
          <WashiTape color="gold" rotation={0} className="absolute -top-4 left-1/2 -translate-x-1/2" width={100} />

          {/* Isi Surat */}
          <div className="space-y-4 text-center">
            <h2 className="handwritten text-3xl text-rose-600 mb-4">Happy Mensiv, Sayang!</h2>
            
            <p className="handwritten-alt text-lg text-stone-700 leading-relaxed">
              Terima kasih ya sudah bertahan sama aku sejauh ini. Terima kasih sudah jadi pendengar terbaik, support system terbaik, dan partner ketawa paling asik.
            </p>
            
            <p className="handwritten-alt text-lg text-stone-700 leading-relaxed">
              Maaf kalau aku masih banyak kurangnya, kadang nyebelin, atau sibuk sendiri. Tapi satu hal yang pasti, aku selalu berusaha buat jadi yang terbaik buat kamu.
            </p>

            <div className="mt-6 pt-4 border-t border-stone-300">
              <p className="handwritten-alt text-lg text-stone-700 leading-relaxed">
                I love you, Pica.
              </p>
              <p className="handwritten-alt text-stone-500 text-sm mt-1">
                Selamanya & Seterusnya.
              </p>
            </div>
          </div>

          {/* Hiasan Hati Berdenyut */}
          <div className="absolute -bottom-4 -right-2">
            <HeartDoodle size="md" color="#e11d48" />
          </div>
        </motion.div>

        {/* Dekorasi Background */}
        <PressedFlower type="rose" className="absolute top-4 left-4" size="md" rotation={-15} />
        <PressedFlower type="daisy" className="absolute bottom-4 right-4" size="md" rotation={15} />
        <StarDoodle className="absolute top-1/2 right-2" size="sm" color="#fbbf24" />
        <StarDoodle className="absolute top-10 right-10" size="sm" color="#fbbf24" />
      </div>
    </ScrapbookPage>
  );
}

// ==========================================
// MAIN COMPONENT
// ==========================================
export function Scrapbook() {
  const [isStarted, setIsStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Handle tombol Start (Buka)
  const handleStart = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch((err) => console.log('Audio error:', err));
      setIsPlaying(true);
      setIsStarted(true);
    }
  };

  // Handle toggle music
  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-orange-50 to-rose-100 relative overflow-hidden">
      
      {/* 1. AUDIO PLAYER */}
      <audio ref={audioRef} src="/iniabadi.mp3" loop />

      {/* 2. MUSIC BUTTON (Floating) */}
      {isStarted && (
        <button
          onClick={toggleMusic}
          className="fixed top-4 right-4 z-[60] bg-white/80 p-3 rounded-full shadow-lg hover:bg-white transition-all border border-rose-200"
        >
          {isPlaying ? (
            <Volume2 className="w-6 h-6 text-rose-500 animate-pulse" />
          ) : (
            <VolumeX className="w-6 h-6 text-gray-400" />
          )}
        </button>
      )}

      {/* 3. WELCOME OVERLAY */}
      <AnimatePresence>
        {!isStarted && (
          <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-rose-50/95 backdrop-blur-sm px-4"
            exit={{ opacity: 0, y: -50, transition: { duration: 0.8 } }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center bg-white p-8 rounded-2xl shadow-2xl border border-rose-100 max-w-lg w-full"
            >
              <HeartDoodle size="lg" color="#e11d48" className="mx-auto mb-6" />
              <h1 className="handwritten text-5xl text-rose-600 mb-2">Happy Mensiversary!</h1>
              <p className="handwritten-alt text-xl text-stone-600 mb-8">
                Aku bikin sesuatu spesial buat kamu... 💌
              </p>
              
              <button
                onClick={handleStart}
                className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2 mx-auto"
              >
                <Music size={20} />
                Buka & Putar Musik 🎵
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. MAIN CONTENT */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isStarted ? 1 : 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="py-8 px-4"
      >
        {/* Background Decorations */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-10 left-10 opacity-10">
            <HeartDoodle size="lg" color="#d97706" animated={false} />
          </div>
          <div className="absolute bottom-20 right-20 opacity-10">
            <StarDoodle size="lg" color="#ea580c" animated={false} />
          </div>
          <div className="absolute top-1/2 left-5 opacity-5">
            <PressedFlower type="rose" size="lg" />
          </div>
        </div>
        
        {/* Main Title */}
        <div className="text-center mb-6 relative z-10">
          <h1 className="handwritten text-5xl md:text-6xl text-amber-800 mb-2 drop-shadow-sm">
            Bacip's Mensiversary
          </h1>
          <p className="handwritten-alt text-xl text-amber-600">
            A collection of precious memories in this Month ✨
          </p>
        </div>
        
        {/* FlipBook Container */}
        <div className="h-[70vh] min-h-[500px] flex items-center justify-center relative z-10">
          <FlipBook>
            <FirstTimePage />
            <FunniestMomentsPage />
            <DeepestConversationsPage />
            <FutureDreamsPage />
            <TerimaKasihPage />
          </FlipBook>
        </div>
      </motion.div>
    </div>
  );
}

export default Scrapbook;
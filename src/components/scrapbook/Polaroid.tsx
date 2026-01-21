import { motion } from 'framer-motion';

interface PolaroidProps {
  imageSrc?: string;
  imageGradient?: string;
  caption?: string;
  rotation?: number;
  className?: string;
  tapeColor?: 'pink' | 'blue' | 'mint' | 'gold';
}

export function Polaroid({
  imageSrc,
  imageGradient = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  caption,
  rotation = 0,
  className = '',
  tapeColor = 'pink',
}: PolaroidProps) {
  const tapeColors = {
    pink: 'bg-pink-300',
    blue: 'bg-blue-300',
    mint: 'bg-green-300',
    gold: 'bg-yellow-400',
  };

  return (
    <motion.div
      className={`polaroid p-2 pb-12 relative ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
      whileHover={{ 
        scale: 1.08, 
        rotate: rotation - 3,
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Tape */}
      <div 
        className={`absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 ${tapeColors[tapeColor]} washi-tape rounded-sm z-10`}
        style={{ transform: 'translateX(-50%) rotate(-2deg)' }}
      />
      
      {/* Photo Area */}
      <div className="w-full aspect-square bg-gray-200 overflow-hidden">
        {imageSrc ? (
          <img 
            src={imageSrc} 
            alt={caption || 'Photo'} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div 
            className="w-full h-full"
            style={{ background: imageGradient }}
          />
        )}
      </div>
      
      {/* Caption */}
      {caption && (
        <p className="handwritten-alt text-center text-gray-700 mt-3 text-lg px-1">
          {caption}
        </p>
      )}
    </motion.div>
  );
}

export default Polaroid;

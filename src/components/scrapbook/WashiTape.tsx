import { motion } from 'framer-motion';

interface WashiTapeProps {
  color?: 'pink' | 'blue' | 'mint' | 'gold' | 'purple' | 'peach';
  width?: number;
  rotation?: number;
  pattern?: 'stripes' | 'dots' | 'hearts' | 'stars' | 'plain';
  className?: string;
}

export function WashiTape({
  color = 'pink',
  width = 80,
  rotation = 0,
  pattern = 'stripes',
  className = '',
}: WashiTapeProps) {
  const colors = {
    pink: '#ffb3ba',
    blue: '#bae1ff',
    mint: '#b8f0c4',
    gold: '#ffd700',
    purple: '#e0b3ff',
    peach: '#ffdab9',
  };

  const patterns = {
    stripes: `repeating-linear-gradient(
      45deg,
      transparent,
      transparent 3px,
      rgba(255, 255, 255, 0.4) 3px,
      rgba(255, 255, 255, 0.4) 6px
    )`,
    dots: `radial-gradient(circle, rgba(255,255,255,0.5) 2px, transparent 2px)`,
    hearts: 'none',
    stars: 'none',
    plain: 'none',
  };

  return (
    <motion.div
      className={`h-6 rounded-sm ${className}`}
      style={{
        width: `${width}px`,
        backgroundColor: colors[color],
        backgroundImage: patterns[pattern],
        backgroundSize: pattern === 'dots' ? '8px 8px' : 'auto',
        transform: `rotate(${rotation}deg)`,
        opacity: 0.85,
        boxShadow: '1px 1px 3px rgba(0, 0, 0, 0.15)',
      }}
      whileHover={{
        opacity: 0.95,
        scale: 1.02,
      }}
    >
      {/* Torn edges effect */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-1"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.05) 100%)',
        }}
      />
      <div 
        className="absolute right-0 top-0 bottom-0 w-1"
        style={{
          background: 'linear-gradient(270deg, transparent 0%, rgba(0,0,0,0.05) 100%)',
        }}
      />
    </motion.div>
  );
}

export default WashiTape;

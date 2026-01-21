import { motion } from 'framer-motion';

interface RibbonBookmarkProps {
  color?: 'red' | 'blue' | 'gold' | 'pink' | 'purple';
  onClick?: () => void;
  pageNumber?: number;
  className?: string;
}

export function RibbonBookmark({
  color = 'red',
  onClick,
  pageNumber,
  className = '',
}: RibbonBookmarkProps) {
  const colors = {
    red: 'from-red-600 to-red-900',
    blue: 'from-blue-500 to-blue-800',
    gold: 'from-yellow-500 to-yellow-700',
    pink: 'from-pink-400 to-pink-700',
    purple: 'from-purple-500 to-purple-800',
  };

  return (
    <motion.button
      onClick={onClick}
      className={`w-8 h-32 bg-gradient-to-b ${colors[color]} relative cursor-pointer ${className}`}
      style={{
        clipPath: 'polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)',
        boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)',
      }}
      whileHover={{
        y: 15,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Shine effect */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
        }}
      />
      
      {/* Page number */}
      {pageNumber !== undefined && (
        <span className="absolute top-4 left-1/2 -translate-x-1/2 text-white text-xs font-bold">
          {pageNumber}
        </span>
      )}
    </motion.button>
  );
}

export default RibbonBookmark;

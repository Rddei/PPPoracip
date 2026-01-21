import { motion } from 'framer-motion';

interface StarDoodleProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  filled?: boolean;
  animated?: boolean;
  className?: string;
}

export function StarDoodle({
  size = 'md',
  color = '#fbbf24',
  filled = true,
  animated = true,
  className = '',
}: StarDoodleProps) {
  const sizes = {
    sm: 'w-5 h-5',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <motion.div
      className={`${sizes[size]} ${animated ? 'star-sparkle' : ''} ${className}`}
      whileHover={{ scale: 1.4, rotate: 180 }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path
          d="M50 5 L61 40 L97 40 L68 62 L79 97 L50 75 L21 97 L32 62 L3 40 L39 40 Z"
          fill={filled ? color : 'none'}
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
}

export default StarDoodle;

import { motion } from 'framer-motion';

interface HeartDoodleProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  filled?: boolean;
  animated?: boolean;
  className?: string;
}

export function HeartDoodle({
  size = 'md',
  color = '#ed64a6',
  filled = true,
  animated = true,
  className = '',
}: HeartDoodleProps) {
  const sizes = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
  };

  return (
    <motion.div
      className={`${sizes[size]} ${animated ? 'heart-doodle' : ''} ${className}`}
      whileHover={{ scale: 1.3 }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path
          d="M50 88 C20 60, 5 40, 25 20 C40 5, 50 15, 50 25 C50 15, 60 5, 75 20 C95 40, 80 60, 50 88"
          fill={filled ? color : 'none'}
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
}

export default HeartDoodle;

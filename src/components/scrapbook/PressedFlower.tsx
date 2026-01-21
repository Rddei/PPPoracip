import { motion } from 'framer-motion';

interface PressedFlowerProps {
  type?: 'rose' | 'daisy' | 'leaf' | 'butterfly' | 'lavender';
  size?: 'sm' | 'md' | 'lg';
  rotation?: number;
  className?: string;
}

export function PressedFlower({
  type = 'rose',
  size = 'md',
  rotation = 0,
  className = '',
}: PressedFlowerProps) {
  const sizes = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20',
    lg: 'w-28 h-28',
  };

  const flowers = {
    rose: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient id="roseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbb6ce" />
            <stop offset="50%" stopColor="#f687b3" />
            <stop offset="100%" stopColor="#ed64a6" />
          </linearGradient>
        </defs>
        {/* Rose petals */}
        <ellipse cx="50" cy="35" rx="18" ry="25" fill="url(#roseGrad)" opacity="0.9" transform="rotate(-20, 50, 50)" />
        <ellipse cx="50" cy="35" rx="18" ry="25" fill="url(#roseGrad)" opacity="0.85" transform="rotate(20, 50, 50)" />
        <ellipse cx="35" cy="45" rx="15" ry="22" fill="url(#roseGrad)" opacity="0.8" transform="rotate(-45, 50, 50)" />
        <ellipse cx="65" cy="45" rx="15" ry="22" fill="url(#roseGrad)" opacity="0.8" transform="rotate(45, 50, 50)" />
        <ellipse cx="50" cy="50" rx="12" ry="18" fill="#f687b3" opacity="0.95" />
        <circle cx="50" cy="48" r="8" fill="#ed64a6" />
        {/* Stem */}
        <path d="M50 70 Q48 85, 50 95" stroke="#68d391" strokeWidth="3" fill="none" />
        <ellipse cx="42" cy="78" rx="8" ry="4" fill="#68d391" transform="rotate(-30, 42, 78)" />
      </svg>
    ),
    daisy: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Petals */}
        {[...Array(12)].map((_, i) => (
          <ellipse
            key={i}
            cx="50"
            cy="25"
            rx="8"
            ry="20"
            fill="white"
            stroke="#faf5ff"
            strokeWidth="1"
            opacity="0.9"
            transform={`rotate(${i * 30}, 50, 50)`}
          />
        ))}
        {/* Center */}
        <circle cx="50" cy="50" r="12" fill="#fbbf24" />
        <circle cx="50" cy="50" r="8" fill="#f59e0b" />
        {/* Stem */}
        <path d="M50 62 Q52 80, 50 95" stroke="#68d391" strokeWidth="2" fill="none" />
      </svg>
    ),
    leaf: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#68d391" />
            <stop offset="50%" stopColor="#48bb78" />
            <stop offset="100%" stopColor="#38a169" />
          </linearGradient>
        </defs>
        <path
          d="M50 10 Q80 30, 70 60 Q60 80, 50 90 Q40 80, 30 60 Q20 30, 50 10"
          fill="url(#leafGrad)"
          opacity="0.85"
        />
        {/* Veins */}
        <path d="M50 15 L50 85" stroke="#2f855a" strokeWidth="1.5" fill="none" opacity="0.5" />
        <path d="M50 30 Q40 35, 35 45" stroke="#2f855a" strokeWidth="1" fill="none" opacity="0.4" />
        <path d="M50 30 Q60 35, 65 45" stroke="#2f855a" strokeWidth="1" fill="none" opacity="0.4" />
        <path d="M50 50 Q38 55, 32 65" stroke="#2f855a" strokeWidth="1" fill="none" opacity="0.4" />
        <path d="M50 50 Q62 55, 68 65" stroke="#2f855a" strokeWidth="1" fill="none" opacity="0.4" />
      </svg>
    ),
    butterfly: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient id="wingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c084fc" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#9333ea" />
          </linearGradient>
        </defs>
        {/* Wings */}
        <ellipse cx="30" cy="35" rx="22" ry="28" fill="url(#wingGrad)" opacity="0.8" />
        <ellipse cx="70" cy="35" rx="22" ry="28" fill="url(#wingGrad)" opacity="0.8" />
        <ellipse cx="25" cy="65" rx="15" ry="20" fill="url(#wingGrad)" opacity="0.7" />
        <ellipse cx="75" cy="65" rx="15" ry="20" fill="url(#wingGrad)" opacity="0.7" />
        {/* Wing patterns */}
        <circle cx="30" cy="35" r="8" fill="white" opacity="0.3" />
        <circle cx="70" cy="35" r="8" fill="white" opacity="0.3" />
        {/* Body */}
        <ellipse cx="50" cy="50" rx="5" ry="30" fill="#4a5568" />
        {/* Antennae */}
        <path d="M48 22 Q45 15, 40 10" stroke="#4a5568" strokeWidth="1.5" fill="none" />
        <path d="M52 22 Q55 15, 60 10" stroke="#4a5568" strokeWidth="1.5" fill="none" />
        <circle cx="40" cy="10" r="2" fill="#4a5568" />
        <circle cx="60" cy="10" r="2" fill="#4a5568" />
      </svg>
    ),
    lavender: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Stem */}
        <path d="M50 95 Q48 70, 50 30" stroke="#68d391" strokeWidth="2" fill="none" />
        {/* Flowers */}
        {[...Array(8)].map((_, i) => (
          <ellipse
            key={i}
            cx={48 + (i % 2) * 4}
            cy={30 + i * 7}
            rx="6"
            ry="4"
            fill="#a78bfa"
            opacity={0.9 - i * 0.05}
          />
        ))}
        {/* Leaves */}
        <ellipse cx="40" cy="70" rx="12" ry="4" fill="#68d391" transform="rotate(-30, 40, 70)" />
        <ellipse cx="60" cy="75" rx="10" ry="3" fill="#68d391" transform="rotate(25, 60, 75)" />
      </svg>
    ),
  };

  return (
    <motion.div
      className={`pressed-flower ${sizes[size]} ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
      whileHover={{
        scale: 1.15,
        rotate: rotation + 15,
        transition: { duration: 0.4 }
      }}
    >
      {flowers[type]}
    </motion.div>
  );
}

export default PressedFlower;

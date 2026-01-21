import { motion } from 'framer-motion';
// Import hooks atau fungsi biasa di baris ini
// import { useState } from 'react'; 

// Import TYPE secara terpisah dengan kata kunci 'type' di depannya
import type { ReactNode } from 'react';

interface StickyNoteProps {
  children: ReactNode;
  color?: 'yellow' | 'pink' | 'blue' | 'green' | 'purple';
  rotation?: number;
  className?: string;
  pinned?: boolean;
}

export function StickyNote({
  children,
  color = 'yellow',
  rotation = 0,
  className = '',
  pinned = false,
}: StickyNoteProps) {
  const colorClasses = {
    yellow: 'sticky-note',
    pink: 'sticky-note sticky-note-pink',
    blue: 'sticky-note sticky-note-blue',
    green: 'sticky-note sticky-note-green',
    purple: 'sticky-note sticky-note-purple',
  };

  return (
    <motion.div
      className={`${colorClasses[color]} p-4 rounded-sm relative ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ 
        scale: 1.08, 
        rotate: rotation - 5,
        y: -8,
        transition: { 
          type: "spring",
          stiffness: 300,
          damping: 20
        }
      }}
    >
      {/* Push Pin */}
      {pinned && (
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-10">
          <div className="w-4 h-4 rounded-full bg-red-500 shadow-md relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-red-700" />
          </div>
          <div className="w-1 h-2 bg-gray-400 mx-auto -mt-0.5 rounded-b" />
        </div>
      )}
      
      {/* Folded Corner Effect */}
      <div 
        className="absolute bottom-0 right-0 w-8 h-8"
        style={{
          background: 'linear-gradient(135deg, transparent 50%, rgba(0,0,0,0.1) 50%)',
        }}
      />
      
      {/* Content */}
      <div className="handwritten-note text-gray-800 leading-relaxed">
        {children}
      </div>
    </motion.div>
  );
}

export default StickyNote;

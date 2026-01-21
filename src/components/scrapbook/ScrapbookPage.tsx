// Tambahkan kata 'type' sebelum ReactNode
// Import hooks atau fungsi biasa di baris ini
// import { useState } from 'react'; 

// Import TYPE secara terpisah dengan kata kunci 'type' di depannya
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ScrapbookPageProps {
  children: ReactNode;
  theme: 'vintage' | 'floral' | 'galaxy' | 'watercolor';
  title?: string;
  className?: string;
}

export function ScrapbookPage({
  children,
  theme,
  title,
  className = '',
}: ScrapbookPageProps) {
  const themeClasses = {
    vintage: 'bg-vintage',
    floral: 'bg-floral',
    galaxy: 'bg-galaxy',
    watercolor: 'bg-watercolor',
  };

  const titleColors = {
    vintage: 'text-amber-900',
    floral: 'text-pink-700',
    galaxy: 'text-purple-200',
    watercolor: 'text-teal-700',
  };

  return (
    <div
      className={`w-full h-full ${themeClasses[theme]} relative overflow-hidden ${className}`}
    >
      {/* Background Pattern Layer */}
      <div className="absolute inset-0 pointer-events-none" />
      
      {/* Page Edge Shadow */}
      <div className="absolute inset-y-0 left-0 w-8 page-edge-shadow pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 w-full h-full p-8">
        {/* Page Title */}
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`handwritten text-4xl md:text-5xl text-center mb-6 ${titleColors[theme]}`}
          >
            {title}
          </motion.h2>
        )}
        
        {/* Page Content */}
        <div className="h-full">
          {children}
        </div>
      </div>
      
      {/* Corner Decorations */}
      <div className="absolute top-2 left-2 w-16 h-16 opacity-20">
        <svg viewBox="0 0 100 100">
          <path
            d="M10 50 Q10 10, 50 10"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            className={titleColors[theme]}
          />
        </svg>
      </div>
      <div className="absolute bottom-2 right-2 w-16 h-16 opacity-20 rotate-180">
        <svg viewBox="0 0 100 100">
          <path
            d="M10 50 Q10 10, 50 10"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            className={titleColors[theme]}
          />
        </svg>
      </div>
    </div>
  );
}

export default ScrapbookPage;

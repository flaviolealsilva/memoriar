import React from 'react';
import { motion } from 'framer-motion';

export const LogoSymbol = ({ className = "w-10 h-10" }: { className?: string }) => (
  <div className={`${className} relative flex items-center justify-center`}>
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
      <defs>
        <filter id="glow-cyan" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="glow-magenta" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="grad-symbol" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00f0ff" />
          <stop offset="100%" stopColor="#ff00aa" />
        </linearGradient>
      </defs>
      
      {/* The 'A' / Left part - Cyan */}
      <motion.path
        d="M 15 85 L 40 15 L 55 55"
        stroke="#00f0ff"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#glow-cyan)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      
      {/* The 'R' / Right part - Magenta */}
      <motion.path
        d="M 55 55 L 85 55 C 95 55 95 25 85 25 L 40 25"
        stroke="#ff00aa"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#glow-magenta)"
        pathLength="1"
        strokeDasharray="1 1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
      />
      
      {/* The Leg of R */}
      <motion.path
        d="M 70 55 L 90 85"
        stroke="#ff00aa"
        strokeWidth="8"
        strokeLinecap="round"
        filter="url(#glow-magenta)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      />
    </svg>
  </div>
);

export const LogoText = () => (
  <div className="flex items-center gap-1 select-none">
    <span className="font-display font-bold text-2xl tracking-widest text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">
      memori
    </span>
    <span className="font-display font-bold text-3xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-neon-magenta to-white drop-shadow-[0_0_10px_rgba(255,0,170,0.8)]">
      AR
    </span>
  </div>
);

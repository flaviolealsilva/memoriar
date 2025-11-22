import React from 'react';
import { motion } from 'framer-motion';

export const LogoSymbol = ({ className = "w-10 h-10" }: { className?: string }) => (
  <div className={`${className} relative flex items-center justify-center`}>
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
      <defs>
        <filter id="glow-cyan-strong" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feFlood floodColor="#00f0ff" floodOpacity="0.8" result="glowColor" />
          <feComposite in="glowColor" in2="coloredBlur" operator="in" result="softGlow_colored" />
          <feMerge>
            <feMergeNode in="softGlow_colored" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="glow-magenta-strong" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feFlood floodColor="#ff00aa" floodOpacity="0.8" result="glowColor" />
          <feComposite in="glowColor" in2="coloredBlur" operator="in" result="softGlow_colored" />
          <feMerge>
            <feMergeNode in="softGlow_colored" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      {/* 
        GEOMETRIA EXATA DA IMAGEM:
        1. Traço Ciano: Sobe da esquerda inferior, forma o pico do A, desce até o meio formando o vale (M shape start).
        2. Traço Magenta: Começa conectado ao topo do Ciano, faz a volta do R, conecta no vale do Ciano, desce a perna.
      */}

      {/* CYAN PART: The "A" / Left side of "M" */}
      <motion.path
        d="M 15 90 L 40 20 L 65 85"
        stroke="#00f0ff"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#glow-cyan-strong)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      
      {/* MAGENTA PART: The "R" Loop and Leg */}
      {/* Starts near the top of the A (40,20), loops right, connects to the A's crossbar area (approx 52, 52), then leg down */}
      <motion.path
        d="M 40 20 L 75 20 C 90 20 90 50 75 50 L 52 50 L 85 90"
        stroke="#ff00aa"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#glow-magenta-strong)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
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
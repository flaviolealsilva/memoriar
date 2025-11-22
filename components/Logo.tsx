import React from 'react';
import { motion } from 'framer-motion';

export const LogoSymbol = ({ className = "w-10 h-10" }: { className?: string }) => (
  <div className={`${className} relative flex items-center justify-center`}>
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
      <defs>
        <filter id="glow-cyan-strong" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
          <feFlood floodColor="#00f0ff" floodOpacity="1" result="glowColor" />
          <feComposite in="glowColor" in2="coloredBlur" operator="in" result="softGlow_colored" />
          <feMerge>
            <feMergeNode in="softGlow_colored" />
            <feMergeNode in="softGlow_colored" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="glow-magenta-strong" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
          <feFlood floodColor="#ff00aa" floodOpacity="1" result="glowColor" />
          <feComposite in="glowColor" in2="coloredBlur" operator="in" result="softGlow_colored" />
          <feMerge>
            <feMergeNode in="softGlow_colored" />
            <feMergeNode in="softGlow_colored" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      {/* 
        CORREÇÃO GEOMÉTRICA:
        O Logotipo AR entrelaçado é formado por:
        1. Um 'A' estilizado em Ciano (Chevron) que sobe da esquerda e desce para a direita.
        2. Um 'R' estilizado em Magenta que nasce do topo do 'A', faz a curva e desce a perna.
        
        O ponto crucial é que eles compartilham a geometria central.
      */}

      {/* CYAN PATH: O "A" (Perna Esquerda + Topo + Metade da Perna Direita/Conexão) */}
      <motion.path
        d="M 20 85 L 50 15 L 65 50"
        stroke="#00f0ff"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#glow-cyan-strong)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      
      {/* MAGENTA PATH: O "R" (Topo Plano + Curva + Perna Final) 
         Começa levemente deslocado do pico para não misturar as cores no topo, 
         faz a volta e conecta exatamente onde o Ciano termina (65, 50) para lançar a perna.
      */}
      <motion.path
        d="M 50 15 L 80 15 C 95 15 95 50 80 50 L 65 50 L 90 85"
        stroke="#ff00aa"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#glow-magenta-strong)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
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

import React from 'react';
import logoImage from '../img/logoblackfull.png'; // Importa a nova imagem

export const LogoSymbol = ({ className = "w-10 h-10" }: { className?: string }) => (
  <div className={`${className} relative flex items-center justify-center`}>
    <img src={logoImage} alt="MemoriAR Logo" className="w-full h-full" />
  </div>
);

export const LogoText = () => (
  <div className="flex items-center gap-1 select-none">
    <span className="font-display font-bold text-2xl tracking-widest text-white drop-shadow-[0_0_8px_rgba(100,100,255,0.7)]">
      memori
    </span>
    <span className="font-display font-bold text-2xl tracking-widest text-white drop-shadow-[0_0_8px_rgba(255,100,100,0.7)]">
      AR
    </span>
  </div>
);

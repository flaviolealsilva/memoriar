import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Play, Pause, Video, Wand2, Scan } from 'lucide-react';
import videoSrc from '../vid/vid.mp4';

const AiShowcase = () => {
  const containerRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="ai" className="py-32 bg-black relative overflow-hidden min-h-screen flex items-center">
      {/* --- Dynamic Living Backgrounds --- */}
      
      {/* 1. Moving Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-purple-900/40 bg-[length:400%_400%] animate-gradient-x z-0"></div>

      {/* 2. Floating Particles (Fireflies) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-neon-cyan mix-blend-screen"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: 0,
              scale: 0
            }}
            animate={{
              y: [null, Math.random() * -100], // Float Upwards
              x: [null, (Math.random() - 0.5) * 50], // Drift Sideways
              opacity: [0, 0.6, 0],
              scale: [0, Math.random() * 1.5, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10, // Slow, organic movement
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              filter: "blur(1px)"
            }}
          />
        ))}
      </div>

      {/* 3. Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)] z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={containerRef}>
        
        <div className="text-center mb-16 relative">
          {/* Glow behind text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-neon-purple/10 blur-[80px] -z-10"></div>
          
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          >
            <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
            <span className="text-sm font-mono text-gray-300">Powered by Google Veo</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 drop-shadow-2xl">
            Dê vida às suas <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-neon-magenta animate-pulse">Memórias Estáticas</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Não apenas guarde uma foto. Nossa IA generativa analisa o contexto e cria 
            movimento cinematográfico, transformando instantes congelados em cenas vivas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Interface Simulation */}
          <motion.div 
            style={{ y, opacity }}
            className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(189,0,255,0.2)] bg-gray-900/50 backdrop-blur-xl aspect-video group"
          >
             {/* Video Player */}
             <video 
               ref={videoRef}
               src={videoSrc}
               className="absolute inset-0 w-full h-full object-cover"
               loop
               muted={false}
               playsInline
               onEnded={() => setIsPlaying(false)}
             />

             {/* Scanline Effect Overlay (Visible only when paused) */}
             {!isPlaying && (
               <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none"></div>
             )}

             {/* Intelligent Scan Overlay (Visible only when paused) */}
             {!isPlaying && (
               <motion.div 
                 className="absolute inset-0 bg-neon-cyan/5 z-10"
                 animate={{ opacity: [0, 0.2, 0] }}
                 transition={{ duration: 3, repeat: Infinity }}
               ></motion.div>
             )}

             {/* UI Overlay */}
             <div className="absolute inset-0 flex flex-col justify-between p-8 z-20 pointer-events-none">
                <div className="flex justify-between items-start">
                    {/* Top Left Info */}
                    <div className={`bg-black/60 backdrop-blur px-4 py-2 rounded-lg border border-white/10 flex items-center gap-2 transition-opacity duration-500 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
                        <Video size={16} className="text-neon-cyan" />
                        <span className="text-xs font-mono text-white">RAW_INPUT.JPG</span>
                    </div>
                    
                    {/* Top Right Status */}
                    <div className={`bg-neon-magenta/20 backdrop-blur px-4 py-2 rounded-lg border border-neon-magenta/50 flex items-center gap-2 animate-pulse transition-opacity duration-500 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
                        <Wand2 size={16} className="text-neon-magenta" />
                        <span className="text-xs font-mono text-white">PROCESSANDO VEO...</span>
                    </div>
                </div>

                {/* Scanning Effect Beam */}
                {!isPlaying && (
                  <div className="absolute top-0 left-0 w-full h-2 bg-neon-cyan/50 shadow-[0_0_20px_#00f0ff] animate-[scan_3s_ease-in-out_infinite] opacity-50"></div>
                )}
                
                {/* Target Reticle */}
                {!isPlaying && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/30 rounded-lg flex items-center justify-center animate-pulse">
                     <div className="w-full h-[1px] bg-white/30"></div>
                     <div className="h-full w-[1px] bg-white/30 absolute"></div>
                     <Scan size={24} className="text-white/50" />
                  </div>
                )}

                {/* Controls */}
                <div className="bg-black/80 backdrop-blur rounded-xl p-4 border border-white/10 flex items-center gap-4 pointer-events-auto">
                    <button 
                      onClick={togglePlay}
                      className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform"
                    >
                        {isPlaying ? <Pause size={20} fill="black" /> : <Play size={20} fill="black" />}
                    </button>
                    <div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
                        <div className={`h-full bg-gradient-to-r from-neon-cyan to-neon-magenta w-2/3 ${isPlaying ? 'animate-[pulse_2s_infinite]' : ''}`}></div>
                    </div>
                    <span className="text-xs font-mono text-gray-400">00:12 / 00:30</span>
                </div>
             </div>
          </motion.div>

          {/* Feature List */}
          <div className="space-y-8">
             {[
               {
                 title: "Reconstrução de Cena",
                 desc: "A IA entende a profundidade e geometria da foto, permitindo que você 'olhe ao redor' da memória original."
               },
               {
                 title: "Preenchimento Generativo",
                 desc: "O Veo expande as bordas da sua foto, revelando o que estava fora do enquadramento original."
               },
               {
                 title: "Upscaling Neural",
                 desc: "Restaure fotos antigas e borradas para qualidade 4K cristalina com detalhes alucinantes."
               }
             ].map((item, i) => (
               <motion.div 
                 key={i}
                 initial={{ x: 50, opacity: 0 }}
                 whileInView={{ x: 0, opacity: 1 }}
                 transition={{ delay: i * 0.2 }}
                 className="flex gap-6 group p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
               >
                 <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-neon-magenta/20 group-hover:border-neon-magenta transition-all shadow-[0_0_0_0_rgba(255,0,170,0)] group-hover:shadow-[0_0_15px_rgba(255,0,170,0.3)]">
                    <span className="font-display font-bold text-white group-hover:text-neon-magenta">{i + 1}</span>
                 </div>
                 <div>
                   <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">{item.title}</h3>
                   <p className="text-gray-400 leading-relaxed group-hover:text-gray-300">{item.desc}</p>
                 </div>
               </motion.div>
             ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AiShowcase;
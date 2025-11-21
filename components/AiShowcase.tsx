import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Play, Video, Wand2 } from 'lucide-react';

const AiShowcase = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section className="py-32 bg-black relative overflow-hidden min-h-screen flex items-center">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neon-dark to-black z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(189,0,255,0.15)_0%,transparent_70%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={containerRef}>
        
        <div className="text-center mb-16">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
            <span className="text-sm font-mono text-gray-300">Powered by Google Veo</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Dê vida às suas <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-neon-magenta">Memórias Estáticas</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Não apenas guarde uma foto. Nossa IA generativa analisa o contexto e cria 
            movimento cinematográfico, transformando instantes congelados em cenas vivas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Interface Simulation */}
          <motion.div 
            style={{ y, opacity }}
            className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(189,0,255,0.15)] bg-gray-900/50 backdrop-blur-xl aspect-video group"
          >
             {/* Background Image (The "Memory") */}
             <img 
               src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
               alt="Static Memory" 
               className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110 opacity-60"
             />

             {/* UI Overlay */}
             <div className="absolute inset-0 flex flex-col justify-between p-8">
                <div className="flex justify-between items-start">
                    <div className="bg-black/60 backdrop-blur px-4 py-2 rounded-lg border border-white/10 flex items-center gap-2">
                        <Video size={16} className="text-neon-cyan" />
                        <span className="text-xs font-mono text-white">RAW_INPUT.JPG</span>
                    </div>
                    <div className="bg-neon-magenta/20 backdrop-blur px-4 py-2 rounded-lg border border-neon-magenta/50 flex items-center gap-2 animate-pulse">
                        <Wand2 size={16} className="text-neon-magenta" />
                        <span className="text-xs font-mono text-white">PROCESSANDO VEO...</span>
                    </div>
                </div>

                {/* Scanning Effect */}
                <div className="absolute top-0 left-0 w-full h-1 bg-neon-cyan/50 shadow-[0_0_20px_#00f0ff] animate-[scan_3s_ease-in-out_infinite]"></div>

                {/* Controls */}
                <div className="bg-black/80 backdrop-blur rounded-xl p-4 border border-white/10 flex items-center gap-4">
                    <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
                        <Play size={20} fill="black" />
                    </button>
                    <div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-neon-cyan to-neon-magenta w-2/3"></div>
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
                 className="flex gap-6 group"
               >
                 <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-neon-magenta/20 group-hover:border-neon-magenta transition-all">
                    <span className="font-display font-bold text-white group-hover:text-neon-magenta">{i + 1}</span>
                 </div>
                 <div>
                   <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">{item.title}</h3>
                   <p className="text-gray-400 leading-relaxed">{item.desc}</p>
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

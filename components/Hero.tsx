import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Smartphone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full gradient-mesh opacity-40 z-0 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-magenta rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse pointer-events-none" style={{animationDelay: '2s'}}></div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <div className="inline-block px-4 py-1 rounded-full border border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan text-sm font-semibold mb-6 backdrop-blur-sm">
              O Futuro das Memórias
            </div>
            <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight mb-6">
              Arqueologia <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-white neon-text-cyan">Digital</span> para o seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-magenta to-purple-500 neon-text-magenta">Passado</span>.
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              E se você pudesse ver as memórias escondidas ao seu redor?
              Transforme lugares em diários vivos com Realidade Aumentada. 
              Permanência, privacidade e significado em um mundo efêmero.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#waitlist" className="bg-white text-neon-dark font-bold py-4 px-8 rounded-lg hover:bg-gray-200 transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2 group">
                <Smartphone size={20} className="group-hover:scale-110 transition-transform" />
                Entrar na Lista de Espera
              </a>
              <a href="#features" className="border border-white/30 hover:border-neon-cyan hover:text-neon-cyan text-white py-4 px-8 rounded-lg transition-all backdrop-blur-sm flex items-center justify-center gap-2 group">
                <MapPin size={20} className="group-hover:text-neon-cyan transition-colors" />
                Explorar o Mapa
              </a>
            </div>
          </motion.div>

          {/* Visual Content / Mockup */}
          <motion.div 
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
             className="lg:w-1/2 relative flex justify-center"
          >
            <div className="relative w-[280px] h-[580px] bg-gray-900 rounded-[3rem] border-[8px] border-gray-800 shadow-2xl overflow-hidden z-10 ring-1 ring-white/10">
              {/* Screen Content */}
              <div className="absolute inset-0 bg-black">
                {/* AR Camera View Simulation */}
                <div className="w-full h-full relative">
                    <img 
                      src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                      alt="AR Camera View" 
                      className="w-full h-full object-cover opacity-60 grayscale-[30%]" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
                </div>
                
                {/* AR Overlay UI */}
                <div className="absolute inset-0 flex flex-col justify-between p-6">
                    <div className="flex justify-between items-center mt-8">
                         <div className="bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white border border-white/10 flex items-center gap-1">
                             <MapPin size={10} className="text-neon-cyan" />
                             São Paulo, Av. Paulista
                         </div>
                         <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center">
                             <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                         </div>
                    </div>

                    {/* Floating Pin */}
                    <motion.div 
                        animate={{ y: [0, -15, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    >
                        <div className="relative group cursor-pointer">
                             {/* Memory Bubble */}
                             <div className="w-14 h-14 rounded-full border-2 border-neon-magenta overflow-hidden shadow-[0_0_25px_rgba(255,0,170,0.8)] z-20 relative bg-black">
                                 <img src="https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80" className="w-full h-full object-cover" alt="Memory" />
                             </div>
                             
                             {/* Pin Stick */}
                             <div className="absolute top-12 left-1/2 w-0.5 h-16 bg-gradient-to-b from-neon-magenta to-transparent transform -translate-x-1/2 z-10"></div>
                             
                             {/* Ground Ripple */}
                             <div className="absolute top-[100px] left-1/2 transform -translate-x-1/2 w-20 h-20 border border-neon-magenta/30 rounded-full opacity-0 animate-ping" style={{animationDuration: '3s'}}></div>

                             {/* Floating Card (Tooltip) */}
                             <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 w-40 bg-black/80 backdrop-blur-xl border border-white/20 p-3 rounded-lg shadow-xl">
                                 <p className="text-xs font-bold text-white">Nosso 1º Encontro</p>
                                 <p className="text-[10px] text-gray-300 mt-1 flex items-center gap-1">
                                     <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> 12 Jan 2024
                                 </p>
                             </div>
                        </div>
                    </motion.div>

                    {/* Bottom Controls */}
                    <div className="mb-4 flex justify-center items-center gap-8">
                        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur border border-white/20"></div>
                        <div className="w-16 h-16 rounded-full border-4 border-white/30 flex items-center justify-center relative">
                            <div className="absolute inset-0 rounded-full border-t-4 border-neon-cyan animate-spin"></div>
                            <div className="w-12 h-12 bg-white rounded-full"></div>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur border border-white/20"></div>
                    </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements behind phone */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[320px] h-[620px] border border-neon-cyan/20 rounded-[3.5rem] -z-10 animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[380px] h-[680px] border border-neon-magenta/10 rounded-[4rem] -z-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
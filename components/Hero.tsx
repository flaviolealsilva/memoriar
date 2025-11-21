import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Smartphone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full gradient-mesh opacity-40 z-0"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-magenta rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <div className="inline-block px-4 py-1 rounded-full border border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan text-sm font-semibold mb-6">
              O Futuro das Memórias
            </div>
            <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight mb-6">
              Arqueologia <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-white">Digital</span> para o seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-magenta to-purple-500">Passado</span>.
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              E se você pudesse ver as memórias escondidas ao seu redor?
              Transforme lugares em diários vivos com Realidade Aumentada. 
              Permanência, privacidade e significado em um mundo efêmero.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#waitlist" className="bg-white text-neon-dark font-bold py-4 px-8 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                <Smartphone size={20} />
                Entrar na Lista de Espera
              </a>
              <a href="#features" className="border border-white/30 hover:border-white text-white py-4 px-8 rounded-lg transition-all backdrop-blur-sm flex items-center justify-center gap-2">
                <MapPin size={20} />
                Explorar o Mapa
              </a>
            </div>
          </motion.div>

          {/* Visual Content / Mockup */}
          <motion.div 
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="lg:w-1/2 relative"
          >
            <div className="relative mx-auto w-[280px] h-[580px] bg-gray-900 rounded-[3rem] border-[8px] border-gray-800 shadow-2xl overflow-hidden z-10">
              {/* Screen Content */}
              <div className="absolute inset-0 bg-black">
                {/* AR Camera View Simulation */}
                <img 
                  src="https://picsum.photos/600/1200" 
                  alt="AR Camera View" 
                  className="w-full h-full object-cover opacity-60" 
                />
                
                {/* AR Overlay UI */}
                <div className="absolute inset-0 flex flex-col justify-between p-6">
                    <div className="flex justify-between items-center mt-8">
                         <div className="bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white border border-white/10">
                             São Paulo, Av. Paulista
                         </div>
                    </div>

                    {/* Floating Pin */}
                    <motion.div 
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    >
                        <div className="relative group cursor-pointer">
                             <div className="w-12 h-12 rounded-full border-2 border-neon-magenta overflow-hidden shadow-[0_0_20px_rgba(255,0,170,0.6)] z-20 relative bg-black">
                                 <img src="https://picsum.photos/100/100" className="w-full h-full object-cover" alt="Memory" />
                             </div>
                             {/* Pin Stick */}
                             <div className="absolute top-11 left-1/2 w-0.5 h-16 bg-gradient-to-b from-neon-magenta to-transparent transform -translate-x-1/2 z-10"></div>
                             
                             {/* Floating Card (Tooltip) */}
                             <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-48 bg-white/10 backdrop-blur-lg border border-white/20 p-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                 <p className="text-xs font-bold text-white">Nosso primeiro encontro</p>
                                 <p className="text-[10px] text-gray-300">12 Jan 2024 • Privado</p>
                             </div>
                        </div>
                    </motion.div>

                    <div className="mb-4 flex justify-center">
                        <div className="w-16 h-16 rounded-full border-4 border-white/20 flex items-center justify-center">
                            <div className="w-12 h-12 bg-neon-cyan rounded-full"></div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements behind phone */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[650px] border border-neon-cyan/30 rounded-[3.5rem] -z-10 animate-pulse"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

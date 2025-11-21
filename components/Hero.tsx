import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Smartphone, PlayCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Video Background Overlay */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-30 mix-blend-screen"
        >
          {/* Placeholder for a futuristic city / connection video */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-virtual-reality-man-wearing-a-headset-40625-large.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_90%)]"></div>
      </div>

      {/* Animated Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan rounded-full mix-blend-screen filter blur-[150px] opacity-20 animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-magenta rounded-full mix-blend-screen filter blur-[150px] opacity-20 animate-pulse pointer-events-none" style={{animationDelay: '2s'}}></div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center px-4 py-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 text-neon-cyan text-sm font-mono mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(0,240,255,0.2)]"
            >
              <span className="w-2 h-2 rounded-full bg-neon-cyan mr-2 animate-ping"></span>
              V 2.0 BETA DISPONÍVEL
            </motion.div>

            <h1 className="text-5xl lg:text-8xl font-display font-bold leading-tight mb-8 tracking-tight">
              MEMÓRIAS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-neon-magenta animate-gradient-x">
                VIVAS
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light border-l-2 border-neon-magenta/50 pl-6">
              Arqueologia digital para o mundo moderno. Transforme lugares em cápsulas do tempo usando 
              <strong className="text-white"> Realidade Aumentada</strong> e <strong className="text-white">IA Generativa</strong>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <a href="#waitlist" className="relative overflow-hidden bg-white text-black font-bold py-4 px-10 rounded-xl transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] flex items-center justify-center gap-3 group">
                <span className="relative z-10 flex items-center gap-2">
                   <Smartphone size={20} />
                   Acesso Antecipado
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-magenta opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <a href="#ai" className="border border-white/20 hover:border-neon-magenta/50 text-white py-4 px-8 rounded-xl transition-all backdrop-blur-sm flex items-center justify-center gap-3 hover:bg-white/5 group">
                <PlayCircle size={20} className="group-hover:text-neon-magenta transition-colors" />
                Ver Demo IA
              </a>
            </div>
          </motion.div>

          {/* Visual Content / Mockup */}
          <motion.div 
             initial={{ opacity: 0, y: 100, rotate: 10 }}
             animate={{ opacity: 1, y: 0, rotate: 0 }}
             transition={{ duration: 1.2, delay: 0.2, type: "spring" }}
             className="lg:w-1/2 relative flex justify-center perspective-1000"
          >
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative w-[300px] h-[600px] bg-gray-900 rounded-[3.5rem] border-[10px] border-gray-800 shadow-2xl overflow-hidden z-10 ring-1 ring-white/20"
            >
              {/* Screen Content */}
              <div className="absolute inset-0 bg-black">
                {/* AR Camera View Simulation */}
                <div className="w-full h-full relative">
                    <img 
                      src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                      alt="City Street" 
                      className="w-full h-full object-cover opacity-50 grayscale-[20%]" 
                    />
                    
                    {/* Scanning Grid Overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(transparent_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60"></div>
                </div>
                
                {/* AR Overlay UI */}
                <div className="absolute inset-0 flex flex-col justify-between p-6">
                    <div className="flex justify-between items-center mt-8">
                         <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-full text-xs font-mono text-white border border-neon-cyan/30 flex items-center gap-2 shadow-[0_0_10px_rgba(0,240,255,0.2)]">
                             <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse"></div>
                             AR TRACKING: ATIVO
                         </div>
                    </div>

                    {/* Floating Pin 3D */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 perspective-500">
                        <motion.div 
                           className="relative group cursor-pointer preserve-3d"
                           whileHover={{ scale: 1.1 }}
                        >
                             {/* Memory Card */}
                             <div className="w-48 bg-black/80 backdrop-blur-xl border border-white/20 p-3 rounded-xl shadow-2xl mb-4 transform rotate-x-12 transition-transform duration-500">
                                 <div className="w-full h-24 rounded-lg overflow-hidden mb-2 relative">
                                    <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" className="w-full h-full object-cover" alt="Friends" />
                                    <div className="absolute top-2 right-2 bg-neon-magenta/80 text-[8px] px-1 rounded text-white font-bold">VEO AI</div>
                                 </div>
                                 <div className="flex justify-between items-end">
                                    <div>
                                      <p className="text-sm font-bold text-white">Viagem 2023</p>
                                      <p className="text-[10px] text-gray-400">Há 2 anos</p>
                                    </div>
                                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                                      <PlayCircle size={12} className="text-black" />
                                    </div>
                                 </div>
                             </div>

                             {/* Pin Point */}
                             <div className="w-4 h-4 bg-neon-magenta rounded-full mx-auto shadow-[0_0_20px_#ff00aa] animate-bounce relative z-10"></div>
                             <div className="w-1 h-16 bg-gradient-to-b from-neon-magenta to-transparent mx-auto"></div>
                             
                             {/* Ground Ripple */}
                             <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-32 h-32 border border-neon-cyan/30 rounded-full opacity-0 animate-[ping_3s_infinite]"></div>
                             <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-16 h-16 border border-neon-magenta/50 rounded-full opacity-0 animate-[ping_3s_infinite_0.5s]"></div>
                        </motion.div>
                    </div>

                    {/* Bottom Controls */}
                    <div className="mb-6 flex justify-around items-center w-full bg-black/20 backdrop-blur-xl rounded-2xl p-2 border border-white/10">
                        <MapPin className="text-gray-400" />
                        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-neon-cyan to-neon-magenta p-[2px] shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                           <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                              <div className="w-10 h-10 bg-white rounded-full"></div>
                           </div>
                        </div>
                        <div className="w-8 h-8 rounded-lg overflow-hidden border border-white/50">
                           <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative Elements behind phone */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[650px] border border-neon-cyan/10 rounded-[4rem] -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

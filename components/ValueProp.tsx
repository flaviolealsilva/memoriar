import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Shield, Map, Heart, Zap, EyeOff } from 'lucide-react';

const ComparisonCard = ({ title, icon: Icon, text, isHighlight = false, delay }: { title: string, icon: any, text: string, isHighlight?: boolean, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className={`p-6 rounded-2xl border backdrop-blur-sm z-10 relative overflow-hidden group h-full transition-all duration-300 ${isHighlight ? 'bg-gradient-to-b from-neon-surface/80 to-black/80 border-neon-magenta/40 hover:border-neon-magenta/70 shadow-[0_0_30px_rgba(189,0,255,0.05)]' : 'bg-neon-surface/60 border-white/5 hover:border-white/20'}`}
  >
    {/* Subtle inner glow on hover */}
    <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/0 via-neon-cyan/5 to-neon-cyan/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out pointer-events-none"></div>

    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${isHighlight ? 'bg-neon-magenta/10 text-neon-magenta shadow-[0_0_15px_rgba(255,0,170,0.2)]' : 'bg-gray-800 text-gray-400'}`}>
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold mb-2 font-display text-white">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{text}</p>
  </motion.div>
);

const ValueProp = () => {
  return (
    <section id="vision" className="py-24 bg-black relative overflow-hidden">
      {/* Dynamic Aurora Background */}
      <div className="absolute inset-0 bg-aurora opacity-30 z-0"></div>
      
      {/* Floating Particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full opacity-10"
          initial={{ x: Math.random() * 1000, y: Math.random() * 800 }}
          animate={{ 
            y: [0, -100, 0],
            x: [0, 50, 0],
            opacity: [0.1, 0.3, 0.1] 
          }}
          transition={{ 
            duration: 10 + Math.random() * 10, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-white drop-shadow-lg">
            Não apenas uma alternativa.<br/>
            <span className="text-neon-cyan neon-text-cyan">Um Antídoto.</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg shadow-black drop-shadow-md">
            Redes sociais atuais são palcos para performance. O memoriAR é um cofre para o que realmente importa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ComparisonCard 
            title="Permanência" 
            icon={Clock} 
            text="Stories somem em 24h. Suas memórias no memoriAR duram para sempre, ganhando valor sentimental com o tempo."
            isHighlight={true}
            delay={0.1}
          />
          <ComparisonCard 
            title="Privacidade" 
            icon={Shield} 
            text="Nenhum algoritmo forçando viralidade. Você controla quem vê: público, privado ou apenas amigos próximos."
            isHighlight={true}
            delay={0.2}
          />
           <ComparisonCard 
            title="Contexto Espacial" 
            icon={Map} 
            text="O feed infinito perde o 'onde'. Nós ancoramos suas memórias ao mundo físico real, onde elas aconteceram."
            isHighlight={true}
            delay={0.3}
          />
          <ComparisonCard 
            title="Autenticidade" 
            icon={Heart} 
            text="Sem filtros que distorcem a realidade. Apenas a emoção crua e genuína do momento registrado."
            isHighlight={true}
            delay={0.4}
          />
        </div>

        <div className="mt-24 p-8 md:p-12 glass-panel rounded-3xl border border-white/10 relative overflow-hidden backdrop-blur-xl">
             {/* Animated Glow behind card */}
             <div className="absolute top-[-50%] right-[-20%] w-[600px] h-[600px] bg-neon-cyan/10 rounded-full blur-[100px] animate-pulse-slow pointer-events-none"></div>
             
             <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                 <div>
                     <h3 className="text-2xl font-bold font-display mb-4 text-white">A Guerra pela Atenção acabou.</h3>
                     <p className="text-gray-300 mb-6 text-lg">
                         O Instagram foca na performance e na efemeridade ("Olhe o que estou fazendo agora"). 
                         O memoriAR foca na nostalgia e reflexão ("Redescubra quem você era").
                     </p>
                     <ul className="space-y-4">
                         <li className="flex items-center text-base text-gray-300">
                             <EyeOff className="w-5 h-5 mr-3 text-red-500" /> Sem contagem de likes pública
                         </li>
                         <li className="flex items-center text-base text-gray-300">
                             <Zap className="w-5 h-5 mr-3 text-red-500" /> Sem scroll infinito viciante
                         </li>
                         <li className="flex items-center text-base text-gray-300">
                             <Heart className="w-5 h-5 mr-3 text-neon-magenta" /> Foco em "Digital Archaeology"
                         </li>
                     </ul>
                 </div>
                 <div className="h-64 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl flex items-center justify-center border border-white/5 shadow-2xl relative overflow-hidden group">
                     <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                     <div className="absolute inset-0 bg-gradient-to-t from-neon-cyan/10 to-transparent"></div>
                     
                     {/* Abstract visualization of 'The Moat' */}
                     <div className="text-center relative z-10">
                         <motion.div 
                            initial={{ scale: 0.9 }}
                            whileInView={{ scale: 1.1 }}
                            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                            className="mb-2"
                         >
                             <Shield size={48} className="text-neon-cyan mx-auto drop-shadow-[0_0_15px_rgba(0,240,255,0.8)]" />
                         </motion.div>
                         <p className="text-neon-cyan font-display text-4xl font-bold mb-2 text-shadow-lg">PVU</p>
                         <p className="text-sm text-gray-400 uppercase tracking-widest">Proposição de Valor Única</p>
                         <div className="mt-6 flex justify-center gap-3">
                             <span className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs font-mono text-gray-300">Nostalgia</span>
                             <span className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs font-mono text-gray-300">AR</span>
                             <span className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs font-mono text-gray-300">Geo</span>
                         </div>
                     </div>
                 </div>
             </div>
        </div>

      </div>
    </section>
  );
};

export default ValueProp;
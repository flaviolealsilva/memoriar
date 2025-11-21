import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const phases = [
  {
    id: "Fase 1",
    title: "Fundação & MVP",
    time: "Meses 1-4",
    items: ["Design UI/UX Minimalista", "Core Unity + AR Foundation", "Backend Geoespacial", "Privacidade LGPD"],
    status: "completed"
  },
  {
    id: "Fase 2",
    title: "Pré-Lançamento",
    time: "Meses 5-6",
    items: ["Buzz Marketing", "Criadores Fundadores", "Beta Fechado", "Otimização ASO"],
    status: "current"
  },
  {
    id: "Fase 3",
    title: "Lançamento & Crescimento",
    time: "Meses 7-9",
    items: ["Rollout por Cidades", "Gamificação", "Expansão Geográfica", "Iteração Rápida"],
    status: "upcoming"
  },
  {
    id: "Fase 4",
    title: "Escala & Recursos Pro",
    time: "Meses 10-18",
    items: ["Memórias Coletivas", "Áudio e Vídeo", "Integração Spotify", "Parcerias Culturais"],
    status: "upcoming"
  },
  {
    id: "Fase 5",
    title: "Monetização & Ecossistema",
    time: "Meses 19+",
    items: ["memoriAR Pro (SaaS)", "Pins Patrocinados (B2B)", "Smart Glasses R&D"],
    status: "upcoming"
  }
];

const Roadmap = () => {
  return (
    <section id="roadmap" className="py-24 bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center md:text-left">
           <span className="text-neon-magenta font-bold tracking-wider uppercase text-sm">O Caminho à Frente</span>
           <h2 className="text-4xl font-display font-bold mt-2 text-white">Roadmap Estratégico</h2>
           <p className="text-gray-400 mt-4 max-w-2xl">
             Um plano detalhado de 24 meses focado em validação, crescimento orgânico e sustentabilidade financeira.
           </p>
        </div>

        <div className="relative mt-20">
          {/* Vertical Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-neon-cyan via-neon-magenta to-purple-900 opacity-50"></div>

          <div className="space-y-12 md:space-y-24">
            {phases.map((phase, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Content Side */}
                <div className="w-full md:w-5/12 p-1 relative group">
                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="bg-[#0f0f16] p-6 rounded-xl border border-white/10 hover:border-neon-cyan/30 transition-colors relative z-10 shadow-lg">
                    <div className="flex justify-between items-center mb-4">
                        <span className={`px-3 py-1 rounded text-xs font-bold uppercase tracking-wide ${phase.status === 'current' ? 'bg-neon-cyan text-black animate-pulse' : phase.status === 'completed' ? 'bg-green-500/20 text-green-400' : 'bg-white/5 text-gray-500'}`}>
                          {phase.id} {phase.status === 'completed' && '✓'}
                        </span>
                        <span className="text-sm text-gray-400 font-mono border border-white/10 px-2 py-1 rounded">{phase.time}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white font-display">{phase.title}</h3>
                    <ul className="space-y-2">
                        {phase.items.map((item, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-300 group-hover:text-white transition-colors">
                            <ArrowRight size={14} className="mr-2 mt-1 text-neon-magenta shrink-0" />
                            {item}
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>

                {/* Center Node */}
                <div className="w-8 h-8 my-6 md:my-0 rounded-full bg-black border-4 border-neon-cyan z-10 relative shadow-[0_0_15px_rgba(0,240,255,0.5)] flex items-center justify-center">
                   {phase.status === 'completed' && <div className="w-3 h-3 bg-neon-cyan rounded-full"></div>}
                   {phase.status === 'current' && <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>}
                </div>

                {/* Empty Side for balance */}
                <div className="w-full md:w-5/12 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
import React from 'react';
import { Camera, MapPin, Users, Lock, Clock, Navigation } from 'lucide-react';

const features = [
  {
    icon: Camera,
    title: "Lente Mágica AR",
    description: "Aponte sua câmera e veja o invisível. Fotos e notas flutuam no local exato onde aconteceram."
  },
  {
    icon: MapPin,
    title: "Pinning & Unpinning",
    description: "Fluxo de 3 toques para eternizar um momento. Descoberta intuitiva ao caminhar pela cidade."
  },
  {
    icon: Clock,
    title: "Cápsulas do Tempo",
    description: "Deixe mensagens para o futuro. Defina uma data para que a memória seja desbloqueada."
  },
  {
    icon: Lock,
    title: "Privacidade por Design",
    description: "Controle binário simples: Privado (só você) ou Público (comunidade). Seus dados, suas regras (LGPD)."
  },
  {
    icon: Users,
    title: "Memórias Coletivas",
    description: "Crie álbuns colaborativos em locais de eventos, shows ou encontros familiares."
  },
  {
    icon: Navigation,
    title: "Trilhas de Memória",
    description: "Siga roteiros curados por museus, influenciadores ou amigos através da cidade."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-neon-dark relative overflow-hidden">
      {/* Decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 text-white">
            Funcionalidades <span className="text-neon-magenta">Core</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Construído com Unity e AR Foundation para uma experiência fluida em iOS e Android.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-neon-cyan/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-black border border-white/10 flex items-center justify-center mb-6 group-hover:border-neon-cyan group-hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all">
                  <feature.icon className="text-white group-hover:text-neon-cyan" size={28} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

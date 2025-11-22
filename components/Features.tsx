import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
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
    description: "Fluxo de 3 toques para eternizar um momento. Descoberta intuitiva e mágica ao caminhar."
  },
  {
    icon: Clock,
    title: "Cápsulas do Tempo",
    description: "Deixe mensagens para o futuro. Defina uma data específica para que a memória seja desbloqueada."
  },
  {
    icon: Lock,
    title: "Privacidade por Design",
    description: "Controle binário simples: Privado ou Público. Seus dados, suas regras, em conformidade com a LGPD."
  },
  {
    icon: Users,
    title: "Memórias Coletivas",
    description: "Crie álbuns colaborativos em locais de eventos. Uma visão 360º da história compartilhada."
  },
  {
    icon: Navigation,
    title: "Trilhas de Memória",
    description: "Siga roteiros históricos ou temáticos curados por museus e influenciadores locais."
  }
];

const TiltCard = ({ feature, index }: { feature: any, index: number }) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={onMouseMove}
      className="group relative h-full rounded-2xl bg-black/40 border border-white/10 hover:border-neon-cyan/30 transition-colors duration-300 backdrop-blur-sm overflow-hidden"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 240, 255, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full p-8 flex flex-col">
        <div className="w-12 h-12 rounded-lg bg-black border border-white/10 flex items-center justify-center mb-6 group-hover:border-neon-cyan group-hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all duration-500 z-10">
          <feature.icon className="text-gray-400 group-hover:text-neon-cyan transition-colors" size={24} />
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3 font-display group-hover:text-neon-cyan transition-colors z-10">
          {feature.title}
        </h3>
        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors z-10">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-32 bg-black relative overflow-hidden">
      {/* Moving Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden perspective-[500px]">
        <div className="absolute inset-0 bg-[linear-gradient(transparent_1px,_#111_1px),_linear-gradient(90deg,transparent_1px,_#111_1px)] bg-[size:40px_40px] [transform:rotateX(60deg)] animate-[moving-grid_20s_linear_infinite] shadow-[0_0_50px_rgba(0,240,255,0.2)_inset]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_80%)]"></div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-magenta/5 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            O Sistema <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-magenta">memoriAR</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Uma suite completa de ferramentas de Realidade Aumentada projetadas para preservar a história humana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <TiltCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
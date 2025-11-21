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
      className="group relative h-full rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition-colors duration-300"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 240, 255, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full p-8 flex flex-col">
        <div className="w-12 h-12 rounded-lg bg-black border border-white/10 flex items-center justify-center mb-6 group-hover:border-neon-cyan group-hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all duration-500">
          <feature.icon className="text-gray-400 group-hover:text-neon-cyan transition-colors" size={24} />
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3 font-display group-hover:text-neon-cyan transition-colors">
          {feature.title}
        </h3>
        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-32 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-magenta/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-white">
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

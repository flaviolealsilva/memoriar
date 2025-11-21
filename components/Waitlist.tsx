import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Waitlist = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setStatus('success');
      setEmail('');
    }
  };

  return (
    <section id="waitlist" className="py-24 bg-black relative overflow-hidden">
      {/* Glowing Orb Background */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
          Redescubra o seu mundo.
        </h2>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Seja um dos <strong>"Criadores Fundadores"</strong>. Junte-se à lista de espera para acesso antecipado ao Beta Fechado e ajude a mapear as primeiras memórias.
        </p>

        {status === 'success' ? (
          <div className="bg-green-500/10 border border-green-500/50 text-green-400 p-6 rounded-xl max-w-md mx-auto">
            <p className="font-bold text-lg">Obrigado! Você está na lista.</p>
            <p className="text-sm mt-2">Fique de olho no seu e-mail para novidades sobre o lançamento.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              required
              className="flex-1 bg-white/5 border border-white/20 rounded-lg px-6 py-4 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all"
            />
            <button 
              type="submit"
              className="bg-gradient-to-r from-neon-cyan to-blue-600 hover:from-white hover:to-gray-200 hover:text-black text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.3)]"
            >
              <span>Solicitar Acesso</span>
              <Send size={18} />
            </button>
          </form>
        )}
        
        <p className="mt-6 text-gray-600 text-sm">
          Limitado a 500 usuários iniciais na Grande São Paulo. <br/>
          Suas informações estão seguras. Respeitamos sua privacidade.
        </p>
      </div>
    </section>
  );
};

export default Waitlist;

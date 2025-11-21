import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

const Waitlist = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Simulate API call
      setTimeout(() => setStatus('success'), 500);
      setEmail('');
    }
  };

  return (
    <section id="waitlist" className="py-32 bg-black relative overflow-hidden">
      {/* Glowing Orb Background */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:24px_24px] opacity-20"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neon-cyan text-xs font-bold uppercase tracking-widest mb-8">
            Beta Fechado
        </div>
        
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">
          Redescubra o seu mundo.
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Seja um dos <strong>"Criadores Fundadores"</strong>. Junte-se à lista de espera para acesso antecipado ao Beta Fechado e ajude a mapear as primeiras memórias em sua cidade.
        </p>

        {status === 'success' ? (
          <div className="bg-green-500/10 border border-green-500/50 text-green-400 p-8 rounded-2xl max-w-md mx-auto animate-in zoom-in duration-300">
            <div className="flex justify-center mb-4">
                <CheckCircle2 size={48} />
            </div>
            <p className="font-bold text-2xl mb-2 font-display">Bem-vindo(a)!</p>
            <p className="text-green-300/80">Você está na lista prioritária. Fique de olho no seu e-mail para novidades sobre o lançamento.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto relative">
            <div className="relative flex-1">
                <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                required
                className="w-full bg-white/5 border border-white/20 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all text-lg"
                />
            </div>
            <button 
              type="submit"
              className="bg-gradient-to-r from-neon-cyan to-blue-600 hover:from-white hover:to-gray-200 hover:text-black text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] text-lg transform hover:-translate-y-1"
            >
              <span>Solicitar Acesso</span>
              <Send size={20} />
            </button>
          </form>
        )}
        
        <div className="mt-12 pt-8 border-t border-white/5 max-w-sm mx-auto">
            <p className="text-gray-500 text-sm">
            Limitado a <span className="text-white font-bold">500 usuários</span> iniciais na Grande São Paulo.
            <br/>
            <span className="text-xs opacity-60 mt-2 block">Suas informações estão seguras. Respeitamos sua privacidade (LGPD).</span>
            </p>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
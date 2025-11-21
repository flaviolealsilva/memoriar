import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Twitter, Mail } from 'lucide-react';
import { LogoSymbol, LogoText } from './components/Logo';
import Hero from './components/Hero';
import ValueProp from './components/ValueProp';
import Features from './components/Features';
import AiShowcase from './components/AiShowcase';
import Roadmap from './components/Roadmap';
import Financials from './components/Financials';
import Waitlist from './components/Waitlist';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Visão', href: '#vision' },
    { name: 'IA & Veo', href: '#ai' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Investimento', href: '#financials' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-3 glass-panel border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] bg-neon-dark/90' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo(0,0)}>
             <LogoSymbol className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" />
             <div className="hidden sm:block">
               <LogoText />
             </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-neon-cyan transition-colors px-3 py-2 text-sm font-medium tracking-wide relative group overflow-hidden"
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-magenta transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <a 
                href="#waitlist"
                className="relative overflow-hidden bg-white text-black font-bold py-2.5 px-6 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] group"
              >
                <span className="relative z-10 group-hover:text-neon-magenta transition-colors">Acesso Beta</span>
                <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </a>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-panel border-b border-white/10 animate-in slide-in-from-top duration-200 absolute w-full bg-black/95 backdrop-blur-xl">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-neon-cyan block px-3 py-3 rounded-md text-lg font-medium border-b border-white/5"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
                href="#waitlist"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-gradient-to-r from-neon-cyan to-neon-magenta text-black font-bold py-4 rounded-xl mt-6 shadow-lg"
              >
                Quero Acesso Beta
              </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-black border-t border-white/10 py-16 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-50"></div>
    
    {/* Background Glow */}
    <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-neon-magenta/5 rounded-full blur-[128px] pointer-events-none"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
             <LogoSymbol className="w-8 h-8" />
             <LogoText />
          </div>
          <p className="mt-4 text-gray-400 text-sm max-w-xs leading-relaxed">
            A primeira rede social focada na permanência.
            Construímos o futuro da arqueologia digital usando Realidade Aumentada e IA Generativa.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-12 sm:gap-24">
           <div>
              <h4 className="text-white font-bold mb-4 font-display">Plataforma</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                 <li><a href="#" className="hover:text-neon-cyan transition-colors">iOS (TestFlight)</a></li>
                 <li><a href="#" className="hover:text-neon-cyan transition-colors">Android (APK)</a></li>
                 <li><a href="#" className="hover:text-neon-cyan transition-colors">Veo Studio</a></li>
              </ul>
           </div>
           <div>
              <h4 className="text-white font-bold mb-4 font-display">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                 <li><a href="#" className="hover:text-neon-cyan transition-colors">Privacidade (LGPD)</a></li>
                 <li><a href="#" className="hover:text-neon-cyan transition-colors">Termos</a></li>
                 <li><a href="#" className="hover:text-neon-cyan transition-colors">Imprensa</a></li>
              </ul>
           </div>
        </div>

        <div className="flex space-x-6">
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-neon-cyan hover:border-neon-cyan hover:bg-neon-cyan/10 transition-all transform hover:-translate-y-1"><Instagram size={20} /></a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-neon-cyan hover:border-neon-cyan hover:bg-neon-cyan/10 transition-all transform hover:-translate-y-1"><Twitter size={20} /></a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-neon-cyan hover:border-neon-cyan hover:bg-neon-cyan/10 transition-all transform hover:-translate-y-1"><Mail size={20} /></a>
        </div>
      </div>
      
      <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
        <p>&copy; 2025 memoriAR Inc. São Paulo, Brasil.</p>
        <p className="mt-2 md:mt-0">Feito com ⚡ e React</p>
      </div>
    </div>
  </footer>
);

const App = () => {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-neon-magenta selection:text-white font-sans overflow-x-hidden scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <ValueProp />
        <AiShowcase />
        <Features />
        <Roadmap />
        <Financials />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
};

export default App;

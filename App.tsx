import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Twitter, Mail } from 'lucide-react';
import Hero from './components/Hero';
import ValueProp from './components/ValueProp';
import Features from './components/Features';
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
    { name: 'Funcionalidades', href: '#features' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Projeções', href: '#financials' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-3 glass-panel border-b border-white/10 shadow-lg bg-neon-dark/80' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => window.scrollTo(0,0)}>
             {/* Logo */}
             <div className="relative w-8 h-8">
                <div className="absolute inset-0 border-2 border-neon-cyan transform -skew-x-12 rounded-sm shadow-[0_0_10px_rgba(0,240,255,0.5)]"></div>
                <div className="absolute inset-0 border-2 border-neon-magenta transform skew-x-12 translate-x-1 rounded-sm mix-blend-screen shadow-[0_0_10px_rgba(255,0,170,0.5)]"></div>
             </div>
            <span className="font-display font-bold text-2xl tracking-wider text-white">
              memori<span className="text-neon-magenta neon-text-magenta">AR</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-neon-cyan transition-colors px-3 py-2 rounded-md text-sm font-medium tracking-wide hover:bg-white/5"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#waitlist"
                className="bg-gradient-to-r from-neon-cyan to-blue-500 hover:from-neon-magenta hover:to-purple-600 text-black font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(0,240,255,0.4)]"
              >
                Acesso Beta
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
        <div className="md:hidden glass-panel border-b border-white/10 animate-in slide-in-from-top duration-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-white/5"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
                href="#waitlist"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-neon-cyan text-black font-bold py-3 rounded-md mt-4 shadow-[0_0_10px_rgba(0,240,255,0.5)]"
              >
                Acesso Beta
              </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-neon-dark border-t border-white/10 py-12 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-purple opacity-50"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <span className="font-display font-bold text-2xl tracking-wider text-white">
            memori<span className="text-neon-magenta">AR</span>
          </span>
          <p className="mt-2 text-gray-400 text-sm max-w-xs">
            Arqueologia digital para o seu passado.
            <br />
            São Paulo, Brasil.
          </p>
        </div>
        
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors transform hover:scale-110"><Instagram size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors transform hover:scale-110"><Twitter size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors transform hover:scale-110"><Mail size={24} /></a>
        </div>
      </div>
      
      <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>&copy; 2025 memoriAR. Todos os direitos reservados.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacidade (LGPD)</a>
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
        </div>
      </div>
    </div>
  </footer>
);

const App = () => {
  return (
    <div className="bg-neon-dark min-h-screen text-white selection:bg-neon-magenta selection:text-white font-sans overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <ValueProp />
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
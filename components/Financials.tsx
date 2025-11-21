import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, DollarSign } from 'lucide-react';

const data = [
  { name: 'Lançamento', users: 0, revenue: 0 },
  { name: 'Fase 1 (M12)', users: 50000, revenue: 0 },
  { name: 'Meio F2 (M18)', users: 150000, revenue: 11880 },
  { name: 'Fim F2 (M24)', users: 300000, revenue: 29700 },
  { name: 'Fase 3 (M30)', users: 500000, revenue: 74400 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-900 border border-white/20 p-4 rounded shadow-xl">
        <p className="text-white font-bold mb-2 font-display">{label}</p>
        <p className="text-neon-cyan text-sm mb-1">
          <span className="font-bold">Usuários:</span> {payload[0].value.toLocaleString()}
        </p>
        <p className="text-neon-magenta text-sm">
          <span className="font-bold">Receita Est.:</span> R$ {payload[1].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

const Financials = () => {
  return (
    <section id="financials" className="py-24 bg-neon-surface relative border-t border-white/5">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/3">
             <div className="flex items-center gap-2 text-neon-cyan mb-4">
                <TrendingUp size={20} />
                <span className="font-bold uppercase tracking-wider text-sm">Crescimento Projetado</span>
             </div>
             <h2 className="text-3xl font-display font-bold text-white mb-6">
               Escalabilidade e <br/>Retorno Financeiro
             </h2>
             <p className="text-gray-400 mb-8 leading-relaxed">
               Projeção conservadora baseada em estratégia de monetização faseada (Freemium no Mês 13). 
               O foco inicial é a construção do "efeito de rede" e densidade de conteúdo antes de ativar as receitas.
             </p>

             <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                   <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:border-neon-cyan/50 transition-colors">
                      <Users className="text-neon-cyan" size={24} />
                   </div>
                   <div>
                      <h4 className="text-white font-bold group-hover:text-neon-cyan transition-colors">Aquisição Orgânica</h4>
                      <p className="text-sm text-gray-500">Fator K (Viralidade) impulsionado por compartilhamento de memórias privadas entre amigos.</p>
                   </div>
                </div>
                <div className="flex items-start gap-4 group">
                   <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:border-neon-magenta/50 transition-colors">
                      <DollarSign className="text-neon-magenta" size={24} />
                   </div>
                   <div>
                      <h4 className="text-white font-bold group-hover:text-neon-magenta transition-colors">Modelo Híbrido</h4>
                      <p className="text-sm text-gray-500">Assinatura Pro (B2C) + Pins Patrocinados (B2B) garantem sustentabilidade a longo prazo.</p>
                   </div>
                </div>
             </div>
          </div>

          {/* Chart */}
          <div className="lg:w-2/3 w-full h-[450px] glass-panel p-6 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden">
             {/* Glowing corner effect */}
             <div className="absolute -top-10 -right-10 w-32 h-32 bg-neon-cyan/20 rounded-full blur-3xl"></div>
             
             <h3 className="text-white font-bold mb-6 pl-2 border-l-4 border-neon-cyan">Projeção de Usuários vs. Receita (30 Meses)</h3>
             
             <div className="w-full h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                    data={data}
                    margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                    >
                    <defs>
                        <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#00f0ff" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#00f0ff" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#ff00aa" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#ff00aa" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                    <XAxis dataKey="name" stroke="#666" style={{ fontSize: '11px', fontFamily: 'Inter' }} tickMargin={10} />
                    <YAxis stroke="#666" style={{ fontSize: '11px', fontFamily: 'Inter' }} />
                    <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(255,255,255,0.2)' }} />
                    <Area 
                        type="monotone" 
                        dataKey="users" 
                        name="Usuários"
                        stroke="#00f0ff" 
                        fillOpacity={1} 
                        fill="url(#colorUsers)" 
                        strokeWidth={3}
                        activeDot={{ r: 6, strokeWidth: 0 }}
                    />
                    <Area 
                        type="monotone" 
                        dataKey="revenue" 
                        name="Receita"
                        stroke="#ff00aa" 
                        fillOpacity={1} 
                        fill="url(#colorRevenue)" 
                        strokeWidth={3}
                        activeDot={{ r: 6, strokeWidth: 0 }}
                    />
                    </AreaChart>
                </ResponsiveContainer>
             </div>
             
             <div className="flex justify-center gap-8 mt-2">
                <div className="flex items-center gap-2">
                   <div className="w-3 h-3 bg-neon-cyan rounded-full shadow-[0_0_5px_#00f0ff]"></div>
                   <span className="text-xs text-gray-400 font-mono">USUÁRIOS ATIVOS</span>
                </div>
                <div className="flex items-center gap-2">
                   <div className="w-3 h-3 bg-neon-magenta rounded-full shadow-[0_0_5px_#ff00aa]"></div>
                   <span className="text-xs text-gray-400 font-mono">RECEITA MENSAL (R$)</span>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Financials;
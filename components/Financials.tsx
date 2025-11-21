import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, DollarSign } from 'lucide-react';

const data = [
  { name: 'Fase 1 (M12)', users: 50000, revenue: 0 },
  { name: 'Meio F2 (M18)', users: 150000, revenue: 11880 },
  { name: 'Fim F2 (M24)', users: 300000, revenue: 29700 },
  { name: 'Fase 3 (M30)', users: 500000, revenue: 74400 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-900 border border-white/20 p-4 rounded shadow-xl">
        <p className="text-white font-bold mb-2">{label}</p>
        <p className="text-neon-cyan text-sm">
          Usuários: {payload[0].value.toLocaleString()}
        </p>
        <p className="text-neon-magenta text-sm">
          Receita (Est.): R$ {payload[1].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

const Financials = () => {
  return (
    <section id="financials" className="py-24 bg-neon-surface relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      
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
               O foco inicial é a construção do "efeito de rede" e densidade de conteúdo.
             </p>

             <div className="space-y-6">
                <div className="flex items-start gap-4">
                   <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                      <Users className="text-neon-cyan" size={24} />
                   </div>
                   <div>
                      <h4 className="text-white font-bold">Aquisição Orgânica</h4>
                      <p className="text-sm text-gray-500">Fator K (Viralidade) impulsionado por compartilhamento de memórias privadas.</p>
                   </div>
                </div>
                <div className="flex items-start gap-4">
                   <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                      <DollarSign className="text-neon-magenta" size={24} />
                   </div>
                   <div>
                      <h4 className="text-white font-bold">Modelo Híbrido</h4>
                      <p className="text-sm text-gray-500">Assinatura Pro + B2B (Pins Patrocinados) garantem sustentabilidade a longo prazo.</p>
                   </div>
                </div>
             </div>
          </div>

          {/* Chart */}
          <div className="lg:w-2/3 w-full h-[400px] glass-panel p-6 rounded-2xl border border-white/10 shadow-2xl">
             <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={data}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
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
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="name" stroke="#666" style={{ fontSize: '12px' }} />
                  <YAxis stroke="#666" style={{ fontSize: '12px' }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Area 
                    type="monotone" 
                    dataKey="users" 
                    stroke="#00f0ff" 
                    fillOpacity={1} 
                    fill="url(#colorUsers)" 
                    strokeWidth={3}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="#ff00aa" 
                    fillOpacity={1} 
                    fill="url(#colorRevenue)" 
                    strokeWidth={3}
                  />
                </AreaChart>
             </ResponsiveContainer>
             <div className="flex justify-center gap-8 mt-4">
                <div className="flex items-center gap-2">
                   <div className="w-3 h-3 bg-neon-cyan rounded-full"></div>
                   <span className="text-xs text-gray-400">Usuários Ativos</span>
                </div>
                <div className="flex items-center gap-2">
                   <div className="w-3 h-3 bg-neon-magenta rounded-full"></div>
                   <span className="text-xs text-gray-400">Receita Mensal Estimada (R$)</span>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Financials;

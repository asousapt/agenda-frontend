'use client';

import React from 'react';
import { 
  Users, 
  CalendarCheck, 
  AlertCircle, 
  TrendingUp,
  MoreVertical,
  CheckCircle2,
  XCircle
} from 'lucide-react';

// Tipagem simples para os dados simulados
interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ElementType;
  trend: 'up' | 'down';
}

const AdminDashboard = () => {
  return (
    <div className="space-y-8">
      {/* Header do Dashboard */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Painel de Controlo</h1>
        <p className="text-gray-500">Bem-vindo, Administrador. Aqui está o resumo da rede cultural.</p>
      </div>

      {/* Grid de Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Utilizadores" 
          value="2,845" 
          change="+12% este mês" 
          icon={Users} 
          trend="up" 
        />
        <StatCard 
          title="Eventos Ativos" 
          value="142" 
          change="+5 novos hoje" 
          icon={CalendarCheck} 
          trend="up" 
        />
        <StatCard 
          title="Pendentes Aprovação" 
          value="18" 
          change="Requer atenção" 
          icon={AlertCircle} 
          trend="down" 
        />
        <StatCard 
          title="Taxa de Conversão" 
          value="64%" 
          change="+2% vs ontem" 
          icon={TrendingUp} 
          trend="up" 
        />
      </div>

      {/* Secção de Gestão de Eventos Pendentes */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-50 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">Eventos a Aguardar Revisão</h2>
          <button className="text-sm text-indigo-600 font-semibold hover:bg-indigo-50 px-4 py-2 rounded-lg transition-colors">
            Ver Todos
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-400 text-xs uppercase tracking-wider">
                <th className="px-6 py-4 font-semibold">Evento</th>
                <th className="px-6 py-4 font-semibold">Promotor</th>
                <th className="px-6 py-4 font-semibold">Data Submissão</th>
                <th className="px-6 py-4 font-semibold text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[1, 2, 3].map((i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-indigo-100 rounded-lg flex-shrink-0" />
                      <div>
                        <p className="font-bold text-gray-900 text-sm">Festival de Jazz de Verão</p>
                        <p className="text-xs text-gray-500">Música • Lisboa</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 font-medium">
                    Cultura Viva Lda.
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    24 Mar 2024
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-end space-x-2">
                      <button title="Aprovar" className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                        <CheckCircle2 size={18} />
                      </button>
                      <button title="Rejeitar" className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        <XCircle size={18} />
                      </button>
                      <button className="p-2 text-gray-400 hover:bg-gray-100 rounded-lg">
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Componente Interno para os Cards de Estatísticas
const StatCard: React.FC<StatCardProps> = ({ title, value, change, icon: Icon, trend }) => (
  <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 bg-indigo-50 rounded-2xl text-indigo-600">
        <Icon size={24} />
      </div>
      <span className={`text-xs font-bold px-2 py-1 rounded-full ${
        trend === 'up' ? 'bg-green-50 text-green-600' : 'bg-amber-50 text-amber-600'
      }`}>
        {change}
      </span>
    </div>
    <p className="text-gray-500 text-sm font-medium">{title}</p>
    <h3 className="text-2xl font-black text-gray-900 mt-1">{value}</h3>
  </div>
);

export default AdminDashboard;
'use client';

import React from 'react';
import { Plus, Users, Ticket, TrendingUp, MoreHorizontal } from 'lucide-react';
import Link from 'next/link';

const PromotorDashboard = () => {
  return (
    <div className="space-y-8">
      {/* Top Bar / Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Painel do Promotor</h1>
          <p className="text-gray-500 text-sm">Gere os teus eventos e monitoriza as vendas em tempo real.</p>
        </div>
        <Link 
          href="/promotor/events/new"
          className="flex items-center justify-center space-x-2 bg-indigo-600 text-white px-5 py-3 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
        >
          <Plus size={20} />
          <span>Novo Evento</span>
        </Link>
      </div>

      {/* Grelha de Conteúdo: Eventos + Equipa */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Coluna Principal: Meus Eventos (2/3) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold text-gray-800">Próximos Eventos</h2>
            <Link href="/promotor/events" className="text-sm text-indigo-600 font-medium">Ver todos</Link>
          </div>
          
          <div className="space-y-3">
            {[1, 2].map((i) => (
              <div key={i} className="bg-white p-4 rounded-2xl border border-gray-100 flex items-center justify-between hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900">Workshop de Cerâmica Moderna</h3>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">15 Out 2024 • 18:30</p>
                    <div className="mt-1 flex items-center space-x-2">
                      <span className="px-2 py-0.5 bg-green-50 text-green-600 text-[10px] font-bold rounded-md">ATIVO</span>
                      <span className="text-[10px] text-gray-400">84/100 Bilhetes</span>
                    </div>
                  </div>
                </div>
                <button className="p-2 hover:bg-gray-50 rounded-full text-gray-400">
                  <MoreHorizontal size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Coluna Lateral: Gestão de Equipa (1/3) */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold text-gray-800">Equipa</h2>
            <button className="p-1.5 bg-gray-100 rounded-lg text-gray-600 hover:bg-gray-200 transition-colors">
              <Plus size={16} />
            </button>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 divide-y divide-gray-50">
            {['Ricardo Silva', 'Ana Costa', 'Miguel Jorge'].map((name) => (
              <div key={name} className="p-4 flex items-center space-x-3">
                <div className="w-8 h-8 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center text-xs font-bold">
                  {name.charAt(0)}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-gray-900 leading-none">{name}</p>
                  <p className="text-[10px] text-gray-400 mt-1 uppercase font-semibold">Editor</p>
                </div>
                <div className="w-2 h-2 bg-green-400 rounded-full" title="Online" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

// Componente de Estatística Rápida
const QuickStat = ({ label, value, icon: Icon, color }: { label: string; value: string; icon: any; color: string }) => (
  <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm">
    <div className="flex items-center space-x-4">
      <div className={`p-3 rounded-2xl ${color}`}>
        <Icon size={22} />
      </div>
      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{label}</p>
        <p className="text-xl font-black text-gray-900">{value}</p>
      </div>
    </div>
  </div>
);

export default PromotorDashboard;
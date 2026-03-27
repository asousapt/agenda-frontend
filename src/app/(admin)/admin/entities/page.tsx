'use client';

import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  MoreHorizontal, 
  Building2, 
  Mail, 
  MapPin, 
  ChevronLeft, 
  ChevronRight,
  ExternalLink,
  Trash2
} from 'lucide-react';
import Link from 'next/link';

interface Promoter {
  id: string;
  name: string;
  email: string;
  location: string;
  status: 'Ativo' | 'Pendente';
  totalEvents: number;
}

export default function PromotersAdminPage() {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock de dados seguindo a tua estrutura
  const promoters: Promoter[] = [
    { id: '1', name: 'Teatro Nacional', email: 'geral@example.com', location: 'Lisboa', status: 'Ativo', totalEvents: 24 },
    { id: '2', name: 'Artes de Rua CRL', email: 'geral@example.com', location: 'Porto', status: 'Pendente', totalEvents: 8 },
    { id: '3', name: 'Promotora Algarve', email: 'geral@example.com', location: 'Faro', status: 'Ativo', totalEvents: 12 },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Cabeçalho */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Promotores</h1>
          <p className="text-sm text-gray-500">Gere as entidades e organizadores de eventos.</p>
        </div>

        <Link href="/admin/entities/add">
          <button className="flex items-center justify-center space-x-2 bg-indigo-600 text-white px-5 py-3 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 active:scale-95">
            <Plus size={20} />
            <span>Novo Promotor</span>
          </button>
        </Link>
      </div>

      {/* Barra de Pesquisa (Seguindo o estilo da tua Categorias) */}
      <div className="relative group">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
        </div>
        <input
          type="text"
          placeholder="Procurar promotor por nome ou email..."
          className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-100 rounded-2xl focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all shadow-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Tabela de Promotores */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Entidade</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Localização</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider text-center">Eventos</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider text-center">Estado</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {promoters.map((promoter) => (
                <tr key={promoter.id} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 shrink-0">
                        <Building2 size={20} />
                      </div>
                      <div className="min-w-0">
                        <p className="font-bold text-gray-800 truncate">{promoter.name}</p>
                        <p className="text-xs text-gray-400 flex items-center truncate">
                          <Mail size={12} className="mr-1" /> {promoter.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin size={14} className="mr-1.5" />
                      {promoter.location}
                    </div>
                  </td>
                  <td className="px-6 py-5 text-center font-semibold text-gray-700 text-sm">
                    {promoter.totalEvents}
                  </td>
                  <td className="px-6 py-5 text-center">
                    <span className={`inline-flex px-3 py-1 rounded-full text-[11px] font-bold ${
                      promoter.status === 'Ativo' 
                        ? 'bg-green-50 text-green-600' 
                        : 'bg-amber-50 text-amber-600'
                    }`}>
                      {promoter.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex justify-end space-x-1">
                      <button className="p-2 hover:bg-indigo-50 text-gray-400 hover:text-indigo-600 rounded-xl transition-all">
                        <ExternalLink size={18} />
                      </button>
                      <button className="p-2 hover:bg-red-50 text-gray-400 hover:text-red-600 rounded-xl transition-all">
                        <Trash2 size={18} />
                      </button>
                      <button className="p-2 hover:bg-gray-100 text-gray-400 rounded-xl transition-all">
                        <MoreHorizontal size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer com Paginação */}
        <div className="px-6 py-4 bg-gray-50/50 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            A mostrar <span className="font-bold text-gray-900">1</span> a <span className="font-bold text-gray-900">10</span> de <span className="font-bold text-gray-900">45</span> promotores
          </p>
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-xl border border-gray-200 bg-white text-gray-400 hover:text-indigo-600 disabled:opacity-50 transition-all">
              <ChevronLeft size={18} />
            </button>
            <div className="flex space-x-1">
              {[1, 2, 3].map((page) => (
                <button 
                  key={page}
                  className={`w-9 h-9 rounded-xl text-sm font-bold transition-all ${
                    page === 1 ? 'bg-indigo-600 text-white shadow-md shadow-indigo-100' : 'text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            <button className="p-2 rounded-xl border border-gray-200 bg-white text-gray-400 hover:text-indigo-600 transition-all">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}   
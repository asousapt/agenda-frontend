'use client';

import React, { useState } from 'react';
import { Plus, Search, Edit2, Trash2, Tag } from 'lucide-react';
import Link from 'next/link';

// 1. Definimos a interface fora do componente
interface Categoria {
  id: string;
  nome: string;
  slug: string;
  totalEventos: number;
  ativo: boolean;
}

// 2. O nome da função pode ser qualquer um, mas o EXPORT DEFAULT é obrigatório
export default function CategoriasPage() {
  const [searchTerm, setSearchTerm] = useState('');

  // Dados fictícios para visualização
  const categorias: Categoria[] = [
    { id: '1', nome: 'Música', slug: 'musica', totalEventos: 45, ativo: true },
    { id: '2', nome: 'Teatro', slug: 'teatro', totalEventos: 12, ativo: true },
    { id: '3', nome: 'Exposições', slug: 'exposicoes', totalEventos: 8, ativo: false },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Cabeçalho */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Categorias</h1>
          <p className="text-sm text-gray-500">Gere as classificações dos eventos.</p>
        </div>


        <Link href="/admin/categories/add">
          <button className="flex items-center justify-center space-x-2 bg-indigo-600 text-white px-5 py-3 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">
            <Plus size={20} />
            <span>Nova Categoria</span>
          </button>
        </Link>
      </div>

      {/* Tabela */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">Nome</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase">Slug</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase text-center">Eventos</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {categorias.map((cat) => (
                <tr key={cat.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 flex items-center space-x-3">
                    <Tag size={16} className="text-indigo-500" />
                    <span className="font-bold text-gray-800">{cat.nome}</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 font-mono">/{cat.slug}</td>
                  <td className="px-6 py-4 text-center text-sm font-semibold">{cat.totalEventos}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end space-x-2">
                      <button className="p-2 hover:bg-indigo-50 text-gray-400 hover:text-indigo-600 rounded-lg">
                        <Edit2 size={16} />
                      </button>
                      <button className="p-2 hover:bg-red-50 text-gray-400 hover:text-red-600 rounded-lg">
                        <Trash2 size={16} />
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
}
'use client';

import React, { useState } from 'react';
import { Search, SlidersHorizontal, ChevronDown } from 'lucide-react';

const FilterBar = () => {
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <div className="max-w-4xl mx-auto mt-8 px-4 w-full">
      <div className="bg-white rounded-3xl shadow-xl shadow-indigo-100/50 border border-gray-100 p-2">
        {/* Search Bar Principal */}
        <div className="flex flex-col md:flex-row items-center gap-2">
          <div className="relative flex-1 w-full">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Pesquisar eventos, artistas ou locais..."
              className="w-full pl-12 pr-4 py-4 bg-transparent rounded-2xl focus:outline-none text-gray-700"
            />
          </div>

          <div className="flex w-full md:w-auto gap-2 p-1">
            <button 
              onClick={() => setShowAdvanced(!showAdvanced)}
              className={`flex items-center justify-center space-x-2 px-6 py-3 rounded-2xl font-medium transition-all ${
                showAdvanced ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <SlidersHorizontal size={18} />
              <span>Filtros</span>
            </button>
            
            <button className="flex-1 md:flex-none bg-indigo-600 text-white px-8 py-3 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 active:scale-95">
              Procurar
            </button>
          </div>
        </div>

        {/* Filtros Avançados (Dropdown Animado) */}
        {showAdvanced && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 border-t border-gray-50 mt-2 animate-in fade-in slide-in-from-top-2 duration-200">
            <FilterSelect label="Distrito" options={['Lisboa', 'Porto', 'Braga']} />
            <FilterSelect label="Concelho" options={['Lisboa', 'Sintra', 'Cascais']} />
            <FilterSelect label="Freguesia" options={['Arroios', 'Estrela', 'Belém']} />
            <FilterSelect label="Categoria" options={['Música', 'Teatro', 'Exposições']} />
          </div>
        )}
      </div>
    </div>
  );
};

// Sub-componente para os selects para manter o código limpo
const FilterSelect = ({ label, options }: { label: string; options: string[] }) => (
  <div className="flex flex-col space-y-1">
    <label className="text-xs font-bold text-gray-400 uppercase ml-1">{label}</label>
    <div className="relative">
      <select className="w-full bg-gray-50 border border-gray-100 text-gray-700 py-2.5 px-3 rounded-xl appearance-none focus:ring-2 focus:ring-indigo-500 outline-none cursor-pointer text-sm">
        <option value="">Todos</option>
        {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
      </select>
      <ChevronDown className="absolute right-3 top-3 text-gray-400 pointer-events-none" size={16} />
    </div>
  </div>
);

export default FilterBar;
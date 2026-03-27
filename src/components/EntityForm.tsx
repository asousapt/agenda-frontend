'use client';

import React, { useState, useEffect } from 'react';
import { Save, Building2, MapPin, ChevronDown, CheckCircle2, XCircle } from 'lucide-react';

interface EntityFormProps {
  initialData?: {
    name?: string;
    active?: boolean;
    morada?: string;
    distrito?: string;
    concelho?: string;
  };
  isEditing?: boolean;
}

export default function EntityForm({ initialData, isEditing = false }: EntityFormProps) {
  // Estados do Formulário
  const [isActive, setIsActive] = useState(initialData?.active ?? true);
  const [nome, setNome] = useState(initialData?.name ?? '');
  const [morada, setMorada] = useState(initialData?.morada ?? '');
  const [distrito, setDistrito] = useState(initialData?.distrito ?? '');
  const [concelho, setConcelho] = useState(initialData?.concelho ?? '');

  // Mock de dados para os seletores
  const distritos = ["Lisboa", "Porto", "Faro", "Setúbal", "Braga", "Aveiro"];
  const concelhos = ["Lisboa", "Sintra", "Cascais", "Loures", "Porto", "Gaia"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = { nome, isActive, morada, distrito, concelho };
    console.log("Submetendo Dados:", formData);
    // Aqui chamarias a tua API (fetch ou server action)
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 animate-in fade-in duration-500">
      
      {/* CARD 1: IDENTIFICAÇÃO E ESTADO */}
      <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
        <div className="flex items-center justify-between pb-2 border-b border-gray-50">
          <div className="flex items-center space-x-3">
            <Building2 className="text-indigo-500" size={20} />
            <h2 className="font-bold text-gray-800">Dados da Entidade</h2>
          </div>

          {/* Toggle Switch Estilizado */}
          <div className="flex items-center space-x-3">
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Estado:</span>
            <button 
              type="button"
              onClick={() => setIsActive(!isActive)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-all focus:outline-none ${isActive ? 'bg-indigo-600' : 'bg-slate-200'}`}
            >
              <span className={`${isActive ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow-sm`} />
            </button>
            <span className={`text-[11px] font-black ${isActive ? 'text-indigo-600' : 'text-slate-400'}`}>
              {isActive ? 'ATIVO' : 'INATIVO'}
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">
            Nome do Promotor
          </label>
          <input 
            type="text" 
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all font-medium text-gray-700 placeholder:text-gray-300"
            placeholder="Ex: Associação Cultural de Portugal"
            required
          />
        </div>
      </div>

      {/* CARD 2: LOCALIZAÇÃO */}
      <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
        <div className="flex items-center space-x-3 pb-2 border-b border-gray-50">
          <MapPin className="text-indigo-500" size={20} />
          <h2 className="font-bold text-gray-800">Localização Sede</h2>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">
              Morada Completa
            </label>
            <input 
              type="text" 
              value={morada}
              onChange={(e) => setMorada(e.target.value)}
              className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all font-medium text-gray-700"
              placeholder="Rua, número e código postal..."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Combobox Distrito */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">
                Distrito
              </label>
              <div className="relative">
                <select 
                  value={distrito}
                  onChange={(e) => setDistrito(e.target.value)}
                  className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all font-bold text-gray-700 appearance-none cursor-pointer"
                >
                  <option value="" disabled>Selecionar...</option>
                  {distritos.map(d => <option key={d} value={d}>{d}</option>)}
                </select>
                <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
              </div>
            </div>

            {/* Combobox Concelho */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">
                Concelho
              </label>
              <div className="relative">
                <select 
                  value={concelho}
                  onChange={(e) => setConcelho(e.target.value)}
                  className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all font-bold text-gray-700 appearance-none cursor-pointer"
                >
                  <option value="" disabled>Selecionar...</option>
                  {concelhos.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTÕES DE AÇÃO */}
      <div className="flex items-center justify-end space-x-4 pt-4 pb-12">
        <button 
          type="button"
          onClick={() => window.history.back()}
          className="px-8 py-4 rounded-2xl font-bold text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all active:scale-95"
        >
          Descartar
        </button>
        <button 
          type="submit"
          className="flex items-center space-x-3 bg-indigo-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 active:scale-95 group"
        >
          <Save size={20} className="group-hover:rotate-12 transition-transform" />
          <span>{isEditing ? 'Guardar Alterações' : 'Criar Promotor'}</span>
        </button>
      </div>
    </form>
  );
}
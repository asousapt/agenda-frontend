'use client';

import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Save, 
  Tag, 
  Info,
  // Importa individualmente os ícones que queres no picker
  Music,
  Theater,
  Camera,
  Palette,
  Mic2,
  Ticket,
  MapPin,
  Calendar,
  Gamepad2,
  Coffee,
  SportShoe
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Lista de ícones sugeridos para cultura
const SUGGESTED_ICONS = [
  { name: 'Music', icon: Music },
  { name: 'Sports', icon: SportShoe },
  { name: 'Theater', icon: Theater },
  { name: 'Camera', icon: Camera },
  { name: 'Palette', icon: Palette },
  { name: 'Mic2', icon: Mic2 },
  { name: 'Ticket', icon: Ticket },
  { name: 'MapPin', icon: MapPin },
  { name: 'Calendar', icon: Calendar },
];

const PRESET_COLORS = [
  '#4F46E5', '#EF4444', '#10B981', '#F59E0B', 
  '#3B82F6', '#8B5CF6', '#EC4899', '#06B6D4'
];

export default function NovaCategoriaPage() {
  const router = useRouter();
  const [nome, setNome] = useState('');
  const [slug, setSlug] = useState('');
  const [selectedIcon, setSelectedIcon] = useState('Tag');
  const [selectedColor, setSelectedColor] = useState('#4F46E5');

  // Gerador automático de Slug a partir do nome
  useEffect(() => {
    const generatedSlug = nome
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^\w ]+/g, '')
      .replace(/ +/g, '-');
    setSlug(generatedSlug);
  }, [nome]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ nome, slug, selectedIcon, selectedColor });
    // Aqui viria a chamada para a tua API/Base de Dados
    router.push('/admin/categories');
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Header com Botão Voltar */}
      <div className="flex items-center space-x-4 mb-8">
        <Link 
          href="/admin/categories" 
          className="p-2 hover:bg-white rounded-xl border border-transparent hover:border-gray-200 transition-all text-gray-500"
        >
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900">Nova Categoria</h1>
          <p className="text-sm text-gray-500">Configura a identidade visual da categoria.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-8">
          
          {/* Secção 1: Texto */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">Designação</label>
              <input 
                type="text"
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Ex: Música ao Vivo"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">Slug (Automático)</label>
              <input 
                type="text"
                value={slug}
                readOnly
                className="w-full px-4 py-3 bg-gray-100 border border-transparent rounded-2xl text-gray-500 font-mono text-sm outline-none cursor-not-allowed"
              />
            </div>
          </div>

          {/* Secção 2: Icon Picker */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-gray-700 ml-1">Selecione um Ícone</label>
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
              {SUGGESTED_ICONS.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setSelectedIcon(item.name)}
                  className={`p-4 rounded-2xl flex items-center justify-center transition-all ${
                    selectedIcon === item.name 
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100 scale-110' 
                      : 'bg-gray-50 text-gray-400 hover:bg-gray-100'
                  }`}
                >
                  <item.icon size={20} />
                </button>
              ))}
            </div>
          </div>

          {/* Secção 3: Color Picker */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-gray-700 ml-1">Cor da Categoria</label>
            <div className="flex flex-wrap gap-3 items-center">
              {PRESET_COLORS.map((color) => (
                <button
                  key={color}
                  type="button"
                  onClick={() => setSelectedColor(color)}
                  className={`w-10 h-10 rounded-full border-4 transition-all ${
                    selectedColor === color ? 'border-gray-200 scale-125' : 'border-transparent'
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
              <div className="h-8 w-[1px] bg-gray-100 mx-2" />
              <input 
                type="color" 
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="w-10 h-10 rounded-lg cursor-pointer bg-transparent border-none"
              />
            </div>
          </div>

          {/* Preview Card */}
          <div className="mt-8 p-6 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
            <p className="text-[10px] font-black uppercase text-gray-400 mb-4 tracking-widest flex items-center">
              <Info size={12} className="mr-1" /> Preview do Filtro
            </p>
            <div 
              className="inline-flex items-center space-x-3 px-6 py-3 rounded-2xl text-white shadow-lg"
              style={{ backgroundColor: selectedColor }}
            >
              <Tag size={18} />
              <span className="font-bold">{nome || 'Nome da Categoria'}</span>
            </div>
          </div>

        </div>

        {/* Botões de Ação */}
        <div className="flex items-center justify-end space-x-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-6 py-3 text-sm font-bold text-gray-500 hover:text-gray-700 transition-colors"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="flex items-center space-x-2 bg-indigo-600 text-white px-10 py-3 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 active:scale-95"
          >
            <Save size={20} />
            <span>Guardar Categoria</span>
          </button>
        </div>
      </form>
    </div>
  );
}
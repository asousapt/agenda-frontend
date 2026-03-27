'use client';

import React, { useState } from 'react';
import * as LucideIcons from 'lucide-react';
import { X, LogOut, Menu, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminSidebar({ menuItems, adminName = "ADMIN" }: { menuItems: any[], adminName?: string }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* 1. HEADER MOBILE (Apenas visível abaixo de 1024px) */}
      <header className="lg:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between z-[40]">
        <button onClick={() => setIsSidebarOpen(true)} className="p-2 text-gray-600 hover:bg-gray-100 rounded-xl">
          <Menu size={24} />
        </button>
        <span className="font-bold text-gray-900">{adminName} Panel</span>
        <div className="w-10" />
      </header>

      {/* 2. OVERLAY (Fundo Escuro) - Só aparece quando aberto no mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] lg:hidden animate-in fade-in duration-300"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* 3. SIDEBAR */}
      <aside className={`
        fixed inset-y-0 left-0 z-[110] w-72 bg-slate-900 text-white transition-transform duration-300 ease-in-out
        lg:relative lg:translate-x-0 lg:z-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full shadow-2xl lg:shadow-none">
          {/* Logo Section */}
          <div className="p-8 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-indigo-500 p-2 rounded-xl">
                <ShieldCheck className="text-white" size={24} />
              </div>
              <span className="font-black text-xl tracking-widest uppercase">{adminName}</span>
            </div>
            <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden p-2 text-slate-400 hover:text-white">
              <X size={24} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 space-y-2 mt-4 overflow-y-auto">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = (LucideIcons as any)[item.iconName] || LucideIcons.HelpCircle;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsSidebarOpen(false)}
                  className={`
                    flex items-center space-x-3 px-4 py-3.5 rounded-2xl transition-all group
                    ${isActive 
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/50' 
                      : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'}
                  `}
                >
                  <Icon size={20} className={isActive ? 'text-white' : 'text-slate-500 group-hover:text-indigo-400'} />
                  <span className="font-bold text-sm">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Logout Button */}
          <div className="p-6 border-t border-slate-800/50">
            <button className="flex items-center space-x-3 px-4 py-3.5 w-full text-slate-400 hover:text-red-400 hover:bg-red-400/10 rounded-2xl transition-all font-bold text-sm">
              <LogOut size={20} />
              <span>Sair do Painel</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Spacer para o Header Mobile não tapar o conteúdo no topo (Apenas Mobile) */}
      <div className="h-16 lg:hidden" />
    </>
  );
}
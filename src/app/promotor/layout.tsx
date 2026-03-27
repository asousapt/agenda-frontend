'use client';

import React, { useState } from 'react';
import {
    LayoutDashboard,
    CalendarPlus,
    Ticket,
    Users2,
    BarChart3,
    Menu,
    X,
    UserCircle,
    LogOut
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// 1. Definimos a interface para as Props do Layout
interface PromotorLayoutProps {
    children: React.ReactNode;
}

export default function PromotorLayout({ children }: PromotorLayoutProps) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const pathname = usePathname();

    const menuItems = [
        { name: 'Dashboard', icon: LayoutDashboard, href: '/promotor' },
        { name: 'Meus Eventos', icon: Ticket, href: '/promotor/events' },
        { name: 'Criar Evento', icon: CalendarPlus, href: '/promotor/events/new' },
        { name: 'Equipa', icon: Users2, href: '/promotor/team' },
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar Mobile Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-100 transition-transform duration-300 lg:relative lg:translate-x-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
                <div className="flex flex-col h-full p-6">
                    <div className="flex items-center space-x-3 mb-10">
                        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
                            P
                        </div>
                        <span className="font-bold text-xl text-gray-900 uppercase tracking-tight">Promotor</span>
                    </div>

                    <nav className="flex-1 space-y-1">
                        {menuItems.map((item) => {
                            const active = pathname === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`flex items-center space-x-3 px-4 py-3 rounded-2xl font-medium transition-all ${active
                                        ? 'bg-indigo-50 text-indigo-600'
                                        : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                                        }`}
                                >
                                    <item.icon size={20} />
                                    <span>{item.name}</span>
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="pt-6 border-t border-gray-50">
                        <div className="flex items-center space-x-3 px-4 py-2 text-gray-500">
                            <UserCircle size={24} />
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-bold text-gray-900 truncate">Empresa X</p>
                                <p className="text-xs truncate">promotor@exemplo.com</p>

                            </div>

                        </div>
                        <button
                            onClick={() => {
                                // Aqui adicionarás a lógica de logout (ex: apagar cookie/token)
                                console.log("Logging out...");
                            }}
                            className="flex w-full items-center space-x-3 px-4 py-3 rounded-2xl text-red-500 hover:bg-red-50 hover:text-red-600 transition-all font-semibold text-sm"
                        >
                            <LogOut size={18} />
                            <span>Sair da conta</span>
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Header Mobile */}
                <header className="lg:hidden bg-white border-b border-gray-100 p-4 flex items-center justify-between">
                    <button onClick={() => setIsSidebarOpen(true)} className="p-2 text-gray-600">
                        <Menu size={24} />
                    </button>
                    <span className="font-bold text-indigo-600">Agenda Cultural</span>
                    <div className="w-10" />
                </header>

                <main className="flex-1 overflow-y-auto">
                    {children}
                </main>
            </div>

        </div>
    );
}
'use client';

import React, { useState } from 'react';
import {
    Search,
    UserPlus,
    MoreHorizontal,
    Mail,
    UserMinus,
    ChevronLeft,
    ChevronRight,
    X
} from 'lucide-react';

interface User {
    id: string;
    name: string;
    email: string;
    role: 'Admin' | 'Promotor' | 'User';
    status: 'Ativo' | 'Suspenso';
    joinedAt: string;
}

export default function UsersAdminPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    
    // Estados para Paginação
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; 
    const totalUsers = 150; 
    const totalPages = Math.ceil(totalUsers / itemsPerPage);

    const users: User[] = [
        { id: '1', name: 'João Silva', email: 'geral@example.com', role: 'User', status: 'Ativo', joinedAt: '12/01/2026' },
        { id: '2', name: 'Maria Santos', email: 'geral@example.com', role: 'Promotor', status: 'Ativo', joinedAt: '05/02/2026' },
        { id: '3', name: 'Admin Principal', email: 'geral@example.com', role: 'Admin', status: 'Ativo', joinedAt: '01/01/2026' },
        { id: '4', name: 'Ricardo Sousa', email: 'geral@example.com', role: 'User', status: 'Suspenso', joinedAt: '20/02/2026' },
    ];

    return (
        <div className="p-6 space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Utilizadores</h1>
                    <p className="text-sm text-gray-500">Gere as contas e permissões da plataforma.</p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center justify-center space-x-2 bg-indigo-600 text-white px-5 py-3 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
                >
                    <UserPlus size={20} />
                    <span>Convidar Admin</span>
                </button>
            </div>

            {/* Barra de Pesquisa */}
            <div className="relative w-full">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                    type="text"
                    placeholder="Procurar por nome ou email..."
                    className="w-full pl-12 pr-4 py-4 bg-white border border-gray-100 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all shadow-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Tabela de Utilizadores */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-50/50 border-b border-gray-100 text-[10px] uppercase font-bold text-gray-400 tracking-widest">
                            <tr>
                                <th className="px-6 py-4">Utilizador</th>
                                <th className="px-6 py-4">Função</th>
                                <th className="px-6 py-4">Estado</th>
                                <th className="px-6 py-4">Registo</th>
                                <th className="px-6 py-4 text-right">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50 text-sm">
                            {users.map((user) => (
                                <tr key={user.id} className="hover:bg-gray-50/50 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-bold shrink-0">
                                                {user.name.charAt(0)}
                                            </div>
                                            <div className="min-w-0">
                                                <p className="font-bold text-gray-900 truncate">{user.name}</p>
                                                <p className="text-xs text-gray-400 truncate flex items-center">
                                                    <Mail size={12} className="mr-1" /> {user.email}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2.5 py-1 rounded-lg font-semibold text-[11px] ${
                                            user.role === 'Admin' ? 'bg-purple-50 text-purple-600' :
                                            user.role === 'Promotor' ? 'bg-blue-50 text-blue-600' :
                                            'bg-gray-100 text-gray-600'
                                        }`}>
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center space-x-2">
                                            <span className={`w-2 h-2 rounded-full ${user.status === 'Ativo' ? 'bg-green-500' : 'bg-red-500'}`} />
                                            <span className="font-medium text-gray-700">{user.status}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-500 tabular-nums">
                                        {user.joinedAt}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end space-x-1">
                                            <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all" title="Suspender">
                                                <UserMinus size={18} />
                                            </button>
                                            <button className="p-2 text-gray-400 hover:bg-gray-100 rounded-xl">
                                                <MoreHorizontal size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Paginação */}
                <div className="px-6 py-4 bg-gray-50/50 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-500 text-center sm:text-left">
                        A mostrar <span className="font-semibold text-gray-900">1</span> a <span className="font-semibold text-gray-900">10</span> de <span className="font-semibold text-gray-900">{totalUsers}</span> utilizadores
                    </p>
                    <div className="flex items-center space-x-2">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="p-2 rounded-xl border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        >
                            <ChevronLeft size={18} />
                        </button>
                        <div className="flex items-center space-x-1">
                            {[1, 2, 3].map((page) => (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className={`w-10 h-10 rounded-xl text-sm font-bold transition-all ${
                                        currentPage === page ? 'bg-indigo-600 text-white' : 'text-gray-500 hover:bg-gray-100'
                                    }`}
                                >
                                    {page}
                                </button>
                            ))}
                            <span className="px-2 text-gray-400">...</span>
                            <button className="w-10 h-10 rounded-xl text-sm font-bold text-gray-500 hover:bg-gray-100">
                                {totalPages}
                            </button>
                        </div>
                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="p-2 rounded-xl border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal de Convite */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8 relative animate-in fade-in zoom-in duration-200">
                        <button 
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-6 right-6 text-gray-400 hover:text-gray-600"
                        >
                            <X size={20} />
                        </button>
                        
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Convidar Administrador</h2>
                        <p className="text-gray-500 text-sm mb-6">
                            Envia um convite por email para um novo membro da equipa.
                        </p>

                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-400 uppercase ml-1">Email Profissional</label>
                                <input
                                    type="email"
                                    placeholder="geral@example.com"
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-400 uppercase ml-1">Nível de Acesso</label>
                                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none appearance-none cursor-pointer">
                                    <option value="moderator">Moderador (Aprova Eventos)</option>
                                    <option value="editor">Editor (Gere Categorias)</option>
                                    <option value="superadmin">Super Admin (Controlo Total)</option>
                                </select>
                            </div>
                            <div className="flex items-center gap-3 mt-8">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="flex-1 px-4 py-3 text-sm font-bold text-gray-500 hover:text-gray-700 transition-colors"
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 bg-indigo-600 text-white px-4 py-3 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
                                >
                                    Enviar Convite
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
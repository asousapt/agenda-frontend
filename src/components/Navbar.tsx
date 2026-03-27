'use client';

import React, { useState } from 'react';
import { Menu, X, User, LogIn } from 'lucide-react';
import Link from 'next/link';

// Definimos o tipo para os links de navegação
interface NavLink {
  name: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const navLinks: NavLink[] = [
    { name: 'Eventos', href: '/eventos' },
    { name: 'Categorias', href: '/categories' },
    { name: 'Locais', href: '/locais' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Promotor Admin', href: '/promotor' },
    { name: 'Super Admin', href: '/admin/dashboard' },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0 cursor-pointer">
            <div className="h-9 w-9 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-200">
              AC
            </div>
            <span className="ml-3 font-bold text-xl tracking-tight text-gray-900 hidden sm:block">
              Agenda Cultural
            </span>
          </Link>

          {/* Nav Desktop */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-gray-500 hover:text-indigo-600 font-medium transition-all duration-200 text-sm uppercase tracking-wide"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Auth & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <button className="h-10 w-10 rounded-full border-2 border-gray-100 flex items-center justify-center hover:border-indigo-300 transition-all">
                <User size={20} className="text-gray-600" />
              </button>
            ) : (
              <Link 
                href="/login"
                className="flex items-center space-x-2 bg-indigo-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-indigo-700 transition-all text-sm shadow-md shadow-indigo-100"
              >
                <LogIn size={16} />
                <span className="hidden sm:inline">Entrar</span>
              </Link>
            )}

            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="md:hidden text-gray-500 p-2 hover:bg-gray-50 rounded-lg transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-xl text-base font-semibold text-gray-600 hover:bg-indigo-50 hover:text-indigo-600"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
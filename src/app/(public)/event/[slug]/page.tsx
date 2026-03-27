'use client';

import React from 'react';
import { 
  CalendarDays, 
  MapPin, 
  Euro, 
  Tag,  
  Share2, 
  ArrowLeft,
  Users2
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Mock de dados para um evento cultural
// precisa de ser retornado pela base de dados
const eventData = {
  title: 'Carminho - Digressão Portuguesa 2026',
  category: 'Música',
  categoryColor: '#EF4444', // Vermelho para música
  coverImage: 'http://localhost:3000/test.png', // Imagem genérica de concerto
  date: 'Sábado, 16 de Maio de 2026',
  time: '21:30',
  venue: 'Teatro das Figuras',
  address: 'Rua de Portugal, 8000 Faro',
  price: '25,00 € a 45,00 €',
  description: `Carminho regressa aos palcos nacionais para apresentar o seu mais recente álbum de estúdio. Com uma voz inconfundível e um percurso que já a levou aos quatro cantos do mundo, a fadista promete uma noite inesquecível, onde o fado tradicional se cruza com sonoridades contemporâneas.\n\nNesta digressão, a artista é acompanhada pela sua banda habitual, garantindo a cumplicidade e a intensidade emocional que caracterizam os seus espetáculos.\n\nA não perder, no Teatro das Figuras, em Faro.`,
  organizer: 'Cultura Portugal',
  ageRating: 'M/6',
};

export default function EventoPage() {
  
  // Função simulada de partilha
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: eventData.title,
        text: `Vê este evento na Agenda Cultural: ${eventData.title}`,
        url: window.location.href,
      }).catch(console.error);
    } else {
      // Fallback para quando o Web Share API não está disponível
      alert('Link copiado para a área de transferência!');
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      
      {/* 1. Imagem de Capa e Botão Voltar */}
      <div className="relative w-full h-[40vh] md:h-[60vh] bg-gray-900 overflow-hidden">
        <Image 
          src={eventData.coverImage} 
          alt={eventData.title}
          fill
          className="object-cover animate-in fade-in duration-1000"
          priority
        />
        {/* Overlay para contraste */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
        
        {/* Botão Voltar (Estilo Glassmorphism) */}
        <div className="max-w-7xl mx-auto px-6 pt-6 relative z-10">
          <Link 
            href="/eventos" 
            className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-full backdrop-blur-md bg-white/20 text-white hover:bg-white/30 transition-all font-medium text-sm"
          >
            <ArrowLeft size={16} />
            <span>Ver todos os eventos</span>
          </Link>
        </div>
      </div>

      {/* 2. Conteúdo Principal (Centralizado e com margem negativa) */}
      <main className="max-w-7xl mx-auto px-6 -mt-16 md:-mt-24 relative z-20 space-y-10">
        
        {/* Bloco de Título e Categoria */}
        <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-xl shadow-gray-900/5 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <span 
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-white text-xs font-bold shadow-sm"
              style={{ backgroundColor: eventData.categoryColor }}
            >
              <Tag size={12} />
              <span>{eventData.category}</span>
            </span>
            <span className="text-sm font-semibold text-red-600 bg-red-50 px-2 py-0.5 rounded-md">
              {eventData.ageRating}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-950 leading-tight">
            {eventData.title}
          </h1>
        </div>

        {/* 3. Grid de Info Rápida vs Descrição */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-10">
          
          {/* Esquerda: Informações Técnicas (Cards) */}
          <div className="space-y-6 order-2 md:order-1">
            <h2 className="text-xl font-bold text-gray-900 ml-1">Detalhes do Evento</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Quando */}
              <InfoCard 
                icon={CalendarDays} 
                label="Quando" 
                value={eventData.date} 
                subValue={`Às ${eventData.time}`}
              />
              {/* Onde */}
              <InfoCard 
                icon={MapPin} 
                label="Onde" 
                value={eventData.venue} 
                subValue={eventData.address}
              />
              {/* Quanto */}
              <InfoCard 
                icon={Euro} 
                label="Preço" 
                value={eventData.price} 
                subValue="Bilhetes na bilheteira do local"
              />
              {/* Quem Organiza */}
              <InfoCard 
                icon={Users2} 
                label="Organização" 
                value={eventData.organizer} 
              />
            </div>
          </div>

          {/* Direita: Descrição e Botão Partilhar */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg space-y-6 order-1 md:order-2 h-fit md:sticky md:top-6">
            <h2 className="text-xl font-bold text-gray-900">Sobre</h2>
            
            <div className="text-gray-600 text-sm leading-relaxed space-y-4 whitespace-pre-line">
              {eventData.description}
            </div>

            {/* Linha Divisória */}
            <div className="h-px bg-gray-100 w-full" />

            {/* BOTÃO DE PARTILHA */}
            <button 
              onClick={handleShare}
              className="w-full flex items-center justify-center space-x-3 px-6 py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-gray-700 transition-all active:scale-95 shadow-lg shadow-gray-200"
            >
              <Share2 size={18} />
              <span>Partilhar Evento</span>
            </button>
          </div>
        </div>

      </main>
    </div>
  );
}

// Componente auxiliar para os cards de informação
const InfoCard = ({ icon: Icon, label, value, subValue }: { icon: any; label: string; value: string; subValue?: string }) => (
  <div className="bg-white p-6 rounded-2xl border border-gray-100 flex items-start space-x-4 shadow-sm group hover:border-indigo-100 transition-colors">
    <div className="p-3.5 rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors shrink-0 mt-1">
      <Icon size={20} strokeWidth={2.5} />
    </div>
    <div className="space-y-1">
      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">{label}</p>
      <p className="text-base font-bold text-gray-950 leading-tight">{value}</p>
      {subValue && <p className="text-xs text-gray-500 font-medium">{subValue}</p>}
    </div>
  </div>
);
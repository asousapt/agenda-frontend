'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarDays, MapPin } from 'lucide-react';

interface EventCardProps {
  event: {
    title: string;
    date: string;
    location: string;
    imageUrl: string;
    slug?: string;
  };
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <Link 
      href={`/event/${event.slug}`} 
      className="group block card-bento p-5 h-full transition-all hover:shadow-brand hover:-translate-y-1 hover:border-brand/20 animate-in fade-in duration-500"
    >
      <div className="flex flex-col h-full">
        {/* Imagem */}
        <div className="relative w-full h-44 rounded-2xl overflow-hidden bg-slate-100 mb-5 shrink-0">
          <Image 
            src={event.imageUrl} 
            alt={event.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Conteúdo */}
        <div className="flex-1 flex flex-col min-w-0">
          <h3 className="text-lg font-black text-slate-900 leading-tight mb-3 line-clamp-2 group-hover:text-brand transition-colors">
            {event.title}
          </h3>
          
          <div className="mt-auto space-y-2">
            <div className="flex items-center text-sm font-bold text-slate-600 gap-2">
              <CalendarDays size={16} className="text-slate-400" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center text-xs font-medium text-slate-400 gap-2 truncate">
              <MapPin size={14} className="shrink-0" />
              <span className="truncate">{event.location}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
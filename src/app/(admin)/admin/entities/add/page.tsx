import EntityForm from '@/components/EntityForm';
import PromoterForm from '@/components/EntityForm';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function AddEntityPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
        <div className="flex items-center space-x-4 mb-8">
        <Link 
          href="/admin/entities" 
          className="p-2 hover:bg-white rounded-xl border border-transparent hover:border-gray-200 transition-all text-gray-500"
        >
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900">Criar Promotor</h1>
        </div>
      </div>
      <EntityForm />
    </div>
  );
}
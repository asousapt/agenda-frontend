'use client';

import PromoterForm from '@/components/EntityForm';
import { useParams } from 'next/navigation';

export default function EditEntityPage() {
  const params = useParams();
  const id = params.id;

  // Num cenário real, farias um fetch aqui usando o ID
  const mockData = {
    name: "Teatro Nacional D. Maria II",
    active: true,
    morada: "Praça Dom Pedro IV",
    distrito: "Lisboa",
    concelho: "Lisboa"
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-black text-gray-900">Editar Promotor</h1>
      <p className="text-sm text-gray-500 font-medium tracking-tight -mt-4" >
        ID de Registo: <span className="font-mono text-indigo-600">{id}</span>
      </p>
      
      <PromoterForm initialData={mockData} isEditing={true} />
    </div>
  );
}
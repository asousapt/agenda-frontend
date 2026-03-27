import EventCard from '@/components/EventCard';
import FilterBar from '@/components/FilterBar';

const events = [
  {
    title: 'Festival de Jazz de Verão',
    date: '15 Julho, 21:30',
    location: 'Jardins da Fundação, Lisboa',
    imageUrl: 'http://localhost:3000/test.png',
    slug: 'jazz-verao-2026'
  },
  {
    title: 'Exposição: Arte Urbana Contemporânea',
    date: '02 Agosto, 10:00',
    location: 'Galeria Municipal, Porto',
    imageUrl: 'http://localhost:3000/test.png',
    slug: 'arte-urbana-2026'
  },
  {
    title: 'Teatro: À Espera de Godot',
    date: '10 Setembro, 19:00',
    location: 'Teatro Nacional, Lisboa',
    imageUrl: 'http://localhost:3000/test.png',
    slug: 'espera-godot'
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">

      <main className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Descobre a Cultura em <span className="text-indigo-600">Todo o Lado.</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-2 leading-relaxed">
            Explora os melhores eventos, concertos e exposições na tua cidade.
            Tudo o que precisas numa agenda simples e intuitiva.
          </p>

          {/* Filtro  */}
          <FilterBar />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {events.map((event) => (
              <EventCard key={event.slug} event={event} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
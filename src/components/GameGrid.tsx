interface Game {
  title: string;
  image: string;
  rating: number;
  description: string;
}

const games: Game[] = [
  {
    title: "Sprunki Retake",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=300",
    rating: 4.5,
    description: "Experience the new retake!"
  },
  {
    title: "Incredibox Mustard",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=300",
    rating: 4.5,
    description: "Create mustard beats!"
  },
  {
    title: "Sprunki Incredibox",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=300",
    rating: 4.7,
    description: "Create spunky beats!"
  },
  {
    title: "Sprunki Mustard",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=300",
    rating: 4.6,
    description: "Mustard-themed fun!"
  }
];

export default function GameGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 py-12">
      {games.map((game) => (
        <div key={game.title} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform">
          <img src={game.image} alt={game.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{game.title}</h3>
            <div className="flex items-center mb-2">
              <span className="text-yellow-400">★</span>
              <span className="ml-1 text-gray-600">{game.rating}</span>
            </div>
            <p className="text-gray-600">{game.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
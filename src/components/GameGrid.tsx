interface Game {
  title: string;
  image: string;
  rating: number;
  description: string;
}

const games: Game[] = [
  {
    title: "Sprunki Retake",
    image: "/images/games/1.png",
    rating: 4.5,
    description: "Experience the new retake!"
  },
  {
    title: "Incredibox Mustard",
    image: "/images/games/2.jpg",
    rating: 4.5,
    description: "Create mustard beats!"
  },
  {
    title: "Sprunki Incredibox",
    image: "/images/games/3.jpg",
    rating: 4.7,
    description: "Create spunky beats!"
  },
  {
    title: "Sprunki Mustard",
    image: "/images/games/4.webp",
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
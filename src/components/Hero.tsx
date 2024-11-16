import { Play } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-red-900 to-red-800 text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Free Sprunky Online, Play Sprunki Incredibox Game
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Welcome to Sprunki Incredibox Play Sprunky Music Game
        </p>
        <p className="text-lg md:text-xl mb-12 text-gray-300">
          Create, mix, and groove with the spunkiest beats around!
        </p>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-red-900 font-bold py-4 px-8 rounded-full text-xl flex items-center space-x-2 mx-auto transition-all transform hover:scale-105">
          <Play className="h-6 w-6" />
          <span>Play Sprunki Now</span>
        </button>
      </div>
    </div>
  );
}
import GameArea from '../components/GameArea';
import GameGrid from '../components/GameGrid';

export default function PlayPage() {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-red-900 mb-8">
          Play Sprunki Incredibox Online
        </h1>
        <p className="text-lg text-center text-gray-600 mb-6">
          Experience Sprunki Incredibox directly in your browser! Create amazing beats and discover new musical combinations.
        </p>
        <p className="text-md text-center text-gray-500 mb-12">
          Sprunki Incredibox brings you the most intuitive and fun music creation experience online.
        </p>
        <GameArea />
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-red-900 mb-8">
            Popular Sprunki Incredibox Game Modes
          </h2>
          <GameGrid />
        </div>
      </div>
    </div>
  );
}

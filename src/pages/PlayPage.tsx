import GameArea from '../components/GameArea';
import GameGrid from '../components/GameGrid';

export default function PlayPage() {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-red-900 mb-8">
          Play Sprunki Incredibox Online
        </h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          Create amazing beats and music right in your browser! Mix different sounds and discover new combinations.
        </p>
        <GameArea />
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-red-900 mb-8">
            Popular Game Modes
          </h2>
          <GameGrid />
        </div>
      </div>
    </div>
  );
}

import { Users, Music, Star } from 'lucide-react';

const characters = [
  {
    name: "The Beatboxer",
    description: "Master of rhythm and beats",
    abilities: ["Complex rhythms", "Bass beats", "Vocal percussion"]
  },
  {
    name: "The Melodist",
    description: "Creates beautiful melodies",
    abilities: ["Harmonies", "Vocal runs", "Melodic patterns"]
  },
  {
    name: "The Effects Master",
    description: "Adds special sound effects",
    abilities: ["Sound effects", "Transitions", "Ambient sounds"]
  },
  {
    name: "The Bass King",
    description: "Provides the foundation",
    abilities: ["Deep bass", "Grooves", "Rhythmic patterns"]
  }
];

export default function CharactersPage() {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-red-900 mb-8">
          Sprunki Incredibox Characters
        </h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          Meet the amazing characters that make Sprunki Incredibox unique. Each character brings their own style and sound!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {characters.map((character) => (
            <div key={character.name} className="bg-white p-6 rounded-xl shadow-lg">
              <Users className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{character.name}</h3>
              <p className="text-gray-600 mb-4">{character.description}</p>
              <div className="space-y-2">
                {character.abilities.map((ability) => (
                  <div key={ability} className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm text-gray-600">{ability}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-red-50 p-8 rounded-xl text-center">
          <Music className="h-16 w-16 text-red-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-red-900 mb-4">
            Mix and Match
          </h2>
          <p className="text-gray-700">
            Combine different characters to create unique sounds and beats. 
            The possibilities are endless with Sprunki Incredibox!
          </p>
        </div>
      </div>
    </div>
  );
}

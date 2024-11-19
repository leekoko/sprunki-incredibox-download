import { useState } from 'react';
import { Save, Share2, Play, Pause } from 'lucide-react';

interface Track {
  id: number;
  name: string;
  description: string;
  youtubeId: string;
}

const tracks: Track[] = [
  {
    id: 1,
    name: "Beats & Drums",
    description: "Add rhythm and groove",
    youtubeId: "wCUAeQxzzhE"
  },
  {
    id: 2,
    name: "Melodies",
    description: "Layer in sweet tunes",
    youtubeId: "jrv4zdiTXo0"
  },
  {
    id: 3,
    name: "Effects",
    description: "Spice it up with FX",
    youtubeId: "bKitktXKELo"
  },
  {
    id: 4,
    name: "Vocals",
    description: "Add the human touch",
    youtubeId: "GzAsh5VWQR4"
  }
];

export default function GameArea() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  return (
    <section className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-gray-800 rounded-xl p-8">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-4">
              <h2 className="text-2xl font-bold text-white">Sprunki Studio</h2>
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full"
              >
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </button>
            </div>
            <div className="flex space-x-4">
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                <Save className="h-5 w-5" />
                <span>Save Beat</span>
              </button>
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                <Share2 className="h-5 w-5" />
                <span>Share</span>
              </button>
            </div>
          </div>
          
          <div className="aspect-video bg-gray-700 rounded-lg mb-6">
            <iframe
              src="https://s.sprunkiincredibox.com/game/sprunki/index.html"
              className="w-full h-full rounded-lg"
              allow="autoplay"
              frameBorder="0"
              title="Sprunki Incredibox Game"
              referrerPolicy="no-referrer"
            ></iframe>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {tracks.map((track) => (
              <div key={track.id} className="bg-gray-700 p-4 rounded-lg transform hover:scale-105 transition-transform">
                <div className="relative group aspect-video mb-3">
                  {activeVideo === track.id ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${track.youtubeId}?autoplay=1`}
                      title={track.name}
                      className="w-full h-full rounded-md"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    ></iframe>
                  ) : (
                    <>
                      <div className="w-full h-full bg-gray-600 rounded-md">
                        <img 
                          src={`https://img.youtube.com/vi/${track.youtubeId}/hqdefault.jpg`}
                          alt={track.name}
                          className="w-full h-full object-cover rounded-md"
                          loading="lazy"
                        />
                      </div>
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity rounded-md flex items-center justify-center">
                        <button 
                          onClick={() => setActiveVideo(track.id)}
                          className="opacity-0 group-hover:opacity-100 transition-opacity bg-red-600 hover:bg-red-700 text-white p-2 rounded-full"
                          aria-label={`Play ${track.name}`}
                        >
                          <Play className="h-5 w-5" />
                        </button>
                      </div>
                    </>
                  )}
                </div>
                <h3 className="text-white font-bold mb-1">{track.name}</h3>
                <p className="text-gray-300 text-sm">{track.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
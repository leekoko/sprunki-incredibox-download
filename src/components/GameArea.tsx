import { useState } from 'react';
import { Save, Share2 } from 'lucide-react';

export default function GameArea() {
  return (
    <section className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-gray-800 rounded-xl p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Sprunki Studio</h2>
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
            ></iframe>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((track) => (
              <div key={track} className="bg-gray-700 p-4 rounded-lg">
                <div className="h-24 bg-gray-600 rounded-md mb-2"></div>
                <p className="text-white text-center">Track {track}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
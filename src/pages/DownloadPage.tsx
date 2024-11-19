import Download from '../components/Download';
import Features from '../components/Features';

export default function DownloadPage() {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-red-900 mb-8">
          Download Sprunki Incredibox
        </h1>
        <p className="text-lg text-center text-gray-600 mb-6">
          Get ready to create amazing music with Sprunki Incredibox! Download Sprunki Incredibox for your preferred platform.
        </p>
        <p className="text-md text-center text-gray-500 mb-12">
          Join millions of players worldwide enjoying Sprunki Incredibox - the ultimate music creation game.
        </p>
        
        <Download />
        
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-red-900 mb-8">
            Why Choose Sprunki Incredibox?
          </h2>
          <Features />
        </div>
      </div>
    </div>
  );
}

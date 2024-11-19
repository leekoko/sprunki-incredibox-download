import Download from '../components/Download';
import Features from '../components/Features';

export default function DownloadPage() {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-red-900 mb-8">
          Download Sprunki Incredibox
        </h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          Get ready to create amazing music! Download Sprunki Incredibox for your preferred platform.
        </p>
        
        <Download />
        
        <div className="mt-16">
          <Features />
        </div>
      </div>
    </div>
  );
}

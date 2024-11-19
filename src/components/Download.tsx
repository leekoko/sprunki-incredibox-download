import { useState } from 'react';
import { 
  Apple, 
  Smartphone, 
  Monitor, 
  Download, 
  Shield, 
  Laptop,
  X 
} from 'lucide-react';

interface Platform {
  name: string;
  icon: any;
  version: string;
  size: string;
  requirements: string;
  deviceIcon: any;
  link: string;
}

const platforms: Platform[] = [
  {
    name: 'iOS',
    icon: Apple,
    version: '2.1.0',
    size: '45 MB',
    requirements: 'iOS 12.0 or later',
    deviceIcon: Smartphone,
    link: 'https://apps.apple.com/cn/app/sprunki-master-incredibox-game/id6670599028'
  },
  {
    name: 'Android',
    icon: Smartphone,
    version: '2.1.0',
    size: '42 MB',
    requirements: 'Android 8.0 or later',
    deviceIcon: Smartphone,
    link: 'https://play.google.com/store/apps/details?id=com.slngames.sprunki&hl=ja'
  },
  {
    name: 'Windows',
    icon: Monitor,
    version: '2.1.0',
    size: '85 MB',
    requirements: 'Windows 10 or later',
    deviceIcon: Laptop,
    link: 'https://play.google.com/store/apps/details?id=com.CouterTrikeStd.fnf.metabongocatdoormod&hl=ja'
  }
];

interface DownloadModalProps {
  platform: Platform | null;
  onClose: () => void;
}

function DownloadModal({ platform, onClose }: DownloadModalProps) {
  if (!platform) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mx-auto mb-6">
          <platform.icon className="w-8 h-8 text-red-600" />
        </div>

        <h3 className="text-2xl font-bold text-center mb-6">
          Download for {platform.name}
        </h3>

        <div className="space-y-4 mb-6">
          <div className="flex items-center justify-between text-gray-600">
            <span className="flex items-center">
              <Download className="w-5 h-5 mr-2" />
              Version
            </span>
            <span>{platform.version}</span>
          </div>

          <div className="flex items-center justify-between text-gray-600">
            <span className="flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              Download Size
            </span>
            <span>{platform.size}</span>
          </div>

          <div className="flex items-center justify-between text-gray-600">
            <span className="flex items-center">
              <platform.deviceIcon className="w-5 h-5 mr-2" />
              System Requirements
            </span>
            <span>{platform.requirements}</span>
          </div>
        </div>

        <div className="text-gray-600 text-sm mb-6">
          By downloading, you agree to our Terms of Service and Privacy Policy.
        </div>

        <a
          href={platform.link}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="block w-full bg-red-600 hover:bg-red-700 text-white text-center py-3 rounded-lg font-semibold transition-colors"
          onClick={onClose}
        >
          Download Now
        </a>
      </div>
    </div>
  );
}

export default function DownloadSection() {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-red-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-red-900 mb-4">
            Get Your Sprunki Incredibox Download
          </h2>
          <p className="text-xl text-gray-600">
            Choose Your Platform for Sprunki Incredibox Download
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {platforms.map((platform) => (
            <div 
              key={platform.name}
              className="bg-white rounded-xl shadow-xl p-6 transform hover:scale-105 transition-all"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mx-auto mb-6">
                <platform.icon className="w-8 h-8 text-red-600" />
              </div>

              <h3 className="text-2xl font-bold text-center mb-4">
                Sprunki Incredibox Download for {platform.name}
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between text-gray-600">
                  <span className="flex items-center">
                    <Download className="w-5 h-5 mr-2" />
                    Version
                  </span>
                  <span>{platform.version}</span>
                </div>

                <div className="flex items-center justify-between text-gray-600">
                  <span className="flex items-center">
                    <Shield className="w-5 h-5 mr-2" />
                    Download Size
                  </span>
                  <span>{platform.size}</span>
                </div>

                <div className="flex items-center justify-between text-gray-600">
                  <span className="flex items-center">
                    <platform.deviceIcon className="w-5 h-5 mr-2" />
                    System Requirements
                  </span>
                  <span>{platform.requirements}</span>
                </div>
              </div>

              <button
                onClick={() => setSelectedPlatform(platform)}
                className="block w-full bg-red-600 hover:bg-red-700 text-white text-center py-3 rounded-lg font-semibold transition-colors"
              >
                Download Sprunki Incredibox for {platform.name}
              </button>
            </div>
          ))}
        </div>
      </div>

      <DownloadModal 
        platform={selectedPlatform} 
        onClose={() => setSelectedPlatform(null)} 
      />
    </section>
  );
}
import { 
  Apple, 
  Smartphone, 
  Monitor, 
  Download, 
  Shield, 
  Laptop 
} from 'lucide-react';

const platforms = [
  {
    name: 'iOS',
    icon: Apple,
    version: '2.1.0',
    size: '45 MB',
    requirements: 'iOS 12.0 or later',
    deviceIcon: Smartphone,
    link: '#'
  },
  {
    name: 'Android',
    icon: Smartphone,
    version: '2.1.0',
    size: '42 MB',
    requirements: 'Android 8.0 or later',
    deviceIcon: Smartphone,
    link: '#'
  },
  {
    name: 'Windows',
    icon: Monitor,
    version: '2.1.0',
    size: '85 MB',
    requirements: 'Windows 10 or later',
    deviceIcon: Laptop,
    link: '#'
  }
];

export default function DownloadSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-red-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-red-900 mb-4">
            Download Sprunki
          </h2>
          <p className="text-xl text-gray-600">
            Play Sprunki on your favorite device
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
                {platform.name} Version
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
                    Size
                  </span>
                  <span>{platform.size}</span>
                </div>

                <div className="flex items-center justify-between text-gray-600">
                  <span className="flex items-center">
                    <platform.deviceIcon className="w-5 h-5 mr-2" />
                    Requires
                  </span>
                  <span>{platform.requirements}</span>
                </div>
              </div>

              <a
                href={platform.link}
                className="block w-full bg-red-600 hover:bg-red-700 text-white text-center py-3 rounded-lg font-semibold transition-colors"
              >
                Download for {platform.name}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            All versions include:
          </p>
          <div className="flex justify-center space-x-8">
            <span className="text-gray-700">✓ No Ads</span>
            <span className="text-gray-700">✓ Offline Mode</span>
            <span className="text-gray-700">✓ Free Updates</span>
          </div>
        </div>
      </div>
    </section>
  );
}
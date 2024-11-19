import { Wand2, Download, Share2 } from 'lucide-react';

const modFeatures = [
  {
    icon: Wand2,
    title: "Create Sprunki Incredibox Mods",
    description: "Design your own sounds, visuals, and characters for Sprunki Incredibox"
  },
  {
    icon: Download,
    title: "Download Mods",
    description: "Explore and download community-created mods to enhance your Sprunki Incredibox experience"
  },
  {
    icon: Share2,
    title: "Share with Community",
    description: "Share your Sprunki Incredibox mods with players worldwide and get feedback"
  }
];

export default function ModPage() {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-red-900 mb-8">
          Sprunki Incredibox Mods
        </h1>
        <p className="text-lg text-center text-gray-600 mb-6">
          Customize and enhance your Sprunki Incredibox experience with mods. Create, share, and discover new content!
        </p>
        <p className="text-md text-center text-gray-500 mb-12">
          Join the vibrant Sprunki Incredibox modding community and unleash your creativity.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {modFeatures.map((feature) => (
            <div key={feature.title} className="bg-white p-6 rounded-xl shadow-lg">
              <feature.icon className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-red-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-center text-red-900 mb-8">
            Getting Started with Sprunki Incredibox Mods
          </h2>
          <div className="space-y-4">
            <p className="text-gray-700">1. Download the Sprunki Incredibox Mod Creation Tool</p>
            <p className="text-gray-700">2. Learn the basics through our tutorials</p>
            <p className="text-gray-700">3. Create your first mod</p>
            <p className="text-gray-700">4. Test and share with the community</p>
          </div>
        </div>
      </div>
    </div>
  );
}

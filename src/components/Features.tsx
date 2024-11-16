import { Music2, Share, Download, Star } from 'lucide-react';

const features = [
  {
    icon: Music2,
    title: "Create Your Beats",
    description: "Mix and match different sounds to create your unique sprunky beats"
  },
  {
    icon: Share,
    title: "Share with Friends",
    description: "Export and share your musical creations with the Sprunki community"
  },
  {
    icon: Download,
    title: "Download & Play Offline",
    description: "Take your favorite beats with you anywhere, anytime"
  },
  {
    icon: Star,
    title: "Join Competitions",
    description: "Participate in beat-making contests and win awesome prizes"
  }
];

export default function Features() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-red-900 mb-12">
          Why Choose Sprunki?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white p-6 rounded-xl shadow-lg">
              <feature.icon className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
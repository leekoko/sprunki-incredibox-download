import { Link } from 'react-router-dom';
import Navbar from '../../components/en/Navbar';
import Footer from '../../components/en/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-800 to-red-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Create Music & Beats Online</h1>
              <p className="text-xl">Download Sprunki Incredibox now and start your musical journey!</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Why Get Sprunki Incredibox Download?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">Create with Sprunki</h3>
                <p>Mix and create unique musical masterpieces</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">Share Your Creations</h3>
                <p>Share your beats with our global community</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">Instant Download Access</h3>
                <p>Create music anywhere, anytime - works offline</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">Premium Features</h3>
                <p>Unlock exclusive content and join competitions</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GameGrid from './components/GameGrid';
import GameArea from './components/GameArea';
import Features from './components/Features';
import DownloadSection from './components/Download';
import ArticleSection from './components/ArticleSection';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Hero />
        <main>
          <GameArea />
          <section className="py-16 bg-white">
            <h2 className="text-4xl font-bold text-center text-red-900 mb-12">
              Explore More Musical Adventures
            </h2>
            <GameGrid />
          </section>
          <Features />
          <DownloadSection />
          <ArticleSection />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
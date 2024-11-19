import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GameGrid from './components/GameGrid';
import GameArea from './components/GameArea';
import Features from './components/Features';
import Download from './components/Download';
import ArticleSection from './components/ArticleSection';
import Footer from './components/Footer';
import PlayPage from './pages/PlayPage';
import ModPage from './pages/ModPage';
import DownloadPage from './pages/DownloadPage';
import CharactersPage from './pages/CharactersPage';
import AnalyticsProvider from './components/AnalyticsProvider';

function HomePage() {
  return (
    <>
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
        <Download />
        <ArticleSection />
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <AnalyticsProvider>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/play" element={<PlayPage />} />
            <Route path="/mod" element={<ModPage />} />
            <Route path="/download" element={<DownloadPage />} />
            <Route path="/characters" element={<CharactersPage />} />
          </Routes>
          <Footer />
        </div>
      </AnalyticsProvider>
    </Router>
  );
}

export default App;
import { Link } from 'react-router-dom';
import { Music, Github, Twitter, Youtube, Facebook } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English', path: '' },
  { code: 'ko', name: '한국어', path: '/ko' },
  { code: 'ru', name: 'Русский', path: '/ru' },
  { code: 'pt', name: 'Português', path: '/pt' }
];

export default function Footer() {
  return (
    <footer className="bg-red-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Music className="h-8 w-8" />
              <span className="text-xl font-bold">Sprunki</span>
            </Link>
            <p className="text-gray-300">
              Create, mix, and share your sprunky beats with the world!
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/play" className="hover:text-yellow-300">Play Now</Link></li>
              <li><Link to="/download" className="hover:text-yellow-300">Download</Link></li>
              <li><Link to="/characters" className="hover:text-yellow-300">Characters</Link></li>
              <li><Link to="/mod" className="hover:text-yellow-300">Mod Studio</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="hover:text-yellow-300">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-300">Contact Us</Link></li>
              <li><Link to="/privacy" className="hover:text-yellow-300">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-yellow-300">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Language</h3>
            <ul className="space-y-2">
              {languages.map((lang) => (
                <li key={lang.code}>
                  <a
                    href={`${lang.path}`}
                    className="hover:text-yellow-300"
                  >
                    {lang.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-bold mb-2">Social Media</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-yellow-300"><Twitter className="h-6 w-6" /></a>
                <a href="#" className="hover:text-yellow-300"><Facebook className="h-6 w-6" /></a>
                <a href="#" className="hover:text-yellow-300"><Youtube className="h-6 w-6" /></a>
                <a href="#" className="hover:text-yellow-300"><Github className="h-6 w-6" /></a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-red-800 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Sprunki Incredibox. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

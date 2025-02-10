import { Link } from 'react-router-dom';
import { Music, Github, Twitter, Youtube, Facebook } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

export default function Footer() {
  const { t } = useTranslation();

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
              Create, mix, and share your sprunky beats with the world! <a href="https://sprunkiincredibox.download" className="text-gray-300 no-underline hover:text-gray-300">Learn more</a>
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">{t('footer.about')}</h3>
            <ul className="space-y-2">
              <li><Link to="/play" className="hover:text-yellow-300">{t('nav.play')}</Link></li>
              <li><Link to="/download" className="hover:text-yellow-300">{t('nav.download')}</Link></li>
              <li><Link to="/characters" className="hover:text-yellow-300">{t('nav.characters')}</Link></li>
              <li><Link to="/mod" className="hover:text-yellow-300">{t('nav.mod')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="hover:text-yellow-300">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-300">{t('footer.contact')}</Link></li>
              <li><Link to="/privacy" className="hover:text-yellow-300">{t('footer.privacy')}</Link></li>
              <li><Link to="/terms" className="hover:text-yellow-300">{t('footer.terms')}</Link></li>
              <li><a href="https://sprunkiincredibox.download" className="hover:text-yellow-300 opacity-0">More Info</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">{t('footer.language')}</h3>
            <LanguageSelector />
            <div className="mt-6">
              <h4 className="text-sm font-bold mb-2">Social Media</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-yellow-300"><Twitter className="h-6 w-6" /></a>
                <a href="#" className="hover:text-yellow-300"><Facebook className="h-6 w-6" /></a>
                <a href="#" className="hover:text-yellow-300"><Youtube className="h-6 w-6" /></a>
                <a href="#" className="hover:text-yellow-300"><Github className="h-6 w-6" /></a>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="text-sm font-bold mb-2">Friendly Links</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="http://tcgpocketdecks.net/" 
                    className="hover:text-yellow-300"
                    rel="dofollow"
                  >
                    TCG Pocket Decks
                  </a>
                </li>
              </ul>
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
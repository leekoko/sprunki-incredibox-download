import { Music, Download, Gamepad2, Users, Wand2, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const languages = [
  { code: 'en', name: 'English', path: '' },
  { code: 'ko', name: '한국어', path: '/ko' },
  { code: 'ru', name: 'Русский', path: '/ru' },
  { code: 'pt', name: 'Português', path: '/pt' }
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-red-800 to-red-900 text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/ko" className="flex items-center space-x-2">
            <Music className="h-8 w-8" />
            <span className="text-xl font-bold">스프런키 인크레디박스</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/ko/play" className="flex items-center space-x-1 hover:text-yellow-300 transition-colors">
              <Gamepad2 className="h-5 w-5" />
              <span>스프런키 플레이</span>
            </Link>
            <Link to="/ko/mod" className="flex items-center space-x-1 hover:text-yellow-300 transition-colors">
              <Wand2 className="h-5 w-5" />
              <span>모드</span>
            </Link>
            <Link to="/ko/download" className="flex items-center space-x-1 hover:text-yellow-300 transition-colors">
              <Download className="h-5 w-5" />
              <span>다운로드</span>
            </Link>
            <Link to="/ko/characters" className="flex items-center space-x-1 hover:text-yellow-300 transition-colors">
              <Users className="h-5 w-5" />
              <span>캐릭터</span>
            </Link>
            <div className="relative group">
              <button className="flex items-center space-x-2 text-white hover:text-yellow-300 transition-colors">
                <Globe className="h-5 w-5" />
                <span>언어</span>
              </button>
              <div className="absolute bottom-full mb-2 hidden group-hover:block bg-white rounded-lg shadow-lg py-2 min-w-[150px]">
                {languages.map((lang) => (
                  <a
                    key={lang.code}
                    href={`${lang.path}`}
                    className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-gray-700"
                  >
                    {lang.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

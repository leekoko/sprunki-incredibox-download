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
            <Link to="/ko" className="flex items-center space-x-2 mb-4">
              <Music className="h-8 w-8" />
              <span className="text-xl font-bold">스프런키</span>
            </Link>
            <p className="text-gray-300">
              전 세계와 함께 스프런키한 비트를 만들고, 믹스하고, 공유하세요!
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">빠른 링크</h3>
            <ul className="space-y-2">
              <li><Link to="/ko/play" className="hover:text-yellow-300">지금 플레이</Link></li>
              <li><Link to="/ko/download" className="hover:text-yellow-300">다운로드</Link></li>
              <li><Link to="/ko/characters" className="hover:text-yellow-300">캐릭터</Link></li>
              <li><Link to="/ko/mod" className="hover:text-yellow-300">모드 스튜디오</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">고객지원</h3>
            <ul className="space-y-2">
              <li><Link to="/ko/faq" className="hover:text-yellow-300">자주 묻는 질문</Link></li>
              <li><Link to="/ko/contact" className="hover:text-yellow-300">문의하기</Link></li>
              <li><Link to="/ko/privacy" className="hover:text-yellow-300">개인정보 처리방침</Link></li>
              <li><Link to="/ko/terms" className="hover:text-yellow-300">서비스 이용약관</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">언어</h3>
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
              <h4 className="text-sm font-bold mb-2">소셜 미디어</h4>
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
          <p>&copy; {new Date().getFullYear()} 스프런키 인크레디박스. 모든 권리 보유.</p>
        </div>
      </div>
    </footer>
  );
}

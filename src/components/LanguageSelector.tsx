import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'ko', name: '한국어' },
  { code: 'ru', name: 'Русский' },
  { code: 'pt', name: 'Português' }
];

export default function LanguageSelector() {
  const { i18n, t } = useTranslation();

  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 text-white hover:text-yellow-300 transition-colors">
        <Globe className="h-5 w-5" />
        <span>{t('footer.language')}</span>
      </button>
      <div className="absolute bottom-full mb-2 hidden group-hover:block bg-white rounded-lg shadow-lg py-2 min-w-[150px]">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)}
            className={`w-full px-4 py-2 text-left hover:bg-gray-100 ${
              i18n.language === lang.code ? 'text-red-600 font-bold' : 'text-gray-700'
            }`}
          >
            {lang.name}
          </button>
        ))}
      </div>
    </div>
  );
}

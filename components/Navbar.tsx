import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sprout, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const links = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.experience'), path: '/experience' },
    { name: t('nav.passport'), path: '/herb-passport' },
    { name: t('nav.themes'), path: '/themes' },
    { name: t('nav.shop'), path: '/shop' },
    { name: t('nav.about'), path: '/about' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <Sprout className="h-8 w-8 text-herb-primary" />
              <span className="font-serif font-bold text-xl text-gray-800">
                {language === 'zh' ? '本草宇宙' : 'Herbal Universe'}
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-herb-primary border-b-2 border-herb-primary'
                    : 'text-gray-500 hover:text-herb-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center border-l pl-6 ml-2 space-x-4">
                <button 
                    onClick={toggleLanguage}
                    className="flex items-center gap-1 text-gray-500 hover:text-herb-primary text-sm font-medium transition-colors"
                >
                    <Globe className="h-4 w-4" />
                    {language === 'zh' ? 'EN' : '中'}
                </button>
                <button className="bg-herb-primary text-white px-4 py-2 rounded-full text-sm hover:bg-green-700 transition-colors">
                {t('nav.book')}
                </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button 
                onClick={toggleLanguage}
                className="mr-4 text-gray-500 hover:text-herb-primary"
            >
                <span className="text-xs font-bold">{language === 'zh' ? 'EN' : '中'}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'text-herb-primary bg-green-50'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
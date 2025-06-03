import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { language, setLanguage, t, isRTL } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Find the current active section
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      sections.forEach((section) => {
        const sectionElement = section as HTMLElement;
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId || '');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'about', href: '#about' },
    { key: 'services', href: '#services' },
    { key: 'skills', href: '#skills' },
    { key: 'packages', href: '#packages' },
    { key: 'projects', href: '#projects' },
    { key: 'contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'glass border-b border-white/10 py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold gradient-text">
            <img src="/images/Logos/BZ.png" alt="BZ logo" className="w-10 h-10 rounded-md" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className={`text-white/80 hover:text-white transition-colors duration-200 relative group ${
                  activeSection === item.key ? 'text-white' : ''
                }`}
              >
                {t(`nav.${item.key}`)}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#ff880044] to-[#ff8800] transition-all duration-300 ${
                  activeSection === item.key ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </a>
            ))}
          </div>

          {/* Language Switcher */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 glass rounded-full px-2 py-1.5 backdrop-blur-sm border border-white/10">
              <button
                onClick={() => setLanguage('en')}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-sm transition-all duration-300 ${
                  language === 'en' 
                    ? 'bg-gradient-to-r from-[#ff8800] to-[#ffaa00] text-white shadow-lg shadow-[#ff8800]/20' 
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                <img src="/images/flags/en.svg" alt="English" className="w-4 h-4 mr-1" />
                <span>EN</span>
              </button>
              <div className="w-px h-4 bg-white/20"></div>
              <button
                onClick={() => setLanguage('fr')}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-sm transition-all duration-300 ${
                  language === 'fr' 
                    ? 'bg-gradient-to-r from-[#ff8800] to-[#ffaa00] text-white shadow-lg shadow-[#ff8800]/20' 
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                <img src="/images/flags/fr.svg" alt="Français" className="w-4 h-4 mr-1" />
                <span>FR</span>
              </button>
              <div className="w-px h-4 bg-white/20"></div>
              <button
                onClick={() => setLanguage('ar')}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-sm transition-all duration-300 ${
                  language === 'ar' 
                    ? 'bg-gradient-to-r from-[#ff8800] to-[#ffaa00] text-white shadow-lg shadow-[#ff8800]/20' 
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                <img src="/images/flags/ar.svg" alt="العربية" className="w-4 h-4 mr-1" />
                <span>AR</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full glass backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-5 flex flex-col justify-center items-center">
                <span className={`block h-0.5 w-5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''
                }`}></span>
                <span className={`block h-0.5 w-5 bg-white transition-all duration-300 mt-1 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`block h-0.5 w-5 bg-white transition-all duration-300 mt-1 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 glass rounded-2xl p-4">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-3 text-white/80 hover:text-white transition-colors duration-200 ${
                  activeSection === item.key ? 'text-white' : ''
                }`}
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative border-t border-white/10">
      {/* Background Pattern */}
      <div className="absolute inset-x-0 top-4 bottom-0">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ff8800 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative py-8 px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Left Side */}
            <div className="space-y-2 text-center md:text-left">
              <p className="text-white/70">
                © 2025 zackwebdev.com. {t('footer.rights')}
              </p>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-2">            
              <div className="h-6 w-px bg-white/10"></div>
              <p className="text-white/70">
                {t('footer.made')} <span className="text-[#ff8800]">Boughaba Zakariyae</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

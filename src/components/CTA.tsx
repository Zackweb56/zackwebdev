
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const CTA = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <div className="glass-card p-12 md:p-16 rounded-3xl relative">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-royal-400/20 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-royal-600/20 to-transparent rounded-full blur-2xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">{t('cta.title')}</span>
            </h2>
            <p className="text-xl text-white/70 mb-10 leading-relaxed">
              {t('cta.subtitle')}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-royal-600 to-royal-500 px-10 py-4 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-royal-500/25 group"
            >
              {t('cta.button')}
              <svg 
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

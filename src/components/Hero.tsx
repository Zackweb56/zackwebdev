
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden noise-overlay">
      {/* Animated Blobs */}
      <div className="blob-1"></div>
      <div className="blob-2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Greeting */}
          <div className="animate-float">
            <p className="text-lg md:text-xl text-white/60 mb-4">
              {t('hero.greeting')}
            </p>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-float" style={{ animationDelay: '0.2s' }}>
            <span className="gradient-text">Ahmed Benali</span>
          </h1>

          {/* Title */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-white mb-8 animate-float" style={{ animationDelay: '0.4s' }}>
            {t('hero.title')}
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed animate-float" style={{ animationDelay: '0.6s' }}>
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-float" style={{ animationDelay: '0.8s' }}>
            <a
              href="#projects"
              className="glass-card px-8 py-4 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 hover:bg-white/10 group"
            >
              <span className="flex items-center justify-center gap-2">
                {t('hero.cta')}
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
            
            <a
              href="#contact"
              className="bg-gradient-to-r from-royal-600 to-royal-500 px-8 py-4 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-royal-500/25"
            >
              {t('hero.contact')}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

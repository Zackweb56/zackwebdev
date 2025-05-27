
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { number: '5+', label: t('about.experience') },
    { number: '50+', label: t('about.projects') },
    { number: '30+', label: t('about.clients') },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">{t('about.title')}</span>
              </h2>
              <p className="text-lg text-white/70 leading-relaxed">
                {t('about.description')}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/60 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="glass-card p-8 rounded-3xl relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-gradient-to-br from-royal-400/20 to-royal-600/20 animate-glow"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-gradient-to-br from-royal-600/20 to-royal-800/20 animate-glow" style={{ animationDelay: '1s' }}></div>
              
              {/* Profile image placeholder */}
              <div className="w-full h-80 bg-gradient-to-br from-royal-600/10 to-royal-800/10 rounded-2xl flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-royal-500 to-royal-700 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">AB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

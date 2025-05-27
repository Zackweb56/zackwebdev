
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Packages = () => {
  const { t } = useLanguage();

  const packages = [
    {
      name: t('packages.basic.title'),
      price: t('packages.basic.price'),
      description: t('packages.basic.desc'),
      features: [
        'Site web responsive',
        'Design moderne',
        'Optimisation SEO',
        'Support 3 mois',
        'Hébergement inclus'
      ],
      popular: false
    },
    {
      name: t('packages.pro.title'),
      price: t('packages.pro.price'),
      description: t('packages.pro.desc'),
      features: [
        'Application web complète',
        'Dashboard admin',
        'API personnalisée',
        'Base de données',
        'Support 12 mois',
        'Maintenance incluse'
      ],
      popular: true
    },
    {
      name: t('packages.enterprise.title'),
      price: t('packages.enterprise.price'),
      description: t('packages.enterprise.desc'),
      features: [
        'Solution sur mesure',
        'Architecture scalable',
        'Intégrations tierces',
        'Formation équipe',
        'Support prioritaire',
        'Maintenance complète'
      ],
      popular: false
    }
  ];

  return (
    <section id="packages" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">{t('packages.title')}</span>
          </h2>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`glass-card p-8 rounded-3xl relative group hover:scale-105 transition-all duration-300 ${
                pkg.popular 
                  ? 'ring-2 ring-royal-500 bg-white/10' 
                  : 'hover:bg-white/10'
              }`}
            >
              {/* Popular badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-royal-600 to-royal-500 px-4 py-2 rounded-full text-white text-sm font-semibold">
                    Populaire
                  </span>
                </div>
              )}

              {/* Package content */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">{pkg.name}</h3>
                <div className="text-4xl font-bold gradient-text mb-2">{pkg.price}</div>
                <p className="text-white/60">{pkg.description}</p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-royal-600 to-royal-500 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/80">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className={`w-full py-4 rounded-full font-semibold transition-all duration-300 ${
                pkg.popular
                  ? 'bg-gradient-to-r from-royal-600 to-royal-500 text-white hover:scale-105 shadow-lg'
                  : 'glass text-white hover:bg-white/20'
              }`}>
                {t('packages.choose')}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;

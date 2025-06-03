import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { SectionTitle } from './ui/section-title';

const Packages = () => {
  const { t } = useLanguage();

  const handlePackageSelection = (packageName: string, price: string) => {
    const whatsappNumber = '212773443694'; // Replace with your WhatsApp number
    const message = `Bonjour, je suis intéressé(e) par le forfait "${packageName}" (${price}).\n\nPourriez-vous me donner plus d'informations ?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const packages = [
    {
      name: t('packages.standard.title'),
      price: t('packages.standard.price'),
      originalPrice: '1,179 MAD',
      savings: '179 MAD',
      description: t('packages.standard.desc'),
      features: [
        t('packages.features.pages6'),
        t('packages.features.responsive'),
        t('packages.features.hosting'),
        t('packages.features.seo'),
        t('packages.features.support1'),
        t('packages.features.map'),
        t('packages.features.delivery7'),
      ],
      popular: false
    },
    {
      name: t('packages.ecommerce.title'),
      price: t('packages.ecommerce.price'),
      originalPrice: '2,349 MAD',
      savings: '349 MAD',
      description: t('packages.ecommerce.desc'),
      features: [
        t('packages.features.woocommerce'),
        t('packages.features.products20'),
        t('packages.features.payment'),
        t('packages.features.hostingPro'),
        t('packages.features.support2'),
        t('packages.features.delivery21'),
      ],
      popular: true
    },
    {
      name: t('packages.pro.title'),
      price: t('packages.pro.price'),
      description: t('packages.pro.desc'),
      features: [
        t('packages.features.custom'),
        t('packages.features.unique'),
        t('packages.features.hostingPremium'),
        t('packages.features.support3'),
        t('packages.features.reports'),
        t('packages.features.stats'),
        t('packages.features.customFunc'),
        t('packages.features.webapp'),
        t('packages.features.notifications'),
        t('packages.features.delivery42'),
      ],
      popular: false
    }
  ];

  return (
    <section id="packages" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <SectionTitle>{t('packages.title')}</SectionTitle>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`glass-card p-8 rounded-3xl relative group hover:scale-105 transition-all duration-300 flex flex-col h-full ${
                // pkg.popular 
                //   ? 'ring-2 ring-[#ff8800] bg-white/10' 
                //   : 'hover:bg-white/10'
                'hover:bg-white/10'
              }`}
            >
              {/* Popular badge */}
              {/* {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[#ff8800] to-[#ffc233] px-4 py-2 rounded-full text-white text-sm font-semibold">
                    Populaire
                  </span>
                </div>
              )} */}

              {/* Package content */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">{pkg.name}</h3>
                <div className="flex flex-col items-center">
                  {pkg.originalPrice && (
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-white/60 line-through text-lg">{pkg.originalPrice}</span>
                      <span className="bg-[#ff8800] text-white text-xs px-2 py-1 rounded-full">
                        -15%
                      </span>
                    </div>
                  )}
                  <div className="text-4xl font-bold gradient-text mb-2">{pkg.price}</div>
                  {pkg.savings && (
                    <div className="text-[#ff8800] text-sm font-semibold">
                      Économisez {pkg.savings}!
                    </div>
                  )}
                </div>
                <p className="text-white/60 mt-4">{pkg.description}</p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8 flex-grow">
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#ff8800] to-[#ffc233] flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/80">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-auto">
                <button 
                  onClick={() => handlePackageSelection(pkg.name, pkg.price)}
                  className={`w-full py-4 rounded-full font-semibold transition-all duration-300 ${
                    // pkg.popular
                    //   ? 'bg-gradient-to-r from-[#ff8800] to-[#ffc233] text-white hover:scale-105 shadow-lg'
                    //   : 'glass text-white hover:bg-white/20'
                    'glass text-white hover:bg-white/20'
                  }`}
                >
                  {t('packages.choose')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;

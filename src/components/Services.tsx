import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { SectionTitle } from './ui/section-title';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: t('services.web.title'),
      forWho: t('services.web.for'),
      forWhoDesc: t('services.web.for.desc'),
      description: t('services.web.desc')
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: t('services.apps.title'),
      forWho: t('services.apps.for'),
      forWhoDesc: t('services.apps.for.desc'),
      description: t('services.apps.desc')
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
        </svg>
      ),
      title: t('services.maintenance.title'),
      forWho: t('services.maintenance.for'),
      forWhoDesc: t('services.maintenance.for.desc'),
      description: t('services.maintenance.desc')
    }
  ];

  return (
    <section id="services" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <SectionTitle>{t('services.title')}</SectionTitle>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-card p-8 group hover:scale-105 transition-all duration-300 hover:bg-white/10 relative overflow-hidden"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff8800]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ff8800] to-[#ff880095] flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                {/* For Who Section */}
                <div className="mb-4">
                  <h4 className="text-white/90 font-semibold mb-1">{service.forWho}</h4>
                  <p className="text-white/70 text-sm">{service.forWhoDesc}</p>
                </div>

                <p className="text-white/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

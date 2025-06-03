import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const CTA = () => {
  const { t } = useLanguage();
  const phoneNumber = "212773443694";
  const message = "Bonjour! Je suis intéressé par vos services et je voudrais discuter avec vous.";

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="w-full px-4 md:px-8">
        <div className="glass-card p-8 md:p-12 lg:p-16 rounded-3xl relative">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#ff8800]/20 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#ff8800]/20 to-transparent rounded-full blur-2xl"></div>
          
          <div className="relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">{t('cta.title')}</span>
              </h2>
              <p className="text-xl text-white/70 mb-10 leading-relaxed">
                {t('cta.subtitle')}
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="glass-card p-6 rounded-2xl bg-white/5 backdrop-blur-sm">
                <div className="text-[#ff8800] mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('cta.benefits.secure.title')}</h3>
                <p className="text-white/70">{t('cta.benefits.secure.desc')}</p>
              </div>

              <div className="glass-card p-6 rounded-2xl bg-white/5 backdrop-blur-sm">
                <div className="text-[#ff8800] mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('cta.benefits.fast.title')}</h3>
                <p className="text-white/70">{t('cta.benefits.fast.desc')}</p>
              </div>

              <div className="glass-card p-6 rounded-2xl bg-white/5 backdrop-blur-sm">
                <div className="text-[#ff8800] mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('cta.benefits.support.title')}</h3>
                <p className="text-white/70">{t('cta.benefits.support.desc')}</p>
              </div>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap justify-center gap-8 items-center mb-12">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-[#ff8800]/20 border-2 border-[#ff8800]"></div>
                  <div className="w-8 h-8 rounded-full bg-[#ffc233]/20 border-2 border-[#ffc233]"></div>
                  <div className="w-8 h-8 rounded-full bg-[#ffd466]/20 border-2 border-[#ffd466]"></div>
                </div>
                <span className="text-white/70">{t('cta.social.clients')}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-white/70">{t('cta.social.rating')}</span>
              </div>
            </div>

            {/* Main CTA Button */}
            <div className="text-center">
              <button
                onClick={handleWhatsAppClick}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#ff8800] to-[#ffc233] px-10 py-4 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#ff8800]/25 group"
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
              </button>
              <p className="mt-4 text-sm text-white/50">{t('cta.noCommitment')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

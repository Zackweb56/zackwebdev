import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { SectionTitle } from './ui/section-title';

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { number: '5+', label: t('about.experience') },
    { number: '50+', label: t('about.projects') },
    { number: '30+', label: t('about.clients') },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden" dir="ltr">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#ff8800]/3 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-[#ffc233]/3 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          {/* Left side - Coder bio with morphing blob background */}
          <div className="relative h-full">
            {/* Morphing blob background */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-gradient-to-br from-[#ff8800]/5 to-[#ffc233]/5 animate-blob animation-delay-2000 blur-xl opacity-20"></div>
              <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-gradient-to-br from-[#ffc233]/5 to-[#ffd466]/5 animate-blob animation-delay-4000 blur-xl opacity-20"></div>
              <div className="absolute top-1/2 left-1/2 w-56 h-56 rounded-full bg-gradient-to-br from-[#ff8800]/5 to-[#ffc233]/5 animate-blob blur-xl opacity-20"></div>
            </div>

            {/* Coder bio with glass effect */}
            <div className="glass-card p-8 rounded-2xl border border-white/10 backdrop-blur-lg relative overflow-hidden h-full">
              {/* Code block */}
              <div className="text-sm text-gray-300 space-y-4 font-mono">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="mt-4">
                  <p className="text-royal-600/80">const <span className="text-white">profilDevelopeur</span> = {'{'}</p>
                  <p className="ml-4"><span className="text-royal-400/80">nom:</span> <span className="text-emerald-300">"Zack M."</span>,</p>
                  <p className="ml-4"><span className="text-royal-400/80">role:</span> <span className="text-emerald-300">'Développeur web Full Stack'</span>,</p>
                  <p className="ml-4"><span className="text-royal-400/80">focus:</span> <span className="text-amber-300">['UI/UX', 'Performance', 'Scalabilité']</span>,</p>
                  <p className="ml-4"><span className="text-royal-400/80">valeurs:</span> <span className="text-amber-300">['Créativité', 'Fiabilité', 'Communication']</span>,</p>
                  <p className="ml-4"><span className="text-royal-400/80">disponiblePour:</span> <span className="text-amber-300">['Web Apps', 'Stores e-commerce', 'Landing Pages']</span>,</p>
                  <p className="ml-4"><span className="text-royal-400/80">collaborateur:</span> <span className="text-rose-400">function</span>(<span className="text-sky-300">objectifClient</span>) {'{'}</p>
                  <p className="ml-8"><span className="text-rose-400">return</span> <span className="text-emerald-300">`Construire quelque chose d'incroyable pour atteindre votre objectif: ${'{'}objectifClient{'}'}`</span>;</p>
                  <p className="ml-4">{'}'}</p>
                  <p>{'}'};</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8 h-full flex flex-col justify-between">
            <div>
              <SectionTitle align="left" marginBottom="mb-2">{t('about.title')}</SectionTitle>
              <p className="text-lg text-white/70 leading-relaxed">
                {t('about.description')}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="glass-card p-6 rounded-xl border border-white/10 backdrop-blur-lg"
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/60 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
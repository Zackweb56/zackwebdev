import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { SectionTitle } from './ui/section-title';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Skills = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: t('skills.frontend'),
      skills: [
        { name: 'React'},
        { name: 'Bootstrap'},
        { name: 'Tailwindcss'},
        { name: 'Nextjs'},
        { name: 'Html5'},
        { name: 'Css3'},
        { name: 'Javascript'},
        { name: 'Typescript'},
        { name: 'Jquery'},
      ]
    },
    backend: {
      title: t('skills.backend'),
      skills: [
        { name: 'Laravel'},
        { name: 'Livewire'},
        { name: 'Php'},
        { name: 'Python'},
        { name: 'Sql'},
        { name: 'MongoDB'},
        { name: 'Mysql'},
        { name: 'Nodejs'},
        { name: 'Ajax'},
      ]
    },
    cms: {
      title: t('skills.cms'),
      skills: [
        { name: 'Wordpress'},
        { name: 'Prestashop'},
      ]
    },
    tools: {
      title: t('skills.tools'),
      skills: [
        { name: 'Git'},
        { name: 'Figma'},
        { name: 'Postman'},
        { name: 'Firebase'},
        { name: 'Nginx'},
        { name: 'Cpanel'},
      ]
    }
  };

  const tabs = Object.keys(skillCategories);

  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionTitle>{t('skills.title')}</SectionTitle>

        {/* Enhanced Tabs */}
        <div className="flex justify-center w-full mb-12">
          <div className="glass-card p-2 rounded-full inline-flex">
            <div className="flex gap-2">
              {tabs.map((tab) => (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-[#ff8800] to-[#ffc233] text-white shadow-md shadow-[#ff8800]/30'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {skillCategories[tab as keyof typeof skillCategories].title}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="relative px-16">
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              1024: {
                slidesPerView: 5,
              }
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            className="skills-swiper"
          >
            {skillCategories[activeTab as keyof typeof skillCategories].skills.map((skill, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-200 border border-white/10 group"
                >
                  <div className="w-12 h-12 mb-3 relative transition-all duration-200 group-hover:brightness-110">
                    <img
                      src={`/images/skills/${skill.name.toLowerCase()}.svg`}
                      alt={skill.name}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/skills/default.svg';
                      }}
                    />
                  </div>
                  <span className="text-white text-center text-sm font-medium group-hover:text-white/90 transition-colors duration-200">{skill.name}</span>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev !w-8 !h-8 !bg-white !rounded-full !left-0 hover:!bg-white/90 transition-all duration-300 !flex !items-center !justify-center !top-[calc(50%+12px)] hidden sm:flex">
            <svg className="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <div className="swiper-button-next !w-8 !h-8 !bg-white !rounded-full !right-0 hover:!bg-white/90 transition-all duration-300 !flex !items-center !justify-center !top-[calc(50%+12px)] hidden sm:flex">
            <svg className="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        .skills-swiper {
          padding: 20px 0;
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          display: none;
        }
        .swiper-button-next,
        .swiper-button-prev {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .swiper-button-disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>
    </section>
  );
};

export default Skills;

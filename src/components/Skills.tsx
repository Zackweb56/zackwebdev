
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: t('skills.frontend'),
      skills: [
        { name: 'React', level: 95 },
        { name: 'Vue.js', level: 90 },
        { name: 'TypeScript', level: 88 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Next.js', level: 85 },
        { name: 'SASS/SCSS', level: 80 }
      ]
    },
    backend: {
      title: t('skills.backend'),
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'MongoDB', level: 82 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 }
      ]
    },
    tools: {
      title: t('skills.tools'),
      skills: [
        { name: 'Git/GitHub', level: 95 },
        { name: 'VS Code', level: 90 },
        { name: 'Figma', level: 85 },
        { name: 'Postman', level: 88 },
        { name: 'Linux', level: 80 },
        { name: 'Firebase', level: 75 }
      ]
    }
  };

  const tabs = Object.keys(skillCategories);

  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">{t('skills.title')}</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-royal-600 to-royal-500 text-white shadow-lg'
                  : 'glass text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              {skillCategories[tab as keyof typeof skillCategories].title}
            </button>
          ))}
        </div>

        {/* Skills Content */}
        <div className="glass-card p-8 md:p-12 rounded-3xl">
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories[activeTab as keyof typeof skillCategories].skills.map((skill, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold">{skill.name}</span>
                  <span className="text-white/60">{skill.level}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-royal-600 to-royal-400 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${index * 0.1}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

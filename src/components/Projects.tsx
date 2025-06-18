import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { SectionTitle } from './ui/section-title';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from './ui/dialog';
import { motion } from 'framer-motion';
import projectsData from '../data/projects.json';

// Image optimization utility
const getOptimizedImage = (url, width = 800) => {
  if (!url) return { src: '', lqip: '' };
  
  // Example for Cloudinary (modify based on your image host)
  if (url.includes('cloudinary.com')) {
    return {
      src: url.replace('/upload/', `/upload/w_${width},q_auto,f_auto/`),
      lqip: url.replace('/upload/', '/upload/w_20,q_1,f_auto/')
    };
  }
  
  // Fallback - consider adding a proper image CDN
  return { src: url, lqip: '' };
};

// Pre-process projects data with optimized images
const optimizedProjects = projectsData.projects.map(project => ({
  ...project,
  imageData: getOptimizedImage(project.image),
  fullImageData: project.fullImage ? getOptimizedImage(project.fullImage, 1200) : null
}));

const Projects = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState('All');
  const [projectsToShow, setProjectsToShow] = useState(6);

  const tabs = [
    { name: 'All', count: optimizedProjects.length },
    { name: 'Landing Page', count: optimizedProjects.filter(p => p.category === 'Landing Page').length },
    { name: 'Web App', count: optimizedProjects.filter(p => p.category === 'Web App').length }
  ];

  const filteredProjects = activeTab === 'All' 
    ? optimizedProjects 
    : optimizedProjects.filter(project => project.category === activeTab);

  const projectsToDisplay = filteredProjects.slice(0, projectsToShow);

  const handleShowMore = () => {
    setProjectsToShow(prev => Math.min(prev + 3, filteredProjects.length));
  };

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <SectionTitle>{t('projects.title')}</SectionTitle>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            {t('projects.description')}
          </p>
        </div>

        {/* Enhanced Tabs */}
        <div className="flex justify-center w-full mb-12">
          <div className="glass-card p-2 rounded-full inline-flex">
            <div className="flex gap-2">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === tab.name
                      ? 'bg-gradient-to-r from-[#ff8800] to-[#ffc233] text-white shadow-md shadow-[#ff8800]/30'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {tab.name === 'All' ? t('projects.tabs.all') : 
                   tab.name === 'Landing Page' ? t('projects.tabs.landing') : 
                   t('projects.tabs.webapp')} ({tab.count})
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Preload first few images for better performance */}
        {projectsToDisplay.slice(0, 3).map((project, index) => (
          project.imageData?.src && (
            <link 
              key={`preload-${index}`}
              rel="preload" 
              as="image" 
              href={project.imageData.src}
            />
          )
        ))}

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsToDisplay.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="relative group cursor-pointer rounded-2xl overflow-hidden"
            >
              {/* Project Image */}
              <div className="aspect-[4/3] w-full">
                {project.imageData?.src ? (
                  <div className="relative w-full h-full">
                    {/* Blurred placeholder */}
                    {project.imageData.lqip && (
                      <img 
                        src={project.imageData.lqip}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover blur-sm"
                        aria-hidden="true"
                      />
                    )}
                    {/* Main image */}
                    <img 
                      src={project.imageData.src}
                      alt={t(project.title)}
                      className="relative w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                      style={{ opacity: project.imageData.lqip ? 0 : 1 }}
                      onLoad={(e) => {
                        if (project.imageData.lqip && e.target instanceof HTMLImageElement) e.target.style.opacity = '1';
                      }}
                    />
                  </div>
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#ff8800]/20 to-[#ffc233]/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-[#ff8800] flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <span className="text-white/60 text-sm">{t('projects.privateProject')}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-4">{t(project.title)}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{t(project.description)}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Display More Button */}
        {projectsToShow < filteredProjects.length && (
          <div className="text-center mt-12">
            <motion.button
              onClick={handleShowMore}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-[#ff8800] to-[#ffc233] text-white rounded-xl font-medium transition-all duration-300 shadow-lg shadow-[#ff8800]/20 hover:shadow-xl hover:shadow-[#ff8800]/30"
            >
              {t('projects.showMore')} ({(filteredProjects.length - projectsToShow) > 3 ? 3 : (filteredProjects.length - projectsToShow)})
            </motion.button>
          </div>
        )}

        {/* Project Detail Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-5xl max-h-[90vh] bg-black/95 border border-white/10 backdrop-blur-xl overflow-hidden p-6 text-white">
            {selectedProject && (
              <div className="flex flex-col h-full">
                <DialogHeader className="space-y-4 mb-6">
                  <DialogTitle className="text-2xl font-bold text-white bg-gradient-to-r from-[#ff8800] to-[#ffc233] bg-clip-text text-transparent">
                    {t(selectedProject.title)}
                  </DialogTitle>
                  <DialogDescription className="text-white/80 text-sm leading-relaxed">
                    {t(selectedProject.longDescription)}
                  </DialogDescription>
                </DialogHeader>

                {/* Scrollable Image Container */}
                {selectedProject.fullImageData?.src && (
                  <div className="w-full bg-black/50 rounded-2xl overflow-y-auto border border-white/10 custom-scrollbar max-h-[50vh] mb-6">
                    <div className="relative w-full">
                      {selectedProject.fullImageData.lqip && (
                        <img 
                          src={selectedProject.fullImageData.lqip}
                          alt=""
                          className="absolute inset-0 w-full object-cover blur-sm"
                          aria-hidden="true"
                        />
                      )}
                      <img
                        src={selectedProject.fullImageData.src}
                        alt={t(selectedProject.title)}
                        className="relative w-full object-contain"
                        loading="eager"
                        style={{ opacity: selectedProject.fullImageData.lqip ? 0 : 1 }}
                        onLoad={(e) => {
                          if (selectedProject.fullImageData.lqip && e.target instanceof HTMLImageElement) {
                            e.target.style.opacity = '1';
                          }
                        }}
                      />
                    </div>
                  </div>
                )}

                {/* Technologies */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-2xl font-semibold text-white flex items-center gap-2">
                    <span className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#ff8800] to-[#ffc233] flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                    {t('projects.technologies')}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-white/5 text-white/90 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4 -pt-2">
                  {selectedProject.link ? (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-[#ff8800] to-[#ffc233] hover:from-[#ff8800]/90 hover:to-[#ffc233]/90 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 text-center shadow-lg shadow-[#ff8800]/20 hover:shadow-xl hover:shadow-[#ff8800]/30 flex items-center justify-center gap-2"
                    >
                      <span>{t('projects.viewLive')}</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : (
                    <div className="flex-1 bg-white/5 text-white/50 px-6 py-3 rounded-xl font-medium text-center cursor-not-allowed flex items-center justify-center gap-2">
                      <span>{t('projects.privateProject')}</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        <style dangerouslySetInnerHTML={{ __html: `
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
          }

          .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 4px;
          }

          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.2);
            border-radius: 4px;
            transition: all 0.3s ease;
          }

          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.3);
          }

          .custom-scrollbar {
            scrollbar-width: thin;
            scrollbar-color: rgba(255, 255, 255, 0.2) rgba(255, 255, 255, 0.05);
          }
        `}} />
      </div>
    </section>
  );
};

export default Projects;
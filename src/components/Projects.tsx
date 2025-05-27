
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Plateforme e-commerce moderne avec React et Node.js',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'Application de gestion de tâches avec interface intuitive',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: ['Vue.js', 'Express', 'MongoDB', 'Socket.io'],
      link: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Site portfolio responsive avec animations avancées',
      technologies: ['React', 'Tailwind', 'Framer Motion', 'Netlify'],
      link: '#'
    },
    {
      title: 'Learning Platform',
      description: 'Plateforme d\'apprentissage en ligne avec système de cours',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'Prisma', 'NextAuth', 'Vercel'],
      link: '#'
    },
    {
      title: 'Finance Dashboard',
      description: 'Dashboard financier avec graphiques interactifs',
      technologies: ['React', 'D3.js', 'FastAPI', 'Docker'],
      link: '#'
    },
    {
      title: 'Social Media App',
      description: 'Application sociale avec messagerie en temps réel',
      image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=600&h=400&fit=crop',
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">{t('projects.title')}</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="glass-card rounded-3xl overflow-hidden group hover:scale-105 transition-all duration-300 hover:bg-white/10"
            >
              {/* Project Image or Placeholder */}
              {project.image ? (
                <div className="h-48 bg-gradient-to-br from-royal-600/20 to-royal-800/20 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              ) : (
                <div className="h-48 bg-gradient-to-br from-royal-600/20 to-royal-800/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-royal-600 to-royal-800 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <span className="text-white/60 text-sm">Code Project</span>
                  </div>
                </div>
              )}

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-white/70 mb-4 line-clamp-2">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-white/10 rounded-full text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <a 
                  href={project.link}
                  className="inline-flex items-center gap-2 text-royal-400 hover:text-royal-300 transition-colors duration-300 group"
                >
                  {t('projects.view')}
                  <svg 
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

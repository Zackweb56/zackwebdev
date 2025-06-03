import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { SectionTitle } from './ui/section-title';
import { toast } from 'sonner';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    serviceType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          to: 'boughaba.zakariyae@gmail.com'
        }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      if (data.success) {
        toast.success(t('contact.success'), {
          description: t('contact.successDescription'),
          duration: 5000,
          className: 'bg-white/10 backdrop-blur-lg border border-white/20',
          style: {
            background: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          },
          icon: (
            <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          ),
        });
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: '',
          serviceType: ''
        });
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      toast.error(t('contact.error'), {
        description: error instanceof Error ? error.message : t('contact.errorDescription'),
        duration: 5000,
        className: 'bg-white/10 backdrop-blur-lg border border-white/20',
        style: {
          background: 'rgba(0, 0, 0, 0.8)',
          color: 'white',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
      url: 'https://wa.me/212773443694'
    },
    {
      name: 'Facebook',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      url: 'https://facebook.com/zackwebdev'
    },
    {
      name: 'TikTok',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      ),
      url: 'https://tiktok.com/@zackwebpro'
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      url: 'https://www.linkedin.com/in/zakariyae-boughaba-447318283/'
    },
    {
      name: 'GitHub',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      url: 'https://github.com/Zackweb56'
    }
  ];

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionTitle>{t('contact.title')}</SectionTitle>
          <p className="text-xl text-white/70 mt-4 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-3xl backdrop-blur-lg border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                {t('contact.contactInfo')}
              </h3>
              <p className="text-white/70 mb-6">{t('contact.professionalText')}</p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/10 group-hover:border-[#ff8800]/20">
                    <svg className="w-7 h-7 text-white/70 group-hover:text-[#ff8800]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm font-medium">{t('contact.emailLabel')}</p>
                    <a href="mailto:boughaba.zakariyae@gmail.com" className="text-white hover:text-[#ff8800] transition-colors duration-300">boughaba.zakariyae@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/10 group-hover:border-[#ff8800]/20">
                    <svg className="w-7 h-7 text-white/70 group-hover:text-[#ff8800]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm font-medium">{t('contact.phoneLabel')}</p>
                    <a href="tel:+212 773 443 694" className="text-white hover:text-[#ff8800] transition-colors duration-300">+212 773 443 694</a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/10 group-hover:border-[#ff8800]/20">
                    <svg className="w-7 h-7 text-white/70 group-hover:text-[#ff8800]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm font-medium">{t('contact.locationLabel')}</p>
                    <p className="text-white">{t('contact.location')}</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-4">{t('contact.followMe')}</h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/70 hover:text-[#ff8800] hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-[#ff8800]/5 border border-white/10 hover:border-[#ff8800]/20"
                        aria-label={`Follow me on ${social.name}`}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 rounded-3xl backdrop-blur-lg border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 glass border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#ff8800]/30 focus:border-transparent transition-all duration-300"
                    placeholder={t('contact.namePlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-white font-medium mb-2">
                    {t('contact.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 glass border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#ff8800]/30 focus:border-transparent transition-all duration-300"
                    placeholder={t('contact.phonePlaceholder')}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 glass border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#ff8800]/30 focus:border-transparent transition-all duration-300"
                  placeholder={t('contact.emailPlaceholder')}
                />
              </div>

              <div>
                <label htmlFor="serviceType" className="block text-white font-medium mb-2">
                  {t('contact.serviceType')}
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 glass border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#ff8800]/30 focus:border-transparent transition-all duration-300 bg-[#1a1a1a] appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                    backgroundSize: '1.5em 1.5em',
                    paddingRight: '2.5rem'
                  }}
                >
                  <option value="" className="bg-[#1a1a1a] text-white py-2">{t('contact.serviceType.placeholder')}</option>
                  <option value="ecommerce" className="bg-[#1a1a1a] text-white py-2">{t('contact.serviceType.ecommerce')}</option>
                  <option value="vitrine" className="bg-[#1a1a1a] text-white py-2">{t('contact.serviceType.vitrine')}</option>
                  <option value="personnel" className="bg-[#1a1a1a] text-white py-2">{t('contact.serviceType.personnel')}</option>
                  <option value="blog" className="bg-[#1a1a1a] text-white py-2">{t('contact.serviceType.blog')}</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 glass border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#ff8800]/30 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder={t('contact.messagePlaceholder')}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#ff8800] to-[#ffc233] text-white font-semibold py-4 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#ff8800]/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L2 7v10c0 5.55 3.84 10 9 9s9-4.03 9-9V7l-10-5z" />
                    </svg>
                    {t('contact.sending')}
                  </span>
                ) : (
                  t('contact.send')
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

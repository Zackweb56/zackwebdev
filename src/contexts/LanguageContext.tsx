
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'fr' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations = {
  fr: {
    // Navigation
    'nav.about': 'À Propos',
    'nav.services': 'Services',
    'nav.skills': 'Compétences',
    'nav.projects': 'Projets',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': 'Salut, je suis',
    'hero.title': 'Développeur Full-Stack',
    'hero.subtitle': 'Créateur d\'expériences numériques exceptionnelles avec une passion pour l\'innovation et l\'excellence technique.',
    'hero.cta': 'Découvrir mon travail',
    'hero.contact': 'Me contacter',
    
    // About
    'about.title': 'À Propos de Moi',
    'about.description': 'Développeur passionné avec plus de 5 ans d\'expérience dans la création d\'applications web modernes. Je transforme les idées en solutions numériques élégantes et performantes.',
    'about.experience': 'Années d\'expérience',
    'about.projects': 'Projets réalisés',
    'about.clients': 'Clients satisfaits',
    
    // Services
    'services.title': 'Mes Services',
    'services.web.title': 'Développement Web',
    'services.web.desc': 'Applications web modernes et responsive avec les dernières technologies',
    'services.mobile.title': 'Applications Mobile',
    'services.mobile.desc': 'Applications mobiles natives et cross-platform performantes',
    'services.api.title': 'APIs & Backend',
    'services.api.desc': 'APIs robustes et systèmes backend scalables',
    
    // Skills
    'skills.title': 'Mes Compétences',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.tools': 'Outils',
    
    // CTA
    'cta.title': 'Prêt à Collaborer ?',
    'cta.subtitle': 'Transformons vos idées en réalité numérique',
    'cta.button': 'Commencer un Projet',
    
    // Packages
    'packages.title': 'Mes Forfaits',
    'packages.basic.title': 'Basique',
    'packages.basic.price': '€999',
    'packages.basic.desc': 'Parfait pour les petits projets',
    'packages.pro.title': 'Professionnel',
    'packages.pro.price': '€2999',
    'packages.pro.desc': 'Idéal pour les entreprises',
    'packages.enterprise.title': 'Entreprise',
    'packages.enterprise.price': 'Sur devis',
    'packages.enterprise.desc': 'Solutions sur mesure',
    'packages.choose': 'Choisir ce forfait',
    
    // Projects
    'projects.title': 'Mes Projets',
    'projects.view': 'Voir le projet',
    
    // Contact
    'contact.title': 'Contactez-moi',
    'contact.subtitle': 'Discutons de votre prochain projet',
    'contact.name': 'Nom',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Envoyer',
    
    // Footer
    'footer.rights': 'Tous droits réservés.',
    'footer.made': 'Fait avec ❤️ par',
  },
  ar: {
    // Navigation
    'nav.about': 'حولي',
    'nav.services': 'الخدمات',
    'nav.skills': 'المهارات',
    'nav.projects': 'المشاريع',
    'nav.contact': 'اتصل بي',
    
    // Hero
    'hero.greeting': 'مرحباً، أنا',
    'hero.title': 'مطور Full-Stack',
    'hero.subtitle': 'مبدع تجارب رقمية استثنائية بشغف للابتكار والتميز التقني.',
    'hero.cta': 'اكتشف عملي',
    'hero.contact': 'تواصل معي',
    
    // About
    'about.title': 'نبذة عني',
    'about.description': 'مطور شغوف مع أكثر من 5 سنوات من الخبرة في إنشاء تطبيقات الويب الحديثة. أحوّل الأفكار إلى حلول رقمية أنيقة وعالية الأداء.',
    'about.experience': 'سنوات الخبرة',
    'about.projects': 'المشاريع المنجزة',
    'about.clients': 'العملاء الراضين',
    
    // Services
    'services.title': 'خدماتي',
    'services.web.title': 'تطوير الويب',
    'services.web.desc': 'تطبيقات ويب حديثة ومتجاوبة بأحدث التقنيات',
    'services.mobile.title': 'تطبيقات الهاتف',
    'services.mobile.desc': 'تطبيقات هاتف أصلية ومتعددة المنصات عالية الأداء',
    'services.api.title': 'واجهات برمجية وخادم',
    'services.api.desc': 'واجهات برمجية قوية وأنظمة خادم قابلة للتوسع',
    
    // Skills
    'skills.title': 'مهاراتي',
    'skills.frontend': 'الواجهة الأمامية',
    'skills.backend': 'الخادم',
    'skills.tools': 'الأدوات',
    
    // CTA
    'cta.title': 'مستعد للتعاون؟',
    'cta.subtitle': 'لنحوّل أفكارك إلى واقع رقمي',
    'cta.button': 'ابدأ مشروع',
    
    // Packages
    'packages.title': 'باقاتي',
    'packages.basic.title': 'أساسي',
    'packages.basic.price': '€999',
    'packages.basic.desc': 'مثالي للمشاريع الصغيرة',
    'packages.pro.title': 'احترافي',
    'packages.pro.price': '€2999',
    'packages.pro.desc': 'مثالي للشركات',
    'packages.enterprise.title': 'المؤسسات',
    'packages.enterprise.price': 'حسب الطلب',
    'packages.enterprise.desc': 'حلول مخصصة',
    'packages.choose': 'اختر هذه الباقة',
    
    // Projects
    'projects.title': 'مشاريعي',
    'projects.view': 'عرض المشروع',
    
    // Contact
    'contact.title': 'تواصل معي',
    'contact.subtitle': 'لنناقش مشروعك القادم',
    'contact.name': 'الاسم',
    'contact.email': 'البريد الإلكتروني',
    'contact.message': 'الرسالة',
    'contact.send': 'إرسال',
    
    // Footer
    'footer.rights': 'جميع الحقوق محفوظة.',
    'footer.made': 'صُنع بـ ❤️ بواسطة',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['fr']] || key;
  };

  const isRTL = language === 'ar';

  useEffect(() => {
    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', language);
  }, [isRTL, language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

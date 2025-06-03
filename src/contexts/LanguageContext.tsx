import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'fr' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.packages': 'Packages',
    
    // Hero
    'hero.greeting': 'Hi, I\'m',
    'hero.title': 'Full-Stack Web Developer',
    'hero.subtitle': 'Creating exceptional digital experiences with a passion for innovation and technical excellence.',
    'hero.cta': 'Discover my work',
    'hero.contact': 'Contact me',
    
    // About
    'about.title': 'Why Choose Me?',
    'about.description': 'I am a passionate developer with deep expertise in creating robust and elegant web solutions. My approach combines creativity, technical rigor, and a keen sense of client needs.',
    'about.experience': 'Years of Experience',
    'about.projects': 'Projects Completed',
    'about.clients': 'Satisfied Clients',
    
    // Services
    'services.title': 'My Services',
    
    // Web Development Service
    'services.web.title': 'Professional Website Creation',
    'services.web.for': 'For whom?',
    'services.web.for.desc': 'All businesses, artisans, or freelancers in Morocco.',
    'services.web.desc': '"I design turnkey websites to showcase your business, sell online, or promote your services, with a modern design adapted to all devices."',
    
    // Custom Web Apps Service
    'services.apps.title': 'Custom Web Applications',
    'services.apps.for': 'For whom?',
    'services.apps.for.desc': 'Companies needing to automate tasks (management, appointments, deliveries).',
    'services.apps.desc': '"I develop custom web applications to simplify your work: appointment management, order tracking, or internal systems — accessible from any device."',
    
    // Maintenance Service
    'services.maintenance.title': 'Optimization & Maintenance of Existing Sites',
    'services.maintenance.for': 'For whom?',
    'services.maintenance.for.desc': 'Companies with a slow, insecure, or non-mobile-friendly website.',
    'services.maintenance.desc': '"I repair and improve your current site to make it faster, secure, and visible on Google."',
    
    // Skills
    'skills.title': 'My Skills',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.cms': 'CMS',
    'skills.tools': 'Tools',
    
    // CTA
    'cta.title': 'Ready to Collaborate?',
    'cta.subtitle': 'Boost Your Online Presence Today!',
    'cta.button': 'Start a Project',
    'cta.benefits.secure.title': 'Secure & Reliable',
    'cta.benefits.secure.desc': 'Enterprise-level security and 99.9% uptime guarantee for your peace of mind',
    'cta.benefits.fast.title': 'Fast Delivery',
    'cta.benefits.fast.desc': 'Quick turnaround times without compromising quality or attention to detail',
    'cta.benefits.support.title': '24/7 Support',
    'cta.benefits.support.desc': 'Continuous assistance and regular updates throughout the project',
    'cta.social.clients': 'Join over 30 satisfied clients',
    'cta.social.rating': 'Average rating of 4.7/5',
    'cta.noCommitment': 'No commitment required. Let\'s discuss your project!',
    
    // Packages
    'packages.title': 'My Packages',
    'packages.standard.title': 'Standard Package – Static Website',
    'packages.standard.price': '999 MAD',
    'packages.standard.desc': 'Simple & Fast',
    'packages.ecommerce.title': 'E-Commerce Package',
    'packages.ecommerce.price': '1,999 MAD',
    'packages.ecommerce.desc': 'Sell Online Easily',
    'packages.pro.title': 'Professional Package',
    'packages.pro.price': 'On quote',
    'packages.pro.desc': 'Custom Solution',
    'packages.choose': 'Choose this package',

    // Package Features
    'packages.features.pages6': '1 homepage + 5 pages max',
    'packages.features.responsive': 'Modern design adapted for mobile & desktop',
    'packages.features.hosting': 'Domain name + hosting free for 1 year',
    'packages.features.seo': 'Basic SEO for Google',
    'packages.features.support1': 'Technical support for 1 month',
    'packages.features.map': 'Interactive Google Maps',
    'packages.features.delivery7': 'Delivered in 7-10 days',
    'packages.features.woocommerce': 'Complete e-commerce site (WordPress + WooCommerce)',
    'packages.features.products20': 'Addition of 20 products (photos + descriptions included)',
    'packages.features.payment': 'Online payment (CMI, bank transfer, cash on delivery)',
    'packages.features.hostingPro': 'Domain name + pro hosting free for 1 year',
    'packages.features.support2': 'Technical support for 2 months',
    'packages.features.delivery21': 'Delivered in 2-3 weeks',
    'packages.features.custom': '100% custom website/web app',
    'packages.features.unique': 'Unique design & high speed',
    'packages.features.hostingPremium': 'Domain name + premium hosting free for 1 year',
    'packages.features.support3': 'Technical support for 3 months + training',
    'packages.features.reports': 'Dashboards & detailed reports',
    'packages.features.stats': 'Advanced statistics & analytics',
    'packages.features.customFunc': 'Custom features according to your needs',
    'packages.features.webapp': 'Complete web application with REST API',
    'packages.features.notifications': 'Email notifications',
    'packages.features.delivery42': 'Delivered in 4-6 weeks',
    
    // Projects
    'projects.title': 'My Projects',
    'projects.view': 'View project',
    'projects.description': 'Browse my portfolio of web applications, e-commerce solutions, and showcase websites.',
    'projects.tabs.all': 'All',
    'projects.tabs.landing': 'Showcase Site',
    'projects.tabs.webapp': 'Web Application',
    'projects.showMore': 'Show more',
    'projects.technologies': 'Technologies used',
    'projects.viewLive': 'View live project',
    'projects.privateProject': 'Private and secure project',
    'projects.project1.title': 'Project 1',
    'projects.project1.description': 'Modern dental clinic promotional website.',
    'projects.project1.longDescription': 'A sleek website showcasing dental services, calendar, expert team, patient testimonials, and online booking for a trusted clinic.',
    'projects.project2.title': 'Project 2',
    'projects.project2.description': 'Modern Moroccan architecture design studio.',
    'projects.project2.longDescription': 'A sleek website showcasing Atlas fusion of traditional Moroccan craftsmanship with contemporary architecture, featuring services, portfolio, testimonials, and expert team profiles.',
    'projects.project3.title': 'Project 3',
    'projects.project3.description': 'Luxury car rental website design',
    'projects.project3.longDescription': 'Modern Arabic website for premium car rentals showcasing vehicles, pricing plans, and contact options.',
    'projects.project4.title': 'Project 4',
    'projects.project4.description': 'Dark-themed luxury car rental site',
    'projects.project4.longDescription': 'Stylish Arabic car rental website with premium vehicle listings, service steps, pricing plans, and contact form with cart map location.',
    'projects.project5.title': 'Project 5',
    'projects.project5.description': 'Medical aesthetics clinic in Casablanca.',
    'projects.project5.longDescription': 'Clinique Essence is a medical aesthetics clinic in Casablanca, offering personalized and expert care for natural and harmonious results. Led by Dr. Leila Benali, the clinic provides facial rejuvenation, body sculpting, and anti-aging treatments with state-of-the-art equipment and a luxurious, discreet environment.',
    'projects.project6.title': 'Project 6',
    'projects.project6.description': 'Doctor portfolio website.',
    'projects.project6.longDescription': 'Clinique Dr. Bennani is a leading cardiovascular clinic in Casablanca, specializing in advanced cardiac surgeries and interventions. Under the expertise of Dr. Ahmed Bennani, a renowned cardiac surgeon with over 15 years of experience, the clinic offers comprehensive heart care services, including surgery, electrophysiology, and emergency 24/7 support, ensuring excellence and patient satisfaction.',
    'projects.project7.title': 'Project 7',
    'projects.project7.description': 'Comprehensive legal services website',
    'projects.project7.longDescription': 'Cabinet Juridique is a leading law firm in Casablanca, offering exceptional legal expertise across Moroccan and international law. Under the guidance of Maître Ahmed Benali, a seasoned lawyer with over 25 years of experience, the firm provides comprehensive legal solutions for businesses.',
    'projects.project8.title': 'Project 8',
    'projects.project8.description': 'Luxury travel agency in Morocco.',
    'projects.project8.longDescription': 'Maroc Prestige is a specialized luxury travel agency offering unique and authentic experiences across Morocco. With over 15 years of expertise, the agency provides tailored tours and exceptional service, ensuring unforgettable journeys that blend luxury.',
    'projects.project9.title': 'Project 9',
    'projects.project9.description': 'Legal expertise website in Béni Mellal.',
    'projects.project9.longDescription': 'This website theme is designed for a professional legal practice, emphasizing expertise, integrity, and client-centered service. The theme features a clean, modern layout with a dark and neutral color palette that conveys professionalism and trustworthiness.',
    'projects.project10.title': 'Project 10',
    'projects.project10.description': 'Car rental service website theme.',
    'projects.project10.longDescription': 'this website is a sleek and user-friendly website theme designed for a car rental service in Béni Mellal. The theme emphasizes simplicity, professionalism, and ease of use, catering to both individual travelers and corporate clients seeking reliable vehicle rentals.',
    'projects.project14.title': 'Project 11',  
    'projects.project14.description': 'Medical care expert, personalized approach',  
    'projects.project14.longDescription': 'High-quality medical services with compassion and advanced expertise.',  
    'projects.project11.title': 'Project 12',
    'projects.project11.description': 'Commercial management web application',
    'projects.project11.longDescription': 'Development of a complete web application for managing customers/suppliers, inventory, products/services, purchases/sales and payments, enabling centralized management of customer relationships and business operations.',
    'projects.project12.title': 'Project 13',
    'projects.project12.description': 'Conference management web application',
    'projects.project12.longDescription': 'Development of a conference management web application for organizing events, managing schedules, important details and participant registrations. The application generates personalized badges and requires a verification code for registration.',
    'projects.project13.title': 'Project 14',
    'projects.project13.description': 'Product expiration date management web application',
    'projects.project13.longDescription': 'This product expiration date management web application allows users to track expiration dates of products in stock and manage withdrawals of these products, sending automatic reminders before their expiration.',
    
    // Contact
    'contact.title': 'Contact Me',
    'contact.subtitle': 'Let\'s discuss your next project',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send',
    'contact.contactInfo': 'Contact Information',
    'contact.followMe': 'Follow Me',
    'contact.location': 'Beni Mellal, Morocco',
    'contact.namePlaceholder': 'Your name',
    'contact.emailPlaceholder': 'your@email.com',
    'contact.messagePlaceholder': 'Your message...',
    'contact.sending': 'Sending...',
    'contact.emailLabel': 'Email',
    'contact.phone': 'Phone',
    'contact.phonePlaceholder': 'Your phone number',
    'contact.locationLabel': 'Location',
    'contact.serviceType': 'Service Type',
    'contact.serviceType.placeholder': 'Select a service type',
    'contact.serviceType.ecommerce': 'E-commerce Site',
    'contact.serviceType.vitrine': 'Showcase Site',
    'contact.serviceType.personnel': 'Personal Site',
    'contact.serviceType.blog': 'Blog',
    'contact.professionalText': 'I am available to discuss your project and propose a solution adapted to your needs. Feel free to contact me for any questions or quote requests.',
    'contact.success': 'Message sent successfully!',
    'contact.successDescription': 'I will get back to you as soon as possible.',
    'contact.error': 'Error sending message',
    'contact.errorDescription': 'An error occurred while sending the message. Please try again.',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.made': 'Made with ❤️ by',
    
    // Warnings
    'warnings.rightClick': 'Right click is disabled on this website',
    'warnings.textSelection': 'Text selection is not allowed on this website',
  },
  fr: {
    // Navigation
    'nav.about': 'À Propos',
    'nav.services': 'Services',
    'nav.skills': 'Compétences',
    'nav.projects': 'Réalisations',
    'nav.contact': 'Contact',
    'nav.packages': 'Forfaits',
    
    // Hero
    'hero.greeting': 'Salut, je suis',
    'hero.title': 'Développeur web Full-Stack',
    'hero.subtitle': 'Créateur d\'expériences numériques exceptionnelles avec une passion pour l\'innovation et l\'excellence technique.',
    'hero.cta': 'Découvrir mon travail',
    'hero.contact': 'Me contacter',
    
    // About
    'about.title': 'Pourquoi me choisir?',
    'about.description': 'Je suis un développeur passionné avec une expertise approfondie dans la création de solutions web robustes et élégantes. Mon approche combine créativité, rigueur technique et sens aigu des besoins clients.',
    'about.experience': 'Années d\'expérience',
    'about.projects': 'Projets réalisés',
    'about.clients': 'Clients satisfaits',
    
    // Services
    'services.title': 'Mes Services',
    
    // Web Development Service
    'services.web.title': 'Création de Sites Web Professionnels',
    'services.web.for': 'Pour qui ?',
    'services.web.for.desc': 'Toutes entreprises, artisans, ou indépendants au Maroc.',
    'services.web.desc': '"Je conçois des sites web clés en main pour présenter votre activité, vendre en ligne, ou promouvoir vos services, avec un design moderne et adapté à tous les appareils."',
    
    // Custom Web Apps Service
    'services.apps.title': 'Applications Web sur Mesure',
    'services.apps.for': 'Pour qui ?',
    'services.apps.for.desc': 'Entreprises ayant besoin d\'automatiser des tâches (gestion, RDV, livraisons).',
    'services.apps.desc': '"Je développe des applications web personnalisées pour simplifier votre travail : gestion de rendez-vous, suivi des commandes, ou systèmes internes — accessibles depuis n\'importe quel appareil."',
    
    // Maintenance Service
    'services.maintenance.title': 'Optimisation & Maintenance de Sites Existants',
    'services.maintenance.for': 'Pour qui ?',
    'services.maintenance.for.desc': 'Entreprises avec un site lent, non sécurisé, ou qui ne fonctionne pas sur mobile.',
    'services.maintenance.desc': '"Je répare et améliore votre site actuel pour le rendre plus rapide, sécurisé, et visible sur Google."',
    
    // Skills
    'skills.title': 'Mes Compétences',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.cms': 'CMS',
    'skills.tools': 'Outils',
    
    // CTA
    'cta.title': 'Prêt à Collaborer ?',
    'cta.subtitle': 'Boostez Votre Présence en Ligne Dès Aujourd❜hui !',
    'cta.button': 'Commencer un Projet',
    'cta.benefits.secure.title': 'Sécurisé & Fiable',
    'cta.benefits.secure.desc': 'Sécurité de niveau entreprise et garantie de disponibilité de 99,9% pour votre tranquillité d\'esprit',
    'cta.benefits.fast.title': 'Livraison Rapide',
    'cta.benefits.fast.desc': 'Délais d\'exécution rapides sans compromettre la qualité ou l\'attention aux détails',
    'cta.benefits.support.title': 'Support 24/7',
    'cta.benefits.support.desc': 'Assistance permanente et mises à jour régulières tout au long du projet',
    'cta.social.clients': 'Rejoignez plus de 30 clients satisfaits',
    'cta.social.rating': 'Note moyenne de 4,7/5',
    'cta.noCommitment': 'Aucun engagement requis. Discutons de votre projet !',
    
    // Packages
    'packages.title': 'Mes Forfaits',
    'packages.standard.title': 'Pack Standard – Site Web Statique',
    'packages.standard.price': '999 MAD',
    'packages.standard.desc': 'Simple & Rapide',
    'packages.ecommerce.title': 'Pack E-Commerce',
    'packages.ecommerce.price': '1999 MAD',
    'packages.ecommerce.desc': 'Vendez en Ligne Facilement',
    'packages.pro.title': 'Pack Professionnel',
    'packages.pro.price': 'Sur devis',
    'packages.pro.desc': 'Solution Sur Mesure',
    'packages.choose': 'Choisir ce forfait',

    // Package Features
    'packages.features.pages6': '1 page d\'accueil + 5 pages max',
    'packages.features.responsive': 'Design moderne adapté mobile & ordinateur',
    'packages.features.hosting': 'Nom de domaine + hébergement offert 1 an',
    'packages.features.seo': 'SEO de base pour Google',
    'packages.features.support1': 'Support technique 1 mois',
    'packages.features.map': 'Carte interactive Google Maps',
    'packages.features.delivery7': 'Livré en 7-10 jours',
    'packages.features.woocommerce': 'Site e-commerce complet (WordPress + WooCommerce)',
    'packages.features.products20': 'Ajout de 20 produits (photos + descriptions incluses)',
    'packages.features.payment': 'Paiement en ligne (CMI, virement bancaire, paiement à la livraison)',
    'packages.features.hostingPro': 'Nom de domaine + hébergement pro offert 1 an',
    'packages.features.support2': 'Support technique 2 mois',
    'packages.features.delivery21': 'Livré en 2-3 semaines',
    'packages.features.custom': 'Site/web app 100% personnalisé',
    'packages.features.unique': 'Design unique & haute vitesse',
    'packages.features.hostingPremium': 'Nom de domaine + hébergement premium offert 1 an',
    'packages.features.support3': 'Support technique 3 mois + formation',
    'packages.features.reports': 'Tableaux de bord & rapports détaillés',
    'packages.features.stats': 'Statistiques avancées & analyses',
    'packages.features.customFunc': 'Fonctionnalités sur mesure selon vos besoins',
    'packages.features.webapp': 'Application web complète avec API REST',
    'packages.features.notifications': 'Notifications par email',
    'packages.features.delivery42': 'Livré en 4-6 semaines',
    
    // Projects
    'projects.title': 'Mes Projets',
    'projects.view': 'Voir le projet',
    'projects.description': 'Parcourez mon portfolio d\'applications web, de solutions e-commerce et de sites vitrine.',
    'projects.tabs.all': 'Tous',
    'projects.tabs.landing': 'Site Vitrine',
    'projects.tabs.webapp': 'Application Web',
    'projects.showMore': 'Afficher plus',
    'projects.technologies': 'Technologies utilisées',
    'projects.viewLive': 'Voir le projet en direct',
    'projects.privateProject': 'Projet privé et sécurisé',
    'projects.project1.title': 'Projet 1',
    'projects.project1.description': 'Site web promotionnel pour une clinique dentaire moderne.',
    'projects.project1.longDescription': 'Un site élégant présentant les services dentaires, un calendrier, une équipe d\'experts, des témoignages de patients et une réservation en ligne pour une clinique de confiance.',
    'projects.project2.title': 'Projet 2',
    'projects.project2.description': 'Studio de design d\'architecture marocaine moderne.',
    'projects.project2.longDescription': 'Un site élégant présentant la fusion Atlas de l\'artisanat marocain traditionnel avec l\'architecture contemporaine, mettant en avant les services, le portfolio, les témoignages et les profils de l\'équipe d\'experts.',
    'projects.project3.title': 'Projet 3',
    'projects.project3.description': 'Conception de site web de location de voitures de luxe',
    'projects.project3.longDescription': 'Site web arabe moderne pour la location de voitures haut de gamme présentant les véhicules, les plans tarifaires et les options de contact.',
    'projects.project4.title': 'Projet 4',
    'projects.project4.description': 'Site de location de voitures de luxe à thème sombre',
    'projects.project4.longDescription': 'Site web arabe élégant de location de voitures avec des listes de véhicules premium, des étapes de service, des plans tarifaires et un formulaire de contact avec localisation du panier sur la carte.',
    'projects.project5.title': 'Projet 5',
    'projects.project5.description': 'Clinique d\'esthétique médicale à Casablanca.',
    'projects.project5.longDescription': 'Clinique Essence est une clinique d\'esthétique médicale à Casablanca, offrant des soins personnalisés et experts pour des résultats naturels et harmonieux. Sous la direction du Dr Leila Benali, la clinique propose des traitements de rajeunissement facial, de sculpture corporelle et anti-âge avec des équipements de pointe dans un environnement luxueux et discret.',
    'projects.project6.title': 'Projet 6',
    'projects.project6.description': 'Site web portfolio pour un médecin.',
    'projects.project6.longDescription': 'Clinique Dr. Bennani est une clinique cardiovasculaire leader à Casablanca, spécialisée dans les chirurgies cardiaques avancées et les interventions. Sous l\'expertise du Dr Ahmed Bennani, un chirurgien cardiaque renommé avec plus de 15 ans d\'expérience, la clinique offre des services complets de soins cardiaques, y compris la chirurgie, l\'électrophysiologie et un support d\'urgence 24/7, garantissant l\'excellence et la satisfaction des patients.',
    'projects.project7.title': 'Projet 7',
    'projects.project7.description': 'Site web de services juridiques complets',
    'projects.project7.longDescription': 'Cabinet Juridique est un cabinet d\'avocats leader à Casablanca, offrant une expertise juridique exceptionnelle en droit marocain et international. Sous la direction de Maître Ahmed Benali, un avocat chevronné avec plus de 25 ans d\'expérience, le cabinet propose des solutions juridiques complètes pour les entreprises.',
    'projects.project8.title': 'Projet 8',
    'projects.project8.description': 'Agence de voyage de luxe au Maroc.',
    'projects.project8.longDescription': 'Maroc Prestige est une agence de voyage de luxe spécialisée offrant des expériences uniques et authentiques à travers le Maroc. Avec plus de 15 ans d\'expertise, l\'agence propose des circuits sur mesure et un service exceptionnel, garantissant des voyages inoubliables alliant luxe.',
    'projects.project9.title': 'Projet 9',
    'projects.project9.description': 'Site web d\'expertise juridique à Béni Mellal.',
    'projects.project9.longDescription': 'Ce thème de site web est conçu pour une pratique juridique professionnelle, mettant l\'accent sur l\'expertise, l\'intégrité et un service centré sur le client. Le thème présente une mise en page moderne et épurée avec une palette de couleurs sombres et neutres qui transmet professionnalisme et fiabilité.',
    'projects.project10.title': 'Projet 10',
    'projects.project10.description': 'Thème de site web pour un service de location de voitures.',
    'projects.project10.longDescription': 'Ce site est un thème de site web élégant et convivial conçu pour un service de location de voitures à Béni Mellal. Le thème met l\'accent sur la simplicité, le professionnalisme et la facilité d\'utilisation, s\'adressant aux voyageurs individuels et aux clients corporatifs recherchant des locations de véhicules fiables.',
    'projects.project14.title': 'Projet 11',
    'projects.project14.description': 'Expert en soins médicaux, approche personnalisée',
    'projects.project14.longDescription': 'Des services médicaux de haute qualité avec compassion et une expertise avancée.',
    'projects.project11.title': 'Projet 12',
    'projects.project11.description': 'Application web de gestion commerciale',
    'projects.project11.longDescription': 'Développement d\'une application web complète pour la gestion des clients/fournisseurs, des stocks, des produits/services, des achats/ventes et des paiements, permettant une gestion centralisée des relations clients et des opérations commerciales.',
    'projects.project12.title': 'Projet 13',
    'projects.project12.description': 'Application web de gestion des congrès',
    'projects.project12.longDescription': 'Développement d\'une application web de gestion des congrès permettant d\'organiser les événements, de gérer l\'agenda, les détails importants et les inscriptions des participants. L\'application génère des badges personnalisés et requiert un code de vérification pour l\'inscription.',
    'projects.project13.title': 'Projet 14',
    'projects.project13.description': 'Application web de gestion des dates d\'expiration des produits',
    'projects.project13.longDescription': 'Cette application web de gestion des dates d\'expiration permet aux utilisateurs de suivre les dates d\'expiration des produits en stock et de gérer les retraits de ces produits, en envoyant des rappels automatiques avant leur expiration.',

    // Contact
    'contact.title': 'Contactez-moi',
    'contact.subtitle': 'Discutons de votre prochain projet',
    'contact.name': 'Nom',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Envoyer',
    'contact.contactInfo': 'Informations de contact',
    'contact.followMe': 'Suivez-moi',
    'contact.location': 'Béni Mellal, Maroc',
    'contact.namePlaceholder': 'Votre nom',
    'contact.emailPlaceholder': 'votre@email.com',
    'contact.messagePlaceholder': 'Votre message...',
    'contact.sending': 'Envoi en cours...',
    'contact.emailLabel': 'Email',
    'contact.phone': 'Téléphone',
    'contact.phonePlaceholder': 'Votre numéro de téléphone',
    'contact.locationLabel': 'Localisation',
    'contact.serviceType': 'Type de service',
    'contact.serviceType.placeholder': 'Sélectionnez un type de service',
    'contact.serviceType.ecommerce': 'Site E-commerce',
    'contact.serviceType.vitrine': 'Site Vitrine',
    'contact.serviceType.personnel': 'Site Personnel',
    'contact.serviceType.blog': 'Blog',
    'contact.professionalText': 'Je suis disponible pour discuter de votre projet et vous proposer une solution adaptée à vos besoins. N\'hésitez pas à me contacter pour toute question ou demande de devis.',
    'contact.success': 'Message envoyé avec succès!',
    'contact.successDescription': 'Je vous répondrai dans les plus brefs délais.',
    'contact.error': 'Erreur lors de l\'envoi',
    'contact.errorDescription': 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.',
    
    // Footer
    'footer.rights': 'Tous droits réservés.',
    'footer.made': 'Fait avec ❤️ par',
    
    // Warnings
    'warnings.rightClick': 'Le clic droit est désactivé sur ce site web',
    'warnings.textSelection': 'La sélection de texte n\'est pas autorisée sur ce site web',
  },
  ar: {
    // Navigation
    'nav.about': 'نبذة عني',
    'nav.services': 'الخدمات',
    'nav.skills': 'المهارات',
    'nav.projects': 'الإنجازات',
    'nav.contact': 'اتصل بي',
    'nav.packages': 'الباقات',

    // Hero
    'hero.greeting': 'مرحباً، أنا',
    'hero.title': ' مطور ويب Full-Stack',
    'hero.subtitle': 'مبدع تجارب رقمية استثنائية بشغف للابتكار والتميز التقني.',
    'hero.cta': 'اكتشف عملي',
    'hero.contact': 'تواصل معي',
    
    // About
    'about.title': 'لماذا تختارني؟',
    'about.description': 'أنا مطور متحمس يتمتع بخبرة عميقة في إنشاء حلول ويب قوية وأنيقة. يجمع أسلوبي بين الإبداع والدقة الفنية والشعور الشديد باحتياجات العملاء.',
    'about.experience': 'سنوات الخبرة',
    'about.projects': 'المشاريع المنجزة',
    'about.clients': 'العملاء الراضين',
    
    // Services
    'services.title': 'خدماتي',
    
    // Web Development Service
    'services.web.title': 'تصميم مواقع الويب الاحترافية',
    'services.web.for': 'لمن؟',
    'services.web.for.desc': 'جميع الشركات والحرفيين والمستقلين في المغرب',
    'services.web.desc': '"أقوم بتصميم مواقع ويب متكاملة لعرض نشاطك، البيع عبر الإنترنت، أو الترويج لخدماتك، بتصميم عصري ومتوافق مع جميع الأجهزة."',
    
    // Custom Web Apps Service
    'services.apps.title': 'تطبيقات الويب المخصصة',
    'services.apps.for': 'لمن؟',
    'services.apps.for.desc': 'الشركات التي تحتاج إلى أتمتة المهام (الإدارة، المواعيد، التوصيل)',
    'services.apps.desc': '"أطور تطبيقات ويب مخصصة لتبسيط عملك: إدارة المواعيد، متابعة الطلبات، أو الأنظمة الداخلية - متاحة من أي جهاز."',
    
    // Maintenance Service
    'services.maintenance.title': 'تحسين وصيانة المواقع الحالية',
    'services.maintenance.for': 'لمن؟',
    'services.maintenance.for.desc': 'الشركات التي لديها موقع بطيء، غير آمن، أو لا يعمل على الهواتف المحمولة',
    'services.maintenance.desc': '"أصلح وأحسن موقعك الحالي ليكون أسرع، أكثر أماناً، ومرئياً على جوجل."',
    
    // Skills
    'skills.title': 'مهاراتي',
    'skills.frontend': 'الواجهة الأمامية',
    'skills.backend': 'الخادم',
    'skills.tools': 'الأدوات',
    
    // CTA
    'cta.title': 'مستعد للتعاون؟',
    'cta.subtitle': 'عزز حضورك على الإنترنت اليوم!',
    'cta.button': 'ابدأ مشروع',
    'cta.benefits.secure.title': 'آمن وموثوق',
    'cta.benefits.secure.desc': 'أمان على مستوى المؤسسات وضمان توفر بنسبة 99.9% لراحة بالك',
    'cta.benefits.fast.title': 'تسليم سريع',
    'cta.benefits.fast.desc': 'أوقات تسليم سريعة دون المساس بالجودة أو الاهتمام بالتفاصيل',
    'cta.benefits.support.title': 'دعم على مدار الساعة',
    'cta.benefits.support.desc': 'مساعدة مستمرة وتحديثات منتظمة طوال المشروع',
    'cta.social.clients': 'انضم إلى أكثر من 30 عميل راضٍ',
    'cta.social.rating': 'متوسط التقييم 4.7/5',
    'cta.noCommitment': 'لا التزام مطلوب. دعنا نناقش مشروعك!',
    
    // Packages
    'packages.title': 'باقاتي',
    'packages.standard.title': 'الباقة القياسية – موقع ويب ثابت',
    'packages.standard.price': '999 درهم',
    'packages.standard.desc': 'بسيط وسريع',
    'packages.ecommerce.title': 'باقة التجارة الإلكترونية',
    'packages.ecommerce.price': '1,999 درهم',
    'packages.ecommerce.desc': 'بيع عبر الإنترنت بسهولة',
    'packages.pro.title': 'الباقة الاحترافية',
    'packages.pro.price': 'حسب الطلب',
    'packages.pro.desc': 'حل مخصص',
    'packages.choose': 'اختر هذه الباقة',

    // Package Features
    'packages.features.pages6': 'صفحة رئيسية + 5 صفحات كحد أقصى',
    'packages.features.responsive': 'تصميم عصري متوافق مع الهواتف وأجهزة الكمبيوتر',
    'packages.features.hosting': 'اسم نطاق واستضافة مجانية لمدة سنة',
    'packages.features.seo': 'تحسين محركات البحث الأساسي',
    'packages.features.support1': 'دعم فني لمدة شهر',
    'packages.features.map': 'خريطة جوجل تفاعلية',
    'packages.features.delivery7': 'تسليم خلال 7-10 أيام',
    'packages.features.woocommerce': 'متجر إلكتروني كامل (ووردبريس + ووكومرس)',
    'packages.features.products20': 'إضافة 20 منتج (صور ووصف شامل)',
    'packages.features.payment': 'دفع إلكتروني (CMI، تحويل بنكي، الدفع عند الاستلام)',
    'packages.features.hostingPro': 'اسم نطاق واستضافة احترافية مجانية لمدة سنة',
    'packages.features.support2': 'دعم فني لمدة شهرين',
    'packages.features.delivery21': 'تسليم خلال 2-3 أسابيع',
    'packages.features.custom': 'موقع/تطبيق ويب مخصص 100%',
    'packages.features.unique': 'تصميم فريد وسرعة عالية',
    'packages.features.hostingPremium': 'اسم نطاق واستضافة فاخرة مجانية لمدة سنة',
    'packages.features.support3': 'دعم فني لمدة 3 أشهر + تدريب',
    'packages.features.reports': 'لوحات تحكم وتقارير مفصلة',
    'packages.features.stats': 'إحصائيات متقدمة وتحليلات',
    'packages.features.customFunc': 'وظائف مخصصة حسب احتياجاتك',
    'packages.features.webapp': 'تطبيق ويب كامل مع واجهة برمجة REST',
    'packages.features.delivery42': 'تسليم خلال 4-6 أسابيع',
    'packages.features.notifications': 'إشعارات عبر البريد الإلكتروني',
    
    // Projects
    'projects.title': 'مشاريعي',
    'projects.view': 'عرض المشروع',
    'projects.description': 'تصفح مشاريعي من تطبيقات الويب وحلول التجارة الإلكترونية ومواقع عرض الخدمات.',
    'projects.tabs.all': 'الكل',
    'projects.tabs.landing': 'موقع عرض الخدمات',
    'projects.tabs.webapp': 'تطبيق ويب',
    'projects.showMore': 'عرض المزيد',
    'projects.technologies': 'التقنيات المستخدمة',
    'projects.viewLive': 'عرض المشروع مباشرة',
    'projects.privateProject': 'مشروع خاص وآمن',
    'projects.project1.title': 'المشروع 1',
    'projects.project1.description': 'موقع ترويجي لعيادة أسنان حديثة.',
    'projects.project1.longDescription': 'موقع أنيق يعرض خدمات الأسنان، التقويم، فريق الخبراء، شهادات المرضى وحجز المواعيد عبر الإنترنت لعيادة موثوقة.',
    'projects.project2.title': 'المشروع 2',
    'projects.project2.description': 'استوديو تصميم للعمارة المغربية الحديثة.',
    'projects.project2.longDescription': 'موقع أنيق يعرض مزيج أطلس بين الحرفية المغربية التقليدية والعمارة المعاصرة، مع عرض الخدمات، المحفظة، الشهادات وملفات فريق الخبراء.',
    'projects.project3.title': 'المشروع 3',
    'projects.project3.description': 'تصميم موقع لتأجير السيارات الفاخرة',
    'projects.project3.longDescription': 'موقع عربي حديث لتأجير السيارات الفاخرة يعرض المركبات، خطط الأسعار وخيارات التواصل.',
    'projects.project4.title': 'المشروع 4',
    'projects.project4.description': 'موقع لتأجير السيارات الفاخرة بتصميم داكن',
    'projects.project4.longDescription': 'موقع عربي أنيق لتأجير السيارات مع قوائم المركبات الفاخرة، خطوات الخدمة، خطط الأسعار ونموذج تواصل مع تحديد موقع السلة على الخريطة.',
    'projects.project5.title': 'المشروع 5',
    'projects.project5.description': 'عيادة التجميل الطبية في الدار البيضاء.',
    'projects.project5.longDescription': 'كلينيك إيسانس هي عيادة تجميل طبية في الدار البيضاء، تقدم رعاية مخصصة وخبيرة لنتائج طبيعية ومتناغمة. تحت إشراف الدكتورة ليلى بنعلي، تقدم العيادة علاجات تجديد البشرة، نحت الجسم ومكافحة الشيخوخة بأحدث الأجهزة وفي بيئة فاخرة وخاصة.',
    'projects.project6.title': 'المشروع 6',
    'projects.project6.description': 'موقع بورتفوليو لطبيب.',
    'projects.project6.longDescription': 'كلينيك الدكتور بناني هي عيادة قلبية رائدة في الدار البيضاء، متخصصة في جراحات القلب المتقدمة والتدخلات. تحت خبرة الدكتور أحمد بناني، جراح القلب الشهير بأكثر من 15 عامًا من الخبرة، تقدم العيادة خدمات شاملة لرعاية القلب، بما في ذلك الجراحة، الفيزيولوجيا الكهربية والدعم الطارئ على مدار الساعة، مما يضمن التميز ورضى المرضى.',
    'projects.project7.title': 'المشروع 7',
    'projects.project7.description': 'موقع خدمات قانونية شاملة',
    'projects.project7.longDescription': 'المكتب القانوني هو مكتب محاماة رائد في الدار البيضاء، يقدم خبرة قانونية استثنائية في القانون المغربي والدولي. تحت إشراف المحامي أحمد بنعلي، محامي مخضرم بأكثر من 25 عامًا من الخبرة، يقدم المكتب حلولاً قانونية شاملة للشركات.',
    'projects.project8.title': 'المشروع 8',
    'projects.project8.description': 'وكالة سفر فاخرة في المغرب.',
    'projects.project8.longDescription': 'مروك برستيج هي وكالة سفر فاخرة متخصصة تقدم تجارب فريدة وأصيلة عبر المغرب. بأكثر من 15 عامًا من الخبرة، تقدم الوكالة جولات مخصصة وخدمة استثنائية، مما يضمن رحلات لا تُنسى تجمع بين الفخامة.',
    'projects.project9.title': 'المشروع 9',
    'projects.project9.description': 'موقع خبرة قانونية في بني ملال.',
    'projects.project9.longDescription': 'تم تصميم هذا الموقع لممارسة قانونية محترفة، مع التركيز على الخبرة، النزاهة والخدمة المركزة على العميل. يتميز التصميم بتخطيط حديث وأنيق مع ألوان داكنة ومحايدة تنقل الاحترافية والثقة.',
    'projects.project10.title': 'المشروع 10',
    'projects.project10.description': 'قالب موقع لخدمة تأجير السيارات.',
    'projects.project10.longDescription': 'هذا الموقع هو قالب أنيق وسهل الاستخدام مصمم لخدمة تأجير السيارات في بني ملال. يركز القالب على البساطة، الاحترافية وسهولة الاستخدام، موجهاً للمسافرين الأفراد والعملاء المؤسسيين الباحثين عن تأجير مركبات موثوقة.',
    'projects.project14.title': 'المشروع 11',  
    'projects.project14.description': 'خبير في الرعاية الطبية، نهج مخصص',  
    'projects.project14.longDescription': 'خدمات طبية عالية الجودة مع تعاطف وخبرة متقدمة.',  
    'projects.project11.title': 'المشروع 12',
    'projects.project11.description': 'تطبيق ويب لإدارة الأعمال التجارية',
    'projects.project11.longDescription': 'تطوير تطبيق ويب كامل لإدارة العملاء/الموردين، والمخزون، والمنتجات/الخدمات، والمشتريات/المبيعات والمدفوعات، مما يتيح إدارة مركزية لعلاقات العملاء والعمليات التجارية.',
    'projects.project12.title': 'المشروع 13',
    'projects.project12.description': 'تطبيق ويب لإدارة المؤتمرات',
    'projects.project12.longDescription': 'تطوير تطبيق ويب لإدارة المؤتمرات يتيح تنظيم الفعاليات، وإدارة جدول الأعمال، والتفاصيل المهمة وتسجيل المشاركين. يولد التطبيق شارات مخصصة ويتطلب رمز تحقق للتسجيل.',
    'projects.project13.title': 'المشروع 14',
    'projects.project13.description': 'تطبيق ويب لإدارة تواريخ انتهاء صلاحية المنتجات',
    'projects.project13.longDescription': 'يتيح تطبيق إدارة تواريخ انتهاء صلاحية المنتجات للمستخدمين تتبع تواريخ انتهاء صلاحية المنتجات في المخزون وإدارة عمليات سحب هذه المنتجات، مع إرسال تذكيرات تلقائية قبل انتهاء صلاحيتها.',
    
    // Contact
    'contact.title': 'تواصل معي',
    'contact.subtitle': 'لنناقش مشروعك القادم',
    'contact.name': 'الاسم',
    'contact.email': 'البريد الإلكتروني',
    'contact.message': 'الرسالة',
    'contact.send': 'إرسال',
    'contact.contactInfo': 'معلومات الاتصال',
    'contact.followMe': 'تابعني',
    'contact.location': 'بني ملال، المغرب',
    'contact.namePlaceholder': 'اسمك',
    'contact.emailPlaceholder': 'بريدك@الإلكتروني.com',
    'contact.messagePlaceholder': 'رسالتك...',
    'contact.sending': 'جاري الإرسال...',
    'contact.emailLabel': 'البريد الإلكتروني',
    'contact.phone': 'الهاتف',
    'contact.phonePlaceholder': 'رقم هاتفك',
    'contact.locationLabel': 'الموقع',
    'contact.serviceType': 'نوع الخدمة',
    'contact.serviceType.placeholder': 'اختر نوع الخدمة',
    'contact.serviceType.ecommerce': 'متجر إلكتروني',
    'contact.serviceType.vitrine': 'موقع واجهة',
    'contact.serviceType.personnel': 'موقع شخصي',
    'contact.serviceType.blog': 'مدونة',
    'contact.professionalText': 'أنا متاح لمناقشة مشروعك واقتراح حل يناسب احتياجاتك. لا تتردد في الاتصال بي لأي استفسار أو طلب عرض سعر.',
    'contact.success': 'تم إرسال الرسالة بنجاح!',
    'contact.successDescription': 'سأرد عليك في أقرب وقت ممكن.',
    'contact.error': 'خطأ في الإرسال',
    'contact.errorDescription': 'حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.',
    
    // Footer
    'footer.rights': 'جميع الحقوق محفوظة.',
    'footer.made': 'صُنع بـ ❤️ بواسطة',
    
    // Warnings
    'warnings.rightClick': 'النقر بزر الماوس الأيمن معطل على هذا الموقع',
    'warnings.textSelection': 'تحديد النص غير مسموح به على هذا الموقع',
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

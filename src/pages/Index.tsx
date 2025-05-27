
import React from 'react';
import { LanguageProvider } from '../contexts/LanguageContext';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Skills from '../components/Skills';
import CTA from '../components/CTA';
import Packages from '../components/Packages';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Skills />
        <CTA />
        <Packages />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;

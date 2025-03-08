import React, { useEffect } from 'react';
import { Toaster } from 'src/components/ui/toaster';
import Navbar from 'src/components/Navbar';
import HeroSection from 'src/components/HeroSection';
import AboutSection from 'src/components/AboutSection';
import InitiativesSection from 'src/components/InitiativesSection';
import InfoBulletin from 'src/components/InfoBulletin';
import TeamSection from 'src/components/TeamSection';
import EventGallery from 'src/components/EventGallery';
import ContactSection from 'src/components/ContactSection';
import Footer from 'src/components/Footer';
import TestimonialsSection from 'src/components/TestimonialsSection';





const Index: React.FC = () => {
  useEffect(() => {
    const loadFontAwesome = () => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
      document.head.appendChild(link);
    };
    
    loadFontAwesome();
  }, []);

  return (
    <main className="min-h-screen bg-background text-white tech-gradient overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <InfoBulletin />
      <AboutSection />
      <InitiativesSection />
      <TeamSection />
      <EventGallery />
      <ContactSection />
      <TestimonialsSection />
      <Footer />




      <Footer />

      <Footer />
      <Toaster />
    </main>
  );
};

export default Index;

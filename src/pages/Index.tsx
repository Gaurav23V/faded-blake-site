
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';

const Index = () => {
  useEffect(() => {
    // Add smooth scroll behavior to the entire document
    document.documentElement.classList.add('smooth-scroll');
    
    return () => {
      document.documentElement.classList.remove('smooth-scroll');
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <FAQSection />
        <ContactSection />
        
        {/* Quote Section with Background Image */}
        <section className="relative min-h-[60vh] flex items-center justify-center">
          {/* Background Image */}
          <img
            src="/hero-poster.jpg"
            alt="Calm ocean waves"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>

          {/* Text Content */}
          <div className="relative z-20 text-center text-white max-w-3xl px-4">
            <blockquote className="font-playfair italic text-3xl md:text-4xl mb-4">
              "I have come to believe that caring for myself is not self-indulgent. Caring for myself is an act of survival."
            </blockquote>
            <p className="font-lato mt-4">— Audre Lorde</p>
          </div>
        </section>
        
        {/* Footer Section */}
        <section className="py-12 bg-background border-t border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            
            <div className="space-y-2 text-muted-foreground font-lato">
              <h3 className="text-xl font-playfair font-bold text-foreground mb-4">
                Dr. Serena Blake, Ph.D., Licensed Psychologist
              </h3>
              <p>
                <a href="mailto:serena@drserenablake.com" className="hover:text-accent transition-colors duration-300">
                  serena@drserenablake.com
                </a>
              </p>
              <p>Phone: (248) 939-8150 Fax: (248) 939-8190</p>
              <p>28175 Haggerty Rd, Novi, MI 48377</p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex flex-wrap justify-center gap-4 text-sm font-lato">
                <button className="text-muted-foreground hover:text-accent transition-colors duration-300 underline underline-offset-4">
                  Home
                </button>
                <button className="text-muted-foreground hover:text-accent transition-colors duration-300 underline underline-offset-4">
                  Privacy Policy
                </button>
                <button className="text-muted-foreground hover:text-accent transition-colors duration-300 underline underline-offset-4">
                  Good Faith Estimate
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;

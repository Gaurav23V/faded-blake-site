import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import FAQSection from '../components/FAQSection';

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
        
        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gradient-to-br from-accent/10 to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-12">
              <blockquote className="text-2xl md:text-3xl font-playfair italic text-foreground mb-4">
                "I have come to believe that caring for myself is not self-indulgent. Caring for myself is an act of survival."
              </blockquote>
              <p className="text-muted-foreground font-lato">—Audre Lorde</p>
            </div>
            
            <div className="bg-background rounded-2xl p-8 shadow-sm">
              <h2 className="text-3xl font-playfair font-bold text-foreground mb-6">
                Dr. Serena Blake, Ph.D., Licensed Psychologist
              </h2>
              
              <div className="space-y-2 text-muted-foreground font-lato">
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
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;

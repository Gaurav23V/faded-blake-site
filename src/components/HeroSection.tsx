
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Button } from './ui/button';

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-accent/10 pt-20">
      <div 
        ref={ref}
        className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h1 className="text-4xl md:text-6xl font-playfair font-bold text-foreground mb-6 leading-tight">
          Psychological Care for
          <br />
          <span className="text-accent">Change, Insight, and Well-Being</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground font-lato mb-8 max-w-3xl mx-auto leading-relaxed">
          Offering individual psychotherapy for adults via telehealth in Michigan and most U.S. states through{' '}
          <span className="underline decoration-accent underline-offset-4">PSYPACT participation</span>
        </p>
        
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Button
            onClick={() => scrollToSection('contact')}
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-lato font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Schedule a Consultation
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollToSection('about')}
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-lato font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

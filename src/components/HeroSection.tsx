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
    <section className="bg-[#F5F3EF] min-h-screen flex items-center justify-center">
      {/* New Video Container */}
      <div className="relative w-11/12 h-[70vh] mx-auto rounded-xl overflow-hidden flex items-center justify-center">
        {/* Video Background (now inside the container) */}
        <video
          poster="/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay (now inside the container) */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Text Content (now inside the container) */}
        <div 
          ref={ref}
          className={`relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6 leading-tight">
            Compassionate Care for a
            <br />
            <span className="text-white">Balanced Mind</span>
          </h1>
          
          <h2 className="text-lg sm:text-xl md:text-2xl text-white/90 font-lato mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Personalized therapy to help you navigate life's challenges and find your strength.
          </h2>
          
          <Button
            onClick={() => scrollToSection('contact')}
            className="bg-accent hover:bg-accent/80 text-white font-lato font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Book a Free Consult
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

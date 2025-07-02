import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const services = [
    {
      image: '/focus-image-1.jpg',
      title: 'Therapy for Healthcare Providers and Students',
      description: 'The care you provide for others may be driving you to seek therapy, whether due to burnout, compassion fatigue, imposter syndrome, people-pleasing tendencies, or perfectionism. Whether you\'re in pre-professional school, undergoing training, or reflecting on a long career in healthcare, we can address the unique stressors of your professional environment along with any challenges you may be facing in other areas of your life.'
    },
    {
      image: '/focus-image-2.jpg',
      title: 'Therapy for Trauma and Grief',
      description: 'Life\'s challenges, whether a difficult childhood, a traumatic event, or series of events, or the loss of someone or something deeply meaningful, can lead to profound experiences of trauma and grief. Therapy offers a supportive space to process these experiences, care for yourself amidst painful thoughts and emotions, and work toward a sense of grounding and meaning.'
    },
    {
      image: '/focus-image-3.jpg',
      title: 'Therapy for Second Generation Individuals In Immigrant Families',
      description: 'Second generation individuals in immigrant families, born in the U.S. to at least one parent born abroad, often navigate the complexities of multiple cultures and diverse expectations. This experience can bring challenges such as feeling like a foreigner in your own country and navigating strained family relationships. Therapy offers a supportive space to explore and process this unique and multifaceted aspect of your life.'
    }
  ];

  return (
    <section id="services" className="py-32 bg-accent/5">
      <div className="w-full">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Intro text */}
          <div className="text-center mb-16 max-w-4xl mx-auto px-4">
            <h3 className="text-2xl md:text-3xl font-playfair font-semibold text-foreground mb-6 leading-relaxed">
              Therapy can be a space where you invest in yourself—<br />
              one of the highest forms of self-care.
            </h3>
            <p className="text-muted-foreground font-lato leading-relaxed text-lg">
              You may be led to therapy by anxiety, depression, relationship stress, past or recent trauma, grief and loss, self-esteem issues, or challenges with family, parenting, or parental relationships. Whatever the source of your stress, you don't have to face it alone. Therapy offers you the time and space to work toward wellness and peace.
            </p>
          </div>

          {/* Main Areas of Focus section - full width */}
          <div className="w-full min-h-screen flex flex-col justify-center py-20">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-light text-foreground">
                Areas of Focus
              </h2>
            </div>

            {/* Service items grid - full width with proper spacing */}
            <div className="w-full px-8 lg:px-16 xl:px-24">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 xl:gap-20 max-w-[1600px] mx-auto">
                {services.map((service, index) => (
                  <div key={index} className="text-center flex flex-col items-center">
                    {/* Larger circular images */}
                    <div className="w-72 h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 mb-8">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    
                    <h3 className="text-xl lg:text-2xl font-playfair font-semibold text-foreground mb-4 max-w-sm">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground font-lato leading-relaxed text-sm lg:text-base max-w-sm">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

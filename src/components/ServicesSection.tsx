
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Heart, Users, Globe } from 'lucide-react';

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const services = [
    {
      icon: Heart,
      title: 'Therapy for Healthcare Providers and Students',
      description: 'The care you provide for others may be driving you to seek therapy, whether due to burnout, compassion fatigue, imposter syndrome, people-pleasing tendencies, or perfectionism. Whether you\'re in pre-professional school, undergoing training, or reflecting on a long career in healthcare, we can address the unique stressors of your professional environment along with any challenges you may be facing in other areas of your life.'
    },
    {
      icon: Users,
      title: 'Therapy for Trauma and Grief',
      description: 'Life\'s challenges, whether a difficult childhood, a traumatic event, or series of events, or the loss of someone or something deeply meaningful, can lead to profound experiences of trauma and grief. Therapy offers a supportive space to process these experiences, care for yourself amidst painful thoughts and emotions, and work toward a sense of grounding and meaning.'
    },
    {
      icon: Globe,
      title: 'Therapy for Second Generation Individuals In Immigrant Families',
      description: 'Second generation individuals in immigrant families, born in the U.S. to at least one parent born abroad, often navigate the complexities of multiple cultures and diverse expectations. This experience can bring challenges such as feeling like a foreigner in your own country and navigating strained family relationships. Therapy offers a supportive space to explore and process this unique and multifaceted aspect of your life.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-accent/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">
              Areas of Focus
            </h2>
            <p className="text-lg text-muted-foreground font-lato max-w-3xl mx-auto">
              Therapy can be a space where you invest in yourself—one of the highest forms of self-care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-playfair font-semibold text-foreground mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-lato leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-background rounded-2xl p-8 shadow-sm max-w-4xl mx-auto">
              <h3 className="text-2xl font-playfair font-semibold text-foreground mb-4">
                Therapy can be a space where you invest in yourself—<br />
                one of the highest forms of self-care.
              </h3>
              <p className="text-muted-foreground font-lato leading-relaxed">
                You may be led to therapy by anxiety, depression, relationship stress, past or recent trauma, grief and loss, self-esteem issues, or challenges with family, parenting, or parental relationships. Whatever the source of your stress, you don't have to face it alone. Therapy offers you the time and space to work toward wellness and peace.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

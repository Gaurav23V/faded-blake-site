import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  reason: string;
  preferredTime: string;
  agreeToContact: boolean;
}

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<ContactFormData>({
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      reason: '',
      preferredTime: '',
      agreeToContact: false,
    },
  });

  const onSubmit = (data: ContactFormData) => {
    console.log('Form submitted:', data);
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-accent/10 to-background">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground font-lato">
              Ready to take the first step? Fill out the form below and I'll get back to you soon.
            </p>
          </div>

          <div className="bg-background rounded-2xl p-8 shadow-sm min-h-[600px] flex items-center justify-center">
            {isSubmitted ? (
              <div className="w-28 h-28 bg-accent rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  className="w-2/3 h-2/3"
                >
                  <motion.path
                    fill="none"
                    strokeWidth="5"
                    stroke="#F5F3EF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 27l5 5 16-16"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                </svg>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full">
                  <FormField
                    control={form.control}
                    name="name"
                    rules={{ required: "This field is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-lato font-semibold">Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your full name" 
                            className="font-lato"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    rules={{ required: "This field is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-lato font-semibold">Phone</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your phone number" 
                            className="font-lato"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    rules={{ 
                      required: "This field is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Please enter a valid email address"
                      }
                    }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-lato font-semibold">Email</FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="your@email.com" 
                            className="font-lato"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="reason"
                    rules={{ required: "This field is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-lato font-semibold">What brings you here?</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell me a bit about what you're looking for..."
                            className="min-h-[120px] font-lato resize-none"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="preferredTime"
                    rules={{ required: "This field is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-lato font-semibold">Preferred time to reach you</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="e.g., Weekday mornings, Tuesday evenings, etc." 
                            className="font-lato"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="agreeToContact"
                    rules={{ required: "You must agree to be contacted" }}
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox 
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-foreground font-lato">
                            I agree to be contacted
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/80 text-white font-lato font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Submit
                  </Button>
                </form>
              </Form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

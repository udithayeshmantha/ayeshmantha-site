
import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

// Sample testimonials
const testimonials = [
  {
    id: 1,
    name: "Emma Johnson",
    role: "Product Manager at TechCorp",
    content: "Working with this designer was an absolute pleasure. They took our vague concept and transformed it into a stunning, intuitive interface that our users love. The attention to detail and thoughtful interactions really set our product apart.",
    avatar: "EJ" // Placeholder for demo
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO at StartupX",
    content: "One of the most talented designers I've worked with. They have an incredible ability to balance aesthetics with functionality. Our conversion rates increased by 40% after implementing their redesign recommendations.",
    avatar: "MC" // Placeholder for demo
  },
  {
    id: 3,
    name: "Sophia Martinez",
    role: "Marketing Director at CreativeAgency",
    content: "Exceptional design skills and a true professional. They listen carefully to requirements and deliver beyond expectations. Our client was blown away by the final product and we've already booked them for our next major project.",
    avatar: "SM" // Placeholder for demo
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  return (
    <section id="testimonials" className="py-20 px-6 relative bg-gradient-to-b from-black to-deep-charcoal">
      {/* Decorative elements */}
      <div className="circle-decoration w-72 h-72 top-20 left-10 bg-electric-blue/10"></div>
      <div className="circle-decoration w-96 h-96 bottom-10 right-10 bg-violet/10"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text inline-block relative">
            Client Testimonials
            <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-electric-blue to-transparent"></span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            What my clients say about my work and collaboration
          </p>
        </div>
        
        <div className="relative">
          {/* Testimonial Card */}
          <div className="bg-muted/30 backdrop-blur-md rounded-2xl p-8 border border-muted shadow-lg animate-float glow-border">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-electric-blue to-violet flex items-center justify-center text-white font-medium flex-shrink-0">
                {testimonials[activeIndex].avatar}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-text-primary">
                  {testimonials[activeIndex].name}
                </h3>
                <p className="text-text-secondary text-sm">
                  {testimonials[activeIndex].role}
                </p>
              </div>
              <Quote className="ml-auto text-electric-blue opacity-50" size={32} />
            </div>
            
            <p className="text-text-primary text-lg italic">
              "{testimonials[activeIndex].content}"
            </p>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full border border-muted bg-muted/50 flex items-center justify-center text-text-primary hover:text-electric-blue hover:border-electric-blue transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            
            {/* Indicators */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === activeIndex
                      ? "bg-electric-blue w-8"
                      : "bg-muted hover:bg-text-secondary"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full border border-muted bg-muted/50 flex items-center justify-center text-text-primary hover:text-electric-blue hover:border-electric-blue transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

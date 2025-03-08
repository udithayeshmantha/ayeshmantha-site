
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center px-6 overflow-hidden bg-deep-charcoal">
      {/* Decorative elements - simplified circles */}
      <div className="absolute top-20 right-20 w-24 h-24 rounded-full border border-electric-gold/30"></div>
      <div className="absolute bottom-32 left-10 w-10 h-10 rounded-full bg-electric-gold/10"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-electric-gold/5"></div>
      
      <div className="max-w-7xl w-full mx-auto z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Left content */}
        <div className="order-2 lg:order-1">
          <h2 className="text-4xl font-bold mb-2">Hi,</h2>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            I'm <span className="text-electric-gold">Udith</span>
          </h1>
          <p className="text-2xl mb-8 text-white">UI/UX Designer</p>
          
          <div className="mb-10">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-8 py-3 rounded-md bg-electric-gold text-deep-charcoal font-medium transition-all hover:bg-amber"
            >
              Hire Me
              <ArrowRight size={18} />
            </a>
          </div>
          
          <div className="flex items-center gap-3 mt-16">
            <div className="w-8 h-8 rounded-full bg-electric-gold/20 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-electric-gold"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </div>
            <span className="text-text-secondary text-sm">www.github.com/udith</span>
          </div>
        </div>
        
        {/* Right content */}
        <div className="order-1 lg:order-2">
          <div className="relative w-full max-w-md mx-auto lg:ml-auto">
            <div className="absolute right-10 top-10 text-right">
              <p className="text-electric-gold text-sm">Expert on</p>
              <h3 className="text-xl font-bold">Based in Sri Lanka</h3>
              <p className="text-text-secondary mt-1">UI/UX designer and developer</p>
              
              <div className="mt-8 max-w-xs">
                <p className="text-text-primary">
                  Hey are looking for designer to build
                  your brand and grow your business?
                  let's shake hands with me.
                </p>
              </div>
              
              <div className="mt-6">
                <a 
                  href="#" 
                  className="text-electric-gold border-b border-electric-gold pb-1 inline-flex items-center gap-1"
                >
                  Download CV
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                </a>
              </div>
            </div>
            
            <div className="relative z-10">
              <img
                src="src/assest/pp.jpg"
                alt="Profile"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Chat button */}
      <div className="absolute bottom-8 right-8">
        <a 
          href="#contact" 
          className="flex items-center gap-2 bg-deep-charcoal border border-muted px-4 py-2 rounded-full text-sm hover:border-electric-gold transition-colors"
        >
          Let's Chat
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-electric-gold"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

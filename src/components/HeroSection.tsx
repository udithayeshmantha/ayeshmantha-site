
import React from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center pt-16 px-6 overflow-hidden">
      {/* Decorative elements with updated colors */}
      <div className="circle-decoration w-72 h-72 top-20 left-20 bg-amber/20"></div>
      <div className="circle-decoration w-96 h-96 bottom-20 right-10 opacity-10 bg-electric-gold"></div>
      
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDQgTCA0IDAgTCAxNiAxMiBMIDEyIDE2IFogTSAxMiAwIEwgMTYgNCBMIDQgMTYgTCAwIDEyIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDE5MywgNywgMC4xKSI+PC9wYXRoPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSI+PC9yZWN0Pjwvc3ZnPg==')]"></div>
      
      <div className="max-w-7xl w-full mx-auto z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-6">
        <div className="w-full lg:w-1/2 text-left">
          <p className="text-electric-gold mb-2 font-medium">Hello, I'm Udith Ayeshmantha</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-white">I am a</span> <br />
            <span className="bg-gradient-to-r from-electric-gold via-amber to-warm-gold bg-clip-text text-transparent">
              UI/UX Designer
            </span>
          </h1>
          
          <p className="text-xl text-text-secondary mt-6 max-w-xl">
            I design and develop applications that are fast, accessible, 
            and built with modern technologies to solve real-world problems.
          </p>
          
          <div className="mt-10 space-x-4">
            <a 
              href="#contact" 
              className="px-8 py-4 rounded-full bg-electric-gold text-deep-charcoal font-medium transition-all hover:bg-amber"
            >
              Get in touch
            </a>
            <a 
              href="#projects" 
              className="px-8 py-4 rounded-full bg-transparent border border-electric-gold text-electric-gold font-medium transition-all hover:border-amber hover:text-amber"
            >
              View my work
            </a>
          </div>
          
          <div className="flex space-x-6 mt-10">
            <a href="#" className="text-text-secondary hover:text-electric-gold transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </a>
            <a href="#" className="text-text-secondary hover:text-electric-gold transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="#" className="text-text-secondary hover:text-electric-gold transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" className="text-text-secondary hover:text-electric-gold transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            </a>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative">
            {/* Profile image with gold accents */}
            <div className="w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden border-2 border-electric-gold relative">
              <img
                src="src\assest\pp.jpg"
                alt="Your Photo"
                className="w-full h-full object-cover"
              />
              {/* Amber overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/80 to-transparent"></div>
            </div>
            
            {/* Decorative rings with updated colors */}
            <div className="absolute inset-0 -m-4 border-2 border-dashed border-electric-gold/30 rounded-2xl"></div>
            <div className="absolute inset-0 -m-8 border border-amber/20 rounded-2xl"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator with updated colors */}
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-text-secondary hover:text-electric-gold transition-colors"
      >
        <span className="mb-2 text-sm">Scroll Down</span>
        <ArrowDown size={20} />
      </a>
    </section>
  );
};

export default HeroSection;

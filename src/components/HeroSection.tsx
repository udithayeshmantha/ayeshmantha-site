
import React from 'react';
import { ArrowRight, Download, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen relative flex flex-col items-center justify-center pt-16 px-6 overflow-hidden">
      {/* Decorative elements */}
      <div className="circle-decoration w-72 h-72 top-20 left-20 bg-amber/20"></div>
      <div className="circle-decoration w-96 h-96 bottom-20 right-10 opacity-10 bg-electric-gold"></div>

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDQgTCA0IDAgTCAxNiAxMiBMIDEyIDE2IFogTSAxMiAwIEwgMTYgNCBMIDQgMTYgTCAwIDEyIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDE5MywgNywgMC4xKSI+PC9wYXRoPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSI+PC9yZWN0Pjwvc3ZnPg==')]"></div>
      
      <div className="max-w-7xl w-full mx-auto z-10 flex flex-col items-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left column with greeting */}
          <div className="lg:col-span-1 text-left">
            <h2 className="text-5xl font-bold mb-2">Hi,</h2>
            <h1 className="text-5xl font-bold mb-6">
              I'm <span className="text-electric-gold">Udith</span>
            </h1>
            <p className="text-2xl font-medium text-white mb-8">UI/UX Designer</p>
            
            <a 
              href="#contact" 
              className="inline-flex items-center px-8 py-3 rounded-full bg-electric-gold text-deep-charcoal font-medium transition-all hover:bg-amber"
            >
              Hire Me <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          
          {/* Center column with profile image */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="relative">
              <div className="w-64 h-auto rounded-2xl overflow-hidden border-2 border-electric-gold relative">
                <img
                  src="src/assest/pp.jpg"
                  alt="Your Photo"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative shapes */}
              <div className="absolute top-8 -right-10 w-16 h-16 rounded-full border-2 border-amber/30"></div>
              <div className="absolute bottom-10 -left-8 w-10 h-10 rounded-full bg-electric-gold/20"></div>
            </div>
          </div>
          
          {/* Right column with information */}
          <div className="lg:col-span-1 text-left">
            <p className="text-electric-gold font-medium mb-2">Expert on</p>
            <h3 className="text-2xl font-bold mb-1">Based in Sri Lanka</h3>
            <p className="text-xl mb-6">I'm developer and UI/UX designer.</p>
            
            <p className="text-lg mb-8">
              Hey are looking for designer to build your brand and grow your business? let's shake hands with me.
            </p>
            
            <a 
              href="#" 
              className="inline-flex items-center text-electric-gold font-medium hover:underline mb-8"
            >
              Download CV <Download className="ml-2 h-4 w-4" />
            </a>
            
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
        </div>
        
        {/* Chat button */}
        <div className="absolute bottom-10 right-10">
          <Button className="bg-deep-charcoal border border-electric-gold text-white rounded-full p-4 flex items-center gap-2">
            Let's Chat <MessageSquare size={18} />
          </Button>
        </div>
      </div>
      
      {/* Add circle decorations similar to reference */}
      <div className="absolute top-20 right-40 w-20 h-20 rounded-full border border-electric-gold/30"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 rounded-full bg-electric-gold/10"></div>
    </section>
  );
};

export default HeroSection;


import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-deep-charcoal/80 backdrop-blur-md shadow-md" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-text-primary">
          <img src="src\assest\logo.png" alt="Logo" className="inline-block h-8 mr-2" />
          
        </a>
        
        {/* Desktop Menu - Updated with new sections */}
        <ul className="hidden md:flex space-x-8">
          {['Home', 'Projects', 'Experience', 'Skills', 'GitHub', 'Contact'].map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="text-text-primary hover:text-electric-gold transition-colors relative py-2 group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-electric-gold group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-text-primary hover:text-electric-gold"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu - Updated with new sections */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-deep-charcoal/95 backdrop-blur-lg border-t border-muted p-4 shadow-xl animate-fade-in">
          <ul className="space-y-4 px-2">
            {['Home', 'Projects', 'Experience', 'Skills', 'GitHub', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase().replace(' ', '-')}`} 
                  className="block text-text-primary hover:text-electric-gold transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

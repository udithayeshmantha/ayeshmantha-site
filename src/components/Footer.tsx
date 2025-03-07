
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 px-6 border-t border-muted">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-2xl font-bold text-text-primary">
              <span className="text-electric-blue">Port</span>folio
            </a>
          </div>
          
          <div className="text-text-secondary text-sm flex items-center">
            <p>© {currentYear} Udith Ayeshmantha. All rights reserved.</p>
            
          </div>
          
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-sm text-text-secondary hover:text-electric-blue transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

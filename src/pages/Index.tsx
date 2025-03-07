
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import PortfolioSection from '@/components/PortfolioSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import GitHubPanel from '@/components/GitHubPanel';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background particles effect */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30">
        {Array.from({ length: 15 }).map((_, index) => (
          <div 
            key={index}
            className="glowing-dots absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
      
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      
      {/* GitHub Contribution Section */}
      <section id="github" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">My GitHub Activity</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Track my open source contributions and development activity through GitHub's contribution graph.
            </p>
          </div>
          
          <GitHubPanel />
        </div>
      </section>
      
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

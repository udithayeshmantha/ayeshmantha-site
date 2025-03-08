
import React from 'react';
import { Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-6 relative">
      {/* Decorative background elements */}
      <div className="circle-decoration w-72 h-72 bottom-20 left-20 opacity-20 bg-amber/20"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-electric-gold/10 rounded-full mb-4">
            <span className="text-electric-gold font-medium">Experience</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">Work Experience & Education</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A detailed overview of my professional journey and academic background 
            in the field of UI/UX design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience Column */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-electric-gold/20 flex items-center justify-center">
                <Briefcase className="text-electric-gold" size={20} />
              </div>
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </div>
            
            {/* Experience Card 1 */}
            <div className="mb-8 relative group">
              <div className="w-3 h-3 rounded-full bg-electric-gold absolute left-[-30px] top-8 group-hover:animate-pulse"></div>
              <div className="bg-muted/20 rounded-xl p-6 border border-electric-gold/10 hover:border-electric-gold/30 transition-all">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-xl font-bold">Senior UI/UX Designer</h4>
                    <p className="text-text-secondary">DesignStudio Inc.</p>
                  </div>
                  <div className="px-3 py-1 bg-electric-gold/10 rounded-full">
                    <span className="text-sm text-electric-gold">Jan 2022 - Present</span>
                  </div>
                </div>
                
                <p className="text-text-secondary mb-4">
                  Lead the design team in creating intuitive and visually appealing user interfaces. 
                  Conduct user research, create wireframes, prototypes, and high-fidelity mockups for web and mobile applications.
                </p>
                
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-electric-gold shrink-0 mt-1" size={16} />
                    <span>Redesigned flagship product increasing user engagement by 40%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-electric-gold shrink-0 mt-1" size={16} />
                    <span>Established a comprehensive design system reducing design inconsistencies by 65%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-electric-gold shrink-0 mt-1" size={16} />
                    <span>Led user research initiatives resulting in 30% improvement in task completion rates</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Experience Card 2 */}
            <div className="mb-8 relative group">
              <div className="w-3 h-3 rounded-full bg-electric-gold absolute left-[-30px] top-8 group-hover:animate-pulse"></div>
              <div className="bg-muted/20 rounded-xl p-6 border border-electric-gold/10 hover:border-electric-gold/30 transition-all">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-xl font-bold">UI/UX Designer</h4>
                    <p className="text-text-secondary">TechCorp Solutions</p>
                  </div>
                  <div className="px-3 py-1 bg-electric-gold/10 rounded-full">
                    <span className="text-sm text-electric-gold">Mar 2020 - Dec 2021</span>
                  </div>
                </div>
                
                <p className="text-text-secondary mb-4">
                  Designed user-centered interfaces for web and mobile applications. Collaborated with 
                  product managers and developers to implement effective design solutions.
                </p>
                
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-electric-gold shrink-0 mt-1" size={16} />
                    <span>Created user flows and wireframes for 10+ client projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-electric-gold shrink-0 mt-1" size={16} />
                    <span>Implemented design system that improved development efficiency by
                    35%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Education Column */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-electric-gold/20 flex items-center justify-center">
                <GraduationCap className="text-electric-gold" size={20} />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            
            {/* Education Card 1 */}
            <div className="mb-8 relative group">
              <div className="w-3 h-3 rounded-full bg-electric-gold absolute left-[-30px] top-8 group-hover:animate-pulse"></div>
              <div className="bg-muted/20 rounded-xl p-6 border border-electric-gold/10 hover:border-electric-gold/30 transition-all">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-xl font-bold">Master of Design in User Experience</h4>
                    <p className="text-text-secondary">Design University</p>
                  </div>
                  <div className="px-3 py-1 bg-electric-gold/10 rounded-full">
                    <span className="text-sm text-electric-gold">2018 - 2020</span>
                  </div>
                </div>
                
                <p className="text-text-secondary mb-4">
                  Specialized in User Experience Design and Human-Computer Interaction. 
                  Graduated with honors.
                </p>
                
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-electric-gold shrink-0 mt-1" size={16} />
                    <span>Thesis: 'Enhancing User Engagement through Microinteractions'</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-electric-gold shrink-0 mt-1" size={16} />
                    <span>Published research paper on interface design for accessibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-electric-gold shrink-0 mt-1" size={16} />
                    <span>Teaching Assistant for Visual Design courses</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Education Card 2 */}
            <div className="mb-8 relative group">
              <div className="w-3 h-3 rounded-full bg-electric-gold absolute left-[-30px] top-8 group-hover:animate-pulse"></div>
              <div className="bg-muted/20 rounded-xl p-6 border border-electric-gold/10 hover:border-electric-gold/30 transition-all">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-xl font-bold">Bachelor of Arts in Graphic Design</h4>
                    <p className="text-text-secondary">Creative Arts College</p>
                  </div>
                  <div className="px-3 py-1 bg-electric-gold/10 rounded-full">
                    <span className="text-sm text-electric-gold">2014 - 2018</span>
                  </div>
                </div>
                
                <p className="text-text-secondary mb-4">
                  Comprehensive program covering visual design principles, typography, 
                  color theory, and digital design tools.
                </p>
                
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-electric-gold shrink-0 mt-1" size={16} />
                    <span>Graduated with First Class Honors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-electric-gold shrink-0 mt-1" size={16} />
                    <span>Winner of Annual Student Design Showcase</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

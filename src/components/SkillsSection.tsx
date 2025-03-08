
import React from 'react';

const skills = [
  { 
    category: "Design",
    items: ["UI Design", "UX Research", "Interaction Design", "Wireframing", "Prototyping", "Design Systems"] 
  },
  { 
    category: "Tools",
    items: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "InVision", "Sketch"] 
  },
  { 
    category: "Development",
    items: ["HTML/CSS", "JavaScript", "React", "Responsive Design", "Accessibility", "Git"] 
  },
  { 
    category: "Soft Skills",
    items: ["Communication", "Problem Solving", "Teamwork", "Time Management", "Adaptability", "Empathy"] 
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-6 relative bg-gradient-to-b from-deep-charcoal to-black">
      {/* Decorative element */}
      <div className="circle-decoration w-80 h-80 top-40 left-20 bg-electric-blue/10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text inline-block relative">
            My Skills
            <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-electric-blue to-transparent"></span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A collection of my technical and creative abilities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skills.map((skillGroup, index) => (
            <div 
              key={index} 
              className="bg-muted bg-opacity-30 backdrop-blur-sm rounded-xl p-6 border border-muted hover:border-electric-blue/50 transition-all duration-300 group"
            >
              <h3 className="text-xl font-semibold mb-4 text-electric-blue group-hover:animate-glow-text">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="skill-pill group-hover:animate-pulse-glow"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Skill Bars Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold mb-10 text-center">Proficiency Levels</h3>
          <div className="space-y-8">
            {[
              { skill: "UI Design", level: 95 },
              { skill: "UX Research", level: 85 },
              { skill: "Prototyping", level: 90 },
              { skill: "Interaction Design", level: 88 },
              { skill: "Frontend Development", level: 75 }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="flex justify-between mb-2">
                  <span className="text-text-primary">{item.skill}</span>
                  <span className="text-electric-blue">{item.level}%</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-electric-blue to-violet rounded-full relative group"
                    style={{ width: `${item.level}%` }}
                  >
                    <div className="absolute top-0 right-0 bottom-0 w-2 bg-neon-green opacity-50 group-hover:animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

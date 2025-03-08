
import React, { useState } from 'react';
import { Code, ExternalLink } from 'lucide-react';

// Project types
type Technology = string;

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: Technology[];
  demoLink: string;
  codeLink?: string;
}

// Sample projects data
const projectsData: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "Web",
    description: "A full-featured e-commerce platform with payment processing, user authentication, and product management.",
    image: "bg-gradient-to-br from-amber/40 to-electric-gold/30",
    technologies: ["React", "Node.js", "MongoDB"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    id: 2,
    title: "Task Management App",
    category: "Mobile",
    description: "A productivity application to help teams organize tasks, track progress, and manage projects efficiently.",
    image: "bg-gradient-to-br from-electric-gold/40 to-amber/30",
    technologies: ["TypeScript", "React", "Firebase"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    id: 3,
    title: "Finance Dashboard",
    category: "Web",
    description: "Interactive dashboard for financial data visualization and analysis with real-time updates.",
    image: "bg-gradient-to-br from-warm-gold/30 to-electric-gold/30",
    technologies: ["React", "D3.js", "TailwindCSS"],
    demoLink: "#"
  },
  {
    id: 4,
    title: "Health & Fitness App",
    category: "Mobile",
    description: "Mobile application for tracking fitness goals, nutrition planning, and workout routines.",
    image: "bg-gradient-to-br from-electric-gold/30 to-neon-gold/30",
    technologies: ["React Native", "Redux", "Firebase"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    id: 5,
    title: "Travel Companion",
    category: "Design",
    description: "UI/UX design for a travel app with itinerary planning, booking features, and local recommendations.",
    image: "bg-gradient-to-br from-amber/30 to-neon-gold/30",
    technologies: ["Figma", "Adobe XD", "Illustrator"],
    demoLink: "#"
  },
  {
    id: 6,
    title: "Educational Platform",
    category: "Web",
    description: "Online learning platform with course management, video streaming, and interactive quizzes.",
    image: "bg-gradient-to-br from-neon-gold/30 to-amber/30",
    technologies: ["React", "Node.js", "PostgreSQL"],
    demoLink: "#",
    codeLink: "#"
  }
];

// Categories for filter
const categories = ["All", "Web", "Mobile", "Design"];

const RecentWorksSection = () => {
  const [filter, setFilter] = useState("All");
  
  const filteredProjects = filter === "All"
    ? projectsData
    : projectsData.filter(project => project.category === filter);
  
  return (
    <section id="recent-works" className="py-20 px-6 relative">
      {/* Decorative element */}
      <div className="circle-decoration w-96 h-96 top-20 right-0 bg-amber/20"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-electric-gold/10 rounded-full mb-4">
            <span className="text-electric-gold font-medium">Projects</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">My Recent Work</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Explore my portfolio of projects spanning web applications, mobile 
            development, and design work.
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === category
                  ? "bg-electric-gold text-deep-charcoal shadow-neon-gold"
                  : "bg-muted/40 text-text-secondary hover:bg-muted/60"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative bg-muted/20 backdrop-blur-sm rounded-2xl overflow-hidden border border-electric-gold/10 hover:border-electric-gold/30 transition-all duration-300 hover:shadow-neon-gold/10">
              {/* Project Image/Preview */}
              <div className={`aspect-video rounded-t-xl overflow-hidden ${project.image}`}>
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-white/50 text-sm">Project Preview</span>
                </div>
              </div>
              
              {/* Project Details */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-electric-gold transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs px-2 py-1 bg-electric-gold/10 rounded-full text-electric-gold">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="text-xs px-2 py-1 bg-deep-charcoal rounded-full text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action Links */}
                <div className="flex justify-between">
                  <a 
                    href={project.demoLink} 
                    className="flex items-center gap-1 text-electric-gold hover:text-white text-sm"
                  >
                    <ExternalLink size={14} />
                    <span>Live Demo</span>
                  </a>
                  
                  {project.codeLink && (
                    <a 
                      href={project.codeLink} 
                      className="flex items-center gap-1 text-electric-gold hover:text-white text-sm"
                    >
                      <Code size={14} />
                      <span>View Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="px-8 py-3 rounded-full border border-electric-gold text-electric-gold hover:bg-electric-gold/10 transition-all hover:shadow-neon-gold inline-flex items-center gap-2"
          >
            <span>View All Projects</span>
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default RecentWorksSection;

import React, { useState } from "react";
import { ArrowUpRight, Eye } from "lucide-react";

// Sample portfolio projects
const projects = [
  {
    id: 1,
    title: "Finance Dashboard UI",
    category: "Web Design",
    description:
      "Modern financial dashboard with data visualization and user management.",
    image: "bg-gradient-to-br from-electric-blue/40 to-violet/30", // Placeholder for demo
  },
  {
    id: 2,
    title: "Travel Mobile App",
    category: "Mobile App",
    description:
      "Travel planning application with itinerary builder and local recommendations.",
    image: "bg-gradient-to-br from-violet/40 to-electric-blue/30", // Placeholder for demo
  },
  {
    id: 3,
    title: "E-Commerce Redesign",
    category: "Web Design",
    description:
      "Complete redesign of an e-commerce platform focused on user experience.",
    image: "bg-gradient-to-br from-neon-green/30 to-electric-blue/30", // Placeholder for demo
  },
  {
    id: 4,
    title: "Smart Home Control",
    category: "UX/UI",
    description:
      "Interface design for a connected home system with intuitive controls.",
    image: "bg-gradient-to-br from-electric-blue/30 to-neon-green/30", // Placeholder for demo
  },
  {
    id: 5,
    title: "Health Tracking App",
    category: "Mobile App",
    description:
      "Health monitoring application with data insights and progress visualization.",
    image: "bg-gradient-to-br from-violet/30 to-neon-green/30", // Placeholder for demo
  },
  {
    id: 6,
    title: "Creative Agency Website",
    category: "Web Design",
    description:
      "Dynamic website for a creative studio with interactive elements.",
    image: "bg-gradient-to-br from-neon-green/30 to-violet/30", // Placeholder for demo
  },
];

// Categories for filter
const categories = ["All", "Web Design", "Mobile App", "UX/UI"];

const PortfolioSection = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-20 px-6 relative">
      {/* Decorative element */}
      <div className="circle-decoration w-96 h-96 bottom-20 right-0 bg-violet/20"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text inline-block relative">
            My Projects
            <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-electric-blue to-transparent"></span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Explore my recent design work and creative projects
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
                  ? "bg-electric-blue text-white shadow-neon-blue"
                  : "bg-muted text-text-secondary hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="portfolio-card group">
              {/* Project Image (placeholder) */}
              <div
                className={`aspect-video rounded-xl overflow-hidden ${project.image} transition-all duration-500`}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-white/50 text-sm">Project Image</span>
                </div>
              </div>

              {/* Overlay */}
              <div className="portfolio-overlay">
                <div className="mb-auto ml-auto">
                  <div className="w-10 h-10 rounded-full bg-electric-blue/20 backdrop-blur-sm flex items-center justify-center text-white border border-white/10 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
                <div>
                  <span className="text-sm text-electric-blue mb-1 inline-block">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary text-sm mb-4">
                    {project.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-electric-blue hover:text-white transition-colors gap-2 text-sm"
                  >
                    <Eye size={16} />
                    <span>View Project</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="px-8 py-3 rounded-full border border-electric-blue text-electric-blue hover:bg-electric-blue/10 transition-all hover:shadow-neon-blue inline-flex items-center gap-2"
          >
            <span>View All Projects</span>
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

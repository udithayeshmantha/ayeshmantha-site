// filepath: c:\Users\udith\Desktop\GITHUB Project\portfolio-site\src\components\RecentWorksSection.tsx
import React, { useState } from "react";
import { Code, ExternalLink } from "lucide-react";
import votelyImage from "../assets/votely.png"; // Import the image
import zenauraImage from "../assets/zenaura.png"; // Import the image
import moneymapImage from "../assets/moneymap.png"; // Import the image
import VestaImage from "../assets/vesta.png"; // Import the image
import FoodDeliveryImage from "../assets/FoodDelivery.png"; // Import the image
import TastyGoImage from "../assets/TastyGo.png"; // Import the image

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
    title: "Votely E-Voting System",
    category: "Web",
    description:
      "A secure and user-friendly electronic voting system ensuring transparency, integrity, and ease of access for voters and administrators.",
    image: votelyImage, // Use the imported image
    technologies: ["React", "Node.js", "MongoDB"],
    demoLink: "https://github.com/udithayeshmantha/Votely-E-voting-system",
    codeLink: "https://github.com/udithayeshmantha/Votely-E-voting-system",
  },
  {
    id: 2,
    title: "Zenaura - Medication Music App",
    category: "Mobile",
    description:
      "A Flutter-based mobile app that combines medication reminders with personalized music playlists for a relaxing and therapeutic experience.",
    image: zenauraImage,
    technologies: ["Flutter", "Dart", "Firebase"],
    demoLink: "https://github.com/udithayeshmantha/Zenaura",
    codeLink: "https://github.com/udithayeshmantha/Zenaura",
  },
  {
    id: 3,
    title: "MoneyMap - Money Tracking App",
    category: "Mobile",
    description:
      "A Flutter-based money tracking app that helps users manage their income and expenses effectively with real-time balance calculations and Firebase integration.",
    image: moneymapImage,
    technologies: ["Flutter", "Firebase Firestore", "Firebase Authentication"],
    demoLink: "#",
    codeLink: "https://github.com/udithayeshmantha/MoneyMap-Moneytracking-App",
  },
  {
    id: 4,
    title: "Vésta Clothing Site UI",
    category: "UI/UX Design",
    description:
      "A modern and visually appealing UI design for an e-commerce clothing store, created in Figma with a focus on user experience and aesthetics.",
    image: VestaImage,
    technologies: ["Figma", "Photoshop", "Illustrator"],
    demoLink:
      "https://www.figma.com/community/file/1480308391245874729/vesta-cloth-shop-ui",
    codeLink:
      "https://www.figma.com/community/file/1480308391245874729/vesta-cloth-shop-ui",
  },

  {
    id: 6,
    title: "Food Delivery App UI",
    category: "UI/UX Design",
    description:
      "A sleek and intuitive UI design for a food delivery app, created in Figma with a focus on usability, aesthetics, and smooth navigation.",
    image: TastyGoImage,
    technologies: ["Figma", "Photoshop", "Illustrator"],
    demoLink: "https://www.figma.com/community/file/1480602867035811515/food-delivery-app",
    codeLink: "https://www.figma.com/community/file/1480602867035811515/food-delivery-app",
  },
];

// Categories for filter
const categories = ["All", "Web", "Mobile", "UI/UX Design"];

const RecentWorksSection = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-20 px-6 relative">
      {/* Decorative element */}
      <div className="circle-decoration w-96 h-96 top-20 right-0 bg-amber/20"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-electric-gold/10 rounded-full mb-4">
            <span className="text-electric-gold font-medium">Projects</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
            My Recent Work
          </h2>
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
            <div
              key={project.id}
              className="group relative bg-muted/20 backdrop-blur-sm rounded-2xl overflow-hidden border border-electric-gold/10 hover:border-electric-gold/30 transition-all duration-300 hover:shadow-neon-gold/10"
            >
              {/* Project Image/Preview */}
              <div
                className={`aspect-video rounded-t-xl overflow-hidden ${project.image}`}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform transform group-hover:scale-105"
                  />
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
                      <span>View</span>
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

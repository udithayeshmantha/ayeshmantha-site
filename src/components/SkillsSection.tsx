import React from "react";

const skills = [
  {
    category: "Design",
    items: [
      "UI Design",
      "UX Research",
      "Interaction Design",
      "Wireframing",
      "Prototyping",
      "Design Systems",
    ],
  },
  {
    category: "Tools",
    items: [
      "Figma",
      "Adobe XD",
      "Photoshop",
      "Illustrator",
      "Premiere Pro",
      "After Effects",
    ],
  },
  {
    category: "Development",
    items: [
      "HTML/CSS",
      "JavaScript",
      "React",
      "Responsive Design",
      "Bootstrap",
      "Tailwind CSS",
      "Flutter",
      "Dart",
      "Firebase",
      "Accessibility",
      "Git",
    ],
  },
  {
    category: "Soft Skills",
    items: [
      "Communication",
      "Problem Solving",
      "Teamwork",
      "Time Management",
      "Adaptability",
      "Empathy",
      "Creativity",
      "Critical Thinking",
    ],
  },
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="py-20 px-6 relative bg-gradient-to-b from-deep-charcoal to-black"
    >
      {/* Decorative element */}
      <div className="circle-decoration w-80 h-80 top-40 left-20 bg-electric-gold/10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-electric-gold/10 rounded-full mb-4">
            <span className="text-electric-gold font-medium">Skills</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My Skills
            <span className="block h-1 w-20 bg-electric-gold mx-auto mt-4"></span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A collection of my technical and creative abilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="bg-muted/30 backdrop-blur-sm rounded-xl p-6 border border-electric-gold/10 hover:border-electric-gold/30 transition-all duration-300 group"
            >
              <h3 className="text-xl font-semibold mb-4 text-electric-gold">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-muted px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border border-transparent hover:border-electric-gold/50"
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
          <h3 className="text-2xl font-semibold mb-10 text-center">
            Proficiency Levels
          </h3>
          <div className="space-y-8">
            {[
              { skill: "UI Design", level: 95 },
              { skill: "UX Research", level: 85 },
              { skill: "Prototyping", level: 90 },
              { skill: "Interaction Design", level: 88 },
              { skill: "Frontend Development", level: 75 },
              { skill: "Moblie App Development", level: 60 },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="flex justify-between mb-2">
                  <span className="text-text-primary">{item.skill}</span>
                  <span className="text-electric-gold">{item.level}%</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-electric-gold to-amber rounded-full relative"
                    style={{ width: `${item.level}%` }}
                  >
                    <div className="absolute top-0 right-0 bottom-0 w-2 bg-warm-gold opacity-50"></div>
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

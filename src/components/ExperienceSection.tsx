import React from "react";
import { Briefcase, GraduationCap, CheckCircle2 } from "lucide-react";

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
            Work Experience & Education
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A detailed overview of my professional journey and academic
            background in the field of UI/UX design.
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
                    <h4 className="text-xl font-bold">
                      UI/UX Designer (Part-time)
                    </h4>
                    <p className="text-text-secondary">CodeScape Solutions</p>
                  </div>
                  <div className="px-3 py-1 bg-electric-gold/10 rounded-full">
                    <span className="text-sm text-electric-gold">
                      Jan 2024 - Aug 2024
                    </span>
                  </div>
                </div>

                <p className="text-text-secondary mb-4">
                  As a UI/UX designer at CodeScape Solutions, I was responsible
                  for creating user-centered designs for web and mobile
                  applications. My role involved wireframing, prototyping, and
                  collaborating with developers to ensure a seamless user
                  experience and visually appealing interfaces.
                </p>

                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      className="text-electric-gold shrink-0 mt-1"
                      size={16}
                    />
                    <span>
                      Designed and implemented user-friendly interfaces for
                      multiple web and mobile applications
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      className="text-electric-gold shrink-0 mt-1"
                      size={16}
                    />
                    <span>
                      Created interactive prototypes to streamline development
                      and user testing
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      className="text-electric-gold shrink-0 mt-1"
                      size={16}
                    />
                    <span>
                      Collaborated with developers to enhance UI consistency and
                      responsiveness
                    </span>
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
                    <h4 className="text-xl font-bold">
                      Freelance Video Editor
                    </h4>
                    <p className="text-text-secondary">Ark Creatives</p>
                  </div>
                  <div className="px-3 py-1 bg-electric-gold/10 rounded-full">
                    <span className="text-sm text-electric-gold">
                      Jan 2023 - Dec 2023
                    </span>
                  </div>
                </div>

                <p className="text-text-secondary mb-4">
                  Specialized in editing and enhancing video content for a wide
                  range of clients, ensuring each project aligns with their
                  vision and objectives.
                </p>

                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      className="text-electric-gold shrink-0 mt-1"
                      size={16}
                    />
                    <span>
                      Edited 20+ videos across various industries including
                      tech, fashion, and automotive
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      className="text-electric-gold shrink-0 mt-1"
                      size={16}
                    />
                    <span>
                      Streamlined editing workflows, improving project
                      turnaround time by 25%
                    </span>
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
                    <h4 className="text-xl font-bold">
                      BSc (Hons) in Information and <br />
                      Communication Technology
                    </h4>
                    <p className="text-text-secondary">
                      Uva Wellassa University
                    </p>
                  </div>
                  <div className="px-3 py-1 bg-electric-gold/10 rounded-full">
                    <span className="text-sm text-electric-gold">
                      2022 - 2026
                    </span>
                  </div>
                </div>

                <p className="text-text-secondary mb-4">
                  Specialized in Software Technology with a focus on Full-Stack
                  Development and UI/UX Design.
                </p>

                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      className="text-electric-gold shrink-0 mt-1"
                      size={16}
                    />
                    <span>
                      Independent Study Project: 'Innovative Solutions for
                      E-Governance'
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      className="text-electric-gold shrink-0 mt-1"
                      size={16}
                    />
                    <span>Developed a Money Tracking App using Flutter</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      className="text-electric-gold shrink-0 mt-1"
                      size={16}
                    />
                    <span>President of the Design Circle in the Art Club</span>
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
                    <h4 className="text-xl font-bold">Advanced Level</h4>
                    <p className="text-text-secondary">
                      Mahinda Rajapaksha College, Homagama
                    </p>
                  </div>
                  <div className="px-3 py-1 bg-electric-gold/10 rounded-full">
                    <span className="text-sm text-electric-gold">
                      2012 - 2020
                    </span>
                  </div>
                </div>

                <p className="text-text-secondary mb-4">
                  Focused on core subjects with an emphasis on Information and
                  Communication Technology, Mathematics, and Science.
                </p>

                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      className="text-electric-gold shrink-0 mt-1"
                      size={16}
                    />
                    <span>
                      Achieved high performance in ICT and Mathematics
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      className="text-electric-gold shrink-0 mt-1"
                      size={16}
                    />
                    <span>
                      Active participant in school tech and design competitions
                    </span>
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

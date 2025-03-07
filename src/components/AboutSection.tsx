import React from "react";
import { User, LayoutGrid, Code, Lightbulb, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 relative">
      {/* Decorative element */}
      <div className="circle-decoration w-96 h-96 -top-48 right-0 bg-violet/20"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text inline-block relative">
            About Me
            <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-electric-blue to-transparent"></span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Get to know more about me, my background, and what drives my passion
            for design
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-lg text-text-secondary mb-6">
              I'm a passionate UI/UX designer dedicated to creating intuitive
              and engaging digital experiences. With a background in visual
              design and a love for problem-solving, I bridge the gap between
              user needs and business goals through thoughtful design.
            </p>

            <p className="text-lg text-text-secondary mb-8">
              My design philosophy centers around understanding the user first,
              then crafting solutions that are both beautiful and functional. I
              believe that great design should feel invisible, guiding users
              naturally to their goals.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <LayoutGrid size={20} />, text: "UI/UX Design" },
                { icon: <Code size={20} />, text: "Prototyping" },
                { icon: <Lightbulb size={20} />, text: "User Research" },
                { icon: <Heart size={20} />, text: "Design Systems" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 text-text-primary group"
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-muted group-hover:bg-electric-blue/20 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10 border border-muted rounded-2xl p-1 bg-deep-charcoal/50 backdrop-blur-sm overflow-hidden group transition-all duration-500 hover:shadow-neon-blue">
              <div className="aspect-square rounded-2xl overflow-hidden">
                {/* Replace with your actual about image */}
                <div className="w-full h-full bg-gradient-to-bl from-electric-blue/40 to-violet/40 flex items-center justify-center text-text-primary">
                  <img
                    src="src\assest\aboutme.jpg" // Replace with the actual path to your photo
                    alt="Your Photo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Decorative lines */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-electric-blue opacity-70"></div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-violet opacity-70"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

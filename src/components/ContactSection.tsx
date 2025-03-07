
import React from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };
  
  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="circle-decoration w-80 h-80 top-20 right-20 bg-violet/10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text inline-block relative">
            Get In Touch
            <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-electric-blue to-transparent"></span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's talk!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="order-2 lg:order-1">
            <div className="bg-muted/30 backdrop-blur-sm rounded-xl p-8 border border-muted glow-border h-full">
              <h3 className="text-2xl font-semibold mb-6 text-text-primary">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-electric-blue/20 flex items-center justify-center text-electric-blue">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-text-secondary text-sm">Email</p>
                    <a href="mailto:hello@example.com" className="text-text-primary hover:text-electric-blue transition-colors">
                      hello@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-electric-blue/20 flex items-center justify-center text-electric-blue">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-text-secondary text-sm">Phone</p>
                    <a href="tel:+1234567890" className="text-text-primary hover:text-electric-blue transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-electric-blue/20 flex items-center justify-center text-electric-blue">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-text-secondary text-sm">Location</p>
                    <p className="text-text-primary">San Francisco, CA</p>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="mt-10">
                <h4 className="text-lg font-medium mb-4 text-text-primary">Connect With Me</h4>
                <div className="flex gap-4">
                  {[
                    { icon: <Github size={18} />, href: "#", label: "GitHub" },
                    { icon: <Linkedin size={18} />, href: "#", label: "LinkedIn" },
                    { icon: <Twitter size={18} />, href: "#", label: "Twitter" },
                    { icon: <Instagram size={18} />, href: "#", label: "Instagram" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-text-secondary hover:text-electric-blue hover:bg-muted/80 transition-all group"
                    >
                      <span className="group-hover:animate-pulse-glow">{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="order-1 lg:order-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-text-primary mb-2 text-sm">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-muted/30 border border-muted rounded-lg px-4 py-3 text-text-primary focus:border-electric-blue focus:outline-none focus:ring-1 focus:ring-electric-blue transition-all backdrop-blur-sm"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-text-primary mb-2 text-sm">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-muted/30 border border-muted rounded-lg px-4 py-3 text-text-primary focus:border-electric-blue focus:outline-none focus:ring-1 focus:ring-electric-blue transition-all backdrop-blur-sm"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-text-primary mb-2 text-sm">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full bg-muted/30 border border-muted rounded-lg px-4 py-3 text-text-primary focus:border-electric-blue focus:outline-none focus:ring-1 focus:ring-electric-blue transition-all backdrop-blur-sm"
                  placeholder="Project Inquiry"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-text-primary mb-2 text-sm">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full bg-muted/30 border border-muted rounded-lg px-4 py-3 text-text-primary focus:border-electric-blue focus:outline-none focus:ring-1 focus:ring-electric-blue transition-all backdrop-blur-sm resize-none"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="px-6 py-3 bg-electric-blue text-white rounded-lg hover:shadow-neon-blue transition-all flex items-center gap-2 group"
              >
                <span>Send Message</span>
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;


import React from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram, Facebook, Figma } from 'lucide-react';

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };
  
  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="circle-decoration w-80 h-80 top-20 right-20 bg-amber/10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-electric-gold/10 rounded-full mb-4">
            <span className="text-electric-gold font-medium">Contact</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In Touch
            <span className="block h-1 w-20 bg-electric-gold mx-auto mt-4"></span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's talk!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="order-2 lg:order-1">
            <div className="bg-muted/20 backdrop-blur-sm rounded-xl p-8 border border-electric-gold/10 hover:border-electric-gold/30 transition-all h-full">
              <h3 className="text-2xl font-semibold mb-6 text-text-primary">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-electric-gold/20 flex items-center justify-center text-electric-gold">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-text-secondary text-sm">Email</p>
                    <a href="mailto:udithayeshmantha@gmail.com" className="text-text-primary hover:text-electric-gold transition-colors">
                    udithayeshmantha@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-electric-gold/20 flex items-center justify-center text-electric-gold">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-text-secondary text-sm">Phone</p>
                    <a href="tel:+94761693863" className="text-text-primary hover:text-electric-gold transition-colors">
                      +94 76 169 3863
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-electric-gold/20 flex items-center justify-center text-electric-gold">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-text-secondary text-sm">Location</p>
                    <p className="text-text-primary">Colombo, Sri Lanka</p>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="mt-10">
                <h4 className="text-lg font-medium mb-4 text-text-primary">Connect With Me</h4>
                <div className="flex gap-4">
                  {[
                    { icon: <Github size={18} />, href: "https://github.com/udithayeshmantha", label: "GitHub" },
                    { icon: <Figma size={18} />, href: "https://www.figma.com/@udithayeshmanth", label: "Figma" },
                    { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/udithayeshmantha/", label: "LinkedIn" },
                    { icon: <Facebook size={18} />, href: "https://www.facebook.com/udith.ayeshmantha/", label: "Facebook" },
                    { icon: <Instagram size={18} />, href: "https://www.instagram.com/udithayeshmantha/", label: "Instagram" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-text-secondary hover:text-electric-gold hover:bg-muted/80 transition-all"
                    >
                      {social.icon}
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
                    className="w-full bg-muted/20 border border-electric-gold/10 rounded-lg px-4 py-3 text-text-primary focus:border-electric-gold focus:outline-none focus:ring-1 focus:ring-electric-gold transition-all backdrop-blur-sm"
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
                    className="w-full bg-muted/20 border border-electric-gold/10 rounded-lg px-4 py-3 text-text-primary focus:border-electric-gold focus:outline-none focus:ring-1 focus:ring-electric-gold transition-all backdrop-blur-sm"
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
                  className="w-full bg-muted/20 border border-electric-gold/10 rounded-lg px-4 py-3 text-text-primary focus:border-electric-gold focus:outline-none focus:ring-1 focus:ring-electric-gold transition-all backdrop-blur-sm"
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
                  className="w-full bg-muted/20 border border-electric-gold/10 rounded-lg px-4 py-3 text-text-primary focus:border-electric-gold focus:outline-none focus:ring-1 focus:ring-electric-gold transition-all backdrop-blur-sm resize-none"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="px-6 py-3 bg-electric-gold text-deep-charcoal rounded-lg hover:bg-amber transition-all flex items-center gap-2 group"
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

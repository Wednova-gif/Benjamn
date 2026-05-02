/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Menu, 
  X, 
  ExternalLink, 
  Star, 
  CheckCircle2, 
  Globe, 
  MessageCircle, 
  Instagram, 
  Facebook, 
  Mail, 
  Search, 
  Layout, 
  Users, 
  Video, 
  BookOpen, 
  PenTool, 
  TrendingUp, 
  MapPin, 
  Clock,
  Quote
} from 'lucide-react';

// --- Constants & Types ---

const NAVIGATION_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

const TESTIMONIALS = [
  {
    name: "Sarah Wasson",
    role: "Business Owner",
    content: "Benjamin transformed our online presence. Our new website is slick, fast, and most importantly, it actually converts visitors into customers. His attention to detail is unmatched.",
    rating: 5,
    type: "Web Design"
  },
  {
    name: "Mike Chatlos",
    role: "Independent Author",
    content: "The KDP formatting was flawless and the book trailer he created was cinematic perfection. My book launch was a success thanks to Benjamin's expertise in Amazon SEO.",
    rating: 5,
    type: "Author Services"
  },
  {
    name: "Lewis",
    role: "Local Service Business",
    content: "Our Google Business Profile was a mess until Benjamin took over. He resolved our suspension and optimized our listing. We're now ranking #1 in our local area.",
    rating: 5,
    type: "Local SEO"
  }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-luxury-black/90 backdrop-blur-md py-4 border-b border-luxury-gold/20' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-serif font-bold text-luxury-gold tracking-tight">
          Benjamin <span className="hidden sm:inline">Ajibola</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {NAVIGATION_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-luxury-gray hover:text-luxury-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-5 py-2 border border-luxury-gold text-luxury-gold text-sm font-medium hover:bg-luxury-gold hover:text-luxury-black transition-all"
          >
            Work With Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-luxury-gold" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-luxury-dark border-b border-luxury-gold/20 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {NAVIGATION_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium text-luxury-gray hover:text-luxury-gold"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,168,76,0.1),transparent_70%)]" />
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute border border-luxury-gold/5"
          initial={{ 
            width: Math.random() * 300 + 200, 
            height: Math.random() * 300 + 200,
            x: Math.random() * 100 + '%',
            y: Math.random() * 100 + '%',
            rotate: Math.random() * 360
          }}
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: Math.random() * 20 + 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }}
        />
      ))}
    </div>
  );
};

const SectionHeading = ({ title, subtitle, centered = true }: { title: string, subtitle?: string, centered?: boolean }) => {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-luxury-gold font-medium tracking-widest uppercase text-xs mb-3"
      >
        {subtitle}
      </motion.p>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
      >
        {title}
      </motion.h2>
      <div className={`h-1 w-20 bg-luxury-gold ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
};

const ServiceCard = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-luxury-dark p-8 gold-border gold-glow group"
  >
    <div className="w-12 h-12 bg-luxury-gold/10 flex items-center justify-center mb-6 border border-luxury-gold/20 group-hover:bg-luxury-gold group-hover:text-luxury-black transition-all duration-300">
      <Icon size={24} className="text-luxury-gold group-hover:text-luxury-black" />
    </div>
    <h4 className="text-xl font-bold mb-3 group-hover:text-luxury-gold transition-colors">{title}</h4>
    <p className="text-luxury-gray text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

const PortfolioCard = ({ title, label, result }: { title: string, label: string, result: string }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="relative group overflow-hidden bg-luxury-dark aspect-video gold-border"
  >
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-8 flex flex-col justify-end">
      <span className="text-[10px] font-bold uppercase tracking-widest text-luxury-gold mb-2 inline-block py-1 px-3 border border-luxury-gold/30 bg-luxury-black w-fit">
        {label}
      </span>
      <h4 className="text-xl font-serif font-bold text-white mb-2">{title}</h4>
      <p className="text-sm text-luxury-gray group-hover:text-white transition-colors">{result}</p>
    </div>
    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
      <div className="w-10 h-10 bg-luxury-gold flex items-center justify-center text-luxury-black">
        <ExternalLink size={18} />
      </div>
    </div>
  </motion.div>
);

const StatBox = ({ label, icon: Icon }: { label: string, icon: any }) => (
  <div className="flex items-center space-x-4 p-4 border border-luxury-gold/10 bg-luxury-dark/50">
    <Icon className="text-luxury-gold shrink-0" size={24} />
    <span className="text-sm font-medium text-luxury-gray">{label}</span>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-luxury-black">
        <HeroBackground />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block py-1 px-4 rounded-full border border-luxury-gold/30 text-luxury-gold text-xs font-bold tracking-widest mb-6 lg:mb-8">
                PREMIUM DIGITAL SOLUTIONS
              </span>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6">
                I Help Businesses <span className="gold-gradient-text">Grow Online</span> & Authors Get Published.
              </h1>
              <p className="text-lg md:text-xl text-luxury-gray max-w-2xl mb-10 leading-relaxed">
                Digital Marketing Specialist | Author Services Expert | Freelancer Based in West Africa, Serving the World.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a 
                  href="#services" 
                  className="px-8 py-4 bg-luxury-gold text-luxury-black font-bold text-center hover:bg-white transition-all transform hover:-translate-y-1 shadow-lg shadow-luxury-gold/10"
                >
                  View My Services
                </a>
                <a 
                  href="#contact" 
                  className="px-8 py-4 border-2 border-luxury-gold text-luxury-gold font-bold text-center hover:bg-luxury-gold/10 transition-all transform hover:-translate-y-1"
                >
                  Let's Work Together
                </a>
              </div>

              <div className="flex flex-wrap gap-x-8 gap-y-4">
                <div className="flex items-center space-x-2 text-sm text-luxury-gray">
                  <Star className="text-luxury-gold" size={16} fill="currentColor" />
                  <span>5-Star Rated</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-luxury-gray">
                  <BookOpen className="text-luxury-gold" size={16} />
                  <span>Authors Served Globally</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-luxury-gray">
                  <Globe className="text-luxury-gold" size={16} />
                  <span>Clients in USA, UK & Beyond</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-luxury-dark/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] lg:aspect-[3/4] max-w-md mx-auto lg:mx-0"
            >
              <div className="absolute inset-0 border-2 border-luxury-gold translate-x-6 translate-y-6" />
              <div className="absolute inset-0 bg-luxury-dark gold-border overflow-hidden">
                {/* Profile Placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-luxury-dark to-luxury-black flex items-center justify-center">
                  <Users size={80} className="text-luxury-gold/20" />
                </div>
              </div>
            </motion.div>

            <div>
              <SectionHeading title="Who Is Benjamin Ajibola?" subtitle="Discovery" centered={false} />
              <div className="space-y-6 text-luxury-gray leading-relaxed text-lg">
                <p>
                  I'm Benjamin &mdash; a freelance digital marketing specialist and author services expert with a passion for helping businesses get found online and helping authors bring their books to life professionally.
                </p>
                <p>
                  From SEO and web design to Amazon KDP formatting, book trailers, and social media management &mdash; I bring strategy, creativity, and results to every project I take on. 
                </p>
                <p>
                  Based in West Africa. Working with clients across the USA, UK, Australia and beyond.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 mt-12">
                <StatBox label="50+ Projects" icon={CheckCircle2} />
                <StatBox label="2 Core Pillars" icon={Layout} />
                <StatBox label="100% Client Focus" icon={Users} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-luxury-black">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="What I Do Best" subtitle="Two powerful specialities. One reliable freelancer." />

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Digital Marketing Column */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-8">
                <div className="h-px bg-luxury-gold flex-grow" />
                <h3 className="text-xl font-bold text-luxury-gold uppercase tracking-widest whitespace-nowrap">Digital Marketing</h3>
                <div className="h-px bg-luxury-gold flex-grow" />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <ServiceCard 
                  icon={Layout} 
                  title="Web Design" 
                  desc="High-converting websites built for local and online businesses." 
                />
                <ServiceCard 
                  icon={Search} 
                  title="SEO & AEO" 
                  desc="Get found on Google and AI search engines like Perplexity." 
                />
                <ServiceCard 
                  icon={TrendingUp} 
                  title="Social Media" 
                  desc="Content strategy and organic growth for your brand." 
                />
                <ServiceCard 
                  icon={MapPin} 
                  title="Local SEO" 
                  desc="Google Business Profile management that drives customers." 
                />
              </div>
            </div>

            {/* Author Services Column */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-8">
                <div className="h-px bg-luxury-gold flex-grow" />
                <h3 className="text-xl font-bold text-luxury-gold uppercase tracking-widest whitespace-nowrap">Author Services</h3>
                <div className="h-px bg-luxury-gold flex-grow" />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <ServiceCard 
                  icon={BookOpen} 
                  title="KDP Formatting" 
                  desc="Professional book formatting ready for self-publishing." 
                />
                <ServiceCard 
                  icon={PenTool} 
                  title="Book Editing" 
                  desc="Clean, polished manuscripts that readers love." 
                />
                <ServiceCard 
                  icon={Video} 
                  title="Cinematic Trailers" 
                  desc="Scroll-stopping video trailers starting at $80." 
                />
                <ServiceCard 
                  icon={CheckCircle2} 
                  title="Amazon SEO" 
                  desc="Get your book discovered and selling on global stores." 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-luxury-dark/30">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="A Few Wins Worth Sharing" subtitle="Recent Work" />
          
          <div className="grid md:grid-cols-2 gap-8">
            <PortfolioCard 
              label="Web Design"
              title="Local Car Wash Business"
              result="Full website built and launched in 48hrs."
            />
            <PortfolioCard 
              label="Web Design"
              title="Photography Brand"
              result="Booking funnel website with automated inquiry system."
            />
            <PortfolioCard 
              label="Local SEO"
              title="Cleaning Business"
              result="Google Business Profile suspension resolved efficiently."
            />
            <PortfolioCard 
              label="Author Services"
              title="Amazon Author Project"
              result="KDP formatting + book trailer delivered in 7 days."
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-luxury-black">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="What Clients Say" subtitle="Trust" />
          
          <div className="grid md:grid-cols-3 gap-10">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-luxury-dark p-8 gold-border relative"
              >
                <Quote className="absolute top-8 right-8 text-luxury-gold/10" size={48} />
                <div className="flex mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-luxury-gold" fill="currentColor" />
                  ))}
                </div>
                <p className="text-luxury-gray italic mb-8 relative z-10">"{t.content}"</p>
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-luxury-gold text-xs font-medium uppercase tracking-widest">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-luxury-black to-luxury-dark">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionHeading title="Ready to Work Together?" subtitle="Let's Talk" />
          <p className="text-xl text-luxury-gray mb-12">
            No long forms. No waiting. Just pick how you want to reach me and let's talk.
          </p>

          <div className="grid gap-6">
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/qr/PWIK7THOU2FLM1" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col md:flex-row items-center justify-between p-8 bg-luxury-dark gold-border gold-glow transition-all"
            >
              <div className="flex items-center space-x-6 mb-4 md:mb-0">
                <div className="w-16 h-16 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold group-hover:bg-luxury-gold group-hover:text-luxury-black transition-all">
                  <MessageCircle size={32} />
                </div>
                <div className="text-left">
                  <h4 className="text-2xl font-bold text-white group-hover:text-luxury-gold transition-colors">Message Me on WhatsApp</h4>
                  <p className="text-luxury-gray">Quick responses for urgent inquiries</p>
                </div>
              </div>
              <ExternalLink className="text-luxury-gold group-hover:translate-x-2 transition-transform" />
            </motion.a>

            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://www.instagram.com/ajibolaolajirebenjamin?igsh=MWgwejVnNWJ2MjR4eg==" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col md:flex-row items-center justify-between p-8 bg-luxury-dark gold-border gold-glow transition-all"
            >
              <div className="flex items-center space-x-6 mb-4 md:mb-0">
                <div className="w-16 h-16 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold group-hover:bg-luxury-gold group-hover:text-luxury-black transition-all">
                  <Instagram size={32} />
                </div>
                <div className="text-left">
                  <h4 className="text-2xl font-bold text-white group-hover:text-luxury-gold transition-colors">DM Me on Instagram</h4>
                  <p className="text-luxury-gray">Follow my work and get in touch</p>
                </div>
              </div>
              <ExternalLink className="text-luxury-gold group-hover:translate-x-2 transition-transform" />
            </motion.a>

            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://www.facebook.com/profile.php?id=61574131400629&mibextid=ZbWKwL" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col md:flex-row items-center justify-between p-8 bg-luxury-dark gold-border gold-glow transition-all"
            >
              <div className="flex items-center space-x-6 mb-4 md:mb-0">
                <div className="w-16 h-16 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold group-hover:bg-luxury-gold group-hover:text-luxury-black transition-all">
                  <Facebook size={32} />
                </div>
                <div className="text-left">
                  <h4 className="text-2xl font-bold text-white group-hover:text-luxury-gold transition-colors">Message Me on Facebook</h4>
                  <p className="text-luxury-gray">Let's connect professionally</p>
                </div>
              </div>
              <ExternalLink className="text-luxury-gold group-hover:translate-x-2 transition-transform" />
            </motion.a>
          </div>

          <div className="mt-16 text-luxury-gray">
            <p className="text-lg italic mb-10">"I typically respond within a few hours. Let's build something great together. 🙏🏾"</p>
            
            <div className="flex flex-wrap justify-center gap-8 text-sm font-medium pt-8 border-t border-luxury-gold/10">
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-luxury-gold" />
                <span>ajibola.benjamin@ajibhub.tech</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe size={16} className="text-luxury-gold" />
                <span>Based in West Africa</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} className="text-luxury-gold" />
                <span>Available Mon–Sat</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-luxury-black border-t border-luxury-gold/10 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold text-luxury-gold mb-4">Benjamin Ajibola</h2>
          <p className="text-luxury-gray tracking-widest uppercase text-[10px] font-bold mb-8">
            Digital Marketing & Author Services &mdash; Done with Excellence.
          </p>

          <p className="text-xs text-luxury-gray/50">
            &copy; 2025 Benjamin Ajibola Blessing. All rights reserved. Built with precision.
          </p>
        </div>
      </footer>
    </div>
  );
}

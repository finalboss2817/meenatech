/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  Cloud, 
  Lock, 
  MapPin, 
  ArrowUpRight, 
  Layers, 
  Smartphone, 
  Globe, 
  ChevronRight,
  MessageCircle,
  Mail,
  Phone,
  ExternalLink,
  Eye,
  Cpu,
  Video,
  Code,
  TrendingUp,
  X,
  Menu
} from 'lucide-react';

const URBAN_GATE_URL = "https://urbangate-build.vercel.app";

const UrbanGateLogo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 80V20H80V80" stroke="currentColor" strokeWidth="8" strokeLinecap="round"/>
    <path d="M40 80V50H60V80" stroke="currentColor" strokeWidth="8" strokeLinecap="round"/>
    <circle cx="50" cy="35" r="5" fill="currentColor"/>
  </svg>
);

const Modal = ({ isOpen, onClose, title, children }: { isOpen: boolean, onClose: () => void, title: string, children: React.ReactNode }) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl max-h-[80vh] bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden flex flex-col"
        >
          <div className="p-6 border-b border-zinc-800 flex justify-between items-center bg-zinc-900/50 backdrop-blur-md">
            <h2 className="text-xl font-bold text-zinc-100">{title}</h2>
            <button onClick={onClose} className="p-2 hover:bg-zinc-800 rounded-full transition-colors">
              <X size={20} />
            </button>
          </div>
          <div className="p-8 overflow-y-auto text-zinc-400 prose prose-invert prose-emerald max-w-none">
            {children}
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Vision", href: "#vision" },
    { name: "UrbanGate", href: "#urbangate" },
    { name: "Infrastructure", href: "#infrastructure" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 sm:p-6">
      <div className="glass px-4 sm:px-6 py-3 rounded-full flex items-center justify-between w-full max-w-4xl">
        <div className="flex items-center gap-2">
          <UrbanGateLogo className="w-6 h-6 text-emerald-500" />
          <span className="font-display font-bold text-zinc-100 tracking-tighter text-xl">MEENA</span>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-zinc-100 transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a 
            href={URBAN_GATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block text-xs bg-zinc-100 text-zinc-950 px-4 py-1.5 rounded-full font-bold hover:bg-white transition-all"
          >
            Launch App
          </a>
          
          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-zinc-100 hover:bg-white/5 rounded-full transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-6 right-6 glass rounded-3xl p-6 md:hidden flex flex-col gap-4 z-40"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-zinc-100 py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={URBAN_GATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 btn-primary text-center py-3"
            >
              Launch UrbanGate
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
    {/* Background Glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/10 blur-[120px] rounded-full -z-10" />
    
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center max-w-4xl"
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-sm sm:text-base font-semibold mb-8">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        Meena Technologies
      </div>
      
      <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tight mb-8 leading-[0.9]">
        <span className="text-gradient">Engineering Trust</span> <br />
        <span className="text-zinc-500">at Scale.</span>
      </h1>
      
      <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
        Meena Technologies builds high-performance digital infrastructure designed for long-term stability, privacy, and seamless scalability.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href={URBAN_GATE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2">
          Launch UrbanGate <ArrowUpRight size={18} />
        </a>
        <a href="#vision" className="btn-secondary w-full sm:w-auto">
          Explore Vision
        </a>
      </div>
    </motion.div>
    
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
    >
      <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400">Scroll to discover</span>
      <div className="w-px h-12 bg-gradient-to-b from-emerald-500/50 to-transparent" />
    </motion.div>
  </section>
);

const TrustSection = () => (
  <section id="infrastructure" className="py-32 px-6 border-y border-zinc-900">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            Infrastructure built on <br />
            <span className="text-emerald-500">uncompromising principles.</span>
          </h2>
          <p className="text-lg text-zinc-400 mb-12 max-w-lg">
            We don't just build apps; we architect systems. Our foundation is rooted in Mumbai, serving a global standard of reliability.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-500">
                <Shield size={24} />
              </div>
              <h3 className="text-zinc-100 font-bold">Secure Architecture</h3>
              <p className="text-sm">Hardened systems designed to withstand the complexities of modern digital threats.</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-500">
                <Lock size={24} />
              </div>
              <h3 className="text-zinc-100 font-bold">Privacy-First</h3>
              <p className="text-sm">Data sovereignty is not a feature; it is our baseline requirement for every venture.</p>
            </div>
          </div>
        </div>
        
        <div className="relative group">
          <div className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <img 
              src="https://picsum.photos/seed/server-room/800/800" 
              alt="Server Infrastructure" 
              className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="relative z-10">
              <div className="text-emerald-500 font-mono text-xs mb-6 tracking-widest uppercase">Core Services & Expertise</div>
              <div className="space-y-6">
                {[
                  { label: "Optical Solutions", value: "Frames & Glasses", icon: <Eye size={16} /> },
                  { label: "Hardware Engineering", value: "Custom PC Building", icon: <Cpu size={16} /> },
                  { label: "Security Infrastructure", value: "CCTV Services", icon: <Video size={16} /> },
                  { label: "Digital Strategy", value: "Software & Consulting", icon: <Code size={16} /> },
                  { label: "Capital Growth", value: "Strategic Investments", icon: <TrendingUp size={16} /> }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-zinc-800 pb-3 group/item">
                    <div className="flex items-center gap-3">
                      <span className="text-emerald-500/50 group-hover/item:text-emerald-500 transition-colors">{item.icon}</span>
                      <span className="text-xs uppercase tracking-wider font-bold text-zinc-500">{item.label}</span>
                    </div>
                    <span className="text-zinc-100 font-medium text-right ml-4">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-500/20 blur-3xl rounded-full" />
        </div>
      </div>
    </div>
  </section>
);

const UrbanGateSection = () => (
  <section id="urbangate" className="py-32 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">UrbanGate</h2>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
          Our flagship platform redefining how urban ecosystems interact with digital services.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: <Layers size={32} />,
            title: "Unified Ecosystem",
            desc: "A single point of entry for complex urban digital requirements, eliminating fragmentation."
          },
          {
            icon: <Smartphone size={32} />,
            title: "PWA Native Feel",
            desc: "Built with modern web standards to provide a high-performance experience on any device."
          },
          {
            icon: <Globe size={32} />,
            title: "Scalable Reach",
            desc: "Designed to handle high-concurrency environments without compromising on latency."
          }
        ].map((feature, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="glass p-8 rounded-3xl flex flex-col gap-6 group"
          >
            <div className="text-emerald-500 group-hover:scale-110 transition-transform duration-300">
              {feature.icon}
            </div>
            <h3 className="text-2xl font-bold text-zinc-100">{feature.title}</h3>
            <p className="text-zinc-400 leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-20 glass rounded-[2rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none" />
        <div className="max-w-xl relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <UrbanGateLogo className="w-12 h-12 text-emerald-500" />
            <h3 className="text-3xl md:text-4xl font-bold">Experience UrbanGate</h3>
          </div>
          <p className="text-lg text-zinc-400 mb-8">
            Access the full power of our urban infrastructure platform directly from your browser. Optimized for "Add to Home Screen" for a native app experience.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={URBAN_GATE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2">
              Launch Web App <ExternalLink size={18} />
            </a>
            <div className="flex items-center gap-2 text-xs font-bold text-zinc-500 uppercase tracking-widest px-4">
              <Smartphone size={16} /> PWA Ready
            </div>
          </div>
        </div>
        <div className="relative z-10 w-full md:w-1/3 aspect-square glass rounded-2xl flex items-center justify-center p-4">
           <div className="text-center">
              <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-500">
                <ArrowUpRight size={40} />
              </div>
              <span className="text-sm font-bold text-zinc-100">urbangate-build.vercel.app</span>
           </div>
        </div>
      </div>
    </div>
  </section>
);

const VisionSection = () => (
  <section id="vision" className="py-32 px-6 bg-zinc-950/50">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8">The Long-Term <br />Ecosystem.</h2>
          <p className="text-xl text-zinc-400 mb-12">
            Meena Technologies is a multi-disciplinary powerhouse. We are building the substrate for the next generation of urban digital and physical ventures.
          </p>
          
          <div className="space-y-8">
            {[
              { title: "Unified Service Integration", desc: "From high-end optical solutions to complex CCTV security networks, we integrate physical reliability with digital intelligence." },
              { title: "Hardware & Software Synergy", desc: "Our PC building and software consulting arms work in tandem to create bespoke, high-performance computing environments." },
              { title: "Strategic Capital Allocation", desc: "Our investment division identifies and scales infrastructure-focused opportunities that align with our core principles." }
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="text-emerald-500 font-display font-bold text-2xl">0{i+1}</div>
                <div>
                  <h4 className="text-zinc-100 font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-zinc-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="h-64 glass rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden group">
               <img 
                 src="https://picsum.photos/seed/optics-future/600/800" 
                 alt="Optical Future" 
                 className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-30 transition-opacity duration-500"
                 referrerPolicy="no-referrer"
               />
               <Eye className="text-emerald-500 relative z-10" size={32} />
               <div className="relative z-10">
                  <h5 className="text-zinc-100 font-bold text-sm">Optical Future</h5>
                  <p className="text-[10px] text-zinc-500 mt-1 uppercase tracking-widest">Expansion into smart eyewear</p>
               </div>
            </div>
            <div className="h-40 bg-emerald-500/10 border border-emerald-500/20 rounded-3xl p-6 flex flex-col justify-end relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                 <TrendingUp size={80} />
               </div>
               <span className="text-3xl font-bold text-emerald-500 relative z-10">2026</span>
               <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest relative z-10">Vision Horizon</span>
            </div>
          </div>
          <div className="space-y-4 pt-0 sm:pt-12">
            <div className="h-40 glass rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden group">
               <img 
                 src="https://picsum.photos/seed/security-ai/600/400" 
                 alt="Security AI" 
                 className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-30 transition-opacity duration-500"
                 referrerPolicy="no-referrer"
               />
               <Video className="text-emerald-500 relative z-10" size={32} />
               <div className="relative z-10">
                  <h5 className="text-zinc-100 font-bold text-sm">Security AI</h5>
                  <p className="text-[10px] text-zinc-500 mt-1 uppercase tracking-widest">Intelligent CCTV networks</p>
               </div>
            </div>
            <div className="h-64 glass rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden group">
               <img 
                 src="https://picsum.photos/seed/investment/600/800" 
                 alt="Growth Fund" 
                 className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-30 transition-opacity duration-500"
                 referrerPolicy="no-referrer"
               />
               <TrendingUp className="text-emerald-500 relative z-10" size={32} />
               <div className="relative z-10">
                  <h5 className="text-zinc-100 font-bold text-sm">Growth Fund</h5>
                  <p className="text-[10px] text-zinc-500 mt-1 uppercase tracking-widest">Infrastructure investments</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FounderNote = () => (
  <section className="py-32 px-6">
    <div className="max-w-3xl mx-auto text-center">
      <div className="w-16 h-1 bg-emerald-500 mx-auto mb-12" />
      <blockquote className="text-2xl md:text-3xl font-display font-medium text-zinc-100 leading-relaxed mb-12">
        "External outcomes are uncertain. <br />
        Internal standards are not. <br />
        We commit to processes over praise, discipline over distraction, and principles over pressure. <br />
        Focus on the internals. results will follow."
      </blockquote>
      <div className="flex flex-col items-center">
        <span className="text-zinc-100 font-bold tracking-widest uppercase text-sm">Founder's Note</span>
        <span className="text-zinc-500 text-xs mt-1">Meena Technologies</span>
      </div>
    </div>
  </section>
);

const Footer = ({ onOpenPrivacy, onOpenTerms }: { onOpenPrivacy: () => void, onOpenTerms: () => void }) => {
  const whatsappUrl1 = "https://wa.me/919920300750";
  const whatsappUrl2 = "https://wa.me/919819932079";

  return (
    <footer className="py-20 px-6 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <UrbanGateLogo className="w-8 h-8 text-emerald-500" />
              <span className="font-display font-bold text-zinc-100 tracking-tighter text-3xl">MEENA</span>
            </div>
            <p className="text-sm text-zinc-500 max-w-xs">
              High-trust digital infrastructure. Built in Mumbai, India. Focused on long-term scalability and security.
            </p>
          </div>
          
          <div>
            <h4 className="text-zinc-100 font-bold mb-6 text-sm uppercase tracking-widest">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <Mail size={16} className="text-emerald-500" />
                <a href="mailto:trivedimanish2803@gmail.com" className="hover:text-zinc-100 transition-colors">trivedimanish2803@gmail.com</a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone size={16} className="text-emerald-500" />
                <span className="flex gap-2">
                  <a href="tel:+919920300750" className="hover:text-zinc-100 transition-colors">9920300750</a>
                  <span className="text-zinc-800">|</span>
                  <a href="tel:+919819932079" className="hover:text-zinc-100 transition-colors">98199 32079</a>
                </span>
              </div>
              <div className="pt-4">
                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-3">Chat with us on WhatsApp</p>
                <div className="flex items-center gap-4">
                  <a href={whatsappUrl1} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 glass px-4 py-2 rounded-full text-xs text-emerald-500 hover:bg-emerald-500/10 transition-colors group">
                    <MessageCircle size={16} />
                    <span className="text-zinc-400 group-hover:text-zinc-100">Primary</span>
                  </a>
                  <a href={whatsappUrl2} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 glass px-4 py-2 rounded-full text-xs text-emerald-500 hover:bg-emerald-500/10 transition-colors group">
                    <MessageCircle size={16} />
                    <span className="text-zinc-400 group-hover:text-zinc-100">Support</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-zinc-100 font-bold mb-6 text-sm uppercase tracking-widest">Location</h4>
            <div className="flex items-start gap-3 text-sm">
              <MapPin size={16} className="text-emerald-500 shrink-0 mt-1" />
              <span>Mumbai, Maharashtra <br />India</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-zinc-100 font-bold mb-6 text-sm uppercase tracking-widest">Platform</h4>
            <a href={URBAN_GATE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm hover:text-zinc-100 transition-colors">
              UrbanGate Web App <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-900 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
          <span>© 2026 Meena Technologies</span>
          <div className="flex gap-8 mt-4 md:mt-0">
            <button onClick={onOpenPrivacy} className="hover:text-zinc-400 cursor-pointer uppercase">Privacy Policy</button>
            <button onClick={onOpenTerms} className="hover:text-zinc-400 cursor-pointer uppercase">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-emerald-500 origin-left z-[60]"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        <TrustSection />
        <UrbanGateSection />
        <VisionSection />
        <FounderNote />
      </main>
      
      <Footer onOpenPrivacy={() => setIsPrivacyOpen(true)} onOpenTerms={() => setIsTermsOpen(true)} />

      <Modal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} title="Privacy Policy">
        <div className="space-y-6">
          <p>Effective Date: [2/3/2026]<br />Last Updated: [2/3/2026]</p>
          <p>UrbanGate (“we,” “our,” or “us”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your information when you use our platform.</p>
          
          <h3 className="text-zinc-100 font-bold">1. Information We Collect</h3>
          <p>We may collect the following categories of information:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>a) Information You Provide:</strong> Name, Email address, Phone number, Profile information, Any information submitted through forms.</li>
            <li><strong>b) Usage Information:</strong> Device type, Browser type, IP address, Interaction data, Log data.</li>
            <li><strong>c) Authentication Data:</strong> If you sign in using third-party services (e.g., Google), we may receive limited profile information as permitted by those services.</li>
          </ul>

          <h3 className="text-zinc-100 font-bold">2. How We Use Your Information</h3>
          <p>We use collected information to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Provide and maintain our services</li>
            <li>Improve user experience</li>
            <li>Ensure platform security</li>
            <li>Communicate important updates</li>
            <li>Respond to support inquiries</li>
            <li>Prevent fraud or misuse</li>
          </ul>
          <p>We do not sell your personal data.</p>

          <h3 className="text-zinc-100 font-bold">3. Data Storage & Security</h3>
          <p>We implement reasonable technical and organizational safeguards to protect your data. Your information may be stored on secure cloud infrastructure providers. While we take strong precautions, no method of transmission over the internet is 100% secure.</p>

          <h3 className="text-zinc-100 font-bold">4. Data Sharing</h3>
          <p>We may share information only in the following cases:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>With service providers that help operate our platform (hosting, analytics, authentication)</li>
            <li>When required by law</li>
            <li>To protect rights, safety, and platform integrity</li>
          </ul>
          <p>We do not share personal data for advertising resale purposes.</p>

          <h3 className="text-zinc-100 font-bold">5. Cookies & Tracking</h3>
          <p>UrbanGate may use cookies and similar technologies to improve functionality, analyze traffic, and enhance user experience. You can disable cookies via browser settings.</p>

          <h3 className="text-zinc-100 font-bold">6. Your Rights</h3>
          <p>Depending on your jurisdiction, you may have the right to access your personal data, request correction, request deletion, or withdraw consent. To exercise your rights, contact us at: <strong>trivedimanish2803@gmail.com</strong></p>

          <h3 className="text-zinc-100 font-bold">7. Data Retention</h3>
          <p>We retain personal information only as long as necessary to provide services, comply with legal obligations, and resolve disputes.</p>

          <h3 className="text-zinc-100 font-bold">8. Children’s Privacy</h3>
          <p>Our platform is not directed toward individuals under the age of 13. We do not knowingly collect personal data from minors.</p>

          <h3 className="text-zinc-100 font-bold">9. Changes to This Policy</h3>
          <p>We may update this Privacy Policy periodically. Changes will be posted on this page with a revised “Last Updated” date.</p>

          <h3 className="text-zinc-100 font-bold">10. Contact Information</h3>
          <p>If you have questions regarding this Privacy Policy, contact:<br />UrbanGate, Mumbai, India<br />Email: <strong>trivedimanish2803@gmail.com</strong></p>
        </div>
      </Modal>

      <Modal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} title="Terms of Service">
        <div className="space-y-6">
          <p>Effective Date: [2/3/2026]<br />Last Updated: [2/3/2026]</p>
          <p>These Terms of Service (“Terms”) govern your access to and use of UrbanGate (“the Platform,” “we,” “our,” or “us”). By accessing or using the Platform, you agree to be bound by these Terms.</p>

          <h3 className="text-zinc-100 font-bold">1. Eligibility</h3>
          <p>By using UrbanGate, you confirm that you are at least 18 years old, have the legal capacity to enter into these Terms, and the information you provide is accurate.</p>

          <h3 className="text-zinc-100 font-bold">2. Account Responsibility</h3>
          <p>You are responsible for maintaining confidentiality of login credentials and for all activity under your account. We reserve the right to suspend or terminate accounts that violate these Terms.</p>

          <h3 className="text-zinc-100 font-bold">3. Acceptable Use</h3>
          <p>You agree NOT to use the platform for unlawful purposes, attempt to hack the system, upload malicious code, or misrepresent identity.</p>

          <h3 className="text-zinc-100 font-bold">4. Platform Availability</h3>
          <p>We aim to provide continuous access but do not guarantee uninterrupted service. We are not liable for losses caused by service interruptions.</p>

          <h3 className="text-zinc-100 font-bold">5. Intellectual Property</h3>
          <p>All content, branding, logos, and platform structure belong to UrbanGate. You may not copy, modify, or distribute them without written permission.</p>

          <h3 className="text-zinc-100 font-bold">6. User Content</h3>
          <p>You retain ownership of your content but grant us a limited license to use it to operate the platform. You are responsible for the legality of your content.</p>

          <h3 className="text-zinc-100 font-bold">7. Limitation of Liability</h3>
          <p>To the fullest extent permitted by law, UrbanGate shall not be liable for indirect damages, loss of data, or business interruption. Your use of the platform is at your own risk.</p>

          <h3 className="text-zinc-100 font-bold">8. Third-Party Services</h3>
          <p>The Platform may rely on third-party providers. We are not responsible for their service failures or external policies.</p>

          <h3 className="text-zinc-100 font-bold">9. Termination</h3>
          <p>We reserve the right to suspend or terminate accounts at our discretion if Terms are violated.</p>

          <h3 className="text-zinc-100 font-bold">10. Modifications to Terms</h3>
          <p>We may update these Terms periodically. Continued use after updates constitutes acceptance of revised Terms.</p>

          <h3 className="text-zinc-100 font-bold">11. Governing Law</h3>
          <p>These Terms shall be governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Mumbai, Maharashtra.</p>

          <h3 className="text-zinc-100 font-bold">12. Contact Information</h3>
          <p>UrbanGate, Mumbai, India<br />Email: <strong>trivedimanish2803@gmail.com</strong></p>
        </div>
      </Modal>
    </div>
  );
}

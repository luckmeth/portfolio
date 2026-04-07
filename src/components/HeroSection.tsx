import React, { useEffect, useState, useRef } from 'react';
import { ChevronDown, Github, Mail, Phone, Linkedin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const roles = [
  'Fullstack Developer',
  'UI/UX Designer',
  'IT Consultant',
  'Entrapreneurship Enthusiast',
  'Preacher of Creativity and Innovation',
  'Creative Visualizer',
  'Digital Marketer',
  'Motion Designer',
  'Business Brand Strategist',
  'Animator',
];

const HeroSection: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 200);
  }, []);

  // Typewriter effect with loop
  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.slice(0, displayText.length + 1));
        if (displayText === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(current.slice(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  // Parallax mouse effect
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left - rect.width / 2) / rect.width,
        y: (e.clientY - rect.top - rect.height / 2) / rect.height,
      };
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen bg-dark-900 overflow-hidden flex items-center"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/4 left-1/6 w-[500px] h-[500px] bg-red-500/8 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/6 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[150px] animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/3 rounded-full blur-[200px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={showContent ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-ash-400 text-sm font-mono">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Available for work...
            </div>

            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] text-white mb-4">
                Hi, I'm{' '}
                <span className="text-gradient">Methul</span>
                <br />
                <span className="text-gradient">Jayasuriya</span>
              </h1>
              <div className="text-2xl md:text-3xl font-mono text-ash-300 h-10">
                <span className="text-red-500">{displayText}</span>
                <span className="text-red-500 animate-blink border-r-2 border-red-500 ml-0.5">&nbsp;</span>
              </div>
            </div>

            <p className="text-lg text-ash-400 max-w-lg leading-relaxed">
              IT professional specializing in Fullstack Development, UI/UX design, and creative visualization.
              Currently leading digital transformation at Moshi Moshi Nippon.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/25 hover:-translate-y-0.5"
              >
                View My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white hover:bg-white/5 hover:border-red-500/50 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                Contact Me
              </a>
            </div>

            <div className="flex items-center gap-5 pt-4">
              {[
                { icon: Github, href: 'https://github.com/luckmeth', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/methul-jayasuriya-727143246/', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:methullakvindu5@gmail.com', label: 'Email' },
                { icon: Phone, href: 'tel:+94710416019', label: 'Phone' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-ash-400 hover:text-red-500 hover:border-red-500/50 hover:bg-red-500/10 transition-all duration-300 hover:-translate-y-1"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={showContent ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Morphing background blob */}
              <div className="absolute -inset-8 bg-gradient-to-br from-red-500/20 via-red-500/5 to-transparent rounded-full animate-morph blur-2xl" />

              {/* Main photo container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden border border-white/10 hover:border-red-500/50 transition-all duration-500 group">
                <img
                  src="/myphoto.png"
                  alt="Methul Jayasuriya"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent" />

                {/* Name overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-display font-bold text-lg">Methul Jayasuriya</p>
                  <p className="text-red-400 font-mono text-sm">BSc. Computer Security</p>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 px-4 py-2 rounded-xl bg-dark-800 border border-white/10 shadow-xl"
              >
                <span className="text-red-500 font-mono text-sm font-bold">&lt;/&gt;</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl bg-dark-800 border border-white/10 shadow-xl"
              >
                <span className="text-xs text-ash-300 font-mono">3+ Projects</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-1/2 -right-8 px-3 py-1.5 rounded-lg bg-red-500/20 border border-red-500/30 hidden lg:block"
              >
                <span className="text-xs text-red-400 font-mono">NSBM '26</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={showContent ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '3+', label: 'Live Projects' },
            { value: '2+', label: 'Years Experience' },
            { value: '10+', label: 'Technologies' },
            { value: '100%', label: 'Client Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="text-2xl md:text-3xl font-display font-bold text-gradient mb-1">{stat.value}</div>
              <div className="text-ash-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-ash-600 text-xs font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="text-red-500" size={20} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
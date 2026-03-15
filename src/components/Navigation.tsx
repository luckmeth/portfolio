import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'education', 'skills', 'projects', 'experience', 'contact'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${
      scrolled
        ? 'bg-dark-900/80 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/20'
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" onClick={(e) => handleNav(e, '#home')} className="relative group">
            <span className="text-2xl font-mono font-bold text-white group-hover:text-red-500 transition-colors duration-300">
              &lt;<span className="text-red-500">/</span>&gt;
            </span>
            <div className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-[2px] bg-red-500 transition-all duration-300" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNav(e, item.href)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                    isActive
                      ? 'text-red-500'
                      : 'text-ash-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-500 rounded-full" />
                  )}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={(e) => handleNav(e, '#contact')}
              className="ml-4 px-5 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-red-500 transition-colors p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-500 overflow-hidden ${
        isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-dark-900/95 backdrop-blur-xl border-t border-white/5 px-4 py-6 space-y-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNav(e, item.href)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'text-red-500 bg-red-500/10'
                    : 'text-ash-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="text-red-500 font-mono mr-2">//</span>
                {item.label}
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={(e) => handleNav(e, '#contact')}
            className="block mt-4 px-4 py-3 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-lg text-center transition-all duration-300"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
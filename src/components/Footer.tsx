import React from 'react';
import { Heart, Code, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-900 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="text-2xl font-mono font-bold text-white mb-4">
              &lt;<span className="text-red-500">/</span>&gt;
            </div>
            <p className="text-ash-400 text-sm leading-relaxed mb-4">
              Computer Security student and creative developer passionate about innovative digital solutions.
            </p>
            <p className="text-ash-600 text-xs">
              Available for freelance projects and collaborations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-display font-semibold text-sm uppercase tracking-wider mb-4">Navigation</h3>
            <div className="grid grid-cols-2 gap-2">
              {['Home', 'About', 'Education', 'Skills', 'Projects', 'Experience', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-ash-500 hover:text-red-400 transition-colors text-sm py-1"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-display font-semibold text-sm uppercase tracking-wider mb-4">Services</h3>
            <div className="space-y-2">
              {['Web Development', 'UI/UX Design', 'Digital Marketing', 'Creative Design', 'SEO Optimization', 'Brand Strategy'].map((service) => (
                <div key={service} className="text-ash-500 text-sm">{service}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-ash-600 text-xs">
            <span>Built with</span>
            <Heart size={12} className="text-red-500" />
            <span>and</span>
            <Code size={12} className="text-red-500" />
            <span>by Methul Jayasuriya</span>
          </div>

          <div className="text-ash-600 text-xs">
            &copy; {new Date().getFullYear()} Methul Jayasuriya. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-ash-500 hover:text-red-500 hover:border-red-500/30 transition-all duration-300 hover:-translate-y-1"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
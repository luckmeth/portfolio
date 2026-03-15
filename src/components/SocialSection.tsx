import React from 'react';
import { Instagram, Facebook, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const socialPlatforms = [
  {
    name: 'Instagram',
    handle: '@_slash.dev_',
    url: 'https://www.instagram.com/_slash.dev_?igsh=cW4xMHlqMzhpZGJq&utm_source=qr',
    icon: Instagram,
    gradient: 'from-purple-500 via-pink-500 to-orange-400',
    description: 'Daily coding tips, design inspiration, and behind-the-scenes content',
  },
  {
    name: 'Facebook',
    handle: 'Slash Development',
    url: 'https://www.facebook.com/share/188JWxDXrW/?mibextid=wwXIfr',
    icon: Facebook,
    gradient: 'from-blue-600 to-blue-400',
    description: 'Project showcases, web development tutorials, and client stories',
  },
  {
    name: 'TikTok',
    handle: '@_slash.dev_',
    url: 'https://www.tiktok.com/@_slash.dev_?_r=1&_t=ZS-94hjoa8HMg5',
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48v-7.15a8.16 8.16 0 005.58 2.2v-3.46a4.83 4.83 0 01-4-.58z" />
      </svg>
    ),
    gradient: 'from-gray-700 to-gray-900',
    description: 'Quick coding tutorials, design tips, and creative dev processes',
  },
];

const SocialSection: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section className="section-padding bg-dark-800 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-red-500 font-mono text-sm tracking-widest uppercase">// Connect</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mt-3">
            Social <span className="text-gradient">Media</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {socialPlatforms.map((platform, index) => (
            <motion.a
              key={index}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group glass-card glass-card-hover rounded-2xl p-7 transition-all duration-500 hover:-translate-y-2 block"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${platform.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <platform.icon className="text-white" size={22} />
              </div>
              <h3 className="text-white font-display font-bold text-lg mb-1">{platform.name}</h3>
              <p className="text-red-400 font-mono text-xs mb-3">{platform.handle}</p>
              <p className="text-ash-400 text-sm leading-relaxed mb-5">{platform.description}</p>
              <span className="inline-flex items-center gap-2 text-red-500 text-sm font-medium group-hover:gap-3 transition-all duration-300">
                Follow <ExternalLink size={14} />
              </span>
            </motion.a>
          ))}
        </div>

        {/* Slash Development Brand */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-3xl mx-auto glass-card rounded-2xl p-10 md:p-14 text-center relative overflow-hidden"
        >
          <div className="absolute -top-px -left-px -right-px h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent" />
          <div className="text-6xl font-mono font-bold mb-4 relative inline-block">
            <span className="text-white">&lt;</span>
            <span className="text-red-500">/</span>
            <span className="text-white">&gt;</span>
          </div>
          <h3 className="text-white font-display font-bold text-2xl mb-3">Slash Development</h3>
          <p className="text-ash-400 text-base max-w-lg mx-auto mb-8 leading-relaxed">
            My personal brand dedicated to creating exceptional digital experiences through innovative web development and thoughtful design.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#projects" className="px-7 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 hover:-translate-y-0.5">
              View Work
            </a>
            <a href="#contact" className="px-7 py-3 border border-white/20 text-white hover:border-red-500/50 hover:bg-white/5 rounded-xl font-semibold transition-all duration-300">
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialSection;
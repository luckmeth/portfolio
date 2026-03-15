import React from 'react';
import { Code, Palette, Zap, Shield, Download, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const highlights = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Building modern, responsive websites with clean code and optimal performance.',
    color: 'from-red-500/20 to-red-600/5',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating intuitive user experiences through thoughtful design and research.',
    color: 'from-blue-500/20 to-blue-600/5',
  },
  {
    icon: Zap,
    title: 'Animation & Motion',
    description: 'Bringing designs to life with smooth animations and micro-interactions.',
    color: 'from-yellow-500/20 to-yellow-600/5',
  },
  {
    icon: Shield,
    title: 'Cyber Security',
    description: 'BSc in Computer Security with expertise in secure application development.',
    color: 'from-green-500/20 to-green-600/5',
  },
];

const AboutSection: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="section-padding bg-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 dot-bg" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-red-500 font-mono text-sm tracking-widest uppercase">// About Me</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mt-3">
            Get to know <span className="text-gradient">Methul</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="space-y-5 text-ash-300 text-lg leading-relaxed">
              <p>
                I'm a <span className="text-white font-medium">Computer Security student</span> at NSBM Green University with a passion for digital innovation.
                Currently serving as <span className="text-white font-medium">IT Intern and Head of Digital Marketing</span> at Moshi Moshi Nippon,
                where I lead complete digital transformation initiatives.
              </p>
              <p>
                My expertise spans across web development, digital marketing, AI-powered content creation,
                and creative visualization. I specialize in building scalable web solutions, managing
                comprehensive digital marketing strategies, and creating engaging visual content.
              </p>
              <p>
                Proficient in <span className="text-red-400">C#, HTML, CSS, Java, Python, and Dart</span>,
                combined with expertise in AI tools like ChatGPT, MidJourney, and Canva AI,
                I deliver innovative solutions that drive business growth and user engagement.
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="/Cv 2026.pdf"
                download="Cv 2026.pdf"
                className="group inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-7 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 hover:-translate-y-0.5"
              >
                <Download size={18} />
                Download CV
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Quick stats */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { value: '6+', label: 'Languages' },
                { value: '3+', label: 'Projects' },
                { value: '2+', label: 'Years Exp' },
              ].map((stat) => (
                <div key={stat.label} className="p-4 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                  <div className="text-xl font-display font-bold text-red-500">{stat.value}</div>
                  <div className="text-ash-500 text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group glass-card glass-card-hover rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon size={22} className="text-white" />
                </div>
                <h3 className="text-white font-display font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-ash-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
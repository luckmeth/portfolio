import React, { useState } from 'react';
import { ExternalLink, Monitor, Smartphone, Tablet, Lock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

type DeviceView = 'desktop' | 'tablet' | 'mobile';

const projects = [
  {
    title: 'Moshi Moshi Nippon',
    description: 'Led the complete digital transformation of a Japan visa consultation company, including website design, development, deployment, and SEO optimization.',
    url: 'https://www.moshimoshinippon.com',
    image: '/mosi_moshi_nippon.png',
    technologies: ['WordPress', 'SEO', 'Digital Marketing', 'UI/UX', 'Content Creation'],
    category: 'Digital Transformation',
    hasLivePreview: true,
  },
  {
    title: 'Lov\'Ceylon',
    description: 'Comprehensive wedding photography platform with elegant design, product showcasing, and seamless user experience for Sri Lanka and Japan.',
    url: 'https://www.lceylon.com',
    image: '/lov_ceylon.png',
    technologies: ['E-commerce', 'UI/UX Design', 'Performance', 'Responsive Design'],
    category: 'Photography Platform',
    hasLivePreview: true,
  },
  {
    title: 'Anti Academic (comming soon)',
    description: 'Anti academics for assignments help and full functional assignments guidance and selling system coming up next… visit - “www.antiacademic.com”… www.antiacademic.com',
    url: 'https://www.antiacademic.com/',
    image: '/Antia.png',
    technologies: ['E-commerce', 'UI/UX Design', 'Performance', 'Responsive Design'],
    category: 'Photography Platform',
    hasLivePreview: true,

  },
  {
    title: 'NuroNest Lock The Next Level of File Security (comming soon)',
    description: 'Final year project: Context-aware Zero Trust file encryption system using AES-256-GCM. Binds decryption with 4 undeniable factors. And this project resech peper is comming soon on my linkedin so stay connected with linked in...',
    url: 'https://github.com/luckmeth',
    image: '/Neuro_Nest_.png',
    technologies: ['Electron.js', 'React', 'Node.js', 'C#', 'AES-256-GCM'],
    category: 'Security Application',
    hasLivePreview: false,
  },
];

const deviceWidths: Record<DeviceView, string> = {
  desktop: 'w-full',
  tablet: 'w-[768px] max-w-full',
  mobile: 'w-[375px] max-w-full',
};

const ProjectCard: React.FC<{ project: typeof projects[0]; index: number; isInView: boolean }> = ({
  project,
  index,
  isInView,
}) => {
  const [device, setDevice] = useState<DeviceView>('desktop');
  const [showLive, setShowLive] = useState(false);
  const isReversed = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.2 + index * 0.15 }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
        isReversed ? 'lg:[direction:rtl]' : ''
      }`}
    >
      {/* Browser Preview */}
      <div className={isReversed ? 'lg:[direction:ltr]' : ''}>
        <div className="browser-frame bg-dark-700 border border-white/5 group">
          {/* Browser chrome */}
          <div className="bg-dark-800 px-4 py-3 flex items-center gap-3 border-b border-white/5">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex-1 bg-dark-600 rounded-lg px-3 py-1.5 flex items-center gap-2">
              <Lock size={12} className="text-ash-600" />
              <span className="text-ash-500 text-xs font-mono truncate">{project.url}</span>
            </div>
            {/* Device switcher */}
            {project.hasLivePreview && (
              <div className="hidden sm:flex items-center gap-1 bg-dark-600 rounded-lg p-1">
                {([
                  { view: 'desktop' as DeviceView, icon: Monitor, size: 14 },
                  { view: 'tablet' as DeviceView, icon: Tablet, size: 14 },
                  { view: 'mobile' as DeviceView, icon: Smartphone, size: 14 },
                ]).map(({ view, icon: Icon, size }) => (
                  <button
                    key={view}
                    onClick={() => setDevice(view)}
                    className={`p-1.5 rounded-md transition-all ${
                      device === view ? 'bg-red-500 text-white' : 'text-ash-500 hover:text-white'
                    }`}
                  >
                    <Icon size={size} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Preview area */}
          <div className="aspect-video bg-dark-800 overflow-hidden relative">
            {showLive && project.hasLivePreview ? (
              <div className={`mx-auto h-full transition-all duration-500 ${deviceWidths[device]}`}>
                <iframe
                  src={project.url}
                  title={project.title}
                  className="w-full h-full border-0"
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin"
                />
              </div>
            ) : (
              <div className="relative w-full h-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent" />

                {project.hasLivePreview && (
                  <button
                    onClick={() => setShowLive(true)}
                    className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25"
                  >
                    <Monitor size={14} />
                    Live Preview
                  </button>
                )}
              </div>
            )}

            {showLive && (
              <button
                onClick={() => setShowLive(false)}
                className="absolute top-3 right-3 px-3 py-1.5 rounded-lg bg-dark-900/90 text-ash-400 text-xs font-mono hover:text-white transition-colors border border-white/10"
              >
                Screenshot
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Project info */}
      <div className={isReversed ? 'lg:[direction:ltr]' : ''}>
        <div className="space-y-5">
          <div>
            <span className="text-red-500 font-mono text-xs tracking-widest uppercase">
              {project.category}
            </span>
            <h3 className="text-white font-display font-bold text-2xl md:text-3xl mt-2">
              {project.title}
            </h3>
          </div>

          <p className="text-ash-300 text-base leading-relaxed">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.03] border border-white/5 text-ash-400"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 hover:-translate-y-0.5"
            >
              <ExternalLink size={16} />
              Visit Website
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.05 });

  return (
    <section id="projects" className="section-padding bg-dark-800 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-red-500 font-mono text-sm tracking-widest uppercase">// Projects</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mt-3">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-ash-400 text-lg max-w-2xl mx-auto mt-4">
            Real-world applications showcasing my development expertise and design skills
          </p>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
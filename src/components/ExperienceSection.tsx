import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const experiences = [
  {
    title: 'Head of Digital Marketing & Creative Visualizer',
    company: 'Moshi Moshi Nippon (PVT) Ltd',
    location: 'Sri Lanka',
    period: 'Since 2023',
    type: 'part-time',
    achievements: [
      'Led complete digital transformation including website design, development, deployment, and SEO optimization',
      'Managed digital marketing strategies across social media platforms',
      'Designed creative visual content, branding assets, and promotional materials',
      'Implemented technical solutions for hosting, domain management, and analytics',
      'Coordinated marketing campaigns for Japan visa consultation services',
      'Provided IT support and digital workflow improvements',
    ],
  },
  {
    title: 'Freelance Fullstack Developer & Brand Strategist',
    company: 'Slash.Development',
    location: 'Sri Lanka',
    period: 'Since 2024',
    type: 'full-time',
    achievements: [
      'Done freelance fullstack development projects for clients across various industries',
      'Led complete digital transformation including website design, development, deployment, and SEO optimization',
      'Designed creative visual content, branding assets, and promotional materials',
      'Implemented technical solutions for hosting, domain management, and analytics',
      'worked with clients to develop and execute digital marketing strategies across social media platforms',
      'Provided IT support and digital workflow improvements',
      "Working on project that make sure to provide a seamless user experience and drive business data security for clients' brands for secure there data under Zero Trust Framework",
    ],
  },
  {
    title: 'Network Design Engineer',
    company: 'NSBM Green University',
    location: 'Sri Lanka',
    period: '2025',
    type: 'Academic Project',
    achievements: [
      'Designed scalable bank network infrastructure using Cisco Packet Tracer',
      'Configured routers, switches, and subnets with static routing',
      'Implemented VLANs and IP addressing schemes for multiple departments',
      'Created detailed documentation and configuration scripts',
    ],
  },
];

const ExperienceSection: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="experience" className="section-padding bg-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 dot-bg" />

      <div ref={ref} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-red-500 font-mono text-sm tracking-widest uppercase">// Experience</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mt-3">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-ash-400 text-lg max-w-2xl mx-auto mt-4">
            A journey of growth, learning, and creating exceptional digital experiences
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] bg-gradient-to-b from-red-500/50 via-red-500/20 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                  className={`relative flex items-start ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 bg-red-500 rounded-full ring-4 ring-dark-900 z-10 mt-8" />

                  {/* Card */}
                  <div className={`flex-1 ml-14 md:ml-0 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="glass-card glass-card-hover rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1 group">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-medium border border-red-500/20">
                          {exp.type}
                        </span>
                        <div className="flex items-center gap-3 text-ash-500 text-xs font-mono">
                          <span className="flex items-center gap-1">
                            <Calendar size={12} /> {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={12} /> {exp.location}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-white font-display font-bold text-xl mb-1">{exp.title}</h3>
                      <p className="text-red-400 text-sm font-medium mb-5 flex items-center gap-1.5">
                        <Briefcase size={14} /> {exp.company}
                      </p>

                      <ul className="space-y-2.5">
                        {exp.achievements.map((a, i) => (
                          <li key={i} className="flex items-start gap-2 text-ash-400 text-sm leading-relaxed">
                            <span className="text-red-500 mt-1 shrink-0">&#9656;</span>
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
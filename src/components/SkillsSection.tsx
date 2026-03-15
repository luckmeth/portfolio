import React from 'react';
import { Code, TrendingUp, Paintbrush } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const skillCategories = [
  {
    title: 'Development',
    icon: Code,
    skills: [
      { name: 'HTML/CSS', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'C#', level: 85 },
      { name: 'Java', level: 60 },
      { name: 'Dart', level: 70 },
      { name: 'React', level: 100 },
      { name: 'other languages', level: 20 },
      { name: 'QA', level: 90 },
    ],
  },
  {
    title: 'Marketing & AI',
    icon: TrendingUp,
    skills: [
      { name: 'ChatGPT & AI Tools', level: 95 },
      { name: 'Google Analytics', level: 90 },
      { name: 'SEO/SEM', level: 88 },
      { name: 'Social Media', level: 92 },
      { name: 'Content Strategy', level: 90 },
      { name: 'Email Marketing', level: 100 },
    ],
  },
  {
    title: 'Design & Creative',
    icon: Paintbrush,
    skills: [
      { name: 'Canva & Canva AI', level: 95 },
      { name: 'MidJourney', level: 88 },
      { name: 'Adobe Photoshop', level: 75 },
      { name: 'Figma', level: 80 },
      { name: 'Brand Design', level: 85 },
    ],
  },
];

const tools = [
  'WordPress', 'Elementor', 'React', 'Tailwind CSS', 'Canva AI',
  'ChatGPT', 'MidJourney', 'Google Analytics', 'Mailchimp',
  'Android Studio', 'Figma', 'Photoshop', 'VS Code', 'Git','Claude', 'Notion', 'Airtable', 'Trello', 'Asana', 'Jira', 'Slack',
];

const SkillsSection: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="skills" className="section-padding bg-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 dot-bg" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-red-500 font-mono text-sm tracking-widest uppercase">// Skills</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mt-3">
            My <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-ash-400 text-lg max-w-2xl mx-auto mt-4">
            Technical expertise and creative skills for comprehensive digital solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + catIdx * 0.15 }}
              className="glass-card glass-card-hover rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-7">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                  <category.icon size={20} className="text-red-500" />
                </div>
                <h3 className="text-white font-display font-bold text-lg">{category.title}</h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-ash-300 text-sm font-medium">{skill.name}</span>
                      <span className="text-red-500 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.4 + catIdx * 0.15 + skillIdx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full bg-gradient-to-r from-red-600 to-red-400 rounded-full relative"
                      >
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-red-400 rounded-full shadow-lg shadow-red-500/50" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16"
        >
          <h3 className="text-center text-ash-400 font-mono text-sm tracking-widest uppercase mb-8">
            Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.03 }}
                className="px-4 py-2 rounded-lg bg-white/[0.03] border border-white/5 text-ash-400 text-sm font-mono hover:text-red-400 hover:border-red-500/30 hover:bg-red-500/5 transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
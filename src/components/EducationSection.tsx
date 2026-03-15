import React from 'react';
import { GraduationCap, BookOpen, Award, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const education = [
  {
    institution: 'NSBM Green University',
    degree: 'BSc (Hons) in Computer Security',
    period: '2022 - 2026',
    status: 'Undergraduate',
    gpa: 'Expected GPA: 3.0 - 3.5',
    icon: GraduationCap,
    details: [
      'Languages: C#, HTML, CSS, Java, Python, Dart',
      'Android app development',
      'Network and security fundamentals',
      'Innovative ideas and projects',
    ],
    highlight: true,
  },
  {
    institution: 'Aquinas College of Higher Studies',
    degree: 'BEIT Course',
    period: '2022 - 2023',
    status: 'Completed',
    gpa: '',
    icon: BookOpen,
    details: [
      'Office workspace training',
      'English diploma level 1 & level 2',
    ],
    highlight: false,
  },
];

const EducationSection: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="education" className="section-padding bg-dark-800 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-red-500 font-mono text-sm tracking-widest uppercase">// Education</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mt-3">
            Academic <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-ash-400 text-lg max-w-2xl mx-auto mt-4">
            Building a strong foundation in computer science and security
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className={`group glass-card glass-card-hover rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 relative ${
                edu.highlight ? 'md:col-span-1' : ''
              }`}
            >
              {edu.highlight && (
                <div className="absolute -top-px -left-px -right-px h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-t-2xl" />
              )}

              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center group-hover:bg-red-500/20 transition-all duration-300">
                  <edu.icon size={24} className="text-red-500" />
                </div>
                <div className="flex items-center gap-2 text-ash-500 text-sm font-mono">
                  <Calendar size={14} />
                  {edu.period}
                </div>
              </div>

              <div className="mb-1">
                <span className="inline-block px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-medium mb-3">
                  {edu.status}
                </span>
              </div>

              <h3 className="text-white font-display font-bold text-xl mb-1">
                {edu.institution}
              </h3>
              <p className="text-red-400 font-medium mb-2">{edu.degree}</p>
              {edu.gpa && (
                <p className="text-ash-400 text-sm mb-4 flex items-center gap-2">
                  <Award size={14} className="text-yellow-500" />
                  {edu.gpa}
                </p>
              )}

              <ul className="space-y-2 mt-4">
                {edu.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2 text-ash-400 text-sm">
                    <span className="text-red-500 mt-1 shrink-0">&#9656;</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Languages & Skills Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <h3 className="text-center text-white font-display font-semibold text-lg mb-8">
            Programming Languages
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'C#', level: 85 },
              { name: 'HTML/CSS', level: 90 },
              { name: 'JavaScript', level: 85 },
              { name: 'Java', level: 75 },
              { name: 'Python', level: 80 },
              { name: 'Dart', level: 70 },
            ].map((lang) => (
              <div
                key={lang.name}
                className="group relative px-6 py-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-red-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="text-white font-mono text-sm">{lang.name}</span>
                <div className="absolute bottom-0 left-0 h-[2px] bg-red-500 rounded-b-xl transition-all duration-500 group-hover:opacity-100 opacity-50"
                  style={{ width: `${lang.level}%` }}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import ParticleField from './components/ParticleField';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import SocialSection from './components/SocialSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-dark-900 text-white relative"
        >
          <ParticleField />
          <Navigation />
          <HeroSection />
          <AboutSection />
          <EducationSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <SocialSection />
          <ContactSection />
          <Footer />
        </motion.div>
      )}
    </>
  );
}

export default App;
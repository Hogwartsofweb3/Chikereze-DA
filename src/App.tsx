import { useState } from 'react';
import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CommandPalette } from './components/layout/CommandPalette';
import { HeroSection } from './components/hero/HeroSection';
import { AboutBento } from './components/about/AboutBento';
import { SkillsSection } from './components/skills/SkillsSection';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { ProjectModal } from './components/projects/ProjectModal';
import { DataLabSection } from './components/lab/DataLabSection';
import { TestimonialsSection } from './components/testimonials/TestimonialsSection';
import { ContactSection } from './components/contact/ContactSection';
import { Project } from './types';

export function App() {
  const { toggleTheme, isDark } = useTheme();
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Navigation */}
      <Navbar
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        toggleTheme={toggleTheme}
        isDark={isDark}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection isDark={isDark} />
        <AboutBento />
        <SkillsSection isDark={isDark} />
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />
        <DataLabSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Overlays */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onSelectProject={(project) => setSelectedProject(project)}
        toggleTheme={toggleTheme}
        isDark={isDark}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default App;

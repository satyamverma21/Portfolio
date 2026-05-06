import { useState, useEffect, useMemo } from 'react';
import ProfileCard from './components/ProfileCard';
import ProjectCard from './components/ProjectCard';
import {
  AboutSection,
  ExperienceSection,
  StackSection,
  ContactSection,
} from './components/Sections';
import { PROJECTS, TABS } from './portfolio';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedTab, setSelectedTab] = useState(TABS[0]);

  const filteredProjects = useMemo(() => {
    if (selectedTab === 'All Work') return PROJECTS;
    if (selectedTab === 'AI Systems') return PROJECTS.filter((p) => p.category?.includes('AI'));
    if (selectedTab === 'Python') return PROJECTS.filter((p) => p.category?.includes('Python'));
    if (selectedTab === 'Web Apps')
      return PROJECTS.filter((p) => /Web|Flask|React|Expo|Frontend/i.test(p.category || ''));
    return PROJECTS;
  }, [selectedTab]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden font-sans">
      {/* Background Gradients */}
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] opacity-60" />
      </div>

      <ProfileCard />

      <main className="flex-1 w-full lg:pl-[360px] xl:pl-[420px] pt-20 md:pt-8 pb-32 lg:pb-24 px-6 md:px-8 lg:px-8 xl:px-12 min-h-screen">
        <div className="max-w-6xl mx-auto space-y-24">
          
          <AboutSection />

          <ExperienceSection />

          <div id="projects" className="space-y-12">
            <header className="max-w-2xl">
              <h2 className="font-display font-bold text-4xl md:text-5xl text-on-surface mb-4 drop-shadow-md">
                Selected Projects
              </h2>
              <p className="font-sans text-lg text-on-surface-variant leading-relaxed">
                A curated set of AI, Python, mobile, and product-focused builds that reflects Satyam's backend-first portfolio identity.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-2">
                {TABS.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setSelectedTab(tab)}
                    className={`px-6 py-2 rounded-full text-xs font-display font-semibold uppercase tracking-widest transition-all ${
                      selectedTab === tab
                        ? 'bg-primary/10 border border-primary/40 text-primary shadow-[inset_0_0_15px_rgba(146,255,184,0.1)]'
                        : 'bg-white/5 border border-white/10 text-on-surface-variant hover:bg-white/10 hover:text-on-surface'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {filteredProjects.map((project, i) => (
                <ProjectCard
                  key={i}
                  title={project.title}
                  category={project.category}
                  description={project.description}
                  image={project.image}
                  isLarge={project.isLarge}
                  href={project.link}
                />
              ))}
            </div>
          </div>

          <StackSection />

          <ContactSection />

          {/* Footer */}
          <footer className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 pb-8">
            <p className="font-display font-semibold text-[10px] text-on-surface-variant uppercase tracking-widest">
              © 2024 Technical Professional. All rights reserved.
            </p>
            <div className="flex gap-8">
              <a href="#" className="font-sans text-xs text-on-surface-variant hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="font-sans text-xs text-on-surface-variant hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}

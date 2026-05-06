import { useState, useEffect } from 'react';
import ProfileCard from './components/ProfileCard';
import ProjectCard from './components/ProjectCard';
import { 
  AboutSection, 
  ExperienceSection, 
  StackSection, 
  ContactSection 
} from './components/Sections';

const PROJECTS = [
  {
    title: 'CivicHub',
    category: 'Featured GitHub Project',
    description: 'Community issue reporting app with an Expo React Native frontend, Express + SQLite backend, JWT auth, and local media uploads.',
    link: 'https://github.com/satyamverma21/CivicHub',
    isLarge: true
  },
  {
    title: 'Enterprise RAG Knowledge Base Assistant',
    category: 'AI + Retrieval',
    description: 'A portfolio-relevant AI system built around a frontend/backend split for enterprise knowledge retrieval and grounded responses.',
    link: 'https://github.com/satyamverma21/Enterprise-RAG-Knowledge-Base-Assistant'
  },
  {
    title: 'SQL Chatbot with LangChain and LLM Integration',
    category: 'AI + Data',
    description: 'A natural-language interface for querying SQL databases with ChatGroq-powered SQL generation across SQLite and MySQL.',
  },
  {
    title: 'Resume Analyser RAG',
    category: 'Python + NLP',
    description: 'Python-based resume analysis and retrieval workflow using RAG-style document processing.',
    link: 'https://github.com/satyamverma21/Resume_analyzer_RAG'
  },
  {
    title: 'FloraSense: Plant Solution',
    category: 'Flask App',
    description: 'Plant species identification and disease detection app using Plant.id API, Flask, Tailwind CSS, and Render hosting.',
    link: 'https://github.com/satyamverma21/FloraSense'
  },
  {
    title: 'Plant Pal',
    category: 'React Native',
    description: 'React Native plant detection app with identification, market, and sell-plant flows.',
    link: 'https://github.com/satyamverma21/PlantPal'
  },
  {
    title: 'Algo-Trading',
    category: 'Python + Finance',
    description: 'Stock analysis notebook using moving averages, Alpha Vantage, NumPy, and Pandas to generate trading signals.',
    link: 'https://github.com/satyamverma21/AlgoTrading'
  }
];

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

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

      <main className="flex-1 w-full lg:pl-[376px] pt-20 md:pt-8 pb-32 lg:pb-24 px-6 md:px-8 lg:px-12 min-h-screen">
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
                {['All Work', 'AI Systems', 'Python', 'Web Apps'].map((tab, i) => (
                  <button 
                    key={tab}
                    className={`px-6 py-2 rounded-full text-xs font-display font-semibold uppercase tracking-widest transition-all ${
                      i === 0 
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
              {PROJECTS.map((project, i) => (
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

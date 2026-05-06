import {
  Home,
  Briefcase,
  LayoutGrid,
  Mail,
  Github,
  Linkedin,
  Download,
  Send,
} from "lucide-react";
import { motion } from "motion/react";

const SOCIAL_LINKS = [
  { icon: Github, href: "https://github.com/satyamverma21" },
  { icon: Linkedin, href: "https://linkedin.com/in/satyam-verma-linkdin" },
  { icon: Mail, href: "mailto:satyamverma2122004@gmail.com" },
];

const NAV_ITEMS = [
  { id: "home", icon: Home, label: "Home" },
  { id: "experience", icon: Briefcase, label: "Experience" },
  { id: "projects", icon: LayoutGrid, label: "Projects" },
  { id: "contact", icon: Mail, label: "Contact" },
];

export default function Sidebar({
  activeSection,
  onNavigate,
}: {
  activeSection: string;
  onNavigate: (id: string) => void;
}) {
  return (
    <>
      {/* Mobile Top Bar */}
      <header className="fixed top-0 left-0 right-0 h-16 md:hidden z-50 glass-panel flex items-center justify-between px-6 border-b border-white/10">
        <span className="font-display font-bold text-lg tracking-tight">
          Satyam Verma
        </span>
        <div className="flex gap-4">
          {NAV_ITEMS.slice(0, 3).map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`text-sm ${activeSection === item.id ? "text-primary" : "text-on-surface-variant"}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </header>

      {/* Desktop Sidebar */}
      <aside className="fixed left-8 top-8 bottom-8 w-[300px] hidden md:flex flex-col glass-panel rounded-3xl p-6 z-40 overflow-y-auto custom-scrollbar">
        <div className="flex flex-col items-center mb-8">
          <div className="w-24 h-24 rounded-2xl mb-4 border border-white/10 shadow-inner bg-gradient-to-br from-primary/20 via-white/5 to-transparent flex items-center justify-center">
            <span className="font-display font-bold text-2xl text-primary">
              SV
            </span>
          </div>

          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl px-3 py-1 rounded-full border border-white/10 mb-4">
            <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(146,255,184,0.6)] animate-pulse" />
            <span className="font-display font-semibold text-[10px] uppercase tracking-widest text-on-surface">
              Available for Work
            </span>
          </div>

          <h1 className="font-display font-bold text-2xl text-on-surface">
            Satyam Verma
          </h1>
          <p className="font-sans text-sm text-on-surface-variant mt-1">
            Python Developer | AI & NLP
          </p>
        </div>

        {/* Socials */}
        <div className="flex justify-center gap-3 mb-8">
          {SOCIAL_LINKS.map((social, i) => (
            <a
              key={i}
              href={social.href}
              className="p-2 rounded-xl border border-white/10 bg-white/5 hover:border-primary/50 hover:bg-white/10 text-on-surface-variant hover:text-primary transition-all duration-300"
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>

        {/* Nav */}
        <nav className="flex flex-col gap-1 mb-8">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                  isActive
                    ? "text-primary bg-white/5 border border-white/10 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]"
                    : "text-on-surface-variant hover:bg-white/5 hover:text-on-surface"
                }`}
              >
                <item.icon
                  size={20}
                  className={isActive ? "fill-primary/20" : ""}
                />
                <span
                  className={`text-sm font-medium ${isActive ? "font-bold" : ""}`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Buttons */}
        <div className="mt-auto flex flex-col gap-3">
          <button className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-surface/50 border border-white/10 text-xs font-display font-semibold uppercase tracking-widest hover:bg-white/5 transition-all">
            <Download size={16} />
            Download CV
          </button>
          <button className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary text-on-primary text-xs font-display font-semibold uppercase tracking-widest hover:opacity-90 transition-all shadow-[0_0_20px_rgba(146,255,184,0.2)]">
            <Send size={16} />
            Contact Me
          </button>
        </div>
      </aside>
    </>
  );
}

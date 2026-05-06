import { motion } from 'motion/react';
import { 
  Terminal, 
  Code2, 
  Database, 
  Layers, 
  Figma, 
  Globe, 
  Fingerprint,
  Mail,
  Github,
  Linkedin,
  Phone
} from 'lucide-react';

export function AboutSection() {
  return (
    <section id="home" className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="col-span-1 lg:col-span-8 glass-panel rounded-[32px] p-8 md:p-12 relative overflow-hidden group border-white/10"
      >
        <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
          <Fingerprint size={160} />
        </div>
        <p className="font-display font-semibold text-xs uppercase tracking-widest text-primary mb-4">Python Developer | AI & ML | NLP</p>
        <h2 className="font-display font-bold text-4xl md:text-5xl text-on-surface mb-6 tracking-tight">Satyam Verma</h2>
        <p className="font-sans text-lg md:text-xl text-on-surface-variant max-w-2xl mb-6 leading-relaxed">
          Python developer focused on AI, machine learning, and NLP. I build practical systems across LLM training, retrieval, backend APIs, and data workflows rather than generalist frontend polish.
        </p>
        <p className="font-sans text-on-surface-variant max-w-2xl leading-relaxed">
          Current work includes LLM training at Turing, alongside a graduate MCA program at Amity University and a portfolio grounded in Python, LangChain, FastAPI, Flask, and SQL.
        </p>

        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { value: '2+', label: 'Years Exp' },
            { value: '3+', label: 'Projects' },
            { value: '2', label: 'Companies' },
            { value: '1', label: 'RLHF Impl.' }
          ].map((stat) => (
            <div key={stat.label} className="glass-panel rounded-2xl p-4 border-white/10">
              <div className="font-display font-bold text-2xl md:text-3xl text-primary">{stat.value}</div>
              <div className="mt-1 text-[10px] uppercase tracking-widest text-on-surface-variant font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="col-span-1 lg:col-span-4 glass-panel rounded-[32px] p-8 md:p-10 flex flex-col justify-center border-white/10"
      >
        <h3 className="font-display font-semibold text-xs text-primary uppercase tracking-widest mb-8">Education & Credentials</h3>
        <div className="space-y-8">
          {[
            { title: 'MCA', subtitle: 'Amity University • Greater Noida • 2026 (in progress)', current: true },
            { title: 'BCA', subtitle: 'GGSIPU • New Delhi • 2024 • CGPA 9.2/10' },
            { title: 'Class Representative', subtitle: 'Served for three semesters during BCA' }
          ].map((edu, i) => (
            <div key={i} className={`relative pl-6 ${i !== 2 ? 'before:absolute before:left-0 before:top-2 before:bottom-[-2rem] before:w-px before:bg-white/10' : ''}`}>
              <div className={`absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-background border ${edu.current ? 'border-primary shadow-[0_0_8px_rgba(146,255,184,0.5)]' : 'border-white/30'}`} />
              <h4 className="font-display font-medium text-on-surface text-lg">{edu.title}</h4>
              <p className="font-sans text-xs text-on-surface-variant mt-1">{edu.subtitle}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export function StackSection() {
  const tools = [
    { icon: Terminal, label: 'Python' },
    { icon: Code2, label: 'LangChain' },
    { icon: Layers, label: 'FastAPI' },
    { icon: Database, label: 'SQL' },
    { icon: Figma, label: 'PyTorch' },
    { icon: Globe, label: 'Docker' },
  ];

  return (
    <section className="py-12">
      <div className="mb-10">
        <h3 className="font-display font-bold text-3xl text-on-surface tracking-tight">Technical Stack</h3>
        <p className="font-sans text-on-surface-variant mt-2 font-medium">The core stack behind Satyam's Python, LLM, backend, and data projects.</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {tools.map((tool, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="glass-panel rounded-2xl p-8 flex flex-col items-center justify-center gap-4 hover:-translate-y-2 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 group shadow-lg"
          >
            <tool.icon size={36} className="text-on-surface-variant group-hover:text-primary transition-colors" />
            <span className="font-display font-semibold text-[10px] uppercase tracking-widest text-on-surface">{tool.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function ExperienceSection() {
  const experiences = [
    {
      title: 'Python LLM Trainer',
      company: 'Turing',
      period: 'Aug 2024 - Present',
      desc: 'Worked with a 6-person team to develop and refine large language models, implemented RLHF to align outputs with human preferences, and designed prompts to uncover model weaknesses and improve response quality.'
    },
    {
      title: 'Python Developer',
      company: 'AlgoBulls',
      period: 'Aug 2023 - Aug 2024',
      desc: 'Optimized trading code with Cython for a 150% speed increase, worked across NumPy and Pandas for analysis and visualization, and automated workflows with Bash scripting.'
    }
  ];

  return (
    <section id="experience" className="py-12">
      <h3 className="font-display font-bold text-3xl text-on-surface mb-8">Experience</h3>
      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group glass-panel p-8 rounded-3xl relative overflow-hidden border-white/10 hover:border-primary/30 transition-all"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/10 group-hover:bg-primary transition-colors shadow-[0_0_10px_rgba(146,255,184,0.5)]" />
            <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-4 pl-4">
              <div>
                <h4 className="font-display font-bold text-xl text-on-surface group-hover:text-primary transition-colors">{exp.title}</h4>
                <p className="font-sans text-on-surface-variant font-medium">{exp.company}</p>
              </div>
              <div className="glass-panel px-4 py-1 rounded-full text-on-surface-variant font-display font-semibold text-[10px] uppercase tracking-widest self-start">
                {exp.period}
              </div>
            </div>
            <p className="font-sans text-on-surface-variant pl-4 leading-relaxed">{exp.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="grid grid-cols-1 lg:grid-cols-2 gap-16 pt-16 border-t border-white/10">
      <div>
        <h2 className="font-display font-bold text-4xl md:text-5xl text-on-surface mb-6 tracking-tight">Contact.</h2>
        <p className="font-sans text-lg text-on-surface-variant mb-10 max-w-md leading-relaxed">
          Open to backend, AI, LLM, and applied machine learning opportunities.
        </p>
        <div className="space-y-8">
          <div className="flex items-start gap-5 group cursor-pointer">
            <div className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-md group-hover:bg-primary/10 group-hover:border-primary/30 group-hover:text-primary transition-all">
              <Mail size={24} />
            </div>
            <div>
              <h4 className="font-display font-semibold text-[10px] text-on-surface-variant uppercase tracking-widest mb-2">Email</h4>
              <a href="mailto:satyamverma2122004@gmail.com" className="font-display font-bold text-xl text-on-surface group-hover:text-primary transition-colors">satyamverma2122004@gmail.com</a>
            </div>
          </div>
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-md ">
               <Globe size={24} className="text-on-surface-variant" />
            </div>
            <div>
              <h4 className="font-display font-semibold text-[10px] text-on-surface-variant uppercase tracking-widest mb-2">Location</h4>
              <p className="font-display font-bold text-xl text-on-surface">India</p>
              <p className="font-sans text-xs text-on-surface-variant mt-1">Originally from Bulandshahr, Uttar Pradesh; open to remote roles</p>
            </div>
          </div>
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-md ">
               <Phone size={24} className="text-on-surface-variant" />
            </div>
            <div>
              <h4 className="font-display font-semibold text-[10px] text-on-surface-variant uppercase tracking-widest mb-2">Phone</h4>
              <a href="tel:+917017000820" className="font-display font-bold text-xl text-on-surface group-hover:text-primary transition-colors">+91 7017000820</a>
            </div>
          </div>
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-md ">
               <Github size={24} className="text-on-surface-variant" />
            </div>
            <div>
              <h4 className="font-display font-semibold text-[10px] text-on-surface-variant uppercase tracking-widest mb-2">GitHub</h4>
              <a href="https://github.com/satyamverma21" target="_blank" rel="noreferrer" className="font-display font-bold text-xl text-on-surface group-hover:text-primary transition-colors">github.com/satyamverma21</a>
            </div>
          </div>
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-md ">
               <Linkedin size={24} className="text-on-surface-variant" />
            </div>
            <div>
              <h4 className="font-display font-semibold text-[10px] text-on-surface-variant uppercase tracking-widest mb-2">LinkedIn</h4>
              <a href="https://linkedin.com/in/satyam-verma-linkdin" target="_blank" rel="noreferrer" className="font-display font-bold text-xl text-on-surface group-hover:text-primary transition-colors">linkedin.com/in/satyam-verma-linkdin</a>
            </div>
          </div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass-panel p-10 md:p-12 rounded-[32px]"
      >
        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="block font-display font-semibold text-[10px] text-on-surface-variant uppercase tracking-widest">Name</label>
              <input type="text" placeholder="Your name" className="w-full bg-transparent border-b border-white/20 focus:border-primary text-on-surface py-3 outline-none transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="block font-display font-semibold text-[10px] text-on-surface-variant uppercase tracking-widest">Email</label>
              <input type="email" placeholder="you@example.com" className="w-full bg-transparent border-b border-white/20 focus:border-primary text-on-surface py-3 outline-none transition-colors" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="block font-display font-semibold text-[10px] text-on-surface-variant uppercase tracking-widest">Subject</label>
            <input type="text" placeholder="Backend / AI opportunity" className="w-full bg-transparent border-b border-white/20 focus:border-primary text-on-surface py-3 outline-none transition-colors" />
          </div>
          <div className="space-y-2">
            <label className="block font-display font-semibold text-[10px] text-on-surface-variant uppercase tracking-widest">Message</label>
            <textarea placeholder="Describe the role, project, or collaboration." rows={4} className="w-full bg-transparent border-b border-white/20 focus:border-primary text-on-surface py-3 outline-none transition-colors resize-none" />
          </div>
          <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-display font-semibold text-xs uppercase tracking-widest hover:opacity-90 transition-all w-full md:w-auto shadow-lg">
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
}

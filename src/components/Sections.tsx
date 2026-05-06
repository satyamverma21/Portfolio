import { motion } from "motion/react";
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
  Phone,
} from "lucide-react";

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="home" className="pt-8 pb-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-8"
      >
        {/* Main Hero */}
        <motion.div variants={itemVariants} className="space-y-6">
          <div className="space-y-2">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="font-display font-semibold text-xs uppercase tracking-widest text-primary"
            >
              Python Developer | AI & ML | NLP
            </motion.p>
            <div className="space-y-3">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-on-surface tracking-tight leading-tight"
              >
                Satyam Verma
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-sans text-lg md:text-xl text-on-surface-variant font-medium max-w-3xl leading-relaxed"
              >
                I build practical AI systems—LLM training, retrieval engines, backend APIs, and data workflows.
              </motion.p>
            </div>
          </div>

          {/* Stats Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4"
          >
            {[
              { value: "2+", label: "Years Exp" },
              { value: "7+", label: "Projects" },
              { value: "2", label: "Companies" },
              { value: "1", label: "RLHF Impl." },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-panel rounded-2xl p-4 md:p-6 border-white/10 group hover:border-primary/50 hover:bg-white/10 transition-all duration-300"
              >
                <div className="font-display font-bold text-3xl md:text-4xl text-primary group-hover:text-primary transition-colors">
                  {stat.value}
                </div>
                <div className="mt-2 text-[10px] uppercase tracking-widest text-on-surface-variant font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Two Column Section */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-panel rounded-[28px] p-8 md:p-10 border-white/10 group hover:border-primary/30 transition-all duration-300"
          >
            <h3 className="font-display font-semibold text-xs text-primary uppercase tracking-widest mb-4">
              About Me
            </h3>
            <p className="font-sans text-on-surface-variant leading-relaxed">
              Currently at <span className="text-on-surface font-medium">Turing</span>, training large language models with RLHF and prompt engineering. Pursuing MCA at Amity University.
            </p>
            <p className="font-sans text-on-surface-variant leading-relaxed mt-4">
              Specialized in Python ecosystem: <span className="text-primary">LangChain</span>, <span className="text-primary">FastAPI</span>, <span className="text-primary">PyTorch</span>, and <span className="text-primary">SQL</span>.
            </p>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-panel rounded-[28px] p-8 md:p-10 border-white/10"
          >
            <h3 className="font-display font-semibold text-xs text-primary uppercase tracking-widest mb-6">
              Education
            </h3>
            <div className="space-y-5">
              {[
                { title: "MCA", subtitle: "Amity University (2026)", current: true },
                { title: "BCA", subtitle: "GGSIPU • CGPA 9.2/10", current: false },
              ].map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div
                    className={`flex-shrink-0 mt-1 w-2.5 h-2.5 rounded-full ${
                      edu.current
                        ? "bg-primary shadow-[0_0_8px_rgba(146,255,184,0.6)] animate-pulse"
                        : "bg-white/20"
                    }`}
                  />
                  <div>
                    <h4 className="font-display font-bold text-on-surface">
                      {edu.title}
                    </h4>
                    <p className="font-sans text-sm text-on-surface-variant">
                      {edu.subtitle}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 pt-8"
        >
          <a
            href="#projects"
            className="flex-1 px-6 py-4 rounded-xl bg-primary text-on-primary font-display font-semibold text-sm uppercase tracking-widest hover:opacity-90 shadow-[0_0_20px_rgba(146,255,184,0.2)] transition-all duration-300 text-center group"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="flex-1 px-6 py-4 rounded-xl border border-primary/30 text-primary font-display font-semibold text-sm uppercase tracking-widest hover:bg-primary/10 transition-all duration-300 text-center"
          >
            Get In Touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export function StackSection() {
  const tools = [
    { icon: Terminal, label: "Python" },
    { icon: Code2, label: "LangChain" },
    { icon: Layers, label: "FastAPI" },
    { icon: Database, label: "SQL" },
    { icon: Figma, label: "PyTorch" },
    { icon: Globe, label: "Docker" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h3 className="font-display font-bold text-4xl md:text-5xl text-on-surface tracking-tight mb-3">
          Tech Stack
        </h3>
        <p className="font-sans text-lg text-on-surface-variant font-medium">
          Core tools powering my AI, backend, and data projects.
        </p>
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
      >
        {tools.map((tool, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="group glass-panel rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center gap-4 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(146,255,184,0.1)] cursor-default"
          >
            <motion.div
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <tool.icon
                size={40}
                className="text-on-surface-variant group-hover:text-primary transition-colors duration-300"
              />
            </motion.div>
            <span className="font-display font-semibold text-[11px] uppercase tracking-widest text-on-surface text-center">
              {tool.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export function ExperienceSection() {
  const experiences = [
    {
      title: "Python LLM Trainer",
      company: "Turing",
      period: "Aug 2024 - Present",
      desc: "Worked with a 6-person team to develop and refine large language models, implemented RLHF to align outputs with human preferences, and designed prompts to uncover model weaknesses and improve response quality.",
    },
    {
      title: "Python Developer",
      company: "AlgoBulls",
      period: "Aug 2023 - Aug 2024",
      desc: "Optimized trading code with Cython for a 150% speed increase, worked across NumPy and Pandas for analysis and visualization, and automated workflows with Bash scripting.",
    },
  ];

  return (
    <section id="experience" className="py-12">
      <h3 className="font-display font-bold text-3xl text-on-surface mb-8">
        Experience
      </h3>
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
                <h4 className="font-display font-bold text-xl text-on-surface group-hover:text-primary transition-colors">
                  {exp.title}
                </h4>
                <p className="font-sans text-on-surface-variant font-medium">
                  {exp.company}
                </p>
              </div>
              <div className="glass-panel px-4 py-1 rounded-full text-on-surface-variant font-display font-semibold text-[10px] uppercase tracking-widest self-start">
                {exp.period}
              </div>
            </div>
            <p className="font-sans text-on-surface-variant pl-4 leading-relaxed">
              {exp.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section
      id="contact"
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 pt-12 md:pt-16 border-t border-white/10"
    >
      <div className="min-w-0">
        <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-on-surface mb-4 md:mb-6 tracking-tight">
          Contact.
        </h2>
        <p className="font-sans text-base md:text-lg text-on-surface-variant mb-8 md:mb-10 max-w-md leading-relaxed">
          Open to backend, AI, LLM, and applied machine learning opportunities.
        </p>
        <div className="space-y-6 md:space-y-8">
          <div className="flex items-start gap-3 md:gap-5 group cursor-pointer">
            <div className="w-12 md:w-14 h-12 md:h-14 flex-shrink-0 rounded-2xl border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-md group-hover:bg-primary/10 group-hover:border-primary/30 group-hover:text-primary transition-all">
              <Mail size={20} className="md:w-6 md:h-6" />
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="font-display font-semibold text-[10px] text-on-surface-variant uppercase tracking-widest mb-1 md:mb-2">
                Email
              </h4>
              <a
                href="mailto:satyamverma2122004@gmail.com"
                className="font-display font-bold text-base md:text-lg lg:text-xl text-on-surface group-hover:text-primary transition-colors break-all"
              >
                satyamverma2122004@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3 md:gap-5 group cursor-pointer">
            <div className="w-12 md:w-14 h-12 md:h-14 flex-shrink-0 rounded-2xl border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-md group-hover:bg-primary/10 group-hover:border-primary/30 group-hover:text-primary transition-all">
              <Globe size={20} className="md:w-6 md:h-6 text-on-surface-variant group-hover:text-primary" />
            </div>
            <div className="min-w-0">
              <h4 className="font-display font-semibold text-[10px] text-on-surface-variant uppercase tracking-widest mb-1 md:mb-2">
                Location
              </h4>
              <p className="font-display font-bold text-base md:text-lg lg:text-xl text-on-surface">
                India
              </p>
              <p className="font-sans text-xs md:text-sm text-on-surface-variant mt-1 leading-relaxed">
                Originally from Bulandshahr, Uttar Pradesh; open to remote roles
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 md:gap-5 group cursor-pointer">
            <div className="w-12 md:w-14 h-12 md:h-14 flex-shrink-0 rounded-2xl border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-md group-hover:bg-primary/10 group-hover:border-primary/30 group-hover:text-primary transition-all">
              <Phone size={20} className="md:w-6 md:h-6 text-on-surface-variant group-hover:text-primary" />
            </div>
            <div className="min-w-0">
              <h4 className="font-display font-semibold text-[10px] text-on-surface-variant uppercase tracking-widest mb-1 md:mb-2">
                Phone
              </h4>
              <a
                href="tel:+917017000820"
                className="font-display font-bold text-base md:text-lg lg:text-xl text-on-surface group-hover:text-primary transition-colors"
              >
                +91 7017000820
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3 md:gap-5 group cursor-pointer">
            <div className="w-12 md:w-14 h-12 md:h-14 flex-shrink-0 rounded-2xl border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-md group-hover:bg-primary/10 group-hover:border-primary/30 group-hover:text-primary transition-all">
              <Github size={20} className="md:w-6 md:h-6 text-on-surface-variant group-hover:text-primary" />
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="font-display font-semibold text-[10px] text-on-surface-variant uppercase tracking-widest mb-1 md:mb-2">
                GitHub
              </h4>
              <a
                href="https://github.com/satyamverma21"
                target="_blank"
                rel="noreferrer"
                className="font-display font-bold text-base md:text-lg lg:text-xl text-on-surface group-hover:text-primary transition-colors break-all"
              >
                github.com/satyamverma21
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3 md:gap-5 group cursor-pointer">
            <div className="w-12 md:w-14 h-12 md:h-14 flex-shrink-0 rounded-2xl border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-md group-hover:bg-primary/10 group-hover:border-primary/30 group-hover:text-primary transition-all">
              <Linkedin size={20} className="md:w-6 md:h-6 text-on-surface-variant group-hover:text-primary" />
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="font-display font-semibold text-[10px] text-on-surface-variant uppercase tracking-widest mb-1 md:mb-2">
                LinkedIn
              </h4>
              <a
                href="https://linkedin.com/in/satyam-verma-linkdin"
                target="_blank"
                rel="noreferrer"
                className="font-display font-bold text-base md:text-lg lg:text-xl text-on-surface group-hover:text-primary transition-colors break-all"
              >
                linkedin.com/in/satyam-verma-linkdin
              </a>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass-panel p-6 md:p-8 lg:p-10 lg:p-12 rounded-[32px]"
      >
        <form className="space-y-6 md:space-y-8" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            <div className="space-y-2">
              <label className="block font-display font-semibold text-[10px] text-on-surface-variant uppercase tracking-widest">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-transparent border-b border-white/20 focus:border-primary text-on-surface py-2 md:py-3 text-sm md:text-base outline-none transition-colors placeholder:text-white/20"
              />
            </div>
            <div className="space-y-2">
              <label className="block font-display font-semibold text-[10px] text-on-surface-variant uppercase tracking-widest">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-transparent border-b border-white/20 focus:border-primary text-on-surface py-2 md:py-3 text-sm md:text-base outline-none transition-colors placeholder:text-white/20"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="block font-display font-semibold text-[10px] text-on-surface-variant uppercase tracking-widest">
              Subject
            </label>
            <input
              type="text"
              placeholder="Backend / AI opportunity"
              className="w-full bg-transparent border-b border-white/20 focus:border-primary text-on-surface py-2 md:py-3 text-sm md:text-base outline-none transition-colors placeholder:text-white/20"
            />
          </div>
          <div className="space-y-2">
            <label className="block font-display font-semibold text-[10px] text-on-surface-variant uppercase tracking-widest">
              Message
            </label>
            <textarea
              placeholder="Describe the role, project, or collaboration."
              rows={4}
              className="w-full bg-transparent border-b border-white/20 focus:border-primary text-on-surface py-2 md:py-3 text-sm md:text-base outline-none transition-colors resize-none placeholder:text-white/20"
            />
          </div>
          <button className="w-full bg-primary text-on-primary px-6 md:px-8 py-3 md:py-4 rounded-xl font-display font-semibold text-xs uppercase tracking-widest hover:opacity-90 transition-all shadow-lg">
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
}

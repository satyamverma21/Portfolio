import { useEffect, useMemo, useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import {
  ArrowDown, ArrowUpRight, BriefcaseBusiness, Check, ChevronRight, Code2,
  Download, Github, Linkedin, Mail, MapPin, Menu, Phone, Send, Sparkles,
  X, Zap,
} from 'lucide-react';
import { PROJECTS, resume } from './portfolio';

const navItems = [
  ['about', 'About'], ['experience', 'Experience'], ['projects', 'Projects'], ['contact', 'Contact'],
];

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: .65, ease: [0.16, 1, .3, 1] } } };

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div className="section-heading">
    <span className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</span>
    <h2>{title}</h2>
    {copy && <p>{copy}</p>}
  </div>;
}

function App() {
  const [active, setActive] = useState('about');
  const [filter, setFilter] = useState('All');
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const filtered = useMemo(() => filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.tags.includes(filter)), [filter]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: '-20% 0px -60% 0px', threshold: [0, .2, .6] });
    navItems.forEach(([id]) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const goTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false); };
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(String(data.get('subject') || 'Portfolio enquiry'));
    const body = encodeURIComponent(`Hi Satyam,\n\n${data.get('message')}\n\nFrom: ${data.get('name')} (${data.get('email')})`);
    window.location.href = `mailto:satyamverma2122004@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return <div className="site-shell">
    <div className="ambient ambient-one" /><div className="ambient ambient-two" />
    <header className="site-header">
      <button className="brand" onClick={() => goTo('about')} aria-label="Back to top"><span>SV</span><strong>Satyam Verma</strong></button>
      <nav className="desktop-nav" aria-label="Primary navigation">{navItems.map(([id, label]) => <button key={id} className={active === id ? 'active' : ''} onClick={() => goTo(id)}>{label}</button>)}</nav>
      <a className="header-cta" href={`mailto:${'satyamverma2122004@gmail.com'}`}>Let's talk <ArrowUpRight size={15} /></a>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
    </header>
    {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{navItems.map(([id, label]) => <button key={id} onClick={() => goTo(id)}>{label}<ArrowUpRight size={16} /></button>)}</nav>}

    <main>
      <section id="about" className="hero section-wrap">
        <motion.div initial="hidden" animate="show" variants={fadeUp} className="hero-copy">
          <div className="availability"><span /> Available for backend & AI opportunities</div>
          <p className="kicker">Python developer · AI / ML · NLP</p>
          <h1>Building the systems<br /><em>behind intelligent products.</em></h1>
          <p className="hero-lede">I’m Satyam Verma, a backend and AI engineer based in India. I turn messy data, language models, and product ideas into reliable software people can use.</p>
          <div className="hero-actions"><button className="button button-primary" onClick={() => goTo('projects')}>Explore my work <ArrowDown size={17} /></button><a className="text-link" href={resume} download>Download résumé <Download size={16} /></a></div>
          <div className="hero-proof"><span>Currently pursuing MCA at Amity University</span><span>Previously at Turing & AlgoBulls</span></div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .15 }} className="hero-visual">
          <div className="portrait-frame"><img src={`${import.meta.env.BASE_URL}images/profile.png`} alt="Portrait of Satyam Verma" /><div className="portrait-note"><Sparkles size={16} /><span>AI systems<br /><b>with intent</b></span></div></div>
          <div className="code-card"><span className="code-label">/ approach.py</span><code><i>def</i> build_useful_ai(data):<br />&nbsp;&nbsp;context = understand(data)<br />&nbsp;&nbsp;<b>return</b> ship(context)</code></div>
        </motion.div>
      </section>

      <section className="proof-strip section-wrap" aria-label="Highlights">
        {[['02+', 'years building'], ['150%', 'trading speed gained'], ['01', 'RLHF implementation'], ['9.2', 'BCA CGPA / 10']].map(([value, label]) => <div className="proof-item" key={label}><strong>{value}</strong><span>{label}</span></div>)}
      </section>

      <section id="experience" className="section-wrap content-section">
        <SectionHeading eyebrow="The short version" title="A practical engineer with a bias for useful outcomes." copy="My work sits at the intersection of backend engineering and applied AI: systems that are explainable, measurable, and grounded in a real user problem." />
        <div className="about-grid"><div className="about-card accent-card"><span className="card-index">01 / about</span><h3>From model behavior to product behavior.</h3><p>At Turing, I helped train and evaluate large language models with RLHF and prompt engineering. At AlgoBulls, I optimized revenue-generating trading code and worked close to data.</p><p>That combination shapes how I build: understand the underlying system, measure what matters, and keep the experience simple.</p></div><div className="about-card"><span className="card-index">02 / now</span><h3>Focused on backend + AI roles.</h3><div className="mini-list"><div><Check size={17} /> Python APIs and data workflows</div><div><Check size={17} /> RAG, LLM integration, and NLP</div><div><Check size={17} /> Products that are fast and maintainable</div></div><div className="location"><MapPin size={16} /> India · open to remote roles</div></div></div>
      </section>

      <section className="section-wrap content-section timeline-section"><SectionHeading eyebrow="Where I’ve made an impact" title="Experience" />
        <div className="timeline"><article className="timeline-item"><div className="timeline-marker">01</div><div className="timeline-meta"><span>Aug 2024 — Apr 2025</span><span>Remote · California, USA</span></div><div><h3>Python LLM Trainer <small>at Turing</small></h3><p>Worked in a six-person team to develop and refine LLMs, implementing RLHF to align outputs with human preferences.</p><ul><li>Designed prompts that surfaced model weaknesses and improved response quality.</li><li>Optimized reward mechanisms for more robust, useful outputs.</li></ul></div></article><article className="timeline-item"><div className="timeline-marker">02</div><div className="timeline-meta"><span>Aug 2023 — Aug 2024</span><span>Pune, India</span></div><div><h3>Python Developer <small>at AlgoBulls</small></h3><p>Built and optimized parts of an algorithmic trading platform with a strong focus on performance and data workflows.</p><ul><li>Used Cython to achieve a documented <strong>150% speed increase</strong> in trading code.</li><li>Worked with NumPy, Pandas, and Bash to automate analysis and operations.</li></ul></div></article></div>
      </section>

      <section id="projects" className="section-wrap content-section"><SectionHeading eyebrow="Selected work" title="Projects with a reason to exist." copy="A mix of AI, backend, and product builds. Each one starts with a concrete problem—not a tech stack looking for a demo." /><div className="filter-row" role="group" aria-label="Filter projects">{['All', 'AI', 'Backend', 'Product'].map((tab) => <button key={tab} className={filter === tab ? 'selected' : ''} onClick={() => setFilter(tab)}>{tab}</button>)}</div><div className="projects-grid">{filtered.map((project, index) => <motion.article layout key={project.title} className={`project-card ${index === 0 ? 'featured' : ''}`} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ delay: index * .06 }}><div className="project-image"><img src={project.image} alt={`${project.title} project preview`} /><span className="project-number">0{index + 1}</span></div><div className="project-body"><div><span className="project-type">{project.category}</span><h3>{project.title}</h3></div><a href={project.link} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}><ArrowUpRight size={19} /></a><p>{project.description}</p><div className="tag-list">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div></div></motion.article>)}</div></section>

      <section className="section-wrap content-section skills-section"><SectionHeading eyebrow="Tools I use" title="A focused, flexible stack." /><div className="skills-layout"><div className="skill-intro"><Code2 size={25} /><p>Strongest in Python, with enough range across APIs, data, and frontend surfaces to take an idea from model to product.</p></div><div className="skill-cloud">{['Python', 'FastAPI', 'LangChain', 'PyTorch', 'Flask', 'SQL', 'Pandas', 'NumPy', 'Docker', 'JavaScript', 'React', 'Git'].map((skill) => <span key={skill}>{skill}</span>)}</div></div><div className="credentials"><div><span>Education</span><strong>MCA · Amity University</strong><small>In progress · 2026</small></div><div><span>Certification</span><strong>The Joy of Computing with Python</strong><small>NPTEL · 2022</small></div><div><span>Recognition</span><strong>Problem Solving</strong><small>HackerRank · 2022</small></div></div></section>

      <section id="contact" className="section-wrap contact-section"><div className="contact-copy"><SectionHeading eyebrow="Have a role in mind?" title={<>Let’s make something<br /><em>worth shipping.</em></>} copy="I’m open to backend, AI, LLM, and applied machine learning opportunities. The best way to reach me is by email." /><div className="contact-links"><a href="mailto:satyamverma2122004@gmail.com"><Mail size={18} /> satyamverma2122004@gmail.com <ArrowUpRight size={16} /></a><a href="https://github.com/satyamverma21" target="_blank" rel="noreferrer"><Github size={18} /> github.com/satyamverma21 <ArrowUpRight size={16} /></a><a href="https://linkedin.com/in/satyam-verma-linkdin" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn profile <ArrowUpRight size={16} /></a></div></div><form className="contact-form" onSubmit={submit}><div className="form-heading"><span>Quick message</span><Zap size={18} /></div><label>Name<input required name="name" placeholder="Your name" /></label><label>Email<input required type="email" name="email" placeholder="you@company.com" /></label><label>Subject<input name="subject" placeholder="A backend / AI opportunity" /></label><label>Message<textarea required name="message" rows={4} placeholder="Tell me a little about the role or project..." /></label><button className="button button-primary" type="submit">{sent ? <>Email draft opened <Check size={17} /></> : <>Send a message <Send size={16} /></>}</button></form></section>
    </main>
    <footer className="site-footer section-wrap"><span>© {new Date().getFullYear()} Satyam Verma</span><span>Python · AI · NLP</span><a href="#about">Back to top <ChevronRight size={15} /></a></footer>
  </div>;
}

export default App;

import {
  Github,
  Linkedin,
  Mail,
  Instagram,
  Twitter,
  Download,
  Send,
} from "lucide-react";
import { motion } from "motion/react";

const SOCIAL_LINKS = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Github, href: "https://github.com/satyamverma21", label: "GitHub" },
  { icon: Mail, href: "mailto:satyamverma2122004@gmail.com", label: "Email" },
];

export default function ProfileCard() {
  return (
    <>
      {/* Desktop Profile Card - Sticky */}
      <motion.aside
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="hidden lg:flex fixed left-8 top-8 w-[340px] flex-col glass-panel rounded-[32px] p-8 z-40 h-fit max-h-[calc(100vh-4rem)] overflow-y-auto custom-scrollbar"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative w-full mb-6 overflow-hidden rounded-[24px] aspect-square bg-gradient-to-br from-primary/20 via-white/5 to-transparent border border-white/10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent flex items-center justify-center">
            <div className="text-center">
              <span className="font-display font-bold text-6xl text-primary">
                SV
              </span>
            </div>
          </div>
        </motion.div>

        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-2 bg-white/5 backdrop-blur-xl px-4 py-2 rounded-full border border-white/10 mb-6 self-center"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(146,255,184,0.6)]" />
          <span className="font-display font-semibold text-[10px] uppercase tracking-widest text-on-surface">
            Available for work
          </span>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-6"
        >
          <h1 className="font-display font-bold text-2xl text-on-surface mb-1 tracking-tight">
            Satyam Verma
          </h1>
          <p className="font-sans text-sm text-on-surface-variant font-medium">
            Python Developer | AI & NLP
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center gap-3 mb-8"
        >
          {SOCIAL_LINKS.map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              title={social.label}
              whileHover={{ scale: 1.1, translateY: -2 }}
              className="p-2.5 rounded-lg border border-white/10 bg-white/5 hover:border-primary/50 hover:bg-white/10 text-on-surface-variant hover:text-primary transition-all duration-300"
            >
              <social.icon size={18} />
            </motion.a>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col gap-3 mt-auto"
        >
          <a
            href="#download-cv"
            className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-surface-container/60 border border-white/10 text-xs font-display font-semibold uppercase tracking-widest text-on-surface hover:bg-white/10 hover:border-primary/30 transition-all duration-300 group"
          >
            <Download size={16} className="group-hover:scale-110 transition-transform" />
            Download CV
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-primary text-on-primary text-xs font-display font-semibold uppercase tracking-widest hover:opacity-90 hover:shadow-[0_0_30px_rgba(146,255,184,0.3)] transition-all duration-300 group"
          >
            <Send size={16} className="group-hover:scale-110 transition-transform" />
            Contact Me
          </a>
        </motion.div>
      </motion.aside>

      {/* Mobile Bottom Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed bottom-0 left-0 right-0 lg:hidden z-40 glass-panel border-t border-white/10 px-4 py-3 flex justify-around items-center"
      >
        {SOCIAL_LINKS.slice(0, 4).map((social, i) => (
          <motion.a
            key={i}
            href={social.href}
            title={social.label}
            whileHover={{ scale: 1.1 }}
            className="p-2 text-on-surface-variant hover:text-primary transition-colors"
          >
            <social.icon size={20} />
          </motion.a>
        ))}
      </motion.nav>
    </>
  );
}

import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

interface ProjectProps {
  title: string;
  category: string;
  description?: string;
  image?: string;
  isLarge?: boolean;
  href?: string;
}

export default function ProjectCard({ 
  title, 
  category, 
  description, 
  image, 
  isLarge,
  href 
}: ProjectProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative glass-panel rounded-2xl overflow-hidden hover:border-primary/50 hover:bg-white/5 transition-all duration-500 flex flex-col ${
        isLarge ? 'md:col-span-2 h-[500px]' : 'h-[400px]'
      }`}
    >
      <div className={`relative flex-1 overflow-hidden p-3 ${!image ? 'bg-white/5' : ''}`}>
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover object-top rounded-xl group-hover:scale-[1.03] transition-transform duration-700 opacity-90 group-hover:opacity-100"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/10 to-transparent rounded-xl border border-white/5 flex items-center justify-center">
             <div className="w-20 h-20 rounded-full bg-primary/10 blur-2xl animate-pulse" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent pointer-events-none" />
      </div>

      <div className="p-8 border-t border-white/10 backdrop-blur-md relative z-10 mt-auto">
        <div className="flex justify-between items-start">
          <div>
            <span className="font-display font-semibold text-[10px] uppercase tracking-widest text-primary block mb-2 drop-shadow-[0_0_8px_rgba(146,255,184,0.4)]">
              {category}
            </span>
            <h3 className="font-display font-bold text-xl md:text-2xl text-on-surface group-hover:text-primary transition-colors">
              {title}
            </h3>
          </div>
          <button className="p-2 rounded-full border border-white/20 bg-white/5 hover:border-primary hover:text-primary hover:bg-primary/10 text-on-surface-variant transition-all duration-300 group-hover:rotate-45">
            <ArrowUpRight size={24} />
          </button>
        </div>
        {description && (
          <p className="font-sans text-sm md:text-base text-on-surface-variant mt-4 line-clamp-2 max-w-2xl">
            {description}
          </p>
        )}
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex mt-5 items-center gap-2 text-xs font-display font-semibold uppercase tracking-widest text-primary hover:opacity-80 transition-opacity"
          >
            View Repository
          </a>
        ) : null}
      </div>
    </motion.article>
  );
}

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
      className={`project-card group relative rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 ${
        isLarge ? 'md:col-span-2 h-[500px]' : 'h-[400px]'
      }`}
    >
      {/* Background Image covering entire card */}
      {image ? (
        <img 
          src={image} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700"
        />
      ) : (
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-primary/10 blur-2xl animate-pulse" />
        </div>
      )}
      
      {/* Dark gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/10 to-transparent pointer-events-none" />

      {/* Glassy text section at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-8 backdrop-blur-xl bg-black/20 border-t border-white/10 hover:bg-black/30 transition-all duration-300">
        <div className="flex justify-between items-start">
          <div>
            <span className="font-display font-semibold text-[10px] uppercase tracking-widest text-primary block mb-2 drop-shadow-[0_0_8px_rgba(146,255,184,0.4)]">
              {category}
            </span>
            <h3 className="font-display font-bold text-xl md:text-2xl text-on-surface group-hover:text-primary transition-colors">
              {title}
            </h3>
          </div>
          <button
            onClick={() => href && window.open(href, '_blank')}
            aria-label={href ? `Open ${title} repository` : 'No repository'}
            className="p-2 rounded-full border border-white/20 bg-white/5 hover:border-primary hover:text-primary hover:bg-primary/10 text-on-surface-variant transition-all duration-300 group-hover:rotate-45"
          >
            <ArrowUpRight size={24} />
          </button>
        </div>
        {description && (
          <div className="reveal mt-4">
            <p className="font-sans text-sm md:text-base text-on-surface-variant line-clamp-3 max-w-2xl">
              {description}
            </p>
          </div>
        )}
        {href ? (
          <div className="reveal">
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex mt-5 items-center gap-2 text-xs font-display font-semibold uppercase tracking-widest text-primary hover:opacity-80 transition-opacity"
            >
              View Repository
            </a>
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}

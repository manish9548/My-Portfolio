import { motion } from 'framer-motion';
import { Github, ExternalLink, FolderGit2 } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import TiltCard from './TiltCard.jsx';
import { PROJECTS } from '../data/projects.js';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="pointer-events-none absolute left-0 top-1/3 -z-10 h-72 w-72 rounded-full bg-neon-purple/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 bottom-1/4 -z-10 h-72 w-72 rounded-full bg-neon-cyan/15 blur-[120px]" />

      <SectionHeading
        eyebrow="// projects"
        title="Featured Work"
        subtitle="Products and services I've designed, built and shipped."
      />

      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
          >
            <TiltCard
              max={8}
              className="glass glass-hover group relative flex h-full flex-col overflow-hidden rounded-3xl p-7"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-neon-cyan/30 to-neon-purple/30 blur-3xl transition-opacity group-hover:opacity-100 opacity-60" />

              <div className="relative flex h-full flex-col" style={{ transform: 'translateZ(30px)' }}>
                <div className="mb-5 flex items-start justify-between gap-3">
                  <span className="rounded-xl bg-white/5 p-3 text-neon-cyan">
                    <FolderGit2 className="h-6 w-6" />
                  </span>
                  {p.badge && (
                    <span className="rounded-full border border-neon-purple/40 bg-neon-purple/10 px-3 py-1 text-[11px] font-medium text-purple-200">
                      {p.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white">{p.title}</h3>
                {p.tag && <p className="mt-1 font-mono text-xs text-neon-cyan">{p.tag}</p>}
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{p.description}</p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-md border border-white/10 bg-zinc-900/70 px-2.5 py-1 font-mono text-[11px] text-slate-300"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center gap-3">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-purple px-4 py-2.5 text-sm font-semibold text-zinc-950 transition-transform hover:scale-[1.03]"
                    >
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </a>
                  )}
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`glass glass-hover inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-100 ${
                      p.live ? '' : 'flex-1'
                    }`}
                  >
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                </div>
              </div>
            </TiltCard>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

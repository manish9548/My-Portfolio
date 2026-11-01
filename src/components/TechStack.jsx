import { motion } from 'framer-motion';
import { Server, Layout, Container, Coffee, Leaf, Database, Boxes, Zap, FileCode2, Wind, Layers } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import TiltCard from './TiltCard.jsx';

const CATEGORIES = [
  {
    title: 'Backend',
    icon: Server,
    accent: 'from-cyan-400/20 to-cyan-400/0',
    color: 'text-neon-cyan',
    items: [
      { name: 'Java', icon: Coffee },
      { name: 'Spring Boot', icon: Leaf },
      { name: 'Spring Data JPA', icon: Layers },
      { name: 'Microservices', icon: Boxes },
      { name: 'MySQL', icon: Database },
      { name: 'Redis', icon: Zap },
    ],
  },
  {
    title: 'Frontend',
    icon: Layout,
    accent: 'from-purple-400/20 to-purple-400/0',
    color: 'text-neon-purple',
    items: [
      { name: 'React', icon: Layout },
      { name: 'TypeScript', icon: FileCode2 },
      { name: 'Tailwind CSS', icon: Wind },
    ],
  },
  {
    title: 'DevOps',
    icon: Container,
    accent: 'from-sky-400/20 to-sky-400/0',
    color: 'text-sky-400',
    items: [{ name: 'Docker', icon: Container }],
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="section">
      <SectionHeading
        eyebrow="// tech stack"
        title="Tools I Build With"
        subtitle="A pragmatic stack for reliable backends, fast interfaces and containerised delivery."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
          >
            <TiltCard className="glass glass-hover relative h-full overflow-hidden rounded-3xl p-7">
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${cat.accent}`} />
              <div className="relative" style={{ transform: 'translateZ(40px)' }}>
                <div className="mb-6 flex items-center gap-3">
                  <span className={`rounded-xl bg-white/5 p-3 ${cat.color}`}>
                    <cat.icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-xl font-bold">{cat.title}</h3>
                </div>

                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2">
                  {cat.items.map((it) => (
                    <li
                      key={it.name}
                      className="flex items-center gap-3 rounded-xl border border-white/5 bg-zinc-900/60 px-4 py-3 text-sm transition-all hover:border-white/20 hover:bg-zinc-900"
                    >
                      <it.icon className={`h-4 w-4 shrink-0 ${cat.color}`} />
                      <span className="text-slate-200">{it.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

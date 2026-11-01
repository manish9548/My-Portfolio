import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Landmark, BadgeCheck, X, ZoomIn, ImageOff } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';

const ACHIEVEMENTS = [
  {
    title: '1st Place — HackWithUP 2025',
    subtitle: 'SkillSync Project',
    description:
      'Won first place by building SkillSync, a full-stack career & mentorship platform with a modern, responsive UI.',
    icon: Trophy,
    image: '/achievements/hackthone.jpeg',
    accent: 'text-amber-300',
  },
  {
    title: 'CSIR-NEERI Exhibition Showcase',
    subtitle: 'Delhi Branch',
    description: 'Showcased technology work at the CSIR-NEERI exhibition, presenting to researchers and visitors.',
    icon: Landmark,
    image: '/achievements/csir.jpeg',
    accent: 'text-neon-cyan',
  },
  {
    title: 'Software development Trainee',
    subtitle: 'Industry Experience',
    description: 'Hands-on experience in software development practices, testing and quality assurance workflows.',
    icon: BadgeCheck,
    image: '/achievements/trainee.png',
    accent: 'text-neon-purple',
  },
  {
    title: 'Java programming Course for begginers',
    subtitle: 'Learning',
    description: 'Hands-on experience in Java .',
    icon: BadgeCheck,
    image: '/achievements/java_cer.png',
    accent: 'text-neon-purple',
  },
];

function Thumb({ src, alt }) {
  const [ok, setOk] = useState(true);
  if (!ok)
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-zinc-900 text-slate-500">
        <ImageOff className="h-6 w-6" />
        <span className="font-mono text-[10px]">add photo: {src}</span>
      </div>
    );
  return (
    <img
      src={src}
      alt={alt}
      onError={() => setOk(false)}
      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
  );
}

export default function Achievements() {
  const [active, setActive] = useState(null);
  const [modalOk, setModalOk] = useState(true);

  useEffect(() => {
    if (!active) return undefined;
    setModalOk(true);
    const onKey = (e) => e.key === 'Escape' && setActive(null);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active]);

  return (
    <section id="achievements" className="section">
      <SectionHeading
        eyebrow="// achievements"
        title="Milestones & Recognition"
        subtitle="Click any card to view the photo in full screen."
      />

      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {ACHIEVEMENTS.map((a, i) => (
          <motion.button
            key={a.title}
            type="button"
            onClick={() => setActive(a)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            whileHover={{ y: -8 }}
            className="glass glass-hover group overflow-hidden rounded-3xl text-left"
          >
            <div className="relative h-48 overflow-hidden">
              <Thumb src={a.image} alt={a.title} />
              <div className="absolute inset-0 flex items-center justify-center bg-zinc-950/60 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="glass flex items-center gap-2 rounded-full px-4 py-2 text-xs text-white">
                  <ZoomIn className="h-4 w-4" /> View photo
                </span>
              </div>
            </div>
            <div className="p-6">
              <a.icon className={`mb-3 h-6 w-6 ${a.accent}`} />
              <h3 className="text-lg font-bold text-white">{a.title}</h3>
              <p className="mt-0.5 font-mono text-xs text-neon-cyan">{a.subtitle}</p>
              <p className="mt-3 text-sm text-slate-400">{a.description}</p>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/90 p-4 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
          >
            <button
              onClick={() => setActive(null)}
              aria-label="Close"
              className="glass absolute right-5 top-5 rounded-full p-3 text-white hover:text-neon-cyan"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.figure
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
              className="flex max-h-full max-w-5xl flex-col items-center"
            >
              {modalOk ? (
                <img
                  src={active.image}
                  alt={active.title}
                  onError={() => setModalOk(false)}
                  className="max-h-[78vh] w-auto rounded-2xl border border-white/10 object-contain shadow-glow-cyan"
                />
              ) : (
                <div className="glass flex h-64 w-80 flex-col items-center justify-center gap-3 rounded-2xl text-slate-400">
                  <ImageOff className="h-8 w-8" />
                  <p className="px-6 text-center font-mono text-xs">
                    Add your photo at <span className="text-neon-cyan">public{active.image}</span>
                  </p>
                </div>
              )}
              <figcaption className="mt-4 text-center">
                <p className="font-semibold text-white">{active.title}</p>
                <p className="font-mono text-xs text-neon-cyan">{active.subtitle}</p>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowRight, Mail, Sparkles } from 'lucide-react';
import ParticleBackground from './ParticleBackground.jsx';
import { PROFILE } from '../data/links.js';

const HEADLINE = 'Full Stack & Backend Engineer | Building Scalable & AI-Powered Systems';

function useTyping(text, speed = 45) {
  const [out, setOut] = useState('');
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setOut(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);
  return out;
}

export default function HeroSection() {
  const typed = useTyping(HEADLINE);
  const [imgOk, setImgOk] = useState(true);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      {/* background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(88,28,135,0.35),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(8,145,178,0.25),transparent_50%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute inset-0 -z-10">
        <ParticleBackground />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 pb-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        {/* LEFT */}
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass mx-auto mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs text-neon-cyan lg:mx-0"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Hi, I&apos;m {PROFILE.name}
          </motion.div>

          <h1 className="min-h-[7.5rem] text-3xl font-extrabold leading-tight sm:min-h-[9rem] sm:text-5xl lg:min-h-[10.5rem] xl:text-6xl">
            <span className="gradient-text">{typed}</span>
            <span className="ml-1 inline-block h-[0.9em] w-[3px] translate-y-1 animate-blink bg-neon-cyan" />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mx-auto mt-6 max-w-xl text-base text-slate-400 sm:text-lg lg:mx-0"
          >
            I design and ship robust backends with Java &amp; Spring Boot, polished interfaces with
            React, and intelligent features powered by LLMs — from idea to production.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-purple px-6 py-3 text-sm font-semibold text-zinc-950 shadow-glow-cyan transition-transform hover:scale-[1.04]"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="glass glass-hover inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-slate-100"
            >
              <Mail className="h-4 w-4 text-neon-cyan" />
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-8 flex items-center justify-center gap-3 lg:justify-start"
          >
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="glass glass-hover rounded-xl p-3 text-slate-300 hover:text-neon-cyan"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="glass glass-hover rounded-xl p-3 text-slate-300 hover:text-neon-purple"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </motion.div>
        </div>

        {/* RIGHT — photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 flex justify-center lg:order-2"
        >
          <div className="relative animate-float">
            {/* glow halo */}
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-neon-cyan/30 via-transparent to-neon-purple/30 blur-3xl" />
            {/* spinning neon border */}
            <div className="relative rounded-[2rem] p-[3px]">
              <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
                <div className="absolute left-1/2 top-1/2 aspect-square w-[160%] -translate-x-1/2 -translate-y-1/2 animate-spin-slow bg-[conic-gradient(from_0deg,#22d3ee,#a855f7,#22d3ee)]" />
              </div>
              <div className="relative h-72 w-60 overflow-hidden rounded-[1.8rem] bg-zinc-900 shadow-glow-purple sm:h-96 sm:w-80">
                {imgOk ? (
                  <img
                    src={PROFILE.photo}
                    alt={`${PROFILE.name} — ${PROFILE.role}`}
                    onError={() => setImgOk(false)}
                    className="h-full w-full object-cover object-top"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center font-mono text-5xl font-bold gradient-text">
                    MB
                  </div>
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/50 via-transparent to-transparent" />
              </div>
            </div>
            {/* floating chips */}
            <div className="glass absolute -left-4 top-10 hidden rounded-xl px-3 py-2 font-mono text-xs text-neon-cyan sm:block">
              Spring Boot
            </div>
            <div className="glass absolute -right-4 bottom-16 hidden rounded-xl px-3 py-2 font-mono text-xs text-neon-purple sm:block">
              React
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

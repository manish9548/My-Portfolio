import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { PROFILE } from '../data/links.js';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 py-8 sm:flex-row sm:px-8">
        <p className="flex items-center gap-1.5 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} {PROFILE.name}. Built with <Heart className="h-3.5 w-3.5 text-neon-purple" /> React, Tailwind &amp; Framer Motion.
        </p>
        <div className="flex items-center gap-3">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-white/5 hover:text-neon-cyan"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-white/5 hover:text-neon-purple"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            aria-label="Email"
            className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-white/5 hover:text-neon-cyan"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading.jsx';
import { PROFILE } from '../data/links.js';
import { PROJECTS } from '../data/projects.js';

const BOOT = [
  { type: 'sys', text: '[INFO] manish-portfolio-service v1.0.0 started on port 8080' },
  { type: 'sys', text: '[INFO] Connected to MySQL · Redis cache warm · JWT filter active' },
  { type: 'sys', text: "Type 'help' to see available commands." },
];

const COMMANDS = {
  help: () => [
    'Available commands:',
    '  help      show this message',
    '  skills    list technical skills',
    '  projects  list featured projects',
    '  contact   show contact details',
    '  clear     clear the terminal',
  ],
  skills: () => [
    '[Backend]  Java · Spring Boot · Spring Data JPA · Microservices · MySQL · Redis',
    '[Frontend] React · TypeScript · Tailwind CSS',
    '[DevOps]   Docker',
  ],
  projects: () =>
    PROJECTS.flatMap((p, i) => [
      `${i + 1}. ${p.title}`,
      `   ${p.tech.join(', ')}`,
      `   ${p.live ?? p.github}`,
    ]),
  contact: () => [
    `Name     : ${PROFILE.name}`,
    `Email    : ${PROFILE.email}`,
    `GitHub   : ${PROFILE.github}`,
    `LinkedIn : ${PROFILE.linkedin}`,
  ],
};

export default function Terminal() {
  const [lines, setLines] = useState(BOOT);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [hIdx, setHIdx] = useState(-1);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines]);

  const run = (raw) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;
    setHistory((h) => [raw, ...h]);
    setHIdx(-1);

    if (cmd === 'clear') {
      setLines([]);
      return;
    }
    const out = COMMANDS[cmd]
      ? COMMANDS[cmd]().map((t) => ({ type: 'out', text: t }))
      : [{ type: 'err', text: `[ERROR] 404 command not found: ${cmd} — try 'help'` }];
    setLines((l) => [...l, { type: 'cmd', text: raw }, ...out]);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      run(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const n = Math.min(hIdx + 1, history.length - 1);
      if (history[n] !== undefined) {
        setHIdx(n);
        setInput(history[n]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const n = hIdx - 1;
      setHIdx(n);
      setInput(n < 0 ? '' : history[n]);
    }
  };

  const color = { sys: 'text-slate-500', out: 'text-slate-200', err: 'text-red-400', cmd: 'text-slate-100' };

  return (
    <section id="terminal" className="section">
      <SectionHeading
        eyebrow="// interactive"
        title="Backend Console"
        subtitle="Poke around — type a command and hit Enter."
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/90 shadow-glow-purple"
        onClick={() => inputRef.current?.focus()}
      >
        <div className="flex items-center gap-2 border-b border-white/10 bg-zinc-900/80 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-500/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <span className="h-3 w-3 rounded-full bg-green-500/80" />
          <span className="ml-3 font-mono text-xs text-slate-500">manish@backend: ~</span>
        </div>

        <div ref={scrollRef} className="h-80 overflow-y-auto p-4 font-mono text-[13px] leading-relaxed">
          {lines.map((l, i) => (
            <div key={i} className={`whitespace-pre-wrap break-words ${color[l.type]}`}>
              {l.type === 'cmd' && <span className="mr-2 text-neon-cyan">$</span>}
              {l.text}
            </div>
          ))}
          <div className="flex items-center">
            <span className="mr-2 text-neon-cyan">$</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              autoComplete="off"
              autoCapitalize="off"
              spellCheck={false}
              aria-label="Terminal input"
              className="flex-1 bg-transparent text-slate-100 caret-neon-cyan outline-none"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 border-t border-white/10 bg-zinc-900/60 px-4 py-3">
          {['help', 'skills', 'projects', 'contact', 'clear'].map((c) => (
            <button
              key={c}
              onClick={(e) => {
                e.stopPropagation();
                run(c);
              }}
              className="rounded-md border border-white/10 px-2.5 py-1 font-mono text-xs text-slate-400 transition-colors hover:border-neon-cyan/50 hover:text-neon-cyan"
            >
              {c}
            </button>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

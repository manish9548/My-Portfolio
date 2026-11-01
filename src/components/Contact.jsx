import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Github, Linkedin, CheckCircle2 } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import { PROFILE } from '../data/links.js';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  // Opens the visitor's mail client with the message pre-filled (no backend required).
  // Swap this for EmailJS / Formspree / your own API when you're ready.
  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="section">
      <SectionHeading
        eyebrow="// contact"
        title="Let's Build Something"
        subtitle="Open to opportunities, collaborations and interesting problems. Drop me a message."
      />

      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass space-y-5 rounded-3xl p-7"
        >
          <a
            href={`mailto:${PROFILE.email}`}
            className="flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-white/5"
          >
            <span className="rounded-xl bg-neon-cyan/10 p-3 text-neon-cyan">
              <Mail className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="block text-xs text-slate-500">Email</span>
              <span className="block truncate text-sm text-slate-200">{PROFILE.email}</span>
            </span>
          </a>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-white/5"
          >
            <span className="rounded-xl bg-white/10 p-3 text-slate-100">
              <Github className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="block text-xs text-slate-500">GitHub</span>
              <span className="block truncate text-sm text-slate-200">github.com/manish9548</span>
            </span>
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-white/5"
          >
            <span className="rounded-xl bg-neon-purple/10 p-3 text-neon-purple">
              <Linkedin className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="block text-xs text-slate-500">LinkedIn</span>
              <span className="block truncate text-sm text-slate-200">in/manishbaghel</span>
            </span>
          </a>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass space-y-4 rounded-3xl p-7"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              className="neon-input"
              name="name"
              placeholder="Your name"
              required
              value={form.name}
              onChange={onChange}
            />
            <input
              className="neon-input"
              type="email"
              name="email"
              placeholder="Your email"
              required
              value={form.email}
              onChange={onChange}
            />
          </div>
          <textarea
            className="neon-input resize-none"
            name="message"
            rows={5}
            placeholder="Tell me about your project…"
            required
            value={form.message}
            onChange={onChange}
          />
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-purple px-6 py-3 text-sm font-semibold text-zinc-950 shadow-glow-cyan transition-transform hover:scale-[1.02]"
          >
            {sent ? (
              <>
                <CheckCircle2 className="h-4 w-4" /> Opening your mail app…
              </>
            ) : (
              <>
                <Send className="h-4 w-4" /> Send Message
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}

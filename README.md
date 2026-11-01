# Manish Baghel — Developer Portfolio

React + Vite + Tailwind CSS + Framer Motion + Lucide Icons.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build   # output in /dist — deploy to Vercel / Netlify / Firebase
```

## Add your photos

| Purpose                | Path                                  |
| ---------------------- | ------------------------------------- |
| Hero profile photo     | `public/profile/manish.jpg` (included) |
| HackWithUP 2025        | `public/achievements/hackwithup.jpg`  |
| CSIR-NEERI Exhibition  | `public/achievements/exhibition.jpg`  |
| Trainee experience     | `public/achievements/trainee.jpg`     |

Missing achievement photos show a friendly placeholder until you add them.

## Structure

```
src/
  App.jsx
  data/            links.js, projects.js  (edit content here)
  components/
    Navbar, HeroSection, ParticleBackground, TechStack, TiltCard,
    Projects, Achievements, Terminal, Contact, Footer, SectionHeading
```

## Notes

- The contact form opens the visitor's mail client (mailto). Swap in EmailJS or Formspree in `Contact.jsx` for in-page sending.
- Project GitHub links currently point to your profile; update them in `src/data/projects.js` with repo URLs.

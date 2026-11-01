import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import TechStack from './components/TechStack.jsx';
import Projects from './components/Projects.jsx';
import Achievements from './components/Achievements.jsx';
import Terminal from './components/Terminal.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />
      <main>
        <HeroSection />
        <TechStack />
        <Projects />
        <Achievements />
        <Terminal />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

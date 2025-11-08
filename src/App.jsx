import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-neutral-200/60 dark:border-neutral-800 py-8 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Aarav Kumar · Android · Backend · AI Agents
      </footer>
    </div>
  );
}

export default App;

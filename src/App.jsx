import React, { useEffect, useState, useMemo } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Bio from './components/Bio.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';

function App() {
  const getInitialTheme = () => {
    try {
      const stored = localStorage.getItem('theme');
      if (stored === 'light' || stored === 'dark') return stored;
    } catch {}
    const prefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('theme', theme);
    } catch {}
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  const palette = useMemo(
    () => ({
      primary: 'sky',
      accent: 'cyan',
    }),
    []
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 text-slate-900 dark:text-slate-100">
      <Navbar theme={theme} onToggleTheme={toggleTheme} palette={palette} />
      <main>
        <Hero palette={palette} />
        <Bio palette={palette} />
        <Skills />
        <Projects palette={palette} />
        <Contact />
      </main>
      <footer className="py-10 text-center text-sm text-slate-600 dark:text-slate-400">
        <p>
          © {new Date().getFullYear()} • Built with React & Tailwind. Blue-only theme (sky/cyan) with light/dark toggle.
        </p>
      </footer>
    </div>
  );
}

export default App;

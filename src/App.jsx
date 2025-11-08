import React, { useEffect, useState, useMemo } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Bio from './components/Bio.jsx';
import Projects from './components/Projects.jsx';

function App() {
  const getInitialTheme = () => {
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored;
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
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
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  // Accent palette restricted to light blue hues
  const palette = useMemo(
    () => ({
      primary: 'sky',
      accent: 'cyan',
    }),
    []
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-white dark:from-slate-950 dark:via-slate-925 dark:to-slate-900 text-slate-900 dark:text-slate-100">
      <Navbar theme={theme} onToggleTheme={toggleTheme} palette={palette} />
      <main>
        <Hero palette={palette} />
        <Bio palette={palette} />
        <Projects palette={palette} />
      </main>
    </div>
  );
}

export default App;

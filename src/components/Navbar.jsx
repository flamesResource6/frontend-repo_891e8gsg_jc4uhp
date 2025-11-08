import React from 'react';
import { Sun, Moon, Mail } from 'lucide-react';

export default function Navbar({ theme, onToggleTheme, palette }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/50 border-b border-sky-100/70 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className={`inline-flex h-8 w-8 items-center justify-center rounded-md bg-sky-500 text-white shadow-sm shadow-sky-200 dark:shadow-slate-950`}>A</span>
          <span className="font-semibold tracking-tight">Android Dev Portfolio</span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#about" className="hover:text-sky-700 dark:hover:text-sky-300 transition-colors">About</a>
          <a href="#projects" className="hover:text-sky-700 dark:hover:text-sky-300 transition-colors">Projects</a>
          <a href="#contact" className="inline-flex items-center gap-1 rounded-lg px-3 py-1.5 bg-sky-500 text-white hover:bg-sky-600 transition-colors">
            <Mail size={16} /> Contact
          </a>
          <button
            aria-label="Toggle theme"
            onClick={onToggleTheme}
            className="inline-flex items-center gap-2 rounded-lg px-2.5 py-1.5 border border-sky-200 text-slate-700 hover:bg-sky-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            <span className="hidden md:inline">{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>
        </nav>
      </div>
    </header>
  );
}

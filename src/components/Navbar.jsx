import { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 dark:bg-neutral-900/80 border-b border-neutral-200/60 dark:border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-neutral-900 dark:text-white">Aarav Kumar</a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-700 dark:text-neutral-300">
            <a href="#projects" className="hover:text-neutral-900 dark:hover:text-white transition">Projects</a>
            <a href="#skills" className="hover:text-neutral-900 dark:hover:text-white transition">Skills</a>
            <a href="#contact" className="hover:text-neutral-900 dark:hover:text-white transition">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-full border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">
              <Github className="h-4 w-4" />
            </a>
            <a aria-label="LinkedIn" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-full border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">
              <Linkedin className="h-4 w-4" />
            </a>
            <a aria-label="Email" href="mailto:hello@example.com" className="p-2 rounded-full border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">
              <Mail className="h-4 w-4" />
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <span className="sr-only">Open menu</span>
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {open ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2 text-sm font-medium text-neutral-700 dark:text-neutral-300">
            <a href="#projects" className="block px-2 py-2 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800" onClick={() => setOpen(false)}>Projects</a>
            <a href="#skills" className="block px-2 py-2 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800" onClick={() => setOpen(false)}>Skills</a>
            <a href="#contact" className="block px-2 py-2 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800" onClick={() => setOpen(false)}>Contact</a>
            <div className="flex items-center gap-2 px-2 pt-2">
              <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-full border border-neutral-200 dark:border-neutral-800">
                <Github className="h-4 w-4" />
              </a>
              <a aria-label="LinkedIn" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-full border border-neutral-200 dark:border-neutral-800">
                <Linkedin className="h-4 w-4" />
              </a>
              <a aria-label="Email" href="mailto:hello@example.com" className="p-2 rounded-full border border-neutral-200 dark:border-neutral-800">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

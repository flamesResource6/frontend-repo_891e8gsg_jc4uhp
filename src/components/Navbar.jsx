import React from 'react';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 bg-white/80 backdrop-blur border-b border-blue-100 z-20">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold text-blue-700 tracking-tight text-lg">
          dev.portfolio
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="text-blue-700/80 hover:text-blue-800 transition-colors">About</a>
          <a href="#projects" className="text-blue-700/80 hover:text-blue-800 transition-colors">Projects</a>
          <a href="#contact" className="text-blue-700/80 hover:text-blue-800 transition-colors">Contact</a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}

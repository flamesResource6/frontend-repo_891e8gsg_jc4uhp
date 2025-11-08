import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Bio from './components/Bio';
import Projects from './components/Projects';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <Bio />
        <Projects />
      </main>
      <footer className="py-8 border-t border-blue-100 text-center text-sm text-blue-900/70 bg-white">
        © {new Date().getFullYear()} Built with care — Android • Backend • AI
      </footer>
    </div>
  );
}

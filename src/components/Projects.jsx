import React from 'react';
import { Rocket, Wrench, Shield } from 'lucide-react';

const projects = [
  {
    icon: <Rocket className="text-sky-600" size={20} />,
    title: 'Jetpack Compose App',
    desc: 'A polished Android app with offline-first sync and smooth 120fps interactions.',
    tags: ['Android', 'Compose', 'Kotlin']
  },
  {
    icon: <Wrench className="text-sky-600" size={20} />,
    title: 'Java/Python Backend',
    desc: 'Resilient services with queue workers, caching, and robust observability.',
    tags: ['Java', 'Python', 'REST']
  },
  {
    icon: <Shield className="text-sky-600" size={20} />,
    title: 'AI Agent Assistant',
    desc: 'A practical agent automating support workflows with guardrails and fallbacks.',
    tags: ['AI', 'Agents']
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-gradient-to-b from-white to-sky-50/60 dark:from-slate-900 dark:to-slate-900">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Selected Work</h2>
          <a href="#contact" className="text-sm text-sky-700 hover:text-sky-800 dark:text-sky-300 dark:hover:text-sky-200">Get in touch</a>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-xl border border-sky-100 bg-white/70 backdrop-blur p-5 dark:bg-slate-900/60 dark:border-slate-800 hover:shadow-sm transition">
              <div className="flex items-center gap-2">
                {p.icon}
                <h3 className="font-semibold">{p.title}</h3>
              </div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-md bg-sky-50 text-sky-700 border border-sky-100 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

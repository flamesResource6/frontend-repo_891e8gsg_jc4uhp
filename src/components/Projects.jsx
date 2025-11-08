import React from 'react';
import { Smartphone, Server, Brain } from 'lucide-react';

const projects = [
  {
    title: 'Android Expense Tracker',
    icon: Smartphone,
    desc: 'A clean, offline-first expense tracker with Jetpack Compose and Room, featuring charts and secure sync.',
    tags: ['Android', 'Kotlin', 'Compose']
  },
  {
    title: 'Realtime Backend API',
    icon: Server,
    desc: 'High-availability REST + WebSocket backend with rate limiting, auth, and observability.',
    tags: ['Java', 'Spring', 'PostgreSQL']
  },
  {
    title: 'AI Agent Automations',
    icon: Brain,
    desc: 'Workflow agents that triage tasks, summarize logs, and trigger CI actions with guardrails.',
    tags: ['Python', 'LLM', 'FastAPI']
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-900">Projects</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(({ title, icon: Icon, desc, tags }) => (
            <article key={title} className="rounded-xl border border-blue-100 bg-blue-50/40 p-6 hover:shadow-sm transition-shadow">
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-md bg-blue-100 text-blue-700"><Icon size={20} /></span>
                <h3 className="font-semibold text-blue-900">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-blue-900/80">{desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-white border border-blue-100 text-blue-700">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Smartphone, Server, Bot } from 'lucide-react';

export default function Bio({ palette }) {
  const items = [
    {
      icon: <Smartphone className="text-sky-600" size={22} />,
      title: 'Android Engineering',
      desc: 'Modern Kotlin and Jetpack Compose UI, performance profiling, CI/CD, and Play Store delivery.'
    },
    {
      icon: <Server className="text-sky-600" size={22} />,
      title: 'Backend Systems',
      desc: 'Java/Python services, REST APIs, async workers, and observability with metrics and tracing.'
    },
    {
      icon: <Bot className="text-sky-600" size={22} />,
      title: 'AI Agents',
      desc: 'Task-focused agents integrated into real products to automate workflows reliably.'
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">About</h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-3xl">
          I blend product intuition with engineering rigor. I prioritize clarity, maintainability, and measurable impact. Below are the areas where I deliver the most value.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="rounded-xl border border-sky-100 bg-white/70 backdrop-blur dark:bg-slate-900/60 dark:border-slate-800 p-5 hover:shadow-sm transition-shadow">
              <div className="flex items-center gap-2">
                {it.icon}
                <h3 className="font-semibold">{it.title}</h3>
              </div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

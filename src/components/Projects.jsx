export default function Projects() {
  const items = [
    {
      title: 'Aura Notes (Android)',
      desc: 'A modern note-taking app with Material 3, offline-first sync, and on-device semantic search.',
      tags: ['Kotlin', 'Jetpack Compose', 'Room', 'KMP']
    },
    {
      title: 'Realtime Chat Backend',
      desc: 'Event-driven messaging service with WebSocket gateways and JWT auth.',
      tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Kafka']
    },
    {
      title: 'AgentOps Toolkit',
      desc: 'Composable Python framework for task-driven AI agents with tools and memory.',
      tags: ['Python', 'FastAPI', 'LangChain', 'Vector DB']
    },
  ];

  return (
    <section id="projects" className="relative w-full py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white">Featured work</h2>
        <p className="mt-2 text-neutral-600 dark:text-neutral-300">Selected projects across Android, backend systems, and AI agents.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-neutral-200/70 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 p-5 hover:shadow-lg transition">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-medium text-neutral-900 dark:text-white">{p.title}</h3>
              </div>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs rounded-full border border-neutral-200 dark:border-neutral-800 px-2 py-1 text-neutral-700 dark:text-neutral-300">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

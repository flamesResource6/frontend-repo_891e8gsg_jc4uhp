import { Smartphone, Database, Brain, Server } from 'lucide-react';

export default function Skills() {
  const skills = [
    {
      icon: <Smartphone className="h-5 w-5" />, title: 'Android',
      items: ['Kotlin', 'Jetpack Compose', 'KMP', 'CI/CD', 'Material 3']
    },
    {
      icon: <Server className="h-5 w-5" />, title: 'Backend',
      items: ['Java (Spring)', 'Python (FastAPI)', 'gRPC/REST', 'Auth/JWT']
    },
    {
      icon: <Database className="h-5 w-5" />, title: 'Data',
      items: ['PostgreSQL', 'MongoDB', 'Redis', 'Kafka']
    },
    {
      icon: <Brain className="h-5 w-5" />, title: 'AI Agents',
      items: ['LangChain', 'LLM tools', 'RAG', 'Vector DB']
    },
  ];

  return (
    <section id="skills" className="relative w-full py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white">Core skills</h2>
        <p className="mt-2 text-neutral-600 dark:text-neutral-300">A balanced stack for shipping fast and scaling reliably.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s) => (
            <div key={s.title} className="rounded-2xl border border-neutral-200/70 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 p-5">
              <div className="flex items-center gap-2 text-neutral-900 dark:text-white">
                {s.icon}
                <h3 className="font-medium">{s.title}</h3>
              </div>
              <ul className="mt-3 space-y-1 text-sm text-neutral-600 dark:text-neutral-300">
                {s.items.map((i) => (
                  <li key={i}>• {i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

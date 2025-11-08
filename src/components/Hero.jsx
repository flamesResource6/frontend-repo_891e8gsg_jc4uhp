import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[88vh] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.8),rgba(255,255,255,0.6)_40%,rgba(255,255,255,0.35)_60%,rgba(255,255,255,0)_80%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(10,10,10,0.6),rgba(10,10,10,0.4)_40%,rgba(10,10,10,0.2)_60%,rgba(10,10,10,0)_80%)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200/70 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 px-3 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-300 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-orange-400 animate-pulse" />
          Android • Backend (Java/Python) • AI Agents
        </span>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900 dark:text-white">
          Building mobile experiences and intelligent backends
        </h1>
        <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
          I craft high-performance Android apps, robust server-side systems with Java & Python, and
          practical AI agents that automate, assist, and scale.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#projects" className="inline-flex items-center rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-5 py-2.5 text-sm font-medium hover:opacity-90 transition">View projects</a>
          <a href="#contact" className="inline-flex items-center rounded-full border border-neutral-300 dark:border-neutral-700 px-5 py-2.5 text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">Get in touch</a>
        </div>
      </div>
    </section>
  );
}

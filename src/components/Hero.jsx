import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero({ palette }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-100/70 via-sky-50/40 to-white dark:from-slate-900 dark:via-slate-900/60 dark:to-slate-900" />
        <div className="absolute inset-x-0 -top-40 h-[400px] blur-3xl opacity-60" style={{ background: 'radial-gradient(600px 200px at 50% 0%, rgba(14,165,233,0.25), transparent 60%)' }} />
      </div>

      <div className="h-[72vh] min-h-[520px] max-h-[780px]">
        <Spline scene="https://prod.spline.design/PUy9ONBARmOD7M5G/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Building sleek Android apps, robust Java/Python backends, and practical AI agents
            </h1>
            <p className="mt-5 text-slate-600 dark:text-slate-300 max-w-xl">
              I craft mobile experiences and the systems that power them — with a sharp focus on performance, reliability, and developer-friendly tooling.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="inline-flex items-center justify-center rounded-lg bg-sky-600 text-white px-4 py-2 font-medium shadow-sm hover:bg-sky-700 transition-colors">
                View Projects
              </a>
              <a href="#about" className="inline-flex items-center justify-center rounded-lg border border-sky-200 text-slate-800 hover:bg-sky-50 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800 px-4 py-2 font-medium transition-colors">
                About Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

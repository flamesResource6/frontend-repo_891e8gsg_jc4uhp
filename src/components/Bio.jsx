import React from 'react';

export default function Bio() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-900">About</h2>
        <p className="mt-6 text-blue-900/80 leading-relaxed">
          I’m an Android developer with a strong grasp of Kotlin and Jetpack, comfortable shipping
          end-to-end features from UI flows to backend integrations. On the server side, I work with
          Java and Python to build clean, well-structured services and APIs.
        </p>
        <p className="mt-4 text-blue-900/80 leading-relaxed">
          Recently, I’ve been exploring AI agents and automation — wiring LLM tooling into
          developer workflows to speed up delivery and improve reliability. I value simple
          architectures, sharp UX, and measurable outcomes.
        </p>
      </div>
    </section>
  );
}

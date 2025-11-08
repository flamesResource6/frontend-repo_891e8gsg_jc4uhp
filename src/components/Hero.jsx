import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
      {/* Cover background image (blue→purple gradient texture) */}
      <div className="absolute inset-0">
        <img
          src="https://cdn.dribbble.com/userupload/16537236/file/original-3c9baf8044faac370974ead6e9a41217.jpg?resize=1504x1003&vertical=center"
          alt="Blue to purple textured gradient background"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>
      {/* Soft gradient veil to enhance readability; does not block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-700/50 via-blue-600/40 to-purple-600/40" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 h-full flex items-center">
        <div className="text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Android • Backend • AI Agents
          </h1>
          <p className="mt-4 max-w-2xl text-blue-50 text-lg md:text-xl">
            I build modern Android apps, robust Java/Python backends, and practical AI agents — delivering clean, performant, and reliable experiences.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#projects" className="rounded-md bg-white text-blue-700 px-5 py-2.5 font-medium hover:bg-blue-50 shadow">
              View Projects
            </a>
            <a href="#contact" className="rounded-md bg-blue-700/90 text-white px-5 py-2.5 font-medium hover:bg-blue-700 shadow">
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

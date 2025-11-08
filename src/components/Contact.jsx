import React from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-t from-white to-blue-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-900">Contact</h2>
        <p className="mt-4 text-blue-900/80">Open to collaborations, freelance work, and full-time roles.</p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 grid sm:grid-cols-2 gap-4"
        >
          <input
            type="text"
            placeholder="Your name"
            className="w-full rounded-md border border-blue-200 bg-white px-3 py-2 text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded-md border border-blue-200 bg-white px-3 py-2 text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="sm:col-span-2 w-full rounded-md border border-blue-200 bg-white px-3 py-2 text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 text-white px-5 py-2.5 font-medium shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <Send size={18} /> Send
          </button>
        </form>

        <div className="mt-8 flex items-center gap-4">
          <a href="mailto:you@example.com" className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800">
            <Mail size={18} /> Email
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800">
            <Github size={18} /> GitHub
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800">
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

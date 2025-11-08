import { Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full py-20">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white">Let’s build something</h2>
        <p className="mt-2 text-neutral-600 dark:text-neutral-300">Open for freelance, full-time, and collaborations.</p>

        <form onSubmit={(e) => e.preventDefault()} className="mt-8 grid gap-3 text-left">
          <div className="flex items-center gap-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 px-4">
            <Mail className="h-4 w-4 text-neutral-500" />
            <input type="email" required placeholder="Your email" className="w-full bg-transparent py-3 outline-none text-sm text-neutral-800 dark:text-neutral-200 placeholder-neutral-400" />
          </div>
          <textarea rows="5" required placeholder="Tell me about your project" className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 px-4 py-3 text-sm text-neutral-800 dark:text-neutral-200 placeholder-neutral-400 outline-none" />
          <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-5 py-2.5 text-sm font-medium hover:opacity-90 transition">
            <Send className="h-4 w-4" /> Send message
          </button>
        </form>

        <p className="mt-6 text-sm text-neutral-500">Prefer email? hello@example.com</p>
      </div>
    </section>
  );
}

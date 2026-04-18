export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-8">
      <p className="font-serif text-2xl italic text-ink">
        Clickdev <span className="text-accent">typo</span>
      </p>
      <p className="text-center text-sm text-ink-dim">
        Phase 1.4 — Instrument Serif / Bricolage Grotesque / JetBrains Mono via
        next/font. Home en Phase 2.
      </p>
      <p className="font-mono text-[11px] uppercase tracking-widest text-ink-muted">
        eyebrow · metadata
      </p>
    </main>
  );
}

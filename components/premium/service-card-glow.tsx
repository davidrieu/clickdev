/** Halo bleu carte (home + silos) — radials 46/8/207 & 36/6/160 + fondu bas. */
export function ServiceCardGlow() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <div
        className="absolute inset-0 opacity-[0.74] transition duration-500 group-hover:opacity-[0.94]"
        style={{
          background:
            'radial-gradient(ellipse 36% 30% at 94% 4%, rgba(46, 8, 207, 0.68), transparent 72%), radial-gradient(ellipse 28% 24% at 8% 92%, rgba(36, 6, 160, 0.52), transparent 76%)',
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-[64%] bg-gradient-to-t from-neutral-950/90 via-neutral-950/50 to-transparent" />
    </div>
  );
}

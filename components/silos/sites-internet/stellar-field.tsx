'use client';

import { useMemo } from 'react';

function buildStars(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    left: `${((i * 37) % 100) + (i % 3) * 0.4}%`,
    top: `${((i * 53) % 100) + ((i * 7) % 5) * 0.3}%`,
    size: 1 + (i % 4),
    delay: (i % 9) * 0.35,
  }));
}

type Props = {
  count?: number;
  className?: string;
};

/** Champ d’étoiles CSS (réutilise `.si-cta-star` dans globals.css). */
export function StellarField({ count = 52, className = '' }: Props) {
  const stars = useMemo(() => buildStars(count), [count]);

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {stars.map((s, i) => (
        <span
          key={i}
          className="si-cta-star absolute rounded-full bg-white"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

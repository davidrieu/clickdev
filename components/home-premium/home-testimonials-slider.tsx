'use client';

import { useCallback, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import type { HomeTestimonial } from '@/lib/constants/home-content';
import { cn } from '@/lib/utils';

function TestimonialFiveStars() {
  return (
    <span
      className="mb-4 inline-flex gap-0.5 text-amber-300/90"
      role="img"
      aria-label="5 sur 5"
    >
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} className="size-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
        </svg>
      ))}
    </span>
  );
}

type Props = {
  items: HomeTestimonial[];
  className?: string;
  /** Classes appliquées à la carte (bordure, fond). */
  cardClassName?: string;
};

export function HomeTestimonialsSlider({ items, className, cardClassName }: Props) {
  const [index, setIndex] = useState(0);
  const n = items.length;
  const touch = useRef({ x: 0 });

  const go = useCallback(
    (delta: number) => {
      setIndex((i) => (i + delta + n) % n);
    },
    [n]
  );

  const t = items[index];
  if (!t || n === 0) return null;

  return (
    <div
      className={cn('w-full', className)}
      role="region"
      aria-roledescription="carrousel"
      aria-label="Témoignages clients"
    >
      <div
        className="relative min-h-0"
        onTouchStart={(e) => {
          touch.current.x = e.touches[0]?.clientX ?? 0;
        }}
        onTouchEnd={(e) => {
          const x = e.changedTouches[0]?.clientX ?? 0;
          const dx = x - touch.current.x;
          if (Math.abs(dx) < 48) return;
          if (dx > 0) go(-1);
          else go(1);
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.blockquote
            id={`temoignage-${t.id}`}
            key={t.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              'flex flex-col rounded-2xl border border-white/[0.08] bg-black/40 p-6 md:p-7',
              cardClassName
            )}
          >
            <TestimonialFiveStars />
            <p className="whitespace-pre-line text-sm leading-relaxed text-white/80 md:text-base">
              «{t.quote}»
            </p>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        <button
          type="button"
          onClick={() => go(-1)}
          className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/75 transition hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
          aria-label="Témoignage précédent"
        >
          <ChevronLeft className="size-5" aria-hidden />
        </button>
        <div
          className="flex max-w-[min(100%,18rem)] flex-wrap justify-center gap-1.5 sm:max-w-none"
          role="group"
          aria-label="Choisir un témoignage"
        >
          {items.map((item, j) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setIndex(j)}
              className={cn(
                'size-2 rounded-full transition',
                j === index ? 'bg-white/80' : 'bg-white/25 hover:bg-white/40'
              )}
              aria-label={`Témoignage ${j + 1} sur ${n}`}
              aria-current={j === index ? 'true' : undefined}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(1)}
          className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/75 transition hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
          aria-label="Témoignage suivant"
        >
          <ChevronRight className="size-5" aria-hidden />
        </button>
      </div>
    </div>
  );
}

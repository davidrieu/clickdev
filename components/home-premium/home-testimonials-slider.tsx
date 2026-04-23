'use client';

import { useCallback, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import type { HomeTestimonial } from '@/lib/constants/home-content';
import { SOCIAL_LINKS } from '@/lib/constants/site';
import { cn } from '@/lib/utils';

function chunkPairs<T>(arr: T[]): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += 2) {
    out.push(arr.slice(i, i + 2));
  }
  return out;
}

function TestimonialFiveStars() {
  return (
    <span
      className="mb-3 inline-flex gap-0.5 text-amber-300/90"
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

function CodeurLink({ className }: { className?: string }) {
  return (
    <a
      href={SOCIAL_LINKS.codeur}
      rel="me noopener noreferrer"
      target="_blank"
      className={cn(
        'text-[11px] text-white/45 no-underline transition-none hover:text-white/45',
        className
      )}
    >
      Voir sur Codeur.com
    </a>
  );
}

/** Même peau visuelle que « Pour qui je travaille » (sans ServiceCardGlow). */
const cardSurfaceClass =
  'group relative flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-white/[0.1] bg-gradient-to-br from-neutral-950 via-neutral-900/85 to-neutral-900 p-5 transition duration-500 hover:border-white/[0.16] md:p-6';

type Props = {
  items: HomeTestimonial[];
  className?: string;
  /** Surcharge optionnelle (ex. variante ailleurs). */
  cardClassName?: string;
};

export function HomeTestimonialsSlider({ items, className, cardClassName }: Props) {
  const [slideIndex, setSlideIndex] = useState(0);
  const touch = useRef({ x: 0 });

  const slides = useMemo(() => chunkPairs(items), [items]);
  const slideCount = slides.length;

  const go = useCallback(
    (delta: number) => {
      if (slideCount === 0) return;
      setSlideIndex((i) => (i + delta + slideCount) % slideCount);
    },
    [slideCount]
  );

  if (items.length === 0) return null;

  const current = slides[slideIndex] ?? [];

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
          <motion.div
            key={slideIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-stretch md:gap-5"
          >
            {current.map((t) => (
              <div
                key={t.id}
                className={cn(
                  'h-full',
                  current.length === 1 && 'md:col-span-2 md:max-w-2xl md:justify-self-center'
                )}
              >
                <motion.div
                  className="h-full"
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                >
                  <blockquote
                    id={`temoignage-${t.id}`}
                    className={cn(cardSurfaceClass, cardClassName)}
                  >
                    <div className="relative z-[2] flex min-h-0 flex-1 flex-col">
                      <TestimonialFiveStars />
                      <p className="min-h-0 flex-1 whitespace-pre-line text-sm leading-relaxed text-white/75 [text-shadow:0_1px_10px_rgba(0,0,0,0.8)] md:text-base">
                        «{t.quote}»
                      </p>
                      <p className="mt-4 border-t border-white/[0.1] pt-3">
                        <CodeurLink />
                      </p>
                    </div>
                  </blockquote>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {slideCount > 1 ? (
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => go(-1)}
            className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/75 transition hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
            aria-label="Témoignages précédents"
          >
            <ChevronLeft className="size-5" aria-hidden />
          </button>
          <div
            className="flex max-w-[min(100%,18rem)] flex-wrap justify-center gap-1.5 sm:max-w-none"
            role="group"
            aria-label="Choisir une page de témoignages"
          >
            {slides.map((pair, j) => (
              <button
                key={pair.map((p) => p.id).join('-')}
                type="button"
                onClick={() => setSlideIndex(j)}
                className={cn(
                  'size-2 rounded-full transition',
                  j === slideIndex ? 'bg-white/80' : 'bg-white/25 hover:bg-white/40'
                )}
                aria-label={`Témoignages ${j + 1} sur ${slideCount}`}
                aria-current={j === slideIndex ? 'true' : undefined}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => go(1)}
            className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/75 transition hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
            aria-label="Témoignages suivants"
          >
            <ChevronRight className="size-5" aria-hidden />
          </button>
        </div>
      ) : null}
    </div>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useState } from 'react';
import { motion } from 'framer-motion';

import { PremiumSectionDivider } from '@/components/home-premium/premium-section-divider';
import { CASE_STUDY_CATEGORY_LABELS } from '@/lib/constants/case-study';
import type { SanityCaseStudyTeaser } from '@/types/sanity-case-study';

import { StellarField, useSectionStellarPointer } from './stellar-field';

type Props = {
  caseStudies: SanityCaseStudyTeaser[];
};

export function displayYear(c: SanityCaseStudyTeaser): string {
  if (c.year != null && !Number.isNaN(c.year)) return String(c.year);
  if (c.publishedAt) {
    const d = new Date(c.publishedAt);
    if (!Number.isNaN(d.getTime())) return String(d.getFullYear());
  }
  return '—';
}

export function displayMetric(c: SanityCaseStudyTeaser): string {
  const fm = c.featuredMetric?.trim();
  if (fm) return fm;
  const m = c.metrics?.[0];
  if (m?.value && m?.label) return `${m.value} ${m.label}`;
  if (m?.value) return m.value;
  return '—';
}

export function categoryLabel(c: SanityCaseStudyTeaser): string {
  const k = c.category ?? '';
  if (!k) return '—';
  return CASE_STUDY_CATEGORY_LABELS[k] ?? k;
}

export function PremiumCases({ caseStudies }: Props) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const clear = useCallback(() => setActiveId(null), []);
  const { pointer, onPointerMoveCapture, onPointerLeave } = useSectionStellarPointer();

  return (
    <section
      className="relative overflow-hidden bg-black py-24 md:py-40 lg:py-48"
      onMouseLeave={clear}
      onPointerMoveCapture={onPointerMoveCapture}
      onPointerLeave={onPointerLeave}
    >
      <PremiumSectionDivider />
      <StellarField count={48} className="opacity-[0.7]" interactive pointer={pointer} />
      <div className="relative z-10 mx-auto max-w-[1100px] px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="font-mono text-[11px] tracking-[0.28em] text-white/40 uppercase">Portfolio</p>
          <h2 className="si-serif-display mt-4 text-[clamp(1.85rem,3.5vw,3rem)] font-medium tracking-[-0.03em] text-white">
            Cinq réalisations récentes
          </h2>
          <p className="mt-4 text-sm text-white/55 md:text-base">
            Les derniers sites livrés, par ordre chronologique.
          </p>
        </motion.div>

        {caseStudies.length === 0 ? (
          <p className="mt-14 text-sm text-white/45">
            Les projets web publiés dans Sanity apparaîtront ici automatiquement (catégories site web, e-commerce ou
            marketplace).
          </p>
        ) : (
          <ul className="relative mt-14 border-t border-white/10">
            {caseStudies.map((c, i) => {
              const active = activeId === c._id;
              const dim = activeId !== null && !active;
              return (
                <motion.li
                  key={c._id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-5%' }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  className="relative border-b border-white/[0.07]"
                  onMouseEnter={() => setActiveId(c._id)}
                >
                  <Link
                    href={`/realisations/${c.slug}`}
                    className={`group relative grid min-h-[72px] grid-cols-2 gap-x-4 gap-y-3 py-5 transition duration-300 md:min-h-[80px] md:grid-cols-[minmax(0,0.55fr)_minmax(0,1.2fr)_minmax(0,0.9fr)_minmax(0,1fr)_auto] md:items-center md:gap-6 md:py-6 ${
                      active ? 'min-h-[140px] md:min-h-[160px]' : ''
                    } ${dim ? 'opacity-[0.42]' : 'opacity-100'}`}
                  >
                    <span className="font-mono text-xs tabular-nums text-white/45 md:text-sm">{displayYear(c)}</span>
                    <span className="si-serif-display text-lg font-medium tracking-tight text-white md:text-xl">
                      {c.title}
                    </span>
                    <span className="text-xs text-white/50 uppercase md:text-sm">{categoryLabel(c)}</span>
                    <span className="font-mono text-sm text-white/80 tabular-nums md:text-base">{displayMetric(c)}</span>
                    <span className="flex justify-end text-white/40 transition duration-300 group-hover:-rotate-45 group-hover:text-white/90 md:text-lg">
                      ↗
                    </span>

                    {c.thumbnail ? (
                      <div
                        className={`pointer-events-none absolute top-1/2 right-0 z-10 hidden w-[42%] max-w-[280px] -translate-y-1/2 overflow-hidden rounded-lg border border-white/15 bg-black/80 shadow-2xl transition duration-500 md:block ${
                          active ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                        }`}
                        aria-hidden
                      >
                        <div className="relative aspect-[16/10] w-full">
                          <Image src={c.thumbnail} alt="" fill className="object-cover" sizes="280px" />
                        </div>
                      </div>
                    ) : null}
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        )}

        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link
            href="/realisations"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-white/50 uppercase transition hover:text-white/90"
          >
            Voir toutes les réalisations <span aria-hidden>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

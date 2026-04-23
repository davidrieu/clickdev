'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';
import { motion } from 'framer-motion';

import { categoryLabel, displayMetric, displayYear } from '@/components/silos/sites-internet/premium-cases';
import { HOME_CASE_PREVIEWS } from '@/lib/constants/home-content';
import type { HomeCasePreview } from '@/lib/constants/home-content';
import { cn } from '@/lib/utils';
import type { SanityCaseStudyTeaser } from '@/types/sanity-case-study';

type PortfolioGridItem =
  | { kind: 'sanity'; data: SanityCaseStudyTeaser }
  | { kind: 'static'; data: HomeCasePreview; index: number };

function buildPortfolioGridItems(teasers: SanityCaseStudyTeaser[]): PortfolioGridItem[] {
  if (teasers.length > 0) {
    return teasers.slice(0, 5).map((data) => ({ kind: 'sanity' as const, data }));
  }
  return Array.from({ length: 5 }, (_, i) => ({
    kind: 'static' as const,
    data: HOME_CASE_PREVIEWS[i % HOME_CASE_PREVIEWS.length],
    index: i,
  }));
}

type PremiumPortfolioCaseGridProps = {
  caseStudies: SanityCaseStudyTeaser[];
  className?: string;
};

/**
 * Grille de fiches (même peau visuelle que le bloc « Sélection de projets » de l’accueil) + CTA réalisations.
 * Les titres / kicker de section restent gérés par le parent.
 */
export function PremiumPortfolioCaseGrid({ caseStudies, className }: PremiumPortfolioCaseGridProps) {
  const items = useMemo(() => buildPortfolioGridItems(caseStudies), [caseStudies]);

  return (
    <div className={cn(className)}>
      <ul className="grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {items.map((item, index) =>
          item.kind === 'sanity' ? (
            <motion.li
              key={item.data._id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-6%' }}
              transition={{ delay: index * 0.06, duration: 0.45 }}
              className="min-h-0"
            >
              <motion.div
                className="h-full"
                whileHover={{ scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 400, damping: 28 }}
              >
                <Link
                  href={`/realisations/${item.data.slug}`}
                  className="group relative flex h-full min-h-[inherit] flex-col overflow-hidden rounded-2xl border border-white/[0.1] bg-gradient-to-br from-neutral-950 via-neutral-900/85 to-neutral-900 transition duration-500 hover:border-white/[0.16]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                    {item.data.thumbnail ? (
                      <Image
                        src={item.data.thumbnail}
                        alt={`Aperçu du projet ${item.data.title} — création site internet ou app`}
                        fill
                        className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                        sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div
                        className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black"
                        aria-hidden
                      />
                    )}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
                  </div>
                  <div className="relative z-[2] flex flex-1 flex-col p-6">
                    <span className="font-mono text-[10px] tracking-[0.22em] text-white/40 uppercase">
                      {categoryLabel(item.data)}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold tracking-tight text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.75)] md:text-xl">
                      {item.data.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-white/75 [text-shadow:0_1px_10px_rgba(0,0,0,0.8)]">
                      {item.data.tagline?.trim() ||
                        (item.data.client
                          ? `Projet pour ${item.data.client}${item.data.year ? ` · ${item.data.year}` : ''}.`
                          : 'Voir la fiche pour le contexte et les résultats.')}
                    </p>
                    <p className="mt-3 font-mono text-[10px] tracking-wider text-white/45">
                      {displayMetric(item.data)} <span className="text-white/30">·</span> {displayYear(item.data)}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 font-mono text-[10px] tracking-wider text-white/60 uppercase transition group-hover:gap-3 group-hover:text-white">
                      Découvrir <span aria-hidden>↗</span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            </motion.li>
          ) : (
            <motion.li
              key={`${item.data.title}-${item.index}`}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-6%' }}
              transition={{ delay: index * 0.06, duration: 0.45 }}
              className="min-h-0"
            >
              <motion.div
                className="h-full"
                whileHover={{ scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 400, damping: 28 }}
              >
                <Link
                  href={item.data.href}
                  className="group relative flex h-full min-h-[inherit] flex-col overflow-hidden rounded-2xl border border-white/[0.1] bg-gradient-to-br from-neutral-950 via-neutral-900/85 to-neutral-900 transition duration-500 hover:border-white/[0.16]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black"
                      aria-hidden
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  </div>
                  <div className="relative z-[2] flex flex-1 flex-col p-6">
                    <span className="font-mono text-[10px] tracking-[0.22em] text-white/40 uppercase">
                      {item.data.category}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold tracking-tight text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.75)] md:text-xl">
                      {item.data.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-white/75 [text-shadow:0_1px_10px_rgba(0,0,0,0.8)]">
                      {item.data.description}
                    </p>
                    <p className="mt-3 font-mono text-[10px] tracking-wider text-white/45">
                      {item.data.metrics[0]?.value ?? '—'}{' '}
                      <span className="text-white/30">{item.data.metrics[0]?.label ?? ''}</span>
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 font-mono text-[10px] tracking-wider text-white/60 uppercase transition group-hover:gap-3 group-hover:text-white">
                      Découvrir <span aria-hidden>↗</span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            </motion.li>
          )
        )}
      </ul>

      <motion.div
        className="mt-12 flex justify-center"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.12, duration: 0.45 }}
      >
        <Link
          href="/realisations"
          className="si-btn-pill-shine relative isolate inline-flex overflow-hidden rounded-full border border-white/20 bg-white/[0.04] px-8 py-3.5 text-sm font-medium text-white/90 shadow-[inset_0_1px_0_0_rgb(255_255_255/0.08)] backdrop-blur-sm transition duration-300 hover:border-white/35 hover:bg-white/[0.08]"
        >
          <span className="relative z-10">Voir toutes les réalisations</span>
        </Link>
      </motion.div>
    </div>
  );
}

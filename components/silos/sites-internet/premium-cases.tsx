'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

import { PremiumPortfolioCaseGrid } from '@/components/home-premium/premium-portfolio-case-grid';
import { PremiumSectionDivider } from '@/components/home-premium/premium-section-divider';
import { CASE_STUDY_CATEGORY_LABELS } from '@/lib/constants/case-study';
import type { SanityCaseStudyTeaser } from '@/types/sanity-case-study';

import { StellarField, useSectionStellarPointer } from './stellar-field';

type Props = {
  caseStudies: SanityCaseStudyTeaser[];
  /** Ancre in-page (ex. lien « Voir des exemples »). */
  sectionId?: string;
  kicker?: string;
  title?: string;
  intro?: ReactNode;
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
  const t = c.typeTag?.trim();
  if (t) return t;
  const k = c.category ?? '';
  if (!k) return '—';
  return CASE_STUDY_CATEGORY_LABELS[k] ?? k;
}

const DEFAULT_KICKER = 'Portfolio';
const DEFAULT_TITLE = 'Exemples concrets';

/**
 * Section portfolio : mêmes cartes + grille + CTA que l’accueil ;
 * le kicker, le titre et l’intro restent personnalisables par page.
 */
export function PremiumCases({
  caseStudies,
  sectionId,
  kicker = DEFAULT_KICKER,
  title = DEFAULT_TITLE,
  intro,
}: Props) {
  const { pointer, onPointerMoveCapture, onPointerLeave } = useSectionStellarPointer();

  return (
    <section
      id={sectionId}
      className="relative overflow-hidden bg-black py-24 md:py-40 lg:py-48"
      onPointerMoveCapture={onPointerMoveCapture}
      onPointerLeave={onPointerLeave}
    >
      <PremiumSectionDivider />
      <StellarField count={48} className="opacity-[0.68]" interactive pointer={pointer} />
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="font-mono text-[11px] tracking-[0.28em] text-white/40 uppercase">{kicker}</p>
          <h2 className="si-serif-display mt-4 text-[clamp(1.85rem,3.5vw,3rem)] font-medium tracking-[-0.03em] text-white">
            {title}
          </h2>
          {intro ?? (
            <p className="mt-4 text-sm text-white/55 md:text-base">
              Les derniers sites livrés, par ordre chronologique. Pour d&apos;autres exemples, voir aussi{' '}
              <Link
                href="/realisations"
                className="text-white/70 underline-offset-4 transition hover:text-white hover:underline"
              >
                l’ensemble des réalisations
              </Link>
              .
            </p>
          )}
        </motion.div>

        <PremiumPortfolioCaseGrid caseStudies={caseStudies} className="mt-14" />
      </div>
    </section>
  );
}

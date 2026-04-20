'use client';

import Link from 'next/link';
import { useMemo, type ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

import { PremiumSectionDivider } from '@/components/home-premium/premium-section-divider';

import { StellarField, useSectionStellarPointer } from './stellar-field';

const DEFAULT_TITLE = 'Prêt à passer d’un site qui subit à un site qui performe ?';

const defaultDescription = (
  <>
    <p>
      Expliquez votre contexte en quelques lignes : proposition réaliste sous{' '}
      <strong className="font-medium text-white/85">24h ouvrées</strong> (périmètre, jalons, ordre de grandeur).
    </p>
    <p className="mt-4 text-white/55">
      30 minutes de discussion, sans engagement. Vous repartez avec des conseils concrets, même si on ne bosse pas
      ensemble.
    </p>
  </>
);

export type PremiumFinalCtaProps = {
  title?: string;
  description?: ReactNode;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function PremiumFinalCta({
  title = DEFAULT_TITLE,
  description = defaultDescription,
  primaryHref = '/devis?projectType=site',
  primaryLabel = 'Demander un devis site web',
  secondaryHref = '/contact',
  secondaryLabel = 'Réserver un appel',
}: PremiumFinalCtaProps) {
  const reduce = useReducedMotion();
  const words = useMemo(() => title.split(' '), [title]);
  const { pointer, onPointerMoveCapture, onPointerLeave } = useSectionStellarPointer();

  return (
    <section
      className="relative overflow-hidden bg-black py-28 md:py-40 lg:py-52"
      onPointerMoveCapture={onPointerMoveCapture}
      onPointerLeave={onPointerLeave}
    >
      <PremiumSectionDivider />
      <StellarField count={56} interactive pointer={pointer} />

      <motion.div
        className="pointer-events-none absolute -left-24 top-1/4 size-[380px] rounded-full bg-white/10 blur-3xl"
        animate={reduce ? undefined : { opacity: [0.35, 0.55, 0.35], scale: [1, 1.06, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute -right-16 bottom-0 size-[420px] rounded-full bg-white/8 blur-3xl"
        animate={reduce ? undefined : { opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[760px] px-4 text-center md:px-8">
        <motion.h2 className="si-serif-display text-balance text-[clamp(2rem,5.2vw,3.85rem)] font-medium leading-[1.06] tracking-[-0.03em] text-white">
          {words.map((w, i) => (
            <motion.span
              key={`${w}-${i}`}
              className="inline-block [margin-inline-end:0.22em] last:me-0"
              initial={reduce ? { opacity: 1, filter: 'blur(0px)' } : { opacity: 0.15, filter: 'blur(10px)' }}
              whileInView={reduce ? undefined : { opacity: 1, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ delay: 0.04 + i * 0.045, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              {w}
            </motion.span>
          ))}
        </motion.h2>
        <motion.div
          className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-white/60 md:text-base"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12, duration: 0.5 }}
        >
          {description}
        </motion.div>
        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.18, duration: 0.45 }}
        >
          <Link
            href={primaryHref}
            className="si-btn-pill-shine si-btn-pill-shine-on-light si-cta-primary-glow relative isolate inline-flex overflow-hidden rounded-full bg-white px-10 py-4 text-sm font-semibold text-black transition hover:bg-white/95"
          >
            <span className="relative z-10">{primaryLabel}</span>
          </Link>
          <Link
            href={secondaryHref}
            className="si-btn-pill-shine relative isolate inline-flex overflow-hidden rounded-full border border-white/25 bg-white/[0.06] px-10 py-4 text-sm font-medium text-white/92 shadow-[inset_0_1px_0_0_rgb(255_255_255/0.08)] backdrop-blur-sm transition hover:border-white/40 hover:bg-white/[0.1]"
          >
            <span className="relative z-10">{secondaryLabel}</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

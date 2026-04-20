'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

import { HeroSiteBuildWireframe } from '@/components/silos/sites-internet/premium-hero';
import { StellarField, useSectionStellarPointer } from '@/components/silos/sites-internet/stellar-field';

const lineDraw = {
  rest: { scaleX: 0, originX: 0 },
  animate: { scaleX: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const } },
};

type Props = {
  chapter: string;
  subline: string;
  h1: string;
  lead: string;
  primaryCta: { href: string; label: string };
  secondaryCta: { href: string; label: string };
};

/** Hero pages filles silo Sites internet — même structure que le pilier. */
export function PremiumSitesChildHero({
  chapter,
  subline,
  h1,
  lead,
  primaryCta,
  secondaryCta,
}: Props) {
  const { pointer, onPointerMoveCapture, onPointerLeave } = useSectionStellarPointer();

  return (
    <section
      className="relative overflow-hidden pt-24 pb-0 md:pt-28 lg:pt-32"
      onPointerMoveCapture={onPointerMoveCapture}
      onPointerLeave={onPointerLeave}
    >
      <StellarField
        count={48}
        className="opacity-[0.88]"
        interactive
        pointer={pointer}
        shootingMeteors
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,255,255,0.05),transparent)]" />

      <div className="relative z-10 mx-auto grid max-w-[1400px] gap-12 px-4 md:grid-cols-12 md:items-center md:gap-8 md:px-8 lg:gap-12">
        <div className="flex flex-col justify-center md:col-span-6 md:py-4 lg:py-6">
          <motion.div
            className="flex flex-col gap-2"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-4">
              <span className="font-mono text-[11px] tracking-[0.28em] text-white/55 uppercase">{chapter}</span>
              <motion.span
                className="block h-px max-w-[160px] flex-1 origin-left bg-gradient-to-r from-white/50 to-white/12"
                variants={lineDraw}
                initial="rest"
                animate="animate"
                aria-hidden
              />
            </div>
            <p className="font-mono text-[10px] tracking-[0.22em] text-white/45 uppercase md:text-[11px] md:tracking-[0.24em]">
              {subline}
            </p>
          </motion.div>

          <motion.h1
            className="si-serif-display mt-8 text-[clamp(2.125rem,4vw,3.75rem)] leading-[1.06] font-medium tracking-[-0.035em] text-white"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            {h1}
          </motion.h1>

          <motion.p
            className="mt-8 max-w-xl text-base leading-relaxed text-white/72 md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14, duration: 0.55 }}
          >
            {lead}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.5 }}
          >
            <Link
              href={primaryCta.href}
              className="si-btn-pill-shine si-btn-pill-shine-on-light group relative isolate inline-flex overflow-hidden rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black shadow-[0_0_36px_-10px_rgba(255,255,255,0.35)] transition duration-300 hover:bg-white/95 hover:shadow-[0_0_48px_-8px_rgba(255,255,255,0.45)]"
            >
              <span className="relative z-10">{primaryCta.label}</span>
              <span
                className="absolute inset-0 z-[2] -translate-x-full bg-black/[0.06] transition duration-500 group-hover:translate-x-0"
                aria-hidden
              />
            </Link>
            <Link
              href={secondaryCta.href}
              className="si-btn-pill-shine relative isolate inline-flex overflow-hidden rounded-full border border-white/20 bg-white/[0.04] px-8 py-3.5 text-sm font-medium text-white/90 shadow-[inset_0_1px_0_0_rgb(255_255_255/0.08)] backdrop-blur-sm transition duration-300 hover:border-white/35 hover:bg-white/[0.08]"
            >
              <span className="relative z-10">{secondaryCta.label}</span>
            </Link>
          </motion.div>
        </div>

        <div className="relative flex min-h-[280px] items-center justify-center md:col-span-6 md:min-h-[min(420px,52vh)] md:justify-end md:pl-2 lg:pl-4">
          <HeroSiteBuildWireframe />
        </div>
      </div>
    </section>
  );
}

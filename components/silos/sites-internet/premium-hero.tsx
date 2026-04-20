'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

import { StellarField, useSectionStellarPointer } from './stellar-field';

const lineDraw = {
  rest: { scaleX: 0, originX: 0 },
  animate: { scaleX: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const } },
};

export function PremiumHero() {
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
              <span className="font-mono text-[11px] tracking-[0.28em] text-white/55 uppercase">
                Chapitre 01 · Sites internet
              </span>
              <motion.span
                className="block h-px max-w-[160px] flex-1 origin-left bg-gradient-to-r from-white/50 to-white/12"
                variants={lineDraw}
                initial="rest"
                animate="animate"
                aria-hidden
              />
            </div>
            <p className="font-mono text-[10px] tracking-[0.22em] text-white/45 uppercase md:text-[11px] md:tracking-[0.24em]">
              Développeur web freelance — Sites sur mesure
            </p>
          </motion.div>

          <motion.h1
            className="si-serif-display mt-8 text-[clamp(2.125rem,4vw,3.75rem)] leading-[1.06] font-medium tracking-[-0.035em] text-white"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            Des sites web qui ne se contentent pas <em className="text-white/80 italic">d’exister</em>.
          </motion.h1>

          <motion.p
            className="mt-8 max-w-xl text-base leading-relaxed text-white/72 md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14, duration: 0.55 }}
          >
            Vitrines, e-commerce, marketplaces, plateformes de mise en relation… Depuis 10 ans, je construis des sites
            web sur mesure, pour des artisans comme pour des grandes marques. Objectif : qu’ils vous rapportent de
            vrais clients.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.5 }}
          >
            <Link
              href="/devis?projectType=site"
              className="si-btn-pill-shine si-btn-pill-shine-on-light group relative isolate inline-flex overflow-hidden rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black shadow-[0_0_36px_-10px_rgba(255,255,255,0.35)] transition duration-300 hover:bg-white/95 hover:shadow-[0_0_48px_-8px_rgba(255,255,255,0.45)]"
            >
              <span className="relative z-10">Parlons de votre projet</span>
              <span
                className="absolute inset-0 z-[2] -translate-x-full bg-black/[0.06] transition duration-500 group-hover:translate-x-0"
                aria-hidden
              />
            </Link>
            <Link
              href="/sites-internet#types-sites"
              className="si-btn-pill-shine relative isolate inline-flex overflow-hidden rounded-full border border-white/20 bg-white/[0.04] px-8 py-3.5 text-sm font-medium text-white/90 shadow-[inset_0_1px_0_0_rgb(255_255_255/0.08)] backdrop-blur-sm transition duration-300 hover:border-white/35 hover:bg-white/[0.08]"
            >
              <span className="relative z-10">Voir les 8 types de sites ↓</span>
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

/**
 * Wireframe animé (CSS pur) : le site se construit bloc par bloc puis repart — boucle 8s.
 * @see globals.css .si-hero-wire-*
 */
export function HeroSiteBuildWireframe() {
  return (
    <div
      className="relative mx-auto w-full max-w-lg md:mx-0 md:ml-auto md:mr-0 md:max-w-md lg:max-w-lg"
      style={{ perspective: '1200px' }}
    >
      <motion.div
        className="origin-center"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="rounded-xl border border-white/[0.12] bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-3 shadow-[0_28px_90px_-28px_rgba(0,0,0,0.9)] md:[transform:rotateY(-14deg)_rotateX(5deg)_rotateZ(-2deg)] md:[transform-origin:right_center]">
          <div className="mb-3 flex items-center gap-2 border-b border-white/[0.08] pb-3">
            <span className="size-2 rounded-full bg-white/25" aria-hidden />
            <span className="size-2 rounded-full bg-white/15" aria-hidden />
            <span className="size-2 rounded-full bg-white/10" aria-hidden />
            <div className="ml-2 h-2 flex-1 max-w-[180px] rounded-full bg-white/[0.08]" aria-hidden />
          </div>

          <div className="space-y-3 rounded-lg border border-dashed border-white/[0.1] bg-black/35 p-4" aria-hidden>
            <div className="si-hero-wire-header flex items-center justify-between gap-3 rounded border border-white/15 bg-white/[0.04] px-3 py-2.5">
              <div className="h-2.5 w-16 rounded-sm bg-white/25" />
              <div className="flex gap-2">
                <div className="h-1.5 w-8 rounded-full bg-white/15" />
                <div className="h-1.5 w-8 rounded-full bg-white/15" />
                <div className="h-1.5 w-8 rounded-full bg-white/15" />
              </div>
            </div>

            <div className="si-hero-wire-hero space-y-2 rounded border border-white/12 bg-white/[0.03] p-3">
              <div className="h-3 w-[62%] max-w-[220px] rounded-sm bg-white/20" />
              <div className="h-2 w-full max-w-[280px] rounded-full bg-white/12" />
              <div className="h-2 w-[80%] max-w-[240px] rounded-full bg-white/10" />
              <div className="mt-2 h-20 w-full rounded-md border border-white/[0.08] bg-gradient-to-br from-white/[0.06] to-transparent" />
            </div>

            <div className="si-hero-wire-section space-y-2">
              <div className="si-hero-wire-line h-1.5 w-full rounded-full bg-white/12" />
              <div className="si-hero-wire-line-d1 h-1.5 w-[92%] rounded-full bg-white/10" />
              <div className="si-hero-wire-line-d2 h-1.5 w-[78%] rounded-full bg-white/10" />
            </div>

            <div className="si-hero-wire-columns grid grid-cols-2 gap-2">
              <div className="h-20 rounded-md border border-white/12 bg-white/[0.04]" />
              <div className="h-20 rounded-md border border-white/12 bg-white/[0.04]" />
            </div>

            <div className="si-hero-wire-footer flex items-center justify-between gap-2 rounded border border-white/10 bg-white/[0.03] px-3 py-2.5">
              <div className="h-1.5 w-20 rounded-full bg-white/12" />
              <div className="flex gap-1.5">
                <div className="size-1.5 rounded-full bg-white/20" />
                <div className="size-1.5 rounded-full bg-white/20" />
                <div className="size-1.5 rounded-full bg-white/20" />
              </div>
            </div>
          </div>

          <p className="mt-3 text-center font-mono text-[9px] tracking-[0.2em] text-white/30 uppercase">
            build — preview — ship
          </p>
        </div>
      </motion.div>
    </div>
  );
}

'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

import { HeroSiteBuildWireframe } from '@/components/silos/sites-internet/premium-hero';
import { StellarField, useSectionStellarPointer } from '@/components/silos/sites-internet/stellar-field';
import { SOCIAL_LINKS } from '@/lib/constants/site';

const lineDraw = {
  rest: { scaleX: 0, originX: 0 },
  animate: { scaleX: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const } },
};

const stats = [
  { value: '80+', label: 'projets livrés' },
  { value: '10 ans', label: "d'expérience" },
  { value: '98%', label: 'clients satisfaits' },
  { value: 'TPE → CAC40', label: 'écosystèmes' },
];

function CodeurHeroTrustLink() {
  return (
    <a
      href={SOCIAL_LINKS.codeur}
      rel="me noopener noreferrer"
      target="_blank"
      className="pointer-events-auto inline-flex max-w-full items-center gap-2.5 rounded-full border border-white/[0.12] bg-white/[0.04] px-3.5 py-1.5 text-left text-[11px] text-white/65 no-underline transition-none hover:border-white/[0.12] hover:bg-white/[0.04] hover:text-white/65 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/25"
      aria-label="Codeur.com — 5,0 sur 5 (profil, nouvel onglet)"
    >
      <span className="shrink-0 font-medium tracking-tight">Codeur.com</span>
      <span className="inline-flex shrink-0 gap-0.5 text-amber-300/90" aria-hidden>
        {Array.from({ length: 5 }, (_, i) => (
          <svg key={i} className="size-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
          </svg>
        ))}
      </span>
      <span className="min-w-0 font-medium leading-snug tabular-nums text-white/80">5,0/5</span>
    </a>
  );
}

export function HpHero() {
  const { pointer, onPointerMoveCapture, onPointerLeave } = useSectionStellarPointer();

  return (
    <section
      className="relative overflow-hidden pt-20 pb-0 md:pt-24 lg:pt-28"
      onPointerMoveCapture={onPointerMoveCapture}
      onPointerLeave={onPointerLeave}
    >
      <StellarField
        count={52}
        className="opacity-[0.88]"
        interactive
        pointer={pointer}
        shootingMeteors
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,255,255,0.05),transparent)]" />

      <div className="relative z-10 mx-auto grid max-w-[1400px] gap-12 px-4 md:grid-cols-12 md:items-center md:gap-8 md:px-8 lg:gap-12">
        <div className="flex flex-col justify-center md:col-span-6 md:py-2 lg:py-4">
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.04, duration: 0.5 }}
          >
            <span className="font-mono text-[11px] tracking-[0.28em] text-white/55 uppercase">
              Développeur web freelance · 10 ans d&apos;expérience
            </span>
            <motion.span
              className="block h-px max-w-[140px] flex-1 origin-left bg-gradient-to-r from-white/50 to-white/12"
              variants={lineDraw}
              initial="rest"
              animate="animate"
              aria-hidden
            />
          </motion.div>

          <motion.h1
            className="si-serif-display mt-6 text-[clamp(2.125rem,4vw,3.5rem)] leading-[1.06] font-medium tracking-[-0.035em] text-white md:mt-8"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            Je suis développeur freelance : je code des sites, des applis et des outils sur{' '}
            <em className="text-white/80 italic">mesure</em>.
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-white/72 md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.55 }}
          >
            Depuis 10 ans, j’aide des entreprises de toutes tailles — des artisans du coin aux grandes
            marques comme Accor ou Greenweez — à avoir des outils digitaux qui cartonnent vraiment. Sans
            jargon, sans prise de tête.
          </motion.p>

          <motion.div
            className="mt-6 w-fit"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            <CodeurHeroTrustLink />
          </motion.div>

          <motion.div
            className="mt-8 flex flex-wrap gap-3 md:mt-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.5 }}
          >
            <Link
              href="/devis"
              className="si-btn-pill-shine si-btn-pill-shine-on-light group relative isolate inline-flex overflow-hidden rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black shadow-[0_0_36px_-10px_rgba(255,255,255,0.35)] transition duration-300 hover:bg-white/95"
            >
              <span className="relative z-10">Parlons de votre projet</span>
              <span
                className="absolute inset-0 z-[2] -translate-x-full bg-black/[0.06] transition duration-500 group-hover:translate-x-0"
                aria-hidden
              />
            </Link>
            <Link
              href="/realisations"
              className="si-btn-pill-shine relative isolate inline-flex overflow-hidden rounded-full border border-white/20 bg-white/[0.04] px-8 py-3.5 text-sm font-medium text-white/90 shadow-[inset_0_1px_0_0_rgb(255_255_255/0.08)] backdrop-blur-sm transition hover:border-white/35 hover:bg-white/[0.08]"
            >
              <span className="relative z-10">Voir mes réalisations</span>
            </Link>
          </motion.div>

          <motion.div
            className="mt-12 border-t border-white/[0.08] pt-10 md:mt-14"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.45 }}
          >
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
              {stats.map((s) => (
                <div key={s.label} className="text-left md:text-center">
                  <p className="text-xl font-semibold tracking-tight text-white md:text-2xl">{s.value}</p>
                  <p className="mt-1 text-xs text-white/55 md:text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="relative flex min-h-[260px] items-center justify-center md:col-span-6 md:min-h-[min(400px,50vh)] md:justify-end md:pl-2 lg:pl-4">
          <HeroSiteBuildWireframe />
        </div>
      </div>
    </section>
  );
}

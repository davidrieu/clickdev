'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

import { SITES_INTERNET_MARQUEE_CLIENTS } from '@/lib/constants/sites-internet-premium';

const lineDraw = {
  rest: { scaleX: 0, originX: 0 },
  animate: { scaleX: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const } },
};

export function PremiumHero() {
  const marquee = [...SITES_INTERNET_MARQUEE_CLIENTS, ...SITES_INTERNET_MARQUEE_CLIENTS];

  return (
    <section className="relative overflow-hidden pt-24 pb-8 md:pt-28 md:pb-14 lg:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(242,106,6,0.12),transparent)]" />

      <div className="relative z-10 mx-auto grid max-w-[1400px] gap-12 px-4 md:grid-cols-12 md:gap-8 md:px-8 lg:gap-12">
        <div className="flex flex-col justify-end md:col-span-7 lg:col-span-6">
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-mono text-[11px] tracking-[0.28em] text-white/55 uppercase">
              01 — Sites internet
            </span>
            <motion.span
              className="block h-px max-w-[160px] flex-1 origin-left bg-gradient-to-r from-[#F26A06] to-white/25"
              variants={lineDraw}
              initial="rest"
              animate="animate"
              aria-hidden
            />
          </motion.div>

          <motion.h1
            className="mt-8 text-[clamp(2.75rem,7.5vw,8.75rem)] leading-[0.92] font-medium tracking-[-0.04em] text-white [font-family:var(--font-instrument),ui-serif,Georgia,serif]"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            Des sites qui ne se contentent pas <em className="text-white/80 italic">d’exister</em>.
          </motion.h1>

          <motion.p
            className="mt-8 max-w-xl text-base leading-relaxed text-white/72 md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14, duration: 0.55 }}
          >
            Vitrine, e-commerce, marketplace ou sur-mesure : je conçois des expériences rapides, SEO-ready,
            accessibles — et tenables dans la durée. Pas de slides creux : des jalons, de la perf mesurable, du code
            propre.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.5 }}
          >
            <Link
              href="/devis?projectType=site"
              className="group relative overflow-hidden rounded-full bg-[#F26A06] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_0_40px_-8px_rgba(242,106,6,0.55)] transition duration-300 hover:shadow-[0_0_56px_-6px_rgba(242,106,6,0.65)]"
            >
              <span className="relative z-10">Demander un devis</span>
              <span
                className="absolute inset-0 -translate-x-full bg-white/20 transition duration-500 group-hover:translate-x-0"
                aria-hidden
              />
            </Link>
            <Link
              href="/realisations"
              className="rounded-full border border-white/20 bg-white/[0.04] px-8 py-3.5 text-sm font-medium text-white/90 backdrop-blur-sm transition duration-300 hover:border-white/35 hover:bg-white/[0.08]"
            >
              Voir les réalisations
            </Link>
          </motion.div>
        </div>

        <div className="relative min-h-[280px] md:col-span-5 lg:col-span-6 md:min-h-[360px]">
          <HeroMockupStack />
        </div>
      </div>

      <div className="relative z-10 mt-14 border-t border-white/[0.07] pt-6 md:mt-20">
        <div className="overflow-hidden mask-[linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
          <div className="si-marquee-l flex w-max gap-12 whitespace-nowrap pr-12">
            {marquee.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="font-mono text-xs tracking-[0.2em] text-white/35 uppercase transition hover:text-white/55"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroMockupStack() {
  return (
    <div
      className="relative mx-auto h-full min-h-[280px] max-w-lg md:mx-0 md:max-w-none"
      style={{ perspective: '1200px' }}
    >
      <motion.div
        className="absolute right-0 top-4 w-[88%] max-w-md origin-bottom-right rounded-lg border border-white/[0.12] bg-gradient-to-br from-white/[0.09] to-white/[0.02] p-3 shadow-[0_24px_80px_-24px_rgba(0,0,0,0.85)] md:right-4 md:top-8"
        style={{ transform: 'rotateY(-18deg) rotateX(6deg) rotateZ(-3deg)' }}
        initial={{ opacity: 0, y: 40, rotateX: 12 }}
        animate={{ opacity: 1, y: 0, rotateX: 6 }}
        transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mb-2 flex gap-1.5">
          <span className="size-2 rounded-full bg-white/20" />
          <span className="size-2 rounded-full bg-white/15" />
          <span className="size-2 rounded-full bg-white/10" />
        </div>
        <div className="space-y-2 rounded border border-white/[0.06] bg-black/40 p-3">
          <div className="h-2 w-2/3 rounded bg-white/10" />
          <div className="h-2 w-1/2 rounded bg-white/[0.07]" />
          <div className="mt-3 grid grid-cols-3 gap-2">
            <div className="aspect-video rounded bg-gradient-to-br from-[#F26A06]/30 to-transparent" />
            <div className="aspect-video rounded bg-white/[0.06]" />
            <div className="aspect-video rounded bg-white/[0.05]" />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute right-8 top-24 w-[78%] max-w-sm origin-bottom-right rounded-lg border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-2.5 shadow-2xl md:right-16 md:top-32"
        style={{ transform: 'rotateY(-10deg) rotateX(4deg) rotateZ(2deg)' }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.38, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="rounded border border-white/[0.05] bg-black/50 p-3">
          <div className="flex gap-2">
            <div className="h-16 flex-1 rounded bg-gradient-to-t from-[#2E08CF]/25 to-transparent" />
            <div className="h-16 flex-1 rounded bg-gradient-to-t from-[#D10A8A]/20 to-transparent" />
          </div>
          <div className="mt-2 h-1.5 w-full rounded bg-white/[0.08]" />
        </div>
      </motion.div>

      <motion.div
        className="absolute right-20 top-48 w-[62%] max-w-xs rounded-lg border border-[#F26A06]/25 bg-black/60 p-2 shadow-[0_0_40px_-12px_rgba(242,106,6,0.35)] md:right-28 md:top-56"
        style={{ transform: 'rotateZ(-4deg)' }}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="font-mono text-[10px] tracking-wider text-[#F26A06] uppercase">Lighthouse</div>
        <div className="mt-1 text-2xl font-semibold tabular-nums text-white">100</div>
      </motion.div>
    </div>
  );
}

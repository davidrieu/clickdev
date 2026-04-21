'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

import { StellarField, useSectionStellarPointer } from '@/components/silos/sites-internet/stellar-field';

const lineDraw = {
  rest: { scaleX: 0, originX: 0 },
  animate: { scaleX: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const } },
};

export function AboutHero() {
  const { pointer, onPointerMoveCapture, onPointerLeave } = useSectionStellarPointer();

  return (
    <section
      className="relative overflow-hidden pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24"
      onPointerMoveCapture={onPointerMoveCapture}
      onPointerLeave={onPointerLeave}
    >
      <StellarField
        count={44}
        className="opacity-[0.88]"
        interactive
        pointer={pointer}
        shootingMeteors
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,255,255,0.05),transparent)]" />

      <div className="relative z-10 mx-auto grid max-w-[1400px] gap-12 px-4 md:grid-cols-12 md:items-center md:gap-10 md:px-8 lg:gap-14">
        <div className="flex flex-col justify-center md:col-span-7 md:py-2 lg:py-4">
          <motion.div
            className="flex flex-col gap-2"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-4">
              <span className="font-mono text-[11px] tracking-[0.28em] text-white/55 uppercase">
                Qui suis-je ?
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
              David Rieu — Clickdev
            </p>
          </motion.div>

          <motion.h1
            className="si-serif-display mt-8 text-balance text-[clamp(1.85rem,3.6vw,3.25rem)] leading-[1.12] font-medium tracking-[-0.035em] text-white md:text-[clamp(2rem,3.2vw,3.5rem)]"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            La puissance du numérique et de la proximité humaine, c’est ce que je suis.
          </motion.h1>

          <motion.p
            className="mt-8 max-w-xl text-base leading-relaxed text-white/72 md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14, duration: 0.55 }}
          >
            Lorsqu’un outil a pour mission d’offrir une expérience intuitive et une meilleure productivité à ses
            utilisateurs, il se doit d’être performant. Je conçois des applications et des sites internet fluides et
            ergonomiques — avec des tests en amont du lancement et le suivi des indicateurs qui comptent après la
            mise en ligne.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.5 }}
          >
            <Link
              href="/devis"
              className="si-btn-pill-shine si-btn-pill-shine-on-light group relative isolate inline-flex overflow-hidden rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black shadow-[0_0_36px_-10px_rgba(255,255,255,0.35)] transition duration-300 hover:bg-white/95 hover:shadow-[0_0_48px_-8px_rgba(255,255,255,0.45)]"
            >
              <span className="relative z-10">Parlons de votre projet</span>
              <span
                className="absolute inset-0 z-[2] -translate-x-full bg-black/[0.06] transition duration-500 group-hover:translate-x-0"
                aria-hidden
              />
            </Link>
            <Link
              href="/contact"
              className="si-btn-pill-shine relative isolate inline-flex overflow-hidden rounded-full border border-white/20 bg-white/[0.04] px-8 py-3.5 text-sm font-medium text-white/90 shadow-[inset_0_1px_0_0_rgb(255_255_255/0.08)] backdrop-blur-sm transition duration-300 hover:border-white/35 hover:bg-white/[0.08]"
            >
              <span className="relative z-10">Me contacter</span>
            </Link>
          </motion.div>
        </div>

        <div className="relative flex min-h-[240px] items-center justify-center md:col-span-5 md:min-h-[min(380px,48vh)] md:justify-end">
          <AboutHeroCard />
        </div>
      </div>
    </section>
  );
}

function AboutHeroCard() {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-md md:mx-0 md:ml-auto"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.18, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: '1200px' }}
    >
      <div className="rounded-xl border border-white/[0.12] bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-5 shadow-[0_28px_90px_-28px_rgba(0,0,0,0.9)] md:[transform:rotateY(-12deg)_rotateX(4deg)_rotateZ(-1.5deg)] md:[transform-origin:right_center]">
        <p className="font-mono text-[9px] tracking-[0.22em] text-white/40 uppercase">Engagement</p>
        <p className="si-serif-display mt-3 text-2xl font-medium leading-snug tracking-[-0.02em] text-white md:text-3xl">
          Partenaire, pas seulement prestataire.
        </p>
        <div className="mt-5 space-y-2.5 border-t border-white/10 pt-5">
          {['Performance & fiabilité', 'Vision produit & business', 'Accompagnement long terme'].map((label) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-lg border border-white/[0.08] bg-black/30 px-3 py-2.5"
            >
              <span className="size-1.5 shrink-0 rounded-full bg-[rgb(165_150_255)] shadow-[0_0_12px_rgb(46_8_207/0.55)]" />
              <span className="text-sm text-white/75">{label}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center font-mono text-[9px] tracking-[0.2em] text-white/30 uppercase">
          numérique · humain · mesure
        </p>
      </div>
    </motion.div>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { AUTHOR_PORTRAIT_ALT, AUTHOR_PORTRAIT_PATH } from '@/lib/constants/author-portrait';

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

      <div className="relative z-10 si-shell-1400 grid items-center gap-10 md:grid-cols-12 md:gap-12 lg:gap-14">
        <div className="flex flex-col justify-center md:col-span-7 md:min-h-0 md:py-1 lg:py-2">
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

        <div className="flex min-h-[min(22rem,52vh)] flex-col items-center justify-center md:col-span-5 md:min-h-full md:self-stretch">
          <motion.div
            className="relative aspect-[4/5] w-full max-w-[min(20rem,85vw)] overflow-hidden rounded-2xl border border-white/[0.1] bg-neutral-900 shadow-[0_32px_80px_-32px_rgba(0,0,0,0.85)] md:max-w-[20rem] lg:max-w-[18.5rem]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={AUTHOR_PORTRAIT_PATH}
              alt={AUTHOR_PORTRAIT_ALT}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 85vw, 320px"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

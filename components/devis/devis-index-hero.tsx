'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

import { StellarField, useSectionStellarPointer } from '@/components/silos/sites-internet/stellar-field';

const lineDraw = {
  rest: { scaleX: 0, originX: 0.5 },
  animate: { scaleX: 1, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const } },
};

export function DevisIndexHero() {
  const { pointer, onPointerMoveCapture, onPointerLeave } = useSectionStellarPointer();

  return (
    <section
      className="relative overflow-hidden pt-24 pb-14 md:pt-28 md:pb-20 lg:pt-32"
      onPointerMoveCapture={onPointerMoveCapture}
      onPointerLeave={onPointerLeave}
    >
      <StellarField count={46} className="opacity-[0.85]" interactive pointer={pointer} shootingMeteors />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-15%,rgba(255,255,255,0.055),transparent)]" />

      <div className="relative z-10 mx-auto max-w-[920px] px-4 text-center md:px-8">
        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-mono text-[11px] tracking-[0.28em] text-white/55 uppercase">Devis & cadrage</span>
          <motion.span
            className="block h-px w-[min(200px,42vw)] origin-center bg-gradient-to-r from-transparent via-white/45 to-transparent"
            variants={lineDraw}
            initial="rest"
            animate="animate"
            aria-hidden
          />
          <p className="font-mono text-[10px] tracking-[0.22em] text-white/45 uppercase md:text-[11px]">
            David Rieu — développeur freelance
          </p>
        </motion.div>

        <motion.h1
          className="si-serif-display mt-8 text-balance text-[clamp(2rem,4.5vw,3.5rem)] font-medium leading-[1.08] tracking-[-0.035em] text-white"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.06, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          Un devis, c&apos;est d&apos;abord un <em className="text-white/82 not-italic">cadrage</em> honnête.
        </motion.h1>

        <motion.p
          className="mx-auto mt-8 max-w-[52rem] text-base leading-relaxed text-white/70 md:text-lg"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.55 }}
        >
          Ici, pas de tunnel commercial déguisé : le formulaire sert à m&apos;envoyer l&apos;essentiel (besoin, délai,
          budget indicatif) pour qu&apos;on sache en quelques heures si un échange a du sens — et sous quelle forme. Les
          pages <Link href="/expertises" className="text-white/85 underline-offset-2 hover:underline">Expertises</Link>
          {', '}
          <Link href="/sites-internet" className="text-white/85 underline-offset-2 hover:underline">
            Sites internet
          </Link>
          {', '}
          <Link href="/ia" className="text-white/85 underline-offset-2 hover:underline">
            IA
          </Link>
          {' '}
          détaillent le « comment je travaille » ; ici, c&apos;est le point de contact pour concret.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.48 }}
        >
          <a
            href="#devis-formulaire"
            className="si-btn-pill-shine si-btn-pill-shine-on-light group relative isolate inline-flex overflow-hidden rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black shadow-[0_0_36px_-10px_rgba(255,255,255,0.35)] transition duration-300 hover:bg-white/95"
          >
            <span className="relative z-10">Remplir le formulaire</span>
            <span
              className="absolute inset-0 z-[2] -translate-x-full bg-black/[0.06] transition duration-500 group-hover:translate-x-0"
              aria-hidden
            />
          </a>
          <Link
            href="/contact"
            className="si-btn-pill-shine relative isolate inline-flex overflow-hidden rounded-full border border-white/20 bg-white/[0.04] px-8 py-3.5 text-sm font-medium text-white/90 shadow-[inset_0_1px_0_0_rgb(255_255_255/0.08)] backdrop-blur-sm transition duration-300 hover:border-white/35 hover:bg-white/[0.08]"
          >
            <span className="relative z-10">Contacter autrement</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

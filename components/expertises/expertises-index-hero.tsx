'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { StellarField, useSectionStellarPointer } from '@/components/silos/sites-internet/stellar-field';
import { AUTHOR_PORTRAIT_ALT, AUTHOR_PORTRAIT_PATH } from '@/lib/constants/author-portrait';

const lineDraw = {
  rest: { scaleX: 0, originX: 0.5 },
  animate: { scaleX: 1, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const } },
};

export function ExpertisesIndexHero() {
  const { pointer, onPointerMoveCapture, onPointerLeave } = useSectionStellarPointer();

  return (
    <section
      className="relative overflow-hidden pt-24 pb-14 md:pt-28 md:pb-20 lg:pt-32"
      onPointerMoveCapture={onPointerMoveCapture}
      onPointerLeave={onPointerLeave}
    >
      <StellarField count={46} className="opacity-[0.85]" interactive pointer={pointer} shootingMeteors />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-15%,rgba(255,255,255,0.055),transparent)]" />

      <div className="relative z-10 si-shell-920 text-center">
        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-mono text-[11px] tracking-[0.28em] text-white/55 uppercase">Stack & techno</span>
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

        <motion.div
          className="relative mx-auto mt-5 aspect-[4/5] w-[min(7.5rem,32vw)] overflow-hidden rounded-2xl border border-white/[0.1] bg-neutral-900"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={AUTHOR_PORTRAIT_PATH}
            alt={AUTHOR_PORTRAIT_ALT}
            fill
            className="object-cover"
            sizes="120px"
            priority
          />
        </motion.div>

        <motion.h1
          className="si-serif-display mt-6 text-balance text-[clamp(2rem,4.5vw,3.5rem)] font-medium leading-[1.08] tracking-[-0.035em] text-white md:mt-8"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.06, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          Expertises techniques pour des{' '}
          <em className="text-white/82 not-italic">projets web, mobile et IA</em>.
        </motion.h1>

        <motion.p
          className="mx-auto mt-8 max-w-[52rem] text-base leading-relaxed text-white/70 md:text-lg"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.55 }}
        >
          Next.js, WordPress, Shopify, WooCommerce, React Native, Laravel, Node.js, OpenAI, Claude et LangChain : des
          pages dédiées pour expliquer comment j’interviens, quels livrables j’assume et comment ça se branche avec vos
          enjeux business — performance, SEO technique, e-commerce ou automatisation.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.48 }}
        >
          <Link
            href="/devis"
            className="si-btn-pill-shine si-btn-pill-shine-on-light group relative isolate inline-flex overflow-hidden rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black shadow-[0_0_36px_-10px_rgba(255,255,255,0.35)] transition duration-300 hover:bg-white/95"
          >
            <span className="relative z-10">Parler de votre stack</span>
            <span
              className="absolute inset-0 z-[2] -translate-x-full bg-black/[0.06] transition duration-500 group-hover:translate-x-0"
              aria-hidden
            />
          </Link>
          <Link
            href="/sites-internet"
            className="si-btn-pill-shine relative isolate inline-flex overflow-hidden rounded-full border border-white/20 bg-white/[0.04] px-8 py-3.5 text-sm font-medium text-white/90 shadow-[inset_0_1px_0_0_rgb(255_255_255/0.08)] backdrop-blur-sm transition duration-300 hover:border-white/35 hover:bg-white/[0.08]"
          >
            <span className="relative z-10">Voir les offres sites web</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

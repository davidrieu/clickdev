'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const TITLE = 'Prêt à passer d’un site qui subit à un site qui performe ?';

/** Positions déterministes (SSR-safe) pour le champ d’étoiles. */
const STAR_LAYOUT = Array.from({ length: 56 }, (_, i) => ({
  left: `${((i * 37) % 100) + (i % 3) * 0.4}%`,
  top: `${((i * 53) % 100) + ((i * 7) % 5) * 0.3}%`,
  size: 1 + (i % 4),
  delay: (i % 9) * 0.35,
}));

export function PremiumFinalCta() {
  const reduce = useReducedMotion();
  const words = useMemo(() => TITLE.split(' '), []);

  return (
    <section className="relative overflow-hidden border-t border-white/[0.08] py-28 md:py-40 lg:py-52">
      <div
        className="si-cta-breathe pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,oklch(0.14_0.02_280),oklch(0.07_0_0)_42%,oklch(0.11_0.03_30))]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />

      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        {STAR_LAYOUT.map((s, i) => (
          <span
            key={i}
            className="si-cta-star absolute rounded-full bg-white"
            style={{
              left: s.left,
              top: s.top,
              width: s.size,
              height: s.size,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
      </div>

      <motion.div
        className="pointer-events-none absolute -left-24 top-1/4 size-[380px] rounded-full bg-[#F26A06]/12 blur-3xl"
        animate={reduce ? undefined : { opacity: [0.35, 0.55, 0.35], scale: [1, 1.06, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute -right-16 bottom-0 size-[420px] rounded-full bg-violet-600/10 blur-3xl"
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
        <motion.p
          className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-white/60 md:text-base"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12, duration: 0.5 }}
        >
          Expliquez votre contexte en quelques lignes : proposition réaliste sous <strong className="font-medium text-white/85">24h ouvrées</strong> (périmètre, jalons, ordre de grandeur).
        </motion.p>
        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.18, duration: 0.45 }}
        >
          <Link
            href="/devis?projectType=site"
            className="si-cta-primary-glow rounded-full bg-white px-10 py-4 text-sm font-semibold text-black transition hover:bg-white/95"
          >
            Demander un devis site web
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-white/25 bg-white/[0.06] px-10 py-4 text-sm font-medium text-white/92 backdrop-blur-sm transition hover:border-white/40 hover:bg-white/[0.1]"
          >
            Réserver un appel
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

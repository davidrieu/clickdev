'use client';

import { motion } from 'framer-motion';

import { PremiumSectionDivider } from '@/components/home-premium/premium-section-divider';

import { SITES_INTERNET_PAGE_TESTIMONIALS } from '@/lib/constants/sites-internet-premium';
import { StellarField, useSectionStellarPointer } from './stellar-field';

/** Témoignages — même grille que la section « Témoignages » de l’accueil (à propos). */
export function PremiumSitesTestimonials() {
  const { pointer, onPointerMoveCapture, onPointerLeave } = useSectionStellarPointer();

  return (
    <section
      className="relative overflow-hidden bg-black py-24 md:py-40 lg:py-48"
      onPointerMoveCapture={onPointerMoveCapture}
      onPointerLeave={onPointerLeave}
    >
      <PremiumSectionDivider />
      <StellarField count={32} className="opacity-[0.45]" interactive pointer={pointer} />
      <div className="relative z-10 mx-auto max-w-[1100px] px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-mono text-[11px] tracking-[0.28em] text-white/45 uppercase">Social proof</p>
          <h2 className="si-serif-display mt-4 text-[clamp(1.85rem,3.5vw,3rem)] font-medium tracking-[-0.03em] text-white">
            Ce qu&apos;en disent mes clients
          </h2>
          <p className="mt-4 text-sm text-white/58 md:text-base">
            Des retours d&apos;expérience, tous profils confondus.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 md:gap-5">
          {SITES_INTERNET_PAGE_TESTIMONIALS.map((t, i) => (
            <motion.blockquote
              key={`${t.name}-${i}`}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-white/[0.08] bg-black/40 p-6"
            >
              <p className="text-sm leading-relaxed text-white/80 md:text-base">« {t.quote} »</p>
              <footer className="mt-5 border-l-2 border-white/30 pl-4">
                <cite className="not-italic text-sm font-medium text-white/90">{t.name}</cite>
                <p className="mt-1 text-xs tracking-wider text-white/45 uppercase">{t.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

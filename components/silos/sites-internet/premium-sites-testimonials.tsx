'use client';

import { motion } from 'framer-motion';

import { HomeTestimonialsSlider } from '@/components/home-premium/home-testimonials-slider';
import { PremiumSectionDivider } from '@/components/home-premium/premium-section-divider';
import { HOME_TESTIMONIALS } from '@/lib/constants/home-content';
import { StellarField, useSectionStellarPointer } from './stellar-field';

/** Même carrousel que l’accueil (témoignages Codeur 5/5, paires, lien profil). */
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
        <motion.h2
          className="si-serif-display text-center text-2xl font-medium tracking-tight text-white md:text-3xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Témoignages
        </motion.h2>
        <HomeTestimonialsSlider items={HOME_TESTIMONIALS} className="mt-10" />
      </div>
    </section>
  );
}

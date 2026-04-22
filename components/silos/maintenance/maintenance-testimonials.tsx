'use client';

import { motion } from 'framer-motion';

import { PremiumSectionDivider } from '@/components/home-premium/premium-section-divider';
import { MAINTENANCE_PAGE_TESTIMONIALS } from '@/lib/constants/maintenance-pillar-premium';

import { StellarField, useSectionStellarPointer } from '@/components/silos/sites-internet/stellar-field';

export function MaintenanceTestimonials() {
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
            De la sérénité, pas seulement du &quot;ça marche sur mon poste&quot;
          </h2>
          <p className="mt-4 text-sm text-white/58 md:text-base">
            Retours côté prod, pannes évitées, mises en ligne moins angoissantes.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 md:gap-5">
          {MAINTENANCE_PAGE_TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.45 }}
            >
              <blockquote className="text-sm leading-relaxed text-white/75 md:text-base">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-4 font-mono text-[10px] tracking-wider text-white/45 uppercase md:text-[11px]">
                {t.name}
                <br />
                <span className="mt-1 block text-xs font-sans font-normal normal-case tracking-normal text-white/55">
                  {t.role}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

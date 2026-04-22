'use client';

import DevisContent from '@/components/marketing/devis-content';
import { PremiumSectionDivider } from '@/components/home-premium/premium-section-divider';
import type { DevisProjectType } from '@/lib/constants/devis';
import { StellarField, useSectionStellarPointer } from '@/components/silos/sites-internet/stellar-field';
import { motion } from 'framer-motion';

type Props = { initialProjectType?: DevisProjectType };

export function DevisFormExpertiseSection({ initialProjectType }: Props) {
  const { pointer, onPointerMoveCapture, onPointerLeave } = useSectionStellarPointer();

  return (
    <section
      id="devis-formulaire"
      className="relative scroll-mt-28 overflow-hidden border-t border-white/10 bg-black py-20 md:py-28"
      onPointerMoveCapture={onPointerMoveCapture}
      onPointerLeave={onPointerLeave}
    >
      <PremiumSectionDivider />
      <StellarField count={32} className="opacity-[0.44]" interactive pointer={pointer} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_50%_at_50%_0%,rgba(255,255,255,0.04),transparent)]" />

      <div className="relative z-10 mx-auto max-w-[920px] px-4 text-center md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-[11px] tracking-[0.28em] text-white/45 uppercase">Envoi</p>
          <h2 className="si-serif-display mt-3 text-balance text-[clamp(1.5rem,3.2vw,2.4rem)] font-medium tracking-[-0.02em] text-white">
            Formulaire de demande
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/58 md:text-base">
            Les champs indiqués comme obligatoires sont le minimum pour vous répondre. Le reste affine la lecture mais
            peut rester partiel en première passe — on complétera par mail si besoin.
          </p>
        </motion.div>

        <div className="mt-12 text-left">
          <DevisContent initialProjectType={initialProjectType} />
        </div>
      </div>
    </section>
  );
}

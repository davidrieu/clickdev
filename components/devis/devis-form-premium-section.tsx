'use client';

import DevisContent from '@/components/marketing/devis-content';
import { PremiumSectionDivider } from '@/components/home-premium/premium-section-divider';
import type { DevisProjectType } from '@/lib/constants/devis';
import { StellarField, useSectionStellarPointer } from '@/components/silos/sites-internet/stellar-field';

type Props = { initialProjectType?: DevisProjectType };

export function DevisFormPremiumSection({ initialProjectType }: Props) {
  const { pointer, onPointerMoveCapture, onPointerLeave } = useSectionStellarPointer();

  return (
    <section
      className="relative overflow-hidden bg-[oklch(0.11_0_0)] py-24 md:py-32 lg:py-40"
      onPointerMoveCapture={onPointerMoveCapture}
      onPointerLeave={onPointerLeave}
    >
      <PremiumSectionDivider />
      <StellarField count={32} className="opacity-[0.5]" interactive pointer={pointer} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,rgba(255,255,255,0.04),transparent)]" />

      <div className="relative z-10 mx-auto max-w-[1100px] px-4 md:px-8">
        <p className="font-mono text-[11px] tracking-[0.28em] text-white/40 uppercase">Chapitre 02 · Cadrage</p>
        <h2 className="si-serif-display mt-3 text-balance text-[clamp(1.65rem,3.2vw,2.35rem)] font-medium leading-tight tracking-[-0.02em] text-white">
          Votre demande de devis
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/58 md:text-base">
          Les besoins concrets aident plus qu’un cahier des charges théorique. Les champs ci-dessous sont des
          repères — ajustons ensemble si le projet évolue.
        </p>
        <div className="mt-10 md:mt-12">
          <DevisContent initialProjectType={initialProjectType} />
        </div>
      </div>
    </section>
  );
}

'use client';

import { PremiumSectionDivider } from '@/components/home-premium/premium-section-divider';

import { MaintenanceEditorialSeoContent } from './maintenance-editorial-seo-content';
import { StellarField, useSectionStellarPointer } from '@/components/silos/sites-internet/stellar-field';

export default function MaintenanceEditorialSeo() {
  const { pointer, onPointerMoveCapture, onPointerLeave } = useSectionStellarPointer();

  return (
    <section
      className="relative overflow-hidden bg-black py-24 md:py-36 lg:py-44"
      onPointerMoveCapture={onPointerMoveCapture}
      onPointerLeave={onPointerLeave}
    >
      <PremiumSectionDivider />
      <StellarField count={42} className="opacity-[0.55]" interactive pointer={pointer} />
      <div className="relative z-10 mx-auto max-w-[42rem] px-4 md:px-8">
        <p className="font-mono text-[11px] tracking-[0.28em] text-white/50 uppercase">Lecture</p>
        <h2 className="si-serif-display mt-4 text-[clamp(1.9rem,3.8vw,3.1rem)] font-medium leading-tight tracking-[-0.02em] text-white">
          Pourquoi la maintenance site web n&apos;est plus optionnelle en 2026
        </h2>
        <MaintenanceEditorialSeoContent />
      </div>
    </section>
  );
}

'use client';

import type { ReactNode } from 'react';

import { PremiumFinalCta } from '@/components/silos/sites-internet/premium-final-cta';
import { StellarField, useSectionStellarPointer } from '@/components/silos/sites-internet/stellar-field';

import { PremiumPageBreadcrumb, type PremiumBreadcrumbItem } from './premium-page-breadcrumb';

type Props = {
  children: ReactNode;
  breadcrumb: PremiumBreadcrumbItem[];
};

/** Même ADN que /sites-internet : fond noir, halos, CTA final. */
export function RealisationDetailShell({ children, breadcrumb }: Props) {
  const { pointer, onPointerMoveCapture, onPointerLeave } = useSectionStellarPointer();

  return (
    <main className="bg-black text-white">
      <PremiumPageBreadcrumb items={breadcrumb} />
      <section
        className="relative overflow-hidden pt-20 pb-16 md:pt-24 md:pb-24 lg:pt-28 lg:pb-32"
        onPointerMoveCapture={onPointerMoveCapture}
        onPointerLeave={onPointerLeave}
      >
        <StellarField
          count={48}
          className="opacity-[0.88]"
          interactive
          pointer={pointer}
          shootingMeteors
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,255,255,0.05),transparent)]" />
        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 md:px-8">
          {children}
        </div>
      </section>
      <PremiumFinalCta
        title="Un projet du même acabit ?"
        description={
          <p>
            Expliquez votre contexte : je reviens vers vous avec une proposition claire (périmètre, jalons, ordre de
            grandeur) sous <strong className="font-medium text-white/85">24h ouvrées</strong>.
          </p>
        }
        primaryHref="/devis"
        primaryLabel="Demander un devis"
        secondaryHref="/contact"
        secondaryLabel="Parler de votre projet"
      />
    </main>
  );
}

'use client';

import type { ReactNode } from 'react';

import { PremiumFinalCta } from '@/components/silos/sites-internet/premium-final-cta';
import { StellarField, useSectionStellarPointer } from '@/components/silos/sites-internet/stellar-field';

import { PremiumPageBreadcrumb, type PremiumBreadcrumbItem } from '@/components/realisations/premium-page-breadcrumb';

type Props = {
  children: ReactNode;
  breadcrumb: PremiumBreadcrumbItem[];
};

/**
 * Fond stellaire plus discret qu’en fiche réalisation : moins de points, opacité basse, pas de météores
 * pour garder l’effet “ciel” sans grainer la lecture d’un long article.
 */
export function BlogArticleShell({ children, breadcrumb }: Props) {
  const { pointer, onPointerMoveCapture, onPointerLeave } = useSectionStellarPointer();

  return (
    <main className="bg-black text-white">
      <PremiumPageBreadcrumb items={breadcrumb} />
      <section
        className="relative pt-20 pb-16 md:pt-24 md:pb-24 lg:pt-28 lg:pb-32"
        onPointerMoveCapture={onPointerMoveCapture}
        onPointerLeave={onPointerLeave}
      >
        <StellarField count={34} className="opacity-[0.38]" interactive pointer={pointer} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,255,255,0.05),transparent)]" />
        <div className="pointer-events-none absolute inset-0 bg-black/15" />
        <div className="relative z-10 si-shell-1400">
          {children}
        </div>
      </section>
      <PremiumFinalCta
        title="Un projet en tête ?"
        description={
          <p>
            De la vitrine à la plateforme : cadrage, stack et jalons. Première réponse sous{' '}
            <strong className="font-medium text-white/85">24h ouvrées</strong>.
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

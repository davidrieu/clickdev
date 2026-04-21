import { PremiumFinalCta } from '@/components/silos/sites-internet/premium-final-cta';

import { AboutBody } from './about-body';
import { AboutBreadcrumb } from './about-breadcrumb';
import { AboutHero } from './about-hero';

const ctaDescription = (
  <>
    <p>
      Expliquez votre contexte en quelques lignes : proposition réaliste sous{' '}
      <strong className="font-medium text-white/85">24h ouvrées</strong> (périmètre, jalons, ordre de grandeur).
    </p>
    <p className="mt-4 text-white/55">
      30 minutes d’échange, sans engagement — vous repartez avec des pistes concrètes, même si on ne travaille pas
      ensemble.
    </p>
  </>
);

/** Page /a-propos — même ADN visuel que l’accueil et le pilier sites internet. */
export default function AboutPremiumPage() {
  return (
    <main className="bg-black text-white">
      <AboutBreadcrumb />
      <AboutHero />
      <AboutBody />
      <PremiumFinalCta
        title="Un projet web ou mobile à faire avancer ?"
        description={ctaDescription}
        primaryHref="/devis"
        primaryLabel="Demander un devis"
        secondaryHref="/contact"
        secondaryLabel="Me contacter"
      />
    </main>
  );
}

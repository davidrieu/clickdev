import { DevisBreadcrumb } from '@/components/devis/devis-breadcrumb';
import { DevisFormPremiumSection } from '@/components/devis/devis-form-premium-section';
import { DevisPremiumHero } from '@/components/devis/devis-premium-hero';
import { PremiumFinalCta } from '@/components/silos/sites-internet/premium-final-cta';
import { PremiumSitesTrustMarquee } from '@/components/silos/sites-internet/premium-sites-trust-marquee';
import type { DevisProjectType } from '@/lib/constants/devis';

type Props = { initialProjectType?: DevisProjectType };

export function DevisPremiumPage({ initialProjectType }: Props) {
  return (
    <main className="bg-black text-white">
      <DevisBreadcrumb />
      <DevisPremiumHero />
      <PremiumSitesTrustMarquee />
      <DevisFormPremiumSection initialProjectType={initialProjectType} />
      <PremiumFinalCta
        title="Vous hésitez encore sur le type de mission ?"
        description={
          <p>
            Parcourir le pilier <strong className="font-medium text-white/85">Sites internet</strong> ou
            m&apos;écrire directement : parfois un message suffit pour trancher plus vite qu&apos;un chapitre
            de brief.
          </p>
        }
        primaryHref="/sites-internet"
        primaryLabel="Parcours Sites internet"
        secondaryHref="/contact"
        secondaryLabel="Contact direct"
      />
    </main>
  );
}

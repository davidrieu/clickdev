import { DevisBreadcrumb } from '@/components/devis/devis-breadcrumb';
import { DevisFormExpertiseSection } from '@/components/devis/devis-form-expertise-section';
import { DevisIndexFaq } from '@/components/devis/devis-index-faq';
import { DevisIndexHero } from '@/components/devis/devis-index-hero';
import { DevisIndexSections } from '@/components/devis/devis-index-sections';
import { PremiumFinalCta } from '@/components/silos/sites-internet/premium-final-cta';
import { DEVIS_FAQ, DEVIS_INFO_GROUPS } from '@/lib/constants/devis-index';
import type { DevisProjectType } from '@/lib/constants/devis';
import Link from 'next/link';

const groups = DEVIS_INFO_GROUPS.map((g) => ({
  id: g.id,
  title: g.title,
  description: g.description,
  items: g.items.map((i) => ({ title: i.title, body: i.body })),
}));

const finalCtaDescription = (
  <>
    <p>
      Les fiches{' '}
      <Link href="/expertises" className="text-white/85 underline-offset-2 hover:underline">
        Expertises
      </Link>
      {', '}
      <Link href="/sites-internet" className="text-white/85 underline-offset-2 hover:underline">
        Sites internet
      </Link>
      {', '}
      <Link href="/ia" className="text-white/85 underline-offset-2 hover:underline">
        IA
      </Link>
      {' '}
      et le{' '}
      <Link href="/contact" className="text-white/85 underline-offset-2 hover:underline">
        contact direct
      </Link>
      : le reste de ce que vous avez parcouru, pour décider d&apos;un échange ou d&apos;un cadrage court avant devis
      chiffré.
    </p>
    <p className="mt-4 text-white/55">Pas prêt ? Un mail suffit — pas d&apos;obligation de remplir ce formulaire.</p>
  </>
);

type Props = { initialProjectType?: DevisProjectType };

export function DevisPremiumPage({ initialProjectType }: Props) {
  return (
    <main className="bg-black text-white">
      <DevisBreadcrumb />
      <DevisIndexHero />
      <DevisIndexSections groups={groups} />
      <DevisFormExpertiseSection initialProjectType={initialProjectType} />
      <DevisIndexFaq items={DEVIS_FAQ} />
      <PremiumFinalCta
        title="La suite, c’est votre décision"
        description={finalCtaDescription}
        primaryHref="/expertises"
        primaryLabel="Parcourir les expertises"
        secondaryHref="/contact"
        secondaryLabel="Écrire directement"
      />
    </main>
  );
}

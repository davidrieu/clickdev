import { DevisPremiumPage } from '@/components/devis/devis-premium-page';
import { parseDevisProjectTypeQuery } from '@/lib/constants/devis';
import { DEVIS_FAQ } from '@/lib/constants/devis-index';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-json-ld';
import { FaqPageJsonLd } from '@/components/seo/faq-page-json-ld';
import { listingPageMetadata } from '@/lib/seo/page-metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = listingPageMetadata({
  title: 'Demander un devis',
  description:
    'Devis Clickdev (même fil conducteur qu’Expertises) : cadrer besoin, délai et budget — relecture humaine, retour 24–48 h ouvrées, sans tunnel commercial, développeur web freelance en France.',
  path: '/devis',
});

const crumbs = [
  { name: 'Accueil', path: '/' },
  { name: 'Devis', path: '/devis' },
];

type DevisPageProps = {
  searchParams: Promise<{ projectType?: string | string[] }>;
};

export default async function DevisPage({ searchParams }: DevisPageProps) {
  const sp = await searchParams;
  const initialProjectType = parseDevisProjectTypeQuery(sp.projectType);

  return (
    <>
      <BreadcrumbJsonLd items={crumbs} />
      <FaqPageJsonLd items={DEVIS_FAQ} />
      <DevisPremiumPage initialProjectType={initialProjectType} />
    </>
  );
}

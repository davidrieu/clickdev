import { DevisPremiumPage } from '@/components/devis/devis-premium-page';
import { parseDevisProjectTypeQuery } from '@/lib/constants/devis';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-json-ld';
import { listingPageMetadata } from '@/lib/seo/page-metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = listingPageMetadata({
  title: 'Demander un devis',
  description:
    'Demande de devis Clickdev (layout pilier Sites internet) : cadrer votre besoin, budget et délai — retour sous 24–48 h ouvrées, développeur web freelance en France.',
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
      <DevisPremiumPage initialProjectType={initialProjectType} />
    </>
  );
}

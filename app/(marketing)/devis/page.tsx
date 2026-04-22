import { DevisPremiumPage } from '@/components/devis/devis-premium-page';
import { parseDevisProjectTypeQuery } from '@/lib/constants/devis';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-json-ld';
import { listingPageMetadata } from '@/lib/seo/page-metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = listingPageMetadata({
  title: 'Demander un devis',
  description:
    'Demande de devis Clickdev : Paris 13e (48 rue de la Glacière), téléphone, e-mail, formulaire — retour 24–48 h ouvrées, développeur web freelance.',
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

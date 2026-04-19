import MarketingShell from '@/components/marketing/marketing-shell';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-json-ld';
import { listingPageMetadata } from '@/lib/seo/page-metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  ...listingPageMetadata({
    title: 'Politique de confidentialité',
    description: 'Traitement des données personnelles et cookies — Clickdev.',
    path: '/confidentialite',
  }),
  robots: { index: false, follow: true },
};

const crumbs = [
  { name: 'Accueil', path: '/' },
  { name: 'Confidentialité', path: '/confidentialite' },
];

export default function ConfidentialitePage() {
  return (
    <>
      <BreadcrumbJsonLd items={crumbs} />
      <MarketingShell
        title="Politique de confidentialité"
        description="Politique RGPD à rédiger (données collectées, bases légales, cookies / Plausible, etc.)."
        breadcrumb={crumbs.map((c) => ({ label: c.name, href: c.path }))}
      />
    </>
  );
}

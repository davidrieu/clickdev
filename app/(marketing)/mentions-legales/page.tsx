import MarketingShell from '@/components/marketing/marketing-shell';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-json-ld';
import { listingPageMetadata } from '@/lib/seo/page-metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  ...listingPageMetadata({
    title: 'Mentions légales',
    description: 'Informations éditeur, hébergement et propriété intellectuelle — Clickdev.',
    path: '/mentions-legales',
  }),
  robots: { index: false, follow: true },
};

const crumbs = [
  { name: 'Accueil', path: '/' },
  { name: 'Mentions légales', path: '/mentions-legales' },
];

export default function MentionsLegalesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={crumbs} />
      <MarketingShell
        title="Mentions légales"
        description="Texte juridique à fournir (éditeur, hébergeur, propriété intellectuelle, etc.)."
        breadcrumb={crumbs.map((c) => ({ label: c.name, href: c.path }))}
      />
    </>
  );
}

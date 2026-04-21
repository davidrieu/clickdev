import AboutPremiumPage from '@/components/about/about-premium-page';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-json-ld';
import { PersonJsonLd } from '@/components/seo/person-json-ld';
import { listingPageMetadata } from '@/lib/seo/page-metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = listingPageMetadata({
  title: 'Qui suis-je ?',
  description:
    'David Rieu, Clickdev : sites et applications performantes, sur mesure, avec une approche partenaire — conseil, tests et suivi des indicateurs.',
  path: '/a-propos',
});

const crumbs = [
  { name: 'Accueil', path: '/' },
  { name: 'Qui suis-je ?', path: '/a-propos' },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={crumbs} />
      <PersonJsonLd />
      <AboutPremiumPage />
    </>
  );
}

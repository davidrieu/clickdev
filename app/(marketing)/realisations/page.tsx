import { RealisationsListClient } from '@/components/realisations/realisations-list-client';
import { CollectionPageItemListJsonLd } from '@/components/seo/collection-page-item-list-json-ld';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-json-ld';
import { getAllCaseStudyTeasers } from '@/lib/sanity/fetch';
import { isSanityConfigured } from '@/lib/sanity/env';
import { listingPageMetadata } from '@/lib/seo/page-metadata';
import type { Metadata } from 'next';

export const revalidate = 60;

export const metadata: Metadata = listingPageMetadata({
  title: 'Réalisations',
  description:
    'Découvrez le portfolio de David Rieu, développeur web freelance : sites, applications et solutions digitales, avec chaque cas raconté en transparence.',
  path: '/realisations',
});

const jsonLdItems = [
  { name: 'Accueil', path: '/' },
  { name: 'Réalisations', path: '/realisations' },
];

export default async function RealisationsPage() {
  const cases = await getAllCaseStudyTeasers();
  const configured = isSanityConfigured();
  const listItems =
    configured && cases.length > 0
      ? cases.map((c) => ({ path: `/realisations/${c.slug}`, name: c.title }))
      : [];

  return (
    <>
      <BreadcrumbJsonLd items={jsonLdItems} />
      <CollectionPageItemListJsonLd
        pagePath="/realisations"
        pageTitle="Réalisations — Clickdev"
        items={listItems}
        pageEntity="CollectionPage"
      />
      <RealisationsListClient cases={cases} configured={configured} />
    </>
  );
}

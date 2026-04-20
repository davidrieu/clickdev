import type { Metadata } from 'next';

import { SITE_NAME, SITE_URL } from '@/lib/constants/site';

const path = '/seo';
const canonical = `${SITE_URL.replace(/\/$/, '')}${path}`;

export function seoPillarMetadata(): Metadata {
  const title = 'SEO freelance — Google, local & e-commerce | Clickdev';
  const description =
    'Référencement naturel accessible : audit, technique, local, e-commerce, contenu. Je conçois et j’implémente — devis gratuit. PME, artisans, associations.';
  const ogTitle = 'SEO — Clickdev';
  const ogDesc = 'Visibilité Google sans jargon : priorités claires et exemples concrets.';

  return {
    title,
    description,
    keywords: [
      'SEO freelance',
      'référencement naturel PME',
      'audit SEO',
      'SEO local',
      'SEO e-commerce',
      'migration SEO',
    ],
    alternates: { canonical },
    openGraph: {
      title: ogTitle,
      description: ogDesc,
      url: canonical,
      siteName: SITE_NAME,
      locale: 'fr_FR',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: ogTitle,
      description: ogDesc,
    },
    robots: { index: true, follow: true },
  };
}

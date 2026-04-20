import type { Metadata } from 'next';

import { SITE_NAME, SITE_URL } from '@/lib/constants/site';

const path = '/sites-internet';
const canonical = `${SITE_URL.replace(/\/$/, '')}${path}`;

/** Métadonnées pilier /sites-internet (silo SEO principal). */
export function sitesInternetPillarMetadata(): Metadata {
  const title = 'Développeur site internet freelance — Sur mesure | Clickdev';
  const description =
    'Création de sites web sur mesure par un développeur freelance depuis 10 ans. Sites vitrines, e-commerce, marketplaces, plateformes. Devis gratuit.';
  const ogTitle = 'Développeur site internet freelance — Clickdev';
  const ogDesc =
    'Sites vitrines, e-commerce, marketplaces, plateformes de mise en relation. Des sites web qui performent vraiment.';
  const ogImage = '/og-sites-internet.png';

  return {
    title,
    description,
    keywords: [
      'développeur site internet',
      'création site web',
      'freelance site internet',
      'développeur web freelance',
      'site sur mesure',
      'développeur Next.js',
      'développeur WordPress',
      'création site e-commerce',
    ],
    alternates: { canonical },
    openGraph: {
      title: ogTitle,
      description: ogDesc,
      url: canonical,
      siteName: SITE_NAME,
      images: [{ url: ogImage, width: 1200, height: 630, alt: 'Clickdev — Développeur site internet freelance' }],
      locale: 'fr_FR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: ogDesc,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

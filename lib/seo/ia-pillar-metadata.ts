import type { Metadata } from 'next';

import { SITE_NAME, SITE_URL } from '@/lib/constants/site';

const path = '/ia';
const canonical = `${SITE_URL.replace(/\/$/, '')}${path}`;

/** Métadonnées pilier `/ia`. */
export function iaPillarMetadata(): Metadata {
  const title = 'IA pour sites, apps & chatbots — Freelance Clickdev';
  const description =
    'Intégration d’IA dans sites et applications mobiles, chatbots, automatisation et boutique en ligne : un langage clair, des objectifs concrets, devis gratuit.';
  const ogTitle = 'IA — Clickdev';
  const ogDesc =
    'Sites, applications, assistants conversationnels : de l’IA utile pour vos clients et vos équipes.';
  const ogImage = '/og-sites-internet.png';

  return {
    title,
    description,
    keywords: [
      'IA site web',
      'chatbot freelance',
      'application mobile IA',
      'intégration IA PME',
      'assistant boutique en ligne',
      'freelance intelligence artificielle',
    ],
    alternates: { canonical },
    openGraph: {
      title: ogTitle,
      description: ogDesc,
      url: canonical,
      siteName: SITE_NAME,
      images: [{ url: ogImage, width: 1200, height: 630, alt: 'Clickdev — IA' }],
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

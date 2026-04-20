import type { Metadata } from 'next';

import { SITE_NAME, SITE_URL } from '@/lib/constants/site';

const path = '/crm-outils-metiers';
const base = SITE_URL.replace(/\/$/, '');
const canonical = `${base}${path}`;
const ogImage = `${base}/assets/workflow2.png`;

export function crmPillarMetadata(): Metadata {
  const title = 'CRM sur mesure & outils métiers — Freelance | Clickdev';
  const description =
    'Je développe CRM sur mesure, outils internes, automatisations et intégrations. Moins de tableurs, plus de clarté pour vos équipes. Dès 4 900 € — devis gratuit.';
  const ogTitle = 'CRM & outils métiers — Clickdev';
  const ogDesc =
    'Outils web adaptés à votre métier : CRM, flux, API. Je code, je documente, je reste joignable après la mise en prod.';

  return {
    title,
    description,
    keywords: [
      'CRM sur mesure',
      'outils métiers',
      'CRM freelance',
      'développement outil interne',
      'automatisation entreprise',
      'intégration CRM',
    ],
    alternates: { canonical },
    openGraph: {
      title: ogTitle,
      description: ogDesc,
      url: canonical,
      siteName: SITE_NAME,
      images: [{ url: ogImage, width: 1200, height: 630, alt: 'Clickdev — CRM et outils métiers' }],
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

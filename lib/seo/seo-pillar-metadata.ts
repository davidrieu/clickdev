import type { Metadata } from 'next';

import { SITE_NAME, SITE_URL } from '@/lib/constants/site';

const path = '/seo';
const base = SITE_URL.replace(/\/$/, '');
const canonical = `${base}${path}`;
const ogImage = `${base}/assets/workflow3.png`;

export function seoPillarMetadata(): Metadata {
  const title = 'Freelance SEO & GEO — Google & visibilité IA | Clickdev';
  const description =
    'Je travaille votre référencement Google et votre visibilité dans les IA (ChatGPT, Claude…). Audit, technique, contenu, GEO. Accompagnement dès 1 900 € — devis gratuit.';
  const ogTitle = 'SEO & GEO — Clickdev';
  const ogDesc =
    'Référencement naturel + GEO : pages claires, perf, contenu honnête. Sans promesse de #1 magique.';

  return {
    title,
    description,
    keywords: [
      'freelance SEO',
      'freelance GEO',
      'référencement naturel',
      'audit SEO',
      'optimisation Google',
      'visibilité ChatGPT',
      'generative engine optimization',
    ],
    alternates: { canonical },
    openGraph: {
      title: ogTitle,
      description: ogDesc,
      url: canonical,
      siteName: SITE_NAME,
      images: [{ url: ogImage, width: 1200, height: 630, alt: 'Clickdev — SEO et GEO' }],
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

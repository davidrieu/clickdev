import type { Metadata } from 'next';

import { SITE_NAME, SITE_URL } from '@/lib/constants/site';

const path = '/ia';
const base = SITE_URL.replace(/\/$/, '');
const canonical = `${base}${path}`;
const ogImage = `${base}/assets/workflow1.png`;

/** Métadonnées pilier `/ia` — alignées brief (intégration IA entreprise). */
export function iaPillarMetadata(): Metadata {
  const title = 'Intégration IA entreprise — Freelance | Clickdev';
  const description =
    'J’intègre de l’IA dans vos outils : chatbots, agents, automatisation, ChatGPT, Claude. Développeur freelance, langage clair. Devis dès 3 500 €, sans engagement.';
  const ogTitle = 'Intégration IA — Clickdev';
  const ogDesc =
    'IA utile dans le site, l’appli ou les process : je code, j’explique, je mesure. Chatbots, RAG, automatisations.';

  return {
    title,
    description,
    keywords: [
      'intégration IA entreprise',
      'développeur IA freelance',
      'chatbot IA personnalisé',
      'agent IA sur mesure',
      'intégration ChatGPT',
      'intégration Claude API',
      'RAG entreprise',
    ],
    alternates: { canonical },
    openGraph: {
      title: ogTitle,
      description: ogDesc,
      url: canonical,
      siteName: SITE_NAME,
      images: [{ url: ogImage, width: 1200, height: 630, alt: 'Clickdev — Intégration IA entreprise' }],
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

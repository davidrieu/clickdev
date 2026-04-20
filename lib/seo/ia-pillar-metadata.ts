import type { Metadata } from 'next';

import { SITE_NAME, SITE_URL } from '@/lib/constants/site';

const path = '/ia';
const canonical = `${SITE_URL.replace(/\/$/, '')}${path}`;

/** Métadonnées pilier `/ia`. */
export function iaPillarMetadata(): Metadata {
  const title = 'Intégration IA freelance — Chatbots, agents, RAG | Clickdev';
  const description =
    'Intégration IA en produit : APIs, RAG, chatbots, agents, automatisation. Garde-fous, coûts et sécurité. Freelance expérimenté — devis gratuit.';
  const ogTitle = 'IA — Clickdev';
  const ogDesc =
    'LLM en production : intégrations utiles, mesurables et maîtrisées — du POC au run.';
  const ogImage = '/og-sites-internet.png';

  return {
    title,
    description,
    keywords: [
      'intégration IA',
      'freelance IA',
      'RAG entreprise',
      'chatbot IA',
      'agents IA',
      'automatisation IA',
      'OpenAI freelance',
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

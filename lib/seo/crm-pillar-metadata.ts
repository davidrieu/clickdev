import type { Metadata } from 'next';

import { SITE_NAME, SITE_URL } from '@/lib/constants/site';

const path = '/crm-outils-metiers';
const canonical = `${SITE_URL.replace(/\/$/, '')}${path}`;

export function crmPillarMetadata(): Metadata {
  const title = 'CRM & outils métiers — Sur mesure & intégrations | Clickdev';
  const description =
    'Je conçois et développe CRM sur mesure, intégrations et automatisations. Moins de tableurs, plus de clarté — PME et équipes. Devis gratuit.';
  const ogTitle = 'CRM & outils — Clickdev';
  const ogDesc = 'Outils métiers web : CRM adapté, connexions entre vos logiciels, automatisations fiables.';

  return {
    title,
    description,
    keywords: [
      'CRM sur mesure freelance',
      'intégration CRM',
      'automatisation métier',
      'outil commercial PME',
      'développement web métier',
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

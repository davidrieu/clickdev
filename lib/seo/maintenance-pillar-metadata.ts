import type { Metadata } from 'next';

import { SITE_NAME, SITE_URL } from '@/lib/constants/site';
import { MAINTENANCE_PILLAR_PATH } from '@/lib/constants/maintenance-pillar-premium';

const path = MAINTENANCE_PILLAR_PATH;
const base = SITE_URL.replace(/\/$/, '');
const canonical = `${base}${path}`;
const ogImage = `${base}/assets/workflow1.png`;

/** Métadonnées pilier /maintenance. */
export function maintenancePillarMetadata(): Metadata {
  const title = 'Maintenance site web, WordPress, e-commerce & TMA | Clickdev';
  const description =
    "Je maintiens vos sites et applis : mises à jour, sécurité, sauvegardes, e-commerce, TMA et infogérance. Freelance, 1ʳᵉ personne, contrat clair — devis personnalisé.";
  const ogTitle = 'Maintenance & infogérance — Clickdev';
  const ogDesc =
    'Forfait ou rétroactif, WordPress, boutique en ligne, TMA applicative ou serveur : le même exigence que sur la création.';
  return {
    title,
    description,
    keywords: [
      'maintenance site web',
      'maintenance WordPress',
      'maintenance e-commerce',
      'TMA appliquée',
      'infogérance',
      'freelance maintenance web',
      'mises à jour site internet',
    ],
    alternates: { canonical },
    openGraph: {
      title: ogTitle,
      description: ogDesc,
      url: canonical,
      siteName: SITE_NAME,
      images: [
        { url: ogImage, width: 1200, height: 630, alt: 'Clickdev — Maintenance & infogérance web' },
      ],
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

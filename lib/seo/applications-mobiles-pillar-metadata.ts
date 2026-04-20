import type { Metadata } from 'next';

import { SITE_NAME, SITE_URL } from '@/lib/constants/site';

const path = '/applications-mobiles';
const canonical = `${SITE_URL.replace(/\/$/, '')}${path}`;

/** Métadonnées pilier /applications-mobiles. */
export function applicationsMobilesPillarMetadata(): Metadata {
  const title = 'Développeur application mobile freelance — iOS, Android, React Native | Clickdev';
  const description =
    'Développement d’applications mobiles : iOS, Android, React Native, PWA. Stores, performance, maintenance. Freelance expérimenté — devis gratuit.';
  const ogTitle = 'Applications mobiles — Clickdev';
  const ogDesc =
    'Apps natives, cross-platform et PWA : de l’idée à la prod, avec qualité store et observabilité.';
  const ogImage = '/og-sites-internet.png';

  return {
    title,
    description,
    keywords: [
      'développeur application mobile',
      'développeur iOS freelance',
      'développeur Android freelance',
      'React Native freelance',
      'PWA développement',
      'freelance mobile',
    ],
    alternates: { canonical },
    openGraph: {
      title: ogTitle,
      description: ogDesc,
      url: canonical,
      siteName: SITE_NAME,
      images: [{ url: ogImage, width: 1200, height: 630, alt: 'Clickdev — Applications mobiles' }],
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

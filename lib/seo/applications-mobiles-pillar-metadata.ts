import type { Metadata } from 'next';

import { SITE_NAME, SITE_URL } from '@/lib/constants/site';

const path = '/applications-mobiles';
const base = SITE_URL.replace(/\/$/, '');
const canonical = `${base}${path}`;

/** Métadonnées pilier /applications-mobiles. */
export function applicationsMobilesPillarMetadata(): Metadata {
  const title = 'Développeur application mobile freelance — iOS & Android | Clickdev';
  const description =
    'Je conçois des apps iOS et Android sur mesure : natif, React Native ou PWA. Idée → stores, avec perf et suivi. Projets dès 4 900 € — devis gratuit.';
  const ogTitle = 'Applications mobiles — Clickdev';
  const ogDesc =
    'Apps qui tiennent la route : soumission stores, crash reporting, roadmap honnête. iOS, Android, React Native, PWA.';
  const ogImage = `${base}/assets/workflow2.png`;

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

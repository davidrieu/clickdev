import { SITE_URL } from '@/lib/constants/site';
import { MAINTENANCE_PILLAR_PATH } from '@/lib/constants/maintenance-pillar-premium';

const origin = SITE_URL.replace(/\/$/, '');

type FaqItem = { question: string; answer: string };

const serviceSchema = {
  '@type': 'Service',
  name: 'Maintenance et infogérance de sites et applications',
  provider: {
    '@type': 'Person',
    name: 'David Rieu',
    jobTitle: 'Développeur web freelance',
  },
  description:
    'Maintenance WordPress, e-commerce, TMA applicative, infogérance : mises à jour, sécurité, sauvegardes, suivi de production.',
  areaServed: 'FR',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Offres de maintenance',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Maintenance WordPress' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Maintenance e-commerce' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'TMA — tierce maintenance applicative' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Infogérance' } },
    ],
  },
};

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${origin}/` },
    { '@type': 'ListItem', position: 2, name: 'Maintenance', item: `${origin}${MAINTENANCE_PILLAR_PATH}` },
  ],
};

function faqSchema(items: FaqItem[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

export function MaintenancePillarJsonLd({ faqItems }: { faqItems: FaqItem[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [serviceSchema, breadcrumbSchema, faqSchema(faqItems)],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

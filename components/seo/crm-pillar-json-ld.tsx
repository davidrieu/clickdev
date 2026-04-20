import { SITE_URL } from '@/lib/constants/site';

const origin = SITE_URL.replace(/\/$/, '');
const pageUrl = `${origin}/crm-outils-metiers`;

type FaqItem = { question: string; answer: string };

const serviceSchema = {
  '@type': 'Service',
  name: 'CRM et outils métiers',
  provider: {
    '@type': 'Person',
    name: 'David Rieu',
    jobTitle: 'Développeur web freelance',
  },
  description:
    'Conception d’outils métiers : CRM sur mesure, intégrations entre logiciels et automatisations pour réduire la double saisie.',
  areaServed: 'FR',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Offres CRM & outils',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CRM sur mesure' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Intégration CRM' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Automatisation métier' } },
    ],
  },
};

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${origin}/` },
    { '@type': 'ListItem', position: 2, name: 'CRM & outils métiers', item: pageUrl },
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

export function CrmPillarJsonLd({ faqItems }: { faqItems: FaqItem[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [serviceSchema, breadcrumbSchema, faqSchema(faqItems)],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

import { SITE_URL } from '@/lib/constants/site';

const origin = SITE_URL.replace(/\/$/, '');
const pageUrl = `${origin}/applications-mobiles`;

type FaqItem = { question: string; answer: string };

const serviceSchema = {
  '@type': 'Service',
  name: 'Développement d’applications mobiles',
  provider: {
    '@type': 'Person',
    name: 'David Rieu',
    jobTitle: 'Développeur web freelance',
  },
  description:
    'Développement d’applications iOS, Android, React Native et PWA : stores, performance, intégrations API et maintenance.',
  areaServed: 'FR',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Offres applications mobiles',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Application iOS native' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Application Android native' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Application React Native' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Progressive Web App (PWA)' } },
    ],
  },
};

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${origin}/` },
    { '@type': 'ListItem', position: 2, name: 'Applications mobiles', item: pageUrl },
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

export function ApplicationsMobilesPillarJsonLd({ faqItems }: { faqItems: FaqItem[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [serviceSchema, breadcrumbSchema, faqSchema(faqItems)],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

import { SITE_URL } from '@/lib/constants/site';

const origin = SITE_URL.replace(/\/$/, '');
const pageUrl = `${origin}/seo`;

type FaqItem = { question: string; answer: string };

const serviceSchema = {
  '@type': 'Service',
  name: 'Référencement naturel (SEO)',
  provider: {
    '@type': 'Person',
    name: 'David Rieu',
    jobTitle: 'Développeur web freelance',
  },
  description:
    'SEO pour PME et indépendants : audit, technique, local, e-commerce, contenu et visibilité dans les moteurs — accompagnement clair.',
  areaServed: 'FR',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Offres SEO',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Audit SEO' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO technique' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO local' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO e-commerce' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Migration SEO' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Rédaction SEO' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Netlinking' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'GEO' } },
    ],
  },
};

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${origin}/` },
    { '@type': 'ListItem', position: 2, name: 'SEO', item: pageUrl },
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

export function SeoPillarJsonLd({ faqItems }: { faqItems: FaqItem[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [serviceSchema, breadcrumbSchema, faqSchema(faqItems)],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

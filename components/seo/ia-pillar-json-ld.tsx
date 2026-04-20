import { SITE_URL } from '@/lib/constants/site';

const origin = SITE_URL.replace(/\/$/, '');
const pageUrl = `${origin}/ia`;

type FaqItem = { question: string; answer: string };

const serviceSchema = {
  '@type': 'Service',
  name: 'Intelligence artificielle en produit',
  provider: {
    '@type': 'Person',
    name: 'David Rieu',
    jobTitle: 'Développeur web freelance',
  },
  description:
    'Intégration IA : chatbots, agents, RAG, automatisation et IA générative e-commerce — avec garde-fous et maîtrise des coûts.',
  areaServed: 'FR',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Offres IA',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Intégration IA' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Chatbot IA' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Agents IA' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Automatisation IA' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'RAG & base de connaissances' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'IA générative e-commerce' } },
    ],
  },
};

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${origin}/` },
    { '@type': 'ListItem', position: 2, name: 'IA', item: pageUrl },
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

export function IaPillarJsonLd({ faqItems }: { faqItems: FaqItem[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [serviceSchema, breadcrumbSchema, faqSchema(faqItems)],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

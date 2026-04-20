import { SITE_URL } from '@/lib/constants/site';

const origin = SITE_URL.replace(/\/$/, '');

type FaqItem = { question: string; answer: string };

const serviceSchema = {
  '@type': 'Service',
  name: 'Développement de sites internet',
  provider: {
    '@type': 'Person',
    name: 'David Rieu',
    jobTitle: 'Développeur web freelance',
  },
  description:
    'Création de sites web sur mesure : vitrines, e-commerce, marketplaces, plateformes de mise en relation.',
  areaServed: 'FR',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Types de sites proposés',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Site vitrine' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Site e-commerce' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Marketplace' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Site de mise en relation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Site sur mesure' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Site WordPress' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Intranet extranet' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Landing page' } },
    ],
  },
};

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${origin}/` },
    { '@type': 'ListItem', position: 2, name: 'Sites internet', item: `${origin}/sites-internet` },
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

/** @graph : Service + fil d’Ariane + FAQ (une seule balise script). */
export function SitesInternetPillarJsonLd({ faqItems }: { faqItems: FaqItem[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [serviceSchema, breadcrumbSchema, faqSchema(faqItems)],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

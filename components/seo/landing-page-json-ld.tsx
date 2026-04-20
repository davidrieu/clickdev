import { LANDING_PAGE_PATH } from '@/lib/constants/landing-page';
import { SITE_URL } from '@/lib/constants/site';

const origin = SITE_URL.replace(/\/$/, '');
const pageUrl = `${origin}${LANDING_PAGE_PATH}`;

type FaqItem = { question: string; answer: string };

const serviceSchema = {
  '@type': 'Service',
  '@id': `${pageUrl}#service`,
  name: 'Création de landing page à haute conversion',
  url: pageUrl,
  provider: {
    '@type': 'Person',
    name: 'David Rieu',
    jobTitle: 'Développeur web freelance',
  },
  description:
    'Création de landing pages performantes pour campagnes publicitaires, lancements et événements : conversion, vitesse, tracking.',
  areaServed: 'FR',
};

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${origin}/` },
    { '@type': 'ListItem', position: 2, name: 'Sites internet', item: `${origin}/sites-internet` },
    { '@type': 'ListItem', position: 3, name: 'Landing page', item: pageUrl },
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

export function LandingPageSiloJsonLd({ faqItems }: { faqItems: FaqItem[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [serviceSchema, breadcrumbSchema, faqSchema(faqItems)],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

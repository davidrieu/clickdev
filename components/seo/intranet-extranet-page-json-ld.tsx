import { INTRANET_EXTRANET_PATH } from '@/lib/constants/intranet-extranet-page';
import { SITE_URL } from '@/lib/constants/site';

const origin = SITE_URL.replace(/\/$/, '');
const pageUrl = `${origin}${INTRANET_EXTRANET_PATH}`;

type FaqItem = { question: string; answer: string };

const serviceSchema = {
  '@type': 'Service',
  '@id': `${pageUrl}#service`,
  name: "Création d'intranet et d'extranet sur mesure",
  url: pageUrl,
  provider: {
    '@type': 'Person',
    name: 'David Rieu',
    jobTitle: 'Développeur web freelance',
  },
  description:
    "Développement d'intranet et d'extranet sur mesure : espaces collaborateurs, portails partenaires, bases documentaires.",
  areaServed: 'FR',
};

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${origin}/` },
    { '@type': 'ListItem', position: 2, name: 'Sites internet', item: `${origin}/sites-internet` },
    { '@type': 'ListItem', position: 3, name: 'Intranet / extranet', item: pageUrl },
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

export function IntranetExtranetPageJsonLd({ faqItems }: { faqItems: FaqItem[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [serviceSchema, breadcrumbSchema, faqSchema(faqItems)],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

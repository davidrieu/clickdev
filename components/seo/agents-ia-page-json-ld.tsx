import { AGENTS_IA_PATH } from '@/lib/constants/agents-ia-page';
import { SITE_URL } from '@/lib/constants/site';

const origin = SITE_URL.replace(/\/$/, '');
const pageUrl = `${origin}${AGENTS_IA_PATH}`;

type FaqItem = { question: string; answer: string };

const serviceSchema = {
  '@type': 'Service',
  '@id': `${pageUrl}#service`,
  name: 'Conception d’agents IA',
  url: pageUrl,
  provider: {
    '@type': 'Person',
    name: 'David Rieu',
    jobTitle: 'Développeur web freelance',
  },
  description:
    'Agents IA : planification d’actions, outils typés, garde-fous, budgets et supervision humaine.',
  areaServed: 'FR',
};

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${origin}/` },
    { '@type': 'ListItem', position: 2, name: 'IA', item: `${origin}/ia` },
    { '@type': 'ListItem', position: 3, name: 'Agents IA', item: pageUrl },
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

export function AgentsIaPageJsonLd({ faqItems }: { faqItems: FaqItem[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [serviceSchema, breadcrumbSchema, faqSchema(faqItems)],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

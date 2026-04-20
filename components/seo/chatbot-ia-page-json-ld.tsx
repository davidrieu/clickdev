import { CHATBOT_IA_PATH } from '@/lib/constants/chatbot-ia-page';
import { SITE_URL } from '@/lib/constants/site';

const origin = SITE_URL.replace(/\/$/, '');
const pageUrl = `${origin}${CHATBOT_IA_PATH}`;

type FaqItem = { question: string; answer: string };

const serviceSchema = {
  '@type': 'Service',
  '@id': `${pageUrl}#service`,
  name: 'Conception de chatbot IA',
  url: pageUrl,
  provider: {
    '@type': 'Person',
    name: 'David Rieu',
    jobTitle: 'Développeur web freelance',
  },
  description:
    'Chatbot IA : scénarios, sources de vérité, handoff humain, intégration CRM et helpdesk.',
  areaServed: 'FR',
};

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${origin}/` },
    { '@type': 'ListItem', position: 2, name: 'IA', item: `${origin}/ia` },
    { '@type': 'ListItem', position: 3, name: 'Chatbot IA', item: pageUrl },
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

export function ChatbotIaPageJsonLd({ faqItems }: { faqItems: FaqItem[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [serviceSchema, breadcrumbSchema, faqSchema(faqItems)],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

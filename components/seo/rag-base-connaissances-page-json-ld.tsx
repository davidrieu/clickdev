import { RAG_BASE_CONNAISSANCES_PATH } from '@/lib/constants/rag-base-connaissances-page';
import { SITE_URL } from '@/lib/constants/site';

const origin = SITE_URL.replace(/\/$/, '');
const pageUrl = `${origin}${RAG_BASE_CONNAISSANCES_PATH}`;

type FaqItem = { question: string; answer: string };

const serviceSchema = {
  '@type': 'Service',
  '@id': `${pageUrl}#service`,
  name: 'RAG et base de connaissances',
  url: pageUrl,
  provider: {
    '@type': 'Person',
    name: 'David Rieu',
    jobTitle: 'Développeur web freelance',
  },
  description:
    'RAG sur documents d’entreprise : chunking, embeddings, retrieval, reranking et pipelines d’ingestion.',
  areaServed: 'FR',
};

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${origin}/` },
    { '@type': 'ListItem', position: 2, name: 'IA', item: `${origin}/ia` },
    { '@type': 'ListItem', position: 3, name: 'RAG & base de connaissances', item: pageUrl },
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

export function RagBaseConnaissancesPageJsonLd({ faqItems }: { faqItems: FaqItem[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [serviceSchema, breadcrumbSchema, faqSchema(faqItems)],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

import { SITE_URL } from '@/lib/constants/site';

type FaqItem = { question: string; answer: string };

type Props = {
  pagePath: string;
  serviceName: string;
  serviceDescription: string;
  siloPath: string;
  siloBreadcrumbName: string;
  pageBreadcrumbName: string;
  faqItems: FaqItem[];
};

export function SiloServiceChildJsonLd({
  pagePath,
  serviceName,
  serviceDescription,
  siloPath,
  siloBreadcrumbName,
  pageBreadcrumbName,
  faqItems,
}: Props) {
  const origin = SITE_URL.replace(/\/$/, '');
  const pageUrl = `${origin}${pagePath}`;
  const siloUrl = `${origin}${siloPath}`;

  const serviceSchema = {
    '@type': 'Service',
    '@id': `${pageUrl}#service`,
    name: serviceName,
    url: pageUrl,
    provider: {
      '@type': 'Person',
      name: 'David Rieu',
      jobTitle: 'Développeur web freelance',
    },
    description: serviceDescription,
    areaServed: 'FR',
  };

  const breadcrumbSchema = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${origin}/` },
      { '@type': 'ListItem', position: 2, name: siloBreadcrumbName, item: siloUrl },
      { '@type': 'ListItem', position: 3, name: pageBreadcrumbName, item: pageUrl },
    ],
  };

  const faqSchema = {
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  const data = {
    '@context': 'https://schema.org',
    '@graph': [serviceSchema, breadcrumbSchema, faqSchema],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

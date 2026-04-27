import { AUTHOR_PORTRAIT_PATH } from '@/lib/constants/author-portrait';
import { HOME_FAQ_ITEMS } from '@/lib/constants/home-content';
import { SITE_EMAIL, SITE_NAME } from '@/lib/constants/site';
import { organizationJsonLdId, personJsonLdId, schemaOrigin } from '@/lib/seo/schema-ids';

/** JSON-LD accueil : ProfessionalService + Person + FAQPage (un seul script, @graph). */
export function JsonLdHome() {
  const origin = schemaOrigin();
  const base = origin.replace(/\/$/, '');
  const orgId = organizationJsonLdId();
  const personId = personJsonLdId();
  const personImage = `${base}${AUTHOR_PORTRAIT_PATH}`;

  const professionalService = {
    '@type': 'ProfessionalService',
    '@id': `${origin}/#professional-service`,
    name: SITE_NAME,
    description:
      'Développeur freelance spécialisé en sites web, applications mobiles, SEO, GEO et intégrations IA.',
    url: origin,
    telephone: '+33756857649',
    email: SITE_EMAIL,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'FR',
    },
    founder: {
      '@id': personId,
    },
    priceRange: '€€-€€€€',
    areaServed: 'FR',
    sameAs: [
      'https://www.linkedin.com/in/david-rieu',
      'https://github.com/davidrieu',
      'https://www.malt.fr/profile/davidrieu',
    ],
  };

  const person = {
    '@type': 'Person',
    '@id': personId,
    name: 'David Rieu',
    image: personImage,
    jobTitle: 'Développeur web freelance',
    worksFor: {
      '@type': 'Organization',
      '@id': orgId,
      name: SITE_NAME,
    },
    url: `${origin}/a-propos`,
    knowsAbout: [
      'Next.js',
      'React',
      'WordPress',
      'Shopify',
      'développement web',
      'SEO',
      'GEO',
      'intégration IA',
    ],
  };

  const faqPage = {
    '@type': 'FAQPage',
    mainEntity: HOME_FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [professionalService, person, faqPage],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />;
}

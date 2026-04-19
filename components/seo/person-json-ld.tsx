import { SOCIAL_LINKS } from '@/lib/constants/site';
import { organizationJsonLdId, personJsonLdId, schemaOrigin } from '@/lib/seo/schema-ids';

export function PersonJsonLd() {
  const origin = schemaOrigin();
  const sameAs = [SOCIAL_LINKS.linkedin, SOCIAL_LINKS.github, SOCIAL_LINKS.malt].filter(Boolean);

  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': personJsonLdId(),
    name: 'David Rieu',
    url: `${origin}/a-propos`,
    jobTitle: 'Développeur freelance',
    description:
      'Développeur freelance pour sites web, applications mobiles, intégrations IA, SEO technique et outils métiers — Clickdev.',
    worksFor: {
      '@id': organizationJsonLdId(),
    },
    sameAs,
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

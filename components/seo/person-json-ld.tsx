import { SITE_NAME, SITE_URL, SOCIAL_LINKS } from '@/lib/constants/site';

export function PersonJsonLd() {
  const origin = SITE_URL.replace(/\/$/, '');
  const sameAs = [SOCIAL_LINKS.linkedin, SOCIAL_LINKS.github, SOCIAL_LINKS.malt].filter(Boolean);

  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'David Rieu',
    url: `${origin}/a-propos`,
    jobTitle: 'Développeur freelance',
    description:
      'Développeur freelance pour sites web, applications mobiles, intégrations IA, SEO technique et outils métiers — Clickdev.',
    worksFor: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: origin,
    },
    sameAs,
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

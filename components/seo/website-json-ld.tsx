import { SITE_NAME, SITE_TAGLINE } from '@/lib/constants/site';
import { organizationJsonLdId, schemaOrigin, websiteJsonLdId } from '@/lib/seo/schema-ids';

export function WebSiteJsonLd() {
  const base = schemaOrigin();
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': websiteJsonLdId(),
    name: SITE_NAME,
    url: base,
    description: SITE_TAGLINE,
    inLanguage: 'fr-FR',
    publisher: {
      '@id': organizationJsonLdId(),
    },
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

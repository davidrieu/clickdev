import {
  SITE_ADDRESS_LOCALITY,
  SITE_ADDRESS_POSTAL,
  SITE_ADDRESS_STREET,
  SITE_EMAIL,
  SITE_NAME,
  SOCIAL_LINKS,
} from '@/lib/constants/site';
import { organizationJsonLdId, schemaOrigin } from '@/lib/seo/schema-ids';

export function OrganizationJsonLd() {
  const origin = schemaOrigin();
  const sameAs = [SOCIAL_LINKS.linkedin, SOCIAL_LINKS.github, SOCIAL_LINKS.malt].filter(Boolean);

  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': organizationJsonLdId(),
    name: SITE_NAME,
    url: origin,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_ADDRESS_STREET,
      addressLocality: SITE_ADDRESS_LOCALITY,
      postalCode: SITE_ADDRESS_POSTAL,
      addressCountry: 'FR',
    },
    logo: {
      '@type': 'ImageObject',
      url: `${origin}/assets/logo-clickdev.png`,
    },
    sameAs,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: SITE_EMAIL,
      availableLanguage: ['French'],
    },
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

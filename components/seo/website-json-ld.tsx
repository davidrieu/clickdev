import { SITE_NAME, SITE_TAGLINE, SITE_URL } from '@/lib/constants/site';

export function WebSiteJsonLd() {
  const base = SITE_URL.replace(/\/$/, '');
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: base,
    description: SITE_TAGLINE,
    inLanguage: 'fr-FR',
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

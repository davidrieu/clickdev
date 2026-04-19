import { organizationJsonLdId, schemaOrigin } from '@/lib/seo/schema-ids';

type Props = {
  headline: string;
  description: string;
  slug: string;
  image: string | null;
};

export function CaseStudyArticleJsonLd({ headline, description, slug, image }: Props) {
  const origin = schemaOrigin();
  const pageUrl = `${origin}/realisations/${slug}`;

  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    url: pageUrl,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageUrl,
    },
    publisher: {
      '@id': organizationJsonLdId(),
    },
    author: {
      '@type': 'Person',
      name: 'David Rieu',
    },
    inLanguage: 'fr-FR',
  };

  if (image) {
    data.image = [image];
  }

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

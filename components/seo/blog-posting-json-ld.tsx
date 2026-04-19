import { organizationJsonLdId, personJsonLdId, schemaOrigin } from '@/lib/seo/schema-ids';

type Props = {
  headline: string;
  description: string;
  slug: string;
  datePublished: string | null;
  image: string | null;
  authorName: string | null;
};

export function BlogPostingJsonLd({
  headline,
  description,
  slug,
  datePublished,
  image,
  authorName,
}: Props) {
  const origin = schemaOrigin();
  const pageUrl = `${origin}/blog/${slug}`;
  const resolvedAuthor = authorName?.trim() ?? '';
  const authorNode =
    resolvedAuthor.length === 0 || resolvedAuthor === 'David Rieu'
      ? { '@id': personJsonLdId() }
      : { '@type': 'Person', name: resolvedAuthor };

  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
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
    author: authorNode,
    inLanguage: 'fr-FR',
  };

  if (datePublished) {
    data.datePublished = datePublished;
  }
  if (image) {
    data.image = [image];
  }

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

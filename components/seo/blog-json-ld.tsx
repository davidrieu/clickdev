import { SITE_NAME } from '@/lib/constants/site';
import { organizationJsonLdId, schemaOrigin } from '@/lib/seo/schema-ids';

export type BlogJsonLdPost = {
  title: string;
  slug: string;
  excerpt: string | null;
  publishedAt: string | null;
  coverImage: string | null;
};

type Props = {
  description: string;
  posts: BlogJsonLdPost[];
};

function absoluteAssetUrl(origin: string, url: string | null): string | undefined {
  if (!url) return undefined;
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  const path = url.startsWith('/') ? url : `/${url}`;
  return `${origin}${path}`;
}

/** Schéma Blog (index) + références BlogPosting lorsque des billets sont publiés. */
export function BlogJsonLd({ description, posts }: Props) {
  const origin = schemaOrigin();
  const blogUrl = `${origin}/blog`;

  const blog: Record<string, unknown> = {
    '@type': 'Blog',
    '@id': `${blogUrl}#blog`,
    name: `Blog — ${SITE_NAME}`,
    url: blogUrl,
    description,
    inLanguage: 'fr-FR',
    publisher: { '@id': organizationJsonLdId() },
  };

  if (posts.length > 0) {
    blog.blogPost = posts.map((p) => {
      const postUrl = `${origin}/blog/${p.slug}`;
      const node: Record<string, unknown> = {
        '@type': 'BlogPosting',
        headline: p.title,
        url: postUrl,
        mainEntityOfPage: { '@type': 'WebPage', '@id': postUrl },
        publisher: { '@id': organizationJsonLdId() },
        inLanguage: 'fr-FR',
      };
      if (p.publishedAt) node.datePublished = p.publishedAt;
      const excerpt = p.excerpt?.trim();
      if (excerpt) node.description = excerpt;
      const img = absoluteAssetUrl(origin, p.coverImage);
      if (img) node.image = [img];
      return node;
    });
  }

  const data = {
    '@context': 'https://schema.org',
    '@graph': [blog],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

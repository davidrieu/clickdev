import { BlogJsonLd } from '@/components/seo/blog-json-ld';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-json-ld';
import { BlogListClient } from '@/components/blog/blog-list-client';
import { getAllPostTeasers } from '@/lib/sanity/fetch';
import { isSanityConfigured } from '@/lib/sanity/env';
import { listingPageMetadata } from '@/lib/seo/page-metadata';
import type { Metadata } from 'next';

/** Liste blog : re-fetch Sanity (littéral requis par Next). */
export const revalidate = 60;

export const metadata: Metadata = listingPageMetadata({
  title: 'Blog',
  description: 'Articles sur Next.js, e-commerce, SEO, IA et retours de terrain — Clickdev.',
  path: '/blog',
});

const jsonLdItems = [
  { name: 'Accueil', path: '/' },
  { name: 'Blog', path: '/blog' },
];

export default async function BlogIndexPage() {
  const posts = await getAllPostTeasers();
  const configured = isSanityConfigured();

  const blogLdPosts =
    configured && posts.length > 0
      ? posts.map((p) => ({
          title: p.title,
          slug: p.slug,
          excerpt: p.excerpt,
          publishedAt: p.publishedAt,
          coverImage: p.coverImage,
        }))
      : [];

  return (
    <>
      <BreadcrumbJsonLd items={jsonLdItems} />
      <BlogJsonLd
        description="Articles sur Next.js, e-commerce, SEO, IA et retours de terrain — Clickdev."
        posts={blogLdPosts}
      />
      <BlogListClient posts={posts} configured={configured} />
    </>
  );
}

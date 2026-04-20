import { BlogPostClient } from '@/components/blog/blog-post-client';
import { RealisationDetailShell } from '@/components/realisations/realisation-detail-shell';
import { BlogPostingJsonLd } from '@/components/seo/blog-posting-json-ld';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-json-ld';
import { getPostBySlug, getPostSlugs } from '@/lib/sanity/fetch';
import { isSanityConfigured } from '@/lib/sanity/env';
import { pageMetadata } from '@/lib/seo/page-metadata';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Props = { params: Promise<{ slug: string }> };

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!isSanityConfigured()) {
    return {
      title: slug.replace(/-/g, ' '),
      description: `Article « ${slug} » — blog Clickdev.`,
    };
  }

  const post = await getPostBySlug(slug);
  if (!post) {
    return { title: 'Article introuvable' };
  }

  const title = post.metaTitle?.trim() || post.title;
  const description =
    post.metaDescription?.trim() ||
    post.excerpt?.trim() ||
    `Article « ${post.title} » — développement web & produits digitaux, par Clickdev.`;

  return pageMetadata({
    title,
    description,
    path: `/blog/${slug}`,
    ogImage: post.ogImage ?? post.coverImage,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  if (!isSanityConfigured()) {
    return (
      <RealisationDetailShell
        breadcrumb={[
          { href: '/', label: 'Accueil' },
          { href: '/blog', label: 'Blog' },
          { href: `/blog/${slug}`, label: slug.replace(/-/g, ' '), current: true },
        ]}
      >
        <div className="mx-auto max-w-xl rounded-2xl border border-dashed border-white/20 bg-white/[0.03] p-8 text-center text-sm text-white/65 md:p-10">
          <p>
            Branchez Sanity (<code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-xs">NEXT_PUBLIC_SANITY_PROJECT_ID</code>)
            pour afficher le contenu CMS sur cette URL.
          </p>
        </div>
      </RealisationDetailShell>
    );
  }

  const post = await getPostBySlug(slug);
  if (!post) {
    notFound();
  }

  const jsonLdDescription =
    post.metaDescription?.trim() ||
    post.excerpt?.trim() ||
    `Article « ${post.title} » — développement web & produits digitaux, par Clickdev.`;
  const jsonLdImage = post.ogImage ?? post.coverImage;
  const jsonLdHeadline = post.metaTitle?.trim() || post.title;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Accueil', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: post.title, path: `/blog/${slug}` },
        ]}
      />
      <BlogPostingJsonLd
        headline={jsonLdHeadline}
        description={jsonLdDescription}
        slug={slug}
        datePublished={post.publishedAt}
        image={jsonLdImage}
        authorName={post.author?.name ?? null}
      />
      <RealisationDetailShell
        breadcrumb={[
          { href: '/', label: 'Accueil' },
          { href: '/blog', label: 'Blog' },
          { href: `/blog/${slug}`, label: post.title, current: true },
        ]}
      >
        <BlogPostClient post={post} />
      </RealisationDetailShell>
    </>
  );
}

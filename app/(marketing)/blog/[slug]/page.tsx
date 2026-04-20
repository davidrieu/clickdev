import PageBreadcrumb from '@/components/marketing/page-breadcrumb';
import MarketingShell from '@/components/marketing/marketing-shell';
import SanityPortableText from '@/components/portable/sanity-portable-text';
import { BlogPostingJsonLd } from '@/components/seo/blog-posting-json-ld';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-json-ld';
import { formatDateFr } from '@/lib/format/date';
import { getPostBySlug, getPostSlugs } from '@/lib/sanity/fetch';
import { isSanityConfigured } from '@/lib/sanity/env';
import { pageMetadata } from '@/lib/seo/page-metadata';
import type { Metadata } from 'next';
import Image from 'next/image';
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

  const description =
    post.excerpt?.trim() ||
    `Article « ${post.title} » — développement web & produits digitaux, par Clickdev.`;

  return pageMetadata({
    title: post.title,
    description,
    path: `/blog/${slug}`,
    ogImage: post.coverImage,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  if (!isSanityConfigured()) {
    return (
      <MarketingShell
        eyebrow="Blog"
        title={slug.replace(/-/g, ' ')}
        description="Branchez Sanity (NEXT_PUBLIC_SANITY_PROJECT_ID) pour afficher le contenu CMS sur cette URL."
        breadcrumb={[
          { label: 'Accueil', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: slug.replace(/-/g, ' '), href: `/blog/${slug}` },
        ]}
      />
    );
  }

  const post = await getPostBySlug(slug);
  if (!post) {
    notFound();
  }

  const dateLabel = formatDateFr(post.publishedAt);
  const crumbs = [
    { label: 'Accueil', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: post.title, href: `/blog/${slug}` },
  ];

  const description =
    post.excerpt?.trim() ||
    `Article « ${post.title} » — développement web & produits digitaux, par Clickdev.`;

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
        headline={post.title}
        description={description}
        slug={slug}
        datePublished={post.publishedAt}
        image={post.coverImage}
        authorName={post.author?.name ?? null}
      />
      <article className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-20">
        <PageBreadcrumb items={crumbs} />
        <p className="font-mono text-[11px] tracking-widest text-white/45 uppercase">Blog</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-balance text-white md:text-4xl">
          {post.title}
        </h1>
        <div className="mt-4 flex flex-wrap gap-3 text-sm text-white/55">
          {dateLabel ? (
            <time dateTime={post.publishedAt ?? undefined}>{dateLabel}</time>
          ) : null}
          {post.author?.name ? (
            <span>{dateLabel ? '· ' : null}Par {post.author.name}</span>
          ) : null}
        </div>
        {post.coverImage ? (
          <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-xl border border-white/10">
            <Image
              src={post.coverImage}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 720px"
              priority
            />
          </div>
        ) : null}
        <div className="prose-portable mt-12">
          <SanityPortableText value={post.body} />
        </div>
      </article>
    </>
  );
}

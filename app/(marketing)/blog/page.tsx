import PageBreadcrumb from '@/components/marketing/page-breadcrumb';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-json-ld';
import { getAllPostTeasers } from '@/lib/sanity/fetch';
import { isSanityConfigured } from '@/lib/sanity/env';
import { listingPageMetadata } from '@/lib/seo/page-metadata';
import { formatDateFr } from '@/lib/format/date';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

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

  return (
    <>
      <BreadcrumbJsonLd items={jsonLdItems} />
      <article className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-20">
        <PageBreadcrumb items={jsonLdItems.map((j) => ({ label: j.name, href: j.path }))} />
        <p className="font-mono text-[11px] tracking-widest text-white/45 uppercase">Ressources</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">Blog</h1>
        <p className="mt-6 text-sm leading-relaxed text-white/75 md:text-base">
          Notes techniques, méthodo et retours de projet — alimenté par Sanity lorsque le CMS est
          configuré.
        </p>

        {!configured ? (
          <div className="mt-12 rounded-lg border border-white/10 bg-white/[0.03] p-6 text-sm text-white/65">
            <p>
              Pour afficher les articles, renseignez{' '}
              <code className="rounded bg-white/10 px-1 py-0.5 font-mono text-xs">
                NEXT_PUBLIC_SANITY_PROJECT_ID
              </code>{' '}
              dans votre fichier d’environnement, puis publiez des billets depuis le studio Sanity.
            </p>
          </div>
        ) : posts.length === 0 ? (
          <div className="mt-12 rounded-lg border border-white/10 bg-white/[0.03] p-6 text-sm text-white/65">
            <p>Aucun article pour le moment. Créez un document « Article » dans Sanity pour l’alimenter.</p>
          </div>
        ) : (
          <ul className="mt-12 space-y-10">
            {posts.map((post) => {
              const dateLabel = formatDateFr(post.publishedAt);
              return (
                <li
                  key={post._id}
                  className="border-b border-white/10 pb-10 last:border-0 last:pb-0"
                >
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                      {post.coverImage ? (
                        <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden rounded-lg border border-white/10 sm:w-44 md:w-52">
                          <Image
                            src={post.coverImage}
                            alt=""
                            fill
                            className="object-cover transition group-hover:opacity-90"
                            sizes="(max-width: 640px) 100vw, 208px"
                          />
                        </div>
                      ) : null}
                      <div className="min-w-0 flex-1">
                        {dateLabel ? (
                          <time
                            dateTime={post.publishedAt ?? undefined}
                            className="font-mono text-[11px] tracking-widest text-white/45 uppercase"
                          >
                            {dateLabel}
                          </time>
                        ) : null}
                        <h2 className="mt-2 text-xl font-semibold text-white group-hover:text-[#F26A06] md:text-2xl">
                          {post.title}
                        </h2>
                        {post.excerpt ? (
                          <p className="mt-3 text-sm leading-relaxed text-white/70">{post.excerpt}</p>
                        ) : null}
                        <span className="mt-4 inline-block text-sm font-medium text-[#F26A06] underline-offset-4 group-hover:underline">
                          Lire l’article
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </article>
    </>
  );
}

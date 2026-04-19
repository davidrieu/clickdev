import PageBreadcrumb from '@/components/marketing/page-breadcrumb';
import { CollectionPageItemListJsonLd } from '@/components/seo/collection-page-item-list-json-ld';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-json-ld';
import { HOME_STACK_ITEMS } from '@/lib/constants/home-content';
import { listingPageMetadata } from '@/lib/seo/page-metadata';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = listingPageMetadata({
  title: 'Expertises',
  description: 'Technologies et stacks — pages courtes SEO par techno (Next.js, Shopify, IA, etc.).',
  path: '/expertises',
});

const jsonLdItems = [
  { name: 'Accueil', path: '/' },
  { name: 'Expertises', path: '/expertises' },
];

export default function ExpertisesIndexPage() {
  const listItems = HOME_STACK_ITEMS.map((item) => ({
    path: `/expertises/${item.slug}`,
    name: item.name,
  }));

  return (
    <>
      <BreadcrumbJsonLd items={jsonLdItems} />
      <CollectionPageItemListJsonLd
        pagePath="/expertises"
        pageTitle="Expertises — Clickdev"
        items={listItems}
      />
      <div className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-20">
        <PageBreadcrumb items={jsonLdItems.map((j) => ({ label: j.name, href: j.path }))} />
        <p className="font-mono text-[11px] tracking-widest text-white/45 uppercase">SEO</p>
        <h1 className="mt-3 text-3xl font-semibold md:text-4xl">Expertises</h1>
        <p className="mt-6 text-sm leading-relaxed text-white/75 md:text-base">
          Pages courtes ciblées par techno (freelance Next.js, intégration Claude, etc.) avec liens
          vers les offres correspondantes.
        </p>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {HOME_STACK_ITEMS.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/expertises/${item.slug}`}
                className="block rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium transition hover:bg-white/[0.07]"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

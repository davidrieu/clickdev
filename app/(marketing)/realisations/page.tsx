import PageBreadcrumb from '@/components/marketing/page-breadcrumb';
import { CollectionPageItemListJsonLd } from '@/components/seo/collection-page-item-list-json-ld';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-json-ld';
import { CASE_STUDY_CATEGORY_LABELS } from '@/lib/constants/case-study';
import { getAllCaseStudyTeasers } from '@/lib/sanity/fetch';
import { isSanityConfigured } from '@/lib/sanity/env';
import { listingPageMetadata } from '@/lib/seo/page-metadata';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = listingPageMetadata({
  title: 'Réalisations',
  description: 'Portfolio et études de cas — développement web, mobile et outils métiers.',
  path: '/realisations',
});

const jsonLdItems = [
  { name: 'Accueil', path: '/' },
  { name: 'Réalisations', path: '/realisations' },
];

export default async function RealisationsPage() {
  const cases = await getAllCaseStudyTeasers();
  const configured = isSanityConfigured();
  const listItems =
    configured && cases.length > 0
      ? cases.map((c) => ({ path: `/realisations/${c.slug}`, name: c.title }))
      : [];

  return (
    <>
      <BreadcrumbJsonLd items={jsonLdItems} />
      <CollectionPageItemListJsonLd
        pagePath="/realisations"
        pageTitle="Réalisations — Clickdev"
        items={listItems}
      />
      <article className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-20">
        <PageBreadcrumb items={jsonLdItems.map((j) => ({ label: j.name, href: j.path }))} />
        <p className="font-mono text-[11px] tracking-widest text-white/45 uppercase">Portfolio</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Réalisations
        </h1>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base">
          Études de cas détaillées : contexte, stack, résultats — synchronisées avec Sanity.
        </p>

        {!configured ? (
          <div className="mt-12 rounded-lg border border-white/10 bg-white/[0.03] p-6 text-sm text-white/65">
            <p>
              Ajoutez{' '}
              <code className="rounded bg-white/10 px-1 py-0.5 font-mono text-xs">
                NEXT_PUBLIC_SANITY_PROJECT_ID
              </code>{' '}
              pour charger les projets depuis le CMS.
            </p>
          </div>
        ) : cases.length === 0 ? (
          <div className="mt-12 rounded-lg border border-white/10 bg-white/[0.03] p-6 text-sm text-white/65">
            <p>
              Aucune étude de cas publiée. Créez des documents « Étude de cas » dans Sanity pour les
              afficher ici.
            </p>
          </div>
        ) : (
          <ul className="mt-14 grid gap-8 sm:grid-cols-2">
            {cases.map((c) => {
              const cat = c.category ? CASE_STUDY_CATEGORY_LABELS[c.category] ?? c.category : null;
              return (
                <li key={c._id}>
                  <Link href={`/realisations/${c.slug}`} className="group block h-full">
                    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] transition hover:border-white/20 hover:bg-white/[0.04]">
                      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/10">
                        {c.thumbnail ? (
                          <Image
                            src={c.thumbnail}
                            alt=""
                            fill
                            className="object-cover transition group-hover:scale-[1.02]"
                            sizes="(max-width: 640px) 100vw, 50vw"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center bg-white/[0.04] text-sm text-white/40">
                            Projet
                          </div>
                        )}
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        <div className="flex flex-wrap gap-2">
                          {cat ? (
                            <span className="rounded-full border border-white/15 px-2 py-0.5 text-[11px] text-white/70">
                              {cat}
                            </span>
                          ) : null}
                          {c.year ? (
                            <span className="rounded-full border border-white/15 px-2 py-0.5 text-[11px] text-white/70">
                              {c.year}
                            </span>
                          ) : null}
                        </div>
                        <h2 className="mt-3 text-lg font-semibold text-white group-hover:text-[#F26A06] md:text-xl">
                          {c.title}
                        </h2>
                        {c.client ? <p className="mt-1 text-sm text-white/55">{c.client}</p> : null}
                        {c.tagline ? (
                          <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-white/70">
                            {c.tagline}
                          </p>
                        ) : null}
                        {c.featuredMetric ? (
                          <p className="mt-4 text-sm font-semibold text-[#F26A06]">{c.featuredMetric}</p>
                        ) : null}
                        <span className="mt-auto pt-6 text-sm font-medium text-white/80 underline-offset-4 group-hover:underline">
                          Voir l’étude de cas →
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

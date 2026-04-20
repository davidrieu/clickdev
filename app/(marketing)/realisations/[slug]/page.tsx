import CaseStudyDetail from '@/components/realisations/case-study-detail';
import { RealisationDetailShell } from '@/components/realisations/realisation-detail-shell';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-json-ld';
import { CaseStudyArticleJsonLd } from '@/components/seo/case-study-article-json-ld';
import { getCaseStudyBySlug, getCaseStudySlugs } from '@/lib/sanity/fetch';
import { isSanityConfigured } from '@/lib/sanity/env';
import { pageMetadata } from '@/lib/seo/page-metadata';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Props = { params: Promise<{ slug: string }> };

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getCaseStudySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!isSanityConfigured()) {
    return {
      title: slug.replace(/-/g, ' '),
      description: `Étude de cas — ${slug}. Clickdev.`,
    };
  }

  const study = await getCaseStudyBySlug(slug);
  if (!study) {
    return { title: 'Réalisation introuvable' };
  }

  const description =
    study.metaDescription?.trim() ||
    study.tagline?.trim() ||
    `Étude de cas : ${study.title} — Clickdev.`;

  const title = study.metaTitle?.trim() || study.title;

  return pageMetadata({
    title,
    description,
    path: `/realisations/${slug}`,
    ogImage: study.ogImage ?? study.heroImage ?? study.thumbnail,
    openGraphType: 'website',
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;

  if (!isSanityConfigured()) {
    return (
      <RealisationDetailShell
        breadcrumb={[
          { href: '/', label: 'Accueil' },
          { href: '/realisations', label: 'Réalisations' },
          { href: `/realisations/${slug}`, label: slug.replace(/-/g, ' '), current: true },
        ]}
      >
        <div className="rounded-2xl border border-dashed border-white/20 bg-white/[0.03] p-8 text-center text-sm text-white/65 md:p-10">
          <p>
            Renseignez <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-xs">NEXT_PUBLIC_SANITY_PROJECT_ID</code>{' '}
            sur l’environnement pour afficher cette fiche.
          </p>
        </div>
      </RealisationDetailShell>
    );
  }

  const study = await getCaseStudyBySlug(slug);
  if (!study) {
    notFound();
  }

  const articleDescription =
    study.metaDescription?.trim() ||
    study.tagline?.trim() ||
    `Étude de cas : ${study.title} — Clickdev.`;
  const articleImage = study.ogImage ?? study.heroImage ?? study.thumbnail;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Accueil', path: '/' },
          { name: 'Réalisations', path: '/realisations' },
          { name: study.title, path: `/realisations/${slug}` },
        ]}
      />
      <CaseStudyArticleJsonLd
        headline={study.metaTitle?.trim() || study.title}
        description={articleDescription}
        slug={slug}
        image={articleImage}
      />
      <RealisationDetailShell
        breadcrumb={[
          { href: '/', label: 'Accueil' },
          { href: '/realisations', label: 'Réalisations' },
          { href: `/realisations/${slug}`, label: study.title, current: true },
        ]}
      >
        <CaseStudyDetail study={study} />
      </RealisationDetailShell>
    </>
  );
}

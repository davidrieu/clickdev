import PageBreadcrumb from '@/components/marketing/page-breadcrumb';
import MarketingShell from '@/components/marketing/marketing-shell';
import CaseStudyDetail from '@/components/realisations/case-study-detail';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-json-ld';
import { CaseStudyArticleJsonLd } from '@/components/seo/case-study-article-json-ld';
import { getCaseStudyBySlug, getCaseStudySlugs } from '@/lib/sanity/fetch';
import { isSanityConfigured } from '@/lib/sanity/env';
import { pageMetadata } from '@/lib/seo/page-metadata';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Props = { params: Promise<{ slug: string }> };

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
      <MarketingShell
        eyebrow="Étude de cas"
        title={slug.replace(/-/g, ' ')}
        description="Connectez Sanity pour afficher le portfolio dynamique sur cette URL."
        breadcrumb={[
          { label: 'Accueil', href: '/' },
          { label: 'Réalisations', href: '/realisations' },
          { label: slug.replace(/-/g, ' '), href: `/realisations/${slug}` },
        ]}
      />
    );
  }

  const study = await getCaseStudyBySlug(slug);
  if (!study) {
    notFound();
  }

  const crumbs = [
    { label: 'Accueil', href: '/' },
    { label: 'Réalisations', href: '/realisations' },
    { label: study.title, href: `/realisations/${slug}` },
  ];

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
      <article className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-20">
        <PageBreadcrumb items={crumbs} />
        <p className="font-mono text-[11px] tracking-widest text-white/45 uppercase">Étude de cas</p>
        <CaseStudyDetail study={study} />
      </article>
    </>
  );
}

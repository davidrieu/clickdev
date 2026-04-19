import MarketingShell from '@/components/marketing/marketing-shell';
import MarketingArticleBody from '@/components/marketing/marketing-article-body';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-json-ld';
import { FaqPageJsonLd } from '@/components/seo/faq-page-json-ld';
import { getSiloChildArticle } from '@/lib/content/silo-child-articles';
import {
  NAV_SILOS,
  SERVICE_SILOS,
  getChildSlugsForSilo,
  isServiceSilo,
} from '@/lib/constants/sitemap';
import { listingPageMetadata } from '@/lib/seo/page-metadata';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Props = { params: Promise<{ silo: string; slug: string }> };

export function generateStaticParams() {
  return SERVICE_SILOS.flatMap((silo) =>
    getChildSlugsForSilo(silo).map((slug) => ({
      silo,
      slug,
    }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { silo, slug } = await params;
  if (!isServiceSilo(silo)) return {};
  const entry = NAV_SILOS.find((s) => s.href === `/${silo}`);
  const child = entry?.children.find((c) => c.href === `/${silo}/${slug}`);
  if (!child || !entry) return {};
  const article = getSiloChildArticle(silo, slug, child.label, entry.label);
  return listingPageMetadata({
    title: child.label,
    description: article.metaDescription,
    path: `/${silo}/${slug}`,
  });
}

export default async function SiloChildPage({ params }: Props) {
  const { silo, slug } = await params;
  if (!isServiceSilo(silo)) notFound();
  const entry = NAV_SILOS.find((s) => s.href === `/${silo}`);
  const child = entry?.children.find((c) => c.href === `/${silo}/${slug}`);
  if (!entry || !child) notFound();

  const article = getSiloChildArticle(silo, slug, child.label, entry.label);
  const relatedPages = entry.children
    .filter((c) => c.href !== child.href)
    .map((c) => ({ label: c.label, href: c.href }));

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Accueil', path: '/' },
          { name: entry.label, path: entry.href },
          { name: child.label, path: child.href },
        ]}
      />
      <FaqPageJsonLd items={article.faq} />
      <MarketingShell
        eyebrow={entry.label}
        title={child.label}
        description={article.lead}
        breadcrumb={[
          { label: 'Accueil', href: '/' },
          { label: entry.label, href: entry.href },
          { label: child.label, href: child.href },
        ]}
      >
        <MarketingArticleBody
          sections={article.sections}
          faq={article.faq}
          relatedPages={relatedPages}
        />
      </MarketingShell>
    </>
  );
}

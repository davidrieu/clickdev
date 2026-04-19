import MarketingShell from '@/components/marketing/marketing-shell';
import MarketingArticleBody from '@/components/marketing/marketing-article-body';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-json-ld';
import { FaqPageJsonLd } from '@/components/seo/faq-page-json-ld';
import { getSiloPillarArticle } from '@/lib/content/silo-pillar-articles';
import { NAV_SILOS, SERVICE_SILOS, isServiceSilo } from '@/lib/constants/sitemap';
import { listingPageMetadata } from '@/lib/seo/page-metadata';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Props = { params: Promise<{ silo: string }> };

export function generateStaticParams() {
  return SERVICE_SILOS.map((silo) => ({ silo }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { silo } = await params;
  if (!isServiceSilo(silo)) return {};
  const entry = NAV_SILOS.find((s) => s.href === `/${silo}`);
  if (!entry) return {};
  const article = getSiloPillarArticle(silo);
  return listingPageMetadata({
    title: entry.label,
    description: article.metaDescription,
    path: `/${silo}`,
  });
}

export default async function SiloPillarPage({ params }: Props) {
  const { silo } = await params;
  if (!isServiceSilo(silo)) {
    notFound();
  }
  const entry = NAV_SILOS.find((s) => s.href === `/${silo}`);
  if (!entry) notFound();

  const article = getSiloPillarArticle(silo);
  const relatedPages = entry.children.map((c) => ({ label: c.label, href: c.href }));

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Accueil', path: '/' },
          { name: entry.label, path: entry.href },
        ]}
      />
      <FaqPageJsonLd items={article.faq} />
      <MarketingShell
        eyebrow="Clickdev"
        title={entry.label}
        description={article.lead}
        breadcrumb={[
          { label: 'Accueil', href: '/' },
          { label: entry.label, href: entry.href },
        ]}
      >
        <MarketingArticleBody sections={article.sections} faq={article.faq} relatedPages={relatedPages} />
      </MarketingShell>
    </>
  );
}

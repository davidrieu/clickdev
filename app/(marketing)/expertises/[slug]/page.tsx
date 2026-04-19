import MarketingShell from '@/components/marketing/marketing-shell';
import MarketingArticleBody from '@/components/marketing/marketing-article-body';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-json-ld';
import { FaqPageJsonLd } from '@/components/seo/faq-page-json-ld';
import { getExpertiseArticle } from '@/lib/content/expertise-articles';
import { HOME_STACK_ITEMS } from '@/lib/constants/home-content';
import { EXPERTISE_SLUGS, isExpertiseSlug } from '@/lib/constants/sitemap';
import { pageMetadata } from '@/lib/seo/page-metadata';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return EXPERTISE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!isExpertiseSlug(slug)) return {};
  const item = HOME_STACK_ITEMS.find((i) => i.slug === slug);
  if (!item) return {};
  const article = getExpertiseArticle(slug);
  return pageMetadata({
    title: item.name,
    description: article.metaDescription,
    path: `/expertises/${slug}`,
    openGraphType: 'website',
  });
}

export default async function ExpertisePage({ params }: Props) {
  const { slug } = await params;
  if (!isExpertiseSlug(slug)) notFound();
  const item = HOME_STACK_ITEMS.find((i) => i.slug === slug);
  if (!item) notFound();

  const article = getExpertiseArticle(slug);
  const relatedPages = HOME_STACK_ITEMS.filter((i) => i.slug !== slug)
    .slice(0, 6)
    .map((i) => ({ label: i.name, href: `/expertises/${i.slug}` }));

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Accueil', path: '/' },
          { name: 'Expertises', path: '/expertises' },
          { name: item.name, path: `/expertises/${slug}` },
        ]}
      />
      <FaqPageJsonLd items={article.faq} />
      <MarketingShell
        eyebrow="Expertise"
        title={item.name}
        description={article.lead}
        breadcrumb={[
          { label: 'Accueil', href: '/' },
          { label: 'Expertises', href: '/expertises' },
          { label: item.name, href: `/expertises/${slug}` },
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

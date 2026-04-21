import ExpertisePremiumPage from '@/components/expertises/expertise-premium-page';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-json-ld';
import { FaqPageJsonLd } from '@/components/seo/faq-page-json-ld';
import { getExpertisePremiumPage } from '@/lib/constants/expertise-premium/registry';
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
  const doc = getExpertisePremiumPage(slug);
  return {
    ...pageMetadata({
      title: doc.metaTitle,
      description: doc.metaDescription,
      path: `/expertises/${slug}`,
      openGraphType: 'website',
    }),
    keywords: [...doc.keywords],
  };
}

export default async function ExpertisePage({ params }: Props) {
  const { slug } = await params;
  if (!isExpertiseSlug(slug)) notFound();
  const item = HOME_STACK_ITEMS.find((i) => i.slug === slug);
  if (!item) notFound();

  const doc = getExpertisePremiumPage(slug);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Accueil', path: '/' },
          { name: 'Expertises', path: '/expertises' },
          { name: item.name, path: `/expertises/${slug}` },
        ]}
      />
      <FaqPageJsonLd items={doc.faq.items} />
      <ExpertisePremiumPage slug={slug} breadcrumbLabel={item.name} />
    </>
  );
}

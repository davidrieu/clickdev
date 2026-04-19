import MarketingShell from '@/components/marketing/marketing-shell';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-json-ld';
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
  return pageMetadata({
    title: item.name,
    description: `Expertise ${item.name} — missions freelance, bénéfices et liens vers les offres Clickdev.`,
    path: `/expertises/${slug}`,
    openGraphType: 'website',
  });
}

export default async function ExpertisePage({ params }: Props) {
  const { slug } = await params;
  if (!isExpertiseSlug(slug)) notFound();
  const item = HOME_STACK_ITEMS.find((i) => i.slug === slug);
  if (!item) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Accueil', path: '/' },
          { name: 'Expertises', path: '/expertises' },
          { name: item.name, path: `/expertises/${slug}` },
        ]}
      />
      <MarketingShell
        eyebrow="Expertise"
        title={item.name}
        description={`Page expertise « ${item.name} » : projets, bénéfices, maillage services (brief §12, ~800–1200 mots).`}
        breadcrumb={[
          { label: 'Accueil', href: '/' },
          { label: 'Expertises', href: '/expertises' },
          { label: item.name, href: `/expertises/${slug}` },
        ]}
      />
    </>
  );
}

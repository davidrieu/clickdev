import MarketingShell from '@/components/marketing/marketing-shell';
import { HOME_STACK_ITEMS } from '@/lib/constants/home-content';
import { EXPERTISE_SLUGS, isExpertiseSlug } from '@/lib/constants/sitemap';
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
  return {
    title: item?.name ?? slug,
    description: `Expertise ${item?.name ?? slug} — développeur freelance Clickdev.`,
  };
}

export default async function ExpertisePage({ params }: Props) {
  const { slug } = await params;
  if (!isExpertiseSlug(slug)) notFound();
  const item = HOME_STACK_ITEMS.find((i) => i.slug === slug);
  if (!item) notFound();

  return (
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
  );
}

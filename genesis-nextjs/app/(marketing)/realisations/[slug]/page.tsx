import MarketingShell from '@/components/marketing/marketing-shell';
import type { Metadata } from 'next';

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: slug.replace(/-/g, ' '),
    description: `Étude de cas — ${slug}. Clickdev.`,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;

  return (
    <MarketingShell
      eyebrow="Étude de cas"
      title={slug.replace(/-/g, ' ')}
      description="Template détaillé (hero, metrics, défis, solution, stack, témoignage, CTA) branché sur le document Sanity caseStudy."
      breadcrumb={[
        { label: 'Accueil', href: '/' },
        { label: 'Réalisations', href: '/realisations' },
        { label: slug, href: `/realisations/${slug}` },
      ]}
    />
  );
}

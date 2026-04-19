import MarketingShell from '@/components/marketing/marketing-shell';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Réalisations',
  description: 'Portfolio et études de cas — développement web, mobile et outils métiers.',
};

export default function RealisationsPage() {
  return (
    <MarketingShell
      eyebrow="Portfolio"
      title="Réalisations"
      description="Listing filtré, cartes projet et pagination « charger plus » (brief §8). Données depuis Sanity (caseStudy)."
      breadcrumb={[
        { label: 'Accueil', href: '/' },
        { label: 'Réalisations', href: '/realisations' },
      ]}
    />
  );
}

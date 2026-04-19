import MarketingShell from '@/components/marketing/marketing-shell';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  robots: { index: false },
};

export default function ConfidentialitePage() {
  return (
    <MarketingShell
      title="Politique de confidentialité"
      description="Politique RGPD à rédiger (données collectées, bases légales, cookies / Plausible, etc.)."
      breadcrumb={[
        { label: 'Accueil', href: '/' },
        { label: 'Confidentialité', href: '/confidentialite' },
      ]}
    />
  );
}

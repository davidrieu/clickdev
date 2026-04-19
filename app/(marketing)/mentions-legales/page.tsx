import MarketingShell from '@/components/marketing/marketing-shell';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions légales',
  robots: { index: false },
};

export default function MentionsLegalesPage() {
  return (
    <MarketingShell
      title="Mentions légales"
      description="Texte juridique à fournir (éditeur, hébergeur, propriété intellectuelle, etc.)."
      breadcrumb={[
        { label: 'Accueil', href: '/' },
        { label: 'Mentions légales', href: '/mentions-legales' },
      ]}
    />
  );
}

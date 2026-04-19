import MarketingShell from '@/components/marketing/marketing-shell';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À propos',
  description: 'Parcours, méthode et références — David Rieu, Clickdev.',
};

export default function AboutPage() {
  return (
    <MarketingShell
      eyebrow="Clickdev"
      title="À propos"
      description="Page Person / E-E-A-T : parcours, clients, liens LinkedIn & GitHub, photo — contenu long selon brief §12."
      breadcrumb={[
        { label: 'Accueil', href: '/' },
        { label: 'À propos', href: '/a-propos' },
      ]}
    />
  );
}

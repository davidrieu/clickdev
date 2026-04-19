import MarketingShell from '@/components/marketing/marketing-shell';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demander un devis',
  description: 'Devis qualifié — décrivez votre projet en quelques étapes.',
};

export default function DevisPage() {
  return (
    <MarketingShell
      eyebrow="Projet"
      title="Demander un devis"
      description="Formulaire multi-étapes (type, contexte, budget, délai, contact) avec React Hook Form + Zod et envoi Resend — Phase 2 du brief."
      breadcrumb={[
        { label: 'Accueil', href: '/' },
        { label: 'Devis', href: '/devis' },
      ]}
    />
  );
}

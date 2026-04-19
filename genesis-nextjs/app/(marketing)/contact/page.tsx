import MarketingShell from '@/components/marketing/marketing-shell';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Écrire à Clickdev — David Rieu, développeur freelance.',
};

export default function ContactPage() {
  return (
    <MarketingShell
      eyebrow="Échange"
      title="Contact"
      description="Formulaire court ou lien mailto — à brancher avec vos préférences (Resend, Cal.com, etc.)."
      breadcrumb={[
        { label: 'Accueil', href: '/' },
        { label: 'Contact', href: '/contact' },
      ]}
    />
  );
}

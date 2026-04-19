import ContactContent from '@/components/marketing/contact-content';
import MarketingShell from '@/components/marketing/marketing-shell';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-json-ld';
import { listingPageMetadata } from '@/lib/seo/page-metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = listingPageMetadata({
  title: 'Contact',
  description: 'Écrire à Clickdev — David Rieu, développeur freelance. E-mail et réseaux.',
  path: '/contact',
});

const crumbs = [
  { name: 'Accueil', path: '/' },
  { name: 'Contact', path: '/contact' },
];

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={crumbs} />
      <MarketingShell
        eyebrow="Échange"
        title="Contact"
        description="Un mail suffit pour démarrer la conversation. Pour cadrer un besoin précis, le formulaire devis est souvent plus adapté."
        breadcrumb={crumbs.map((c) => ({ label: c.name, href: c.path }))}
      >
        <ContactContent />
      </MarketingShell>
    </>
  );
}

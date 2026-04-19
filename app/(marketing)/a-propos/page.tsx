import AboutContent from '@/components/marketing/about-content';
import MarketingShell from '@/components/marketing/marketing-shell';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-json-ld';
import { listingPageMetadata } from '@/lib/seo/page-metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = listingPageMetadata({
  title: 'À propos',
  description:
    'Parcours, méthode et périmètre d’intervention — David Rieu, développeur freelance Clickdev.',
  path: '/a-propos',
});

const crumbs = [
  { name: 'Accueil', path: '/' },
  { name: 'À propos', path: '/a-propos' },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={crumbs} />
      <MarketingShell
        eyebrow="Clickdev"
        title="À propos"
        description="Freelance full-stack orienté produit : performance, SEO technique et livraisons itératives."
        breadcrumb={crumbs.map((c) => ({ label: c.name, href: c.path }))}
      >
        <AboutContent />
      </MarketingShell>
    </>
  );
}

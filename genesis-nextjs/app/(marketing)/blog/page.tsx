import MarketingShell from '@/components/marketing/marketing-shell';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Articles sur Next.js, e-commerce, SEO, IA et retours de terrain — Clickdev.',
};

export default function BlogIndexPage() {
  return (
    <MarketingShell
      eyebrow="Ressources"
      title="Blog"
      description="Les articles seront servis depuis Sanity (liste, catégories, temps de lecture). Cette page liste sera branchée au CMS."
      breadcrumb={[
        { label: 'Accueil', href: '/' },
        { label: 'Blog', href: '/blog' },
      ]}
    />
  );
}

import MarketingShell from '@/components/marketing/marketing-shell';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-json-ld';
import {
  NAV_SILOS,
  SERVICE_SILOS,
  getChildSlugsForSilo,
  isServiceSilo,
} from '@/lib/constants/sitemap';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Props = { params: Promise<{ silo: string; slug: string }> };

export function generateStaticParams() {
  return SERVICE_SILOS.flatMap((silo) =>
    getChildSlugsForSilo(silo).map((slug) => ({
      silo,
      slug,
    }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { silo, slug } = await params;
  if (!isServiceSilo(silo)) return {};
  const entry = NAV_SILOS.find((s) => s.href === `/${silo}`);
  const child = entry?.children.find((c) => c.href === `/${silo}/${slug}`);
  if (!child) return {};
  return {
    title: child.label,
    description: `${child.label} — ${entry?.label ?? silo}. Clickdev, développeur freelance.`,
  };
}

export default async function SiloChildPage({ params }: Props) {
  const { silo, slug } = await params;
  if (!isServiceSilo(silo)) notFound();
  const entry = NAV_SILOS.find((s) => s.href === `/${silo}`);
  const child = entry?.children.find((c) => c.href === `/${silo}/${slug}`);
  if (!entry || !child) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Accueil', path: '/' },
          { name: entry.label, path: entry.href },
          { name: child.label, path: child.href },
        ]}
      />
      <MarketingShell
        eyebrow={entry.label}
        title={child.label}
        description={`Page service « ${child.label} » : contenu longue traîne, FAQ, CTA devis et maillage vers les pages sœurs (brief).`}
        breadcrumb={[
          { label: 'Accueil', href: '/' },
          { label: entry.label, href: entry.href },
          { label: child.label, href: child.href },
        ]}
      />
    </>
  );
}

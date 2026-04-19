import MarketingShell from '@/components/marketing/marketing-shell';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-json-ld';
import { NAV_SILOS, SERVICE_SILOS, isServiceSilo } from '@/lib/constants/sitemap';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Props = { params: Promise<{ silo: string }> };

export function generateStaticParams() {
  return SERVICE_SILOS.map((silo) => ({ silo }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { silo } = await params;
  if (!isServiceSilo(silo)) return {};
  const entry = NAV_SILOS.find((s) => s.href === `/${silo}`);
  return {
    title: entry?.label ?? silo,
    description: `Services ${entry?.label ?? silo} — Clickdev, développeur freelance.`,
  };
}

export default async function SiloPillarPage({ params }: Props) {
  const { silo } = await params;
  if (!isServiceSilo(silo)) {
    notFound();
  }
  const entry = NAV_SILOS.find((s) => s.href === `/${silo}`);
  if (!entry) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Accueil', path: '/' },
          { name: entry.label, path: entry.href },
        ]}
      />
      <MarketingShell
        eyebrow="Clickdev"
        title={entry.label}
        description={`Page pilier « ${entry.label} » : offre, preuves, process et FAQ seront intégrés ici selon le brief (contenu long, SEO & GEO).`}
        breadcrumb={[
          { label: 'Accueil', href: '/' },
          { label: entry.label, href: entry.href },
        ]}
      />
    </>
  );
}

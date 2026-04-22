import DevisContent from '@/components/marketing/devis-content';
import MarketingShell from '@/components/marketing/marketing-shell';
import { parseDevisProjectTypeQuery } from '@/lib/constants/devis';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-json-ld';
import { listingPageMetadata } from '@/lib/seo/page-metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = listingPageMetadata({
  title: 'Demander un devis',
  description:
    'Demande de devis Clickdev : type de projet, budget, délai et message — retour cadré sous 24–48 h ouvrées, développeur web freelance en France.',
  path: '/devis',
});

const crumbs = [
  { name: 'Accueil', path: '/' },
  { name: 'Devis', path: '/devis' },
];

type DevisPageProps = {
  searchParams: Promise<{ projectType?: string | string[] }>;
};

export default async function DevisPage({ searchParams }: DevisPageProps) {
  const sp = await searchParams;
  const initialProjectType = parseDevisProjectTypeQuery(sp.projectType);

  return (
    <>
      <BreadcrumbJsonLd items={crumbs} />
      <MarketingShell
        eyebrow="Projet"
        title="Demander un devis"
        description="Décrivez ce que vous cherchez à lancer ou à améliorer. Plus le contexte est clair, plus le retour peut être actionnable (périmètre, approche, ordre de grandeur) — pas de baratin, une base pour décider d’un point commun ou non."
        breadcrumb={crumbs.map((c) => ({ label: c.name, href: c.path }))}
      >
        <DevisContent initialProjectType={initialProjectType} />
      </MarketingShell>
    </>
  );
}

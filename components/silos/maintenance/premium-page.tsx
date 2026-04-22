import Link from 'next/link';

import { PremiumCases } from '@/components/silos/sites-internet/premium-cases';
import { PremiumFinalCta } from '@/components/silos/sites-internet/premium-final-cta';
import { MAINTENANCE_CASES_SECTION } from '@/lib/constants/maintenance-pillar-premium';
import { getRecentWebCaseStudies } from '@/lib/sanity/fetch';

import { MaintenanceAudience } from './maintenance-audience';
import { MaintenanceBento } from './maintenance-bento';
import { MaintenanceBreadcrumb } from './maintenance-breadcrumb';
import { MaintenanceCompare } from './maintenance-compare';
import MaintenanceEditorialSeo from './maintenance-editorial-seo';
import { MaintenanceFaq } from './maintenance-faq';
import { MaintenanceHero } from './maintenance-hero';
import { MaintenanceIntro } from './maintenance-intro';
import { MaintenanceProcess } from './maintenance-process';
import { MaintenanceStackMarquee } from './maintenance-stack-marquee';
import { MaintenanceTestimonials } from './maintenance-testimonials';
import { MaintenanceTrustMarquee } from './maintenance-trust-marquee';

export default async function MaintenancePremiumPage() {
  const caseStudies = await getRecentWebCaseStudies();
  const casesIntro = (
    <p className="mt-4 text-sm text-white/55 md:text-base">
      {MAINTENANCE_CASES_SECTION.intro}{' '}
      <Link
        href="/realisations"
        className="text-white/70 underline-offset-4 transition hover:text-white hover:underline"
      >
        Toutes les réalisations
      </Link>
      .
    </p>
  );

  return (
    <main className="bg-black text-white">
      <MaintenanceBreadcrumb />
      <MaintenanceHero />
      <MaintenanceTrustMarquee />
      <MaintenanceIntro />
      <MaintenanceBento />
      <MaintenanceEditorialSeo />
      <MaintenanceAudience />
      <MaintenanceCompare />
      <MaintenanceProcess />
      <MaintenanceStackMarquee />
      <PremiumCases
        caseStudies={caseStudies}
        sectionId="portfolio"
        kicker={MAINTENANCE_CASES_SECTION.kicker}
        title={MAINTENANCE_CASES_SECTION.title}
        intro={casesIntro}
      />
      <MaintenanceTestimonials />
      <MaintenanceFaq />
      <PremiumFinalCta
        title="Prêt à cesser de jouer les héros du week-end sur la prod ?"
        primaryHref="/devis?projectType=autre"
        primaryLabel="Demander une offre de maintenance"
        secondaryHref="/devis"
        secondaryLabel="Ouvrir le formulaire devis"
        description={
          <>
            <p>
              Deux lignes sur votre site, l&apos;URL, l&apos;urgence, et l&apos;usage : je réponds en général sous
              24h ouvrées, avec un ordre de grandeur, pas un roman.
            </p>
            <p className="mt-4 text-white/55">Premier filtre : est-ce qu&apos;on a déjà le minimum pour vous aider (accès, hébergeur, compte) ?</p>
          </>
        }
      />
    </main>
  );
}

import Link from 'next/link';

import { MaintenanceEcommerceEditorialContent } from '@/components/silos/maintenance/maintenance-ecommerce-editorial-content';
import { PremiumChildEditorialShell } from '@/components/silos/sites-internet/premium-child-editorial-shell';
import { PremiumFinalCta } from '@/components/silos/sites-internet/premium-final-cta';
import { PremiumCases } from '@/components/silos/sites-internet/premium-cases';
import { PremiumSitesChildBreadcrumb } from '@/components/silos/sites-internet/premium-sites-child-breadcrumb';
import { PremiumSitesChildHero } from '@/components/silos/sites-internet/premium-sites-child-hero';
import { PremiumSitesTrustMarquee } from '@/components/silos/sites-internet/premium-sites-trust-marquee';
import {
  SiteEcommerceAudienceSection,
  SiteEcommerceBenefitsSection,
  SiteEcommerceCompareSection,
  SiteEcommerceFaqSection,
  SiteEcommerceProcessSection,
  SiteEcommerceStackSection,
} from '@/components/silos/sites-internet/site-ecommerce-blocks';
import {
  MAINTENANCE_ECOMMERCE_AUDIENCE,
  MAINTENANCE_ECOMMERCE_BENEFITS,
  MAINTENANCE_ECOMMERCE_CASES,
  MAINTENANCE_ECOMMERCE_COMPARE,
  MAINTENANCE_ECOMMERCE_EDITORIAL,
  MAINTENANCE_ECOMMERCE_FAQ,
  MAINTENANCE_ECOMMERCE_FAQ_ITEMS,
  MAINTENANCE_ECOMMERCE_FINAL_CTA,
  MAINTENANCE_ECOMMERCE_HERO,
  MAINTENANCE_ECOMMERCE_PROCESS,
  MAINTENANCE_ECOMMERCE_STACK,
} from '@/lib/constants/maintenance-ecommerce-page';
import { getFeaturedCaseStudies } from '@/lib/sanity/fetch';

export default async function MaintenanceEcommercePremiumPage() {
const caseStudies = await getFeaturedCaseStudies();
  const casesIntro = (
    <p className="mt-4 text-sm text-white/55 md:text-base">
      {MAINTENANCE_ECOMMERCE_CASES.intro}{' '}
      <Link href="/realisations" className="text-white/70 underline-offset-4 transition hover:text-white hover:underline">
        Toutes les réalisations
      </Link>
      .
    </p>
  );

  return (
    <main className="bg-black text-white">
      <PremiumSitesChildBreadcrumb
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'Maintenance', href: '/maintenance' },
          { label: 'Maintenance e-commerce' },
        ]}
      />
      <PremiumSitesChildHero
        chapter={MAINTENANCE_ECOMMERCE_HERO.chapter}
        subline={MAINTENANCE_ECOMMERCE_HERO.subline}
        h1={MAINTENANCE_ECOMMERCE_HERO.h1}
        lead={MAINTENANCE_ECOMMERCE_HERO.lead}
        primaryCta={MAINTENANCE_ECOMMERCE_HERO.primaryCta}
        secondaryCta={MAINTENANCE_ECOMMERCE_HERO.secondaryCta}
      />
      <PremiumSitesTrustMarquee />
      <SiteEcommerceBenefitsSection
        kicker={MAINTENANCE_ECOMMERCE_BENEFITS.kicker}
        title={MAINTENANCE_ECOMMERCE_BENEFITS.title}
        subtitle={MAINTENANCE_ECOMMERCE_BENEFITS.subtitle}
        items={MAINTENANCE_ECOMMERCE_BENEFITS.items}
      />
      <PremiumChildEditorialShell
        kicker={MAINTENANCE_ECOMMERCE_EDITORIAL.kicker}
        title={MAINTENANCE_ECOMMERCE_EDITORIAL.title}
      >
        <MaintenanceEcommerceEditorialContent />
      </PremiumChildEditorialShell>
      <SiteEcommerceAudienceSection
        kicker={MAINTENANCE_ECOMMERCE_AUDIENCE.kicker}
        title={MAINTENANCE_ECOMMERCE_AUDIENCE.title}
        subtitle={MAINTENANCE_ECOMMERCE_AUDIENCE.subtitle}
        cards={MAINTENANCE_ECOMMERCE_AUDIENCE.cards}
      />
      <SiteEcommerceCompareSection
        kicker={MAINTENANCE_ECOMMERCE_COMPARE.kicker}
        title={MAINTENANCE_ECOMMERCE_COMPARE.title}
        subtitle={MAINTENANCE_ECOMMERCE_COMPARE.subtitle}
        columns={MAINTENANCE_ECOMMERCE_COMPARE.columns}
        rows={MAINTENANCE_ECOMMERCE_COMPARE.rows}
      />
      <SiteEcommerceProcessSection
        kicker={MAINTENANCE_ECOMMERCE_PROCESS.kicker}
        title={MAINTENANCE_ECOMMERCE_PROCESS.title}
        steps={MAINTENANCE_ECOMMERCE_PROCESS.steps}
      />
      <SiteEcommerceStackSection
        kicker={MAINTENANCE_ECOMMERCE_STACK.kicker}
        title={MAINTENANCE_ECOMMERCE_STACK.title}
        body={MAINTENANCE_ECOMMERCE_STACK.body}
        labels={MAINTENANCE_ECOMMERCE_STACK.labels}
      />
      <PremiumCases
        caseStudies={caseStudies}
        sectionId="portfolio"
        kicker={MAINTENANCE_ECOMMERCE_CASES.kicker}
        title={MAINTENANCE_ECOMMERCE_CASES.title}
        intro={casesIntro}
      />
      <SiteEcommerceFaqSection
        kicker={MAINTENANCE_ECOMMERCE_FAQ.kicker}
        title={MAINTENANCE_ECOMMERCE_FAQ.title}
        subtitle={MAINTENANCE_ECOMMERCE_FAQ.subtitle}
        items={MAINTENANCE_ECOMMERCE_FAQ_ITEMS}
      />
      <PremiumFinalCta
        title={MAINTENANCE_ECOMMERCE_FINAL_CTA.title}
        primaryHref={MAINTENANCE_ECOMMERCE_FINAL_CTA.primaryHref}
        primaryLabel={MAINTENANCE_ECOMMERCE_FINAL_CTA.primaryLabel}
        secondaryHref={MAINTENANCE_ECOMMERCE_FINAL_CTA.secondaryHref}
        secondaryLabel={MAINTENANCE_ECOMMERCE_FINAL_CTA.secondaryLabel}
      />
    </main>
  );
}

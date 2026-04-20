import Link from 'next/link';

import { ApplicationsMobilesPremiumBento } from '@/components/silos/applications-mobiles/applications-mobiles-premium-bento';
import { ApplicationsMobilesPillarEditorialContent } from '@/components/silos/applications-mobiles/applications-mobiles-pillar-editorial-content';
import { PremiumChildEditorialShell } from '@/components/silos/sites-internet/premium-child-editorial-shell';
import { PremiumInternalLinksSection } from '@/components/silos/sites-internet/premium-internal-links-section';
import { PremiumFinalCta } from '@/components/silos/sites-internet/premium-final-cta';
import { PremiumCases } from '@/components/silos/sites-internet/premium-cases';
import { PremiumSitesChildBreadcrumb } from '@/components/silos/sites-internet/premium-sites-child-breadcrumb';
import { PremiumSitesChildHero } from '@/components/silos/sites-internet/premium-sites-child-hero';
import { PremiumSitesTestimonials } from '@/components/silos/sites-internet/premium-sites-testimonials';
import { PremiumSitesTrustMarquee } from '@/components/silos/sites-internet/premium-sites-trust-marquee';
import {
  SiteEcommerceAudienceSection,
  SiteEcommerceBenefitsSection,
  SiteEcommerceBudgetSection,
  SiteEcommerceCompareSection,
  SiteEcommerceFaqSection,
  SiteEcommerceProcessSection,
  SiteEcommerceStackSection,
} from '@/components/silos/sites-internet/site-ecommerce-blocks';
import {
  APPLICATIONS_MOBILES_PILLAR_AUDIENCE,
  APPLICATIONS_MOBILES_PILLAR_BENEFITS,
  APPLICATIONS_MOBILES_PILLAR_CASES,
  APPLICATIONS_MOBILES_PILLAR_COMPARE,
  APPLICATIONS_MOBILES_PILLAR_EDITORIAL,
  APPLICATIONS_MOBILES_PILLAR_FAQ,
  APPLICATIONS_MOBILES_PILLAR_FAQ_ITEMS,
  APPLICATIONS_MOBILES_PILLAR_FINAL_CTA,
  APPLICATIONS_MOBILES_PILLAR_HERO,
  APPLICATIONS_MOBILES_PILLAR_PROCESS,
  APPLICATIONS_MOBILES_PILLAR_STACK,
} from '@/lib/constants/applications-mobiles-pillar-premium';
import { prioritizeApplicationsPillarCaseStudies } from '@/lib/content/applications-pillar-cases';
import { getAllCaseStudyTeasers } from '@/lib/sanity/fetch';

/** Page pilier `/applications-mobiles` — layout premium aligné sur /sites-internet. */
export default async function ApplicationsMobilesPremiumPage() {
  const allStudies = await getAllCaseStudyTeasers();
  const caseStudies = prioritizeApplicationsPillarCaseStudies(allStudies);

  const casesIntro = (
    <p className="mt-4 text-sm text-white/55 md:text-base">
      {APPLICATIONS_MOBILES_PILLAR_CASES.intro}{' '}
      <Link href="/realisations" className="text-white/70 underline-offset-4 transition hover:text-white hover:underline">
        Toutes les réalisations
      </Link>
      .
    </p>
  );

  return (
    <main className="bg-black text-white">
      <PremiumSitesChildBreadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'Applications mobiles' }]} />
      <PremiumSitesChildHero
        chapter={APPLICATIONS_MOBILES_PILLAR_HERO.chapter}
        subline={APPLICATIONS_MOBILES_PILLAR_HERO.subline}
        h1={APPLICATIONS_MOBILES_PILLAR_HERO.h1}
        lead={APPLICATIONS_MOBILES_PILLAR_HERO.lead}
        primaryCta={APPLICATIONS_MOBILES_PILLAR_HERO.primaryCta}
        secondaryCta={APPLICATIONS_MOBILES_PILLAR_HERO.secondaryCta}
      />
      <PremiumSitesTrustMarquee />
      <SiteEcommerceBenefitsSection
        kicker={APPLICATIONS_MOBILES_PILLAR_BENEFITS.kicker}
        title={APPLICATIONS_MOBILES_PILLAR_BENEFITS.title}
        subtitle={APPLICATIONS_MOBILES_PILLAR_BENEFITS.subtitle}
        items={APPLICATIONS_MOBILES_PILLAR_BENEFITS.items}
      />
      <ApplicationsMobilesPremiumBento />
      <PremiumChildEditorialShell
        kicker={APPLICATIONS_MOBILES_PILLAR_EDITORIAL.kicker}
        title={APPLICATIONS_MOBILES_PILLAR_EDITORIAL.title}
      >
        <ApplicationsMobilesPillarEditorialContent />
      </PremiumChildEditorialShell>
      <PremiumInternalLinksSection />
      <SiteEcommerceAudienceSection
        kicker={APPLICATIONS_MOBILES_PILLAR_AUDIENCE.kicker}
        title={APPLICATIONS_MOBILES_PILLAR_AUDIENCE.title}
        subtitle={APPLICATIONS_MOBILES_PILLAR_AUDIENCE.subtitle}
        cards={APPLICATIONS_MOBILES_PILLAR_AUDIENCE.cards}
      />
      <SiteEcommerceCompareSection
        kicker={APPLICATIONS_MOBILES_PILLAR_COMPARE.kicker}
        title={APPLICATIONS_MOBILES_PILLAR_COMPARE.title}
        subtitle={APPLICATIONS_MOBILES_PILLAR_COMPARE.subtitle}
        columns={APPLICATIONS_MOBILES_PILLAR_COMPARE.columns}
        rows={APPLICATIONS_MOBILES_PILLAR_COMPARE.rows}
      />
      <SiteEcommerceProcessSection
        kicker={APPLICATIONS_MOBILES_PILLAR_PROCESS.kicker}
        title={APPLICATIONS_MOBILES_PILLAR_PROCESS.title}
        steps={APPLICATIONS_MOBILES_PILLAR_PROCESS.steps}
      />
      <SiteEcommerceStackSection
        kicker={APPLICATIONS_MOBILES_PILLAR_STACK.kicker}
        title={APPLICATIONS_MOBILES_PILLAR_STACK.title}
        body={APPLICATIONS_MOBILES_PILLAR_STACK.body}
        labels={APPLICATIONS_MOBILES_PILLAR_STACK.labels}
      />
      <PremiumCases
        caseStudies={caseStudies}
        sectionId="portfolio"
        kicker={APPLICATIONS_MOBILES_PILLAR_CASES.kicker}
        title={APPLICATIONS_MOBILES_PILLAR_CASES.title}
        intro={casesIntro}
      />
      <PremiumSitesTestimonials />
      <SiteEcommerceFaqSection
        kicker={APPLICATIONS_MOBILES_PILLAR_FAQ.kicker}
        title={APPLICATIONS_MOBILES_PILLAR_FAQ.title}
        subtitle={APPLICATIONS_MOBILES_PILLAR_FAQ.subtitle}
        items={APPLICATIONS_MOBILES_PILLAR_FAQ_ITEMS}
      />
      <SiteEcommerceBudgetSection
        title="Budget"
        line="Les projets mobile sérieux démarrent souvent vers 4 900 € selon le périmètre — chaque page fille détaille une fourchette."
        note="Devis gratuit, personnalisé, sans engagement."
      />
      <PremiumFinalCta
        title={APPLICATIONS_MOBILES_PILLAR_FINAL_CTA.title}
        primaryHref={APPLICATIONS_MOBILES_PILLAR_FINAL_CTA.primaryHref}
        primaryLabel={APPLICATIONS_MOBILES_PILLAR_FINAL_CTA.primaryLabel}
        secondaryHref={APPLICATIONS_MOBILES_PILLAR_FINAL_CTA.secondaryHref}
        secondaryLabel={APPLICATIONS_MOBILES_PILLAR_FINAL_CTA.secondaryLabel}
      />
    </main>
  );
}

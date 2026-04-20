import Link from 'next/link';

import { CrmPillarEditorialContent } from '@/components/silos/crm/crm-pillar-editorial-content';
import { CrmPremiumBento } from '@/components/silos/crm/crm-premium-bento';
import { PremiumChildEditorialShell } from '@/components/silos/sites-internet/premium-child-editorial-shell';
import { PremiumFinalCta } from '@/components/silos/sites-internet/premium-final-cta';
import { PremiumCases } from '@/components/silos/sites-internet/premium-cases';
import { PremiumSitesChildBreadcrumb } from '@/components/silos/sites-internet/premium-sites-child-breadcrumb';
import { PremiumSitesChildHero } from '@/components/silos/sites-internet/premium-sites-child-hero';
import { PremiumSitesTestimonials } from '@/components/silos/sites-internet/premium-sites-testimonials';
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
  CRM_PILLAR_AUDIENCE,
  CRM_PILLAR_BENEFITS,
  CRM_PILLAR_CASES,
  CRM_PILLAR_COMPARE,
  CRM_PILLAR_EDITORIAL,
  CRM_PILLAR_FAQ,
  CRM_PILLAR_FAQ_ITEMS,
  CRM_PILLAR_FINAL_CTA,
  CRM_PILLAR_HERO,
  CRM_PILLAR_PROCESS,
  CRM_PILLAR_STACK,
} from '@/lib/constants/crm-pillar-premium';
import { prioritizeCrmPillarCaseStudies } from '@/lib/content/seo-crm-case-studies';
import { getAllCaseStudyTeasers } from '@/lib/sanity/fetch';

export default async function CrmPillarPremiumPage() {
  const allStudies = await getAllCaseStudyTeasers();
  const caseStudies = prioritizeCrmPillarCaseStudies(allStudies);

  const casesIntro = (
    <p className="mt-4 text-sm text-white/55 md:text-base">
      {CRM_PILLAR_CASES.intro}{' '}
      <Link href="/realisations" className="text-white/70 underline-offset-4 transition hover:text-white hover:underline">
        Voir les réalisations
      </Link>
      .
    </p>
  );

  return (
    <main className="bg-black text-white">
      <PremiumSitesChildBreadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'CRM & outils métiers' }]} />
      <PremiumSitesChildHero
        chapter={CRM_PILLAR_HERO.chapter}
        subline={CRM_PILLAR_HERO.subline}
        h1={CRM_PILLAR_HERO.h1}
        lead={CRM_PILLAR_HERO.lead}
        primaryCta={CRM_PILLAR_HERO.primaryCta}
        secondaryCta={CRM_PILLAR_HERO.secondaryCta}
      />
      <PremiumSitesTrustMarquee />
      <SiteEcommerceBenefitsSection
        kicker={CRM_PILLAR_BENEFITS.kicker}
        title={CRM_PILLAR_BENEFITS.title}
        subtitle={CRM_PILLAR_BENEFITS.subtitle}
        items={CRM_PILLAR_BENEFITS.items}
      />
      <CrmPremiumBento />
      <PremiumChildEditorialShell kicker={CRM_PILLAR_EDITORIAL.kicker} title={CRM_PILLAR_EDITORIAL.title}>
        <CrmPillarEditorialContent />
      </PremiumChildEditorialShell>
      <SiteEcommerceAudienceSection
        kicker={CRM_PILLAR_AUDIENCE.kicker}
        title={CRM_PILLAR_AUDIENCE.title}
        subtitle={CRM_PILLAR_AUDIENCE.subtitle}
        cards={CRM_PILLAR_AUDIENCE.cards}
      />
      <SiteEcommerceCompareSection
        kicker={CRM_PILLAR_COMPARE.kicker}
        title={CRM_PILLAR_COMPARE.title}
        subtitle={CRM_PILLAR_COMPARE.subtitle}
        columns={CRM_PILLAR_COMPARE.columns}
        rows={CRM_PILLAR_COMPARE.rows}
      />
      <SiteEcommerceProcessSection
        kicker={CRM_PILLAR_PROCESS.kicker}
        title={CRM_PILLAR_PROCESS.title}
        steps={CRM_PILLAR_PROCESS.steps}
      />
      <SiteEcommerceStackSection
        kicker={CRM_PILLAR_STACK.kicker}
        title={CRM_PILLAR_STACK.title}
        body={CRM_PILLAR_STACK.body}
        labels={CRM_PILLAR_STACK.labels}
        pillarHref="/"
        pillarLabel="l'accueil"
      />
      <PremiumCases
        caseStudies={caseStudies}
        sectionId="portfolio"
        kicker={CRM_PILLAR_CASES.kicker}
        title={CRM_PILLAR_CASES.title}
        intro={casesIntro}
      />
      <PremiumSitesTestimonials />
      <SiteEcommerceFaqSection
        kicker={CRM_PILLAR_FAQ.kicker}
        title={CRM_PILLAR_FAQ.title}
        subtitle={CRM_PILLAR_FAQ.subtitle}
        items={CRM_PILLAR_FAQ_ITEMS}
      />
      <PremiumFinalCta
        title={CRM_PILLAR_FINAL_CTA.title}
        primaryHref={CRM_PILLAR_FINAL_CTA.primaryHref}
        primaryLabel={CRM_PILLAR_FINAL_CTA.primaryLabel}
        secondaryHref={CRM_PILLAR_FINAL_CTA.secondaryHref}
        secondaryLabel={CRM_PILLAR_FINAL_CTA.secondaryLabel}
      />
    </main>
  );
}

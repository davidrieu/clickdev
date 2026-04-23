import Link from 'next/link';

import { IntegrationIaEditorialContent } from '@/components/silos/ia/integration-ia-editorial-content';
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
  INTEGRATION_IA_AUDIENCE,
  INTEGRATION_IA_BENEFITS,
  INTEGRATION_IA_CASES,
  INTEGRATION_IA_COMPARE,
  INTEGRATION_IA_EDITORIAL,
  INTEGRATION_IA_FAQ,
  INTEGRATION_IA_FAQ_ITEMS,
  INTEGRATION_IA_FINAL_CTA,
  INTEGRATION_IA_HERO,
  INTEGRATION_IA_PROCESS,
  INTEGRATION_IA_STACK,
} from '@/lib/constants/integration-ia-page';
import { prioritizeIaCaseStudies } from '@/lib/content/ia-case-studies';
import { getAllCaseStudyTeasers } from '@/lib/sanity/fetch';

export default async function IntegrationIaPremiumPage() {
  const raw = await getAllCaseStudyTeasers();
  const caseStudies = prioritizeIaCaseStudies(raw);

  const casesIntro = (
    <p className="mt-4 text-sm text-white/55 md:text-base">
      {INTEGRATION_IA_CASES.intro}{' '}
      <Link href="/realisations" className="text-white/70 underline-offset-4 transition hover:text-white hover:underline">
        Toutes les réalisations
      </Link>
      .
    </p>
  );

  return (
    <main className="bg-black text-white">
      <PremiumSitesChildBreadcrumb
        items={[{ label: 'Accueil', href: '/' }, { label: 'IA', href: '/ia' }, { label: 'IA site & appli' }]}
      />
      <PremiumSitesChildHero
        chapter={INTEGRATION_IA_HERO.chapter}
        subline={INTEGRATION_IA_HERO.subline}
        h1={INTEGRATION_IA_HERO.h1}
        lead={INTEGRATION_IA_HERO.lead}
        primaryCta={INTEGRATION_IA_HERO.primaryCta}
        secondaryCta={INTEGRATION_IA_HERO.secondaryCta}
      />
      <PremiumSitesTrustMarquee />
      <SiteEcommerceBenefitsSection
        kicker={INTEGRATION_IA_BENEFITS.kicker}
        title={INTEGRATION_IA_BENEFITS.title}
        subtitle={INTEGRATION_IA_BENEFITS.subtitle}
        items={INTEGRATION_IA_BENEFITS.items}
      />
      <PremiumChildEditorialShell kicker={INTEGRATION_IA_EDITORIAL.kicker} title={INTEGRATION_IA_EDITORIAL.title}>
        <IntegrationIaEditorialContent />
      </PremiumChildEditorialShell>
      <SiteEcommerceAudienceSection
        kicker={INTEGRATION_IA_AUDIENCE.kicker}
        title={INTEGRATION_IA_AUDIENCE.title}
        subtitle={INTEGRATION_IA_AUDIENCE.subtitle}
        cards={INTEGRATION_IA_AUDIENCE.cards}
      />
      <SiteEcommerceCompareSection
        kicker={INTEGRATION_IA_COMPARE.kicker}
        title={INTEGRATION_IA_COMPARE.title}
        subtitle={INTEGRATION_IA_COMPARE.subtitle}
        columns={INTEGRATION_IA_COMPARE.columns}
        rows={INTEGRATION_IA_COMPARE.rows}
      />
      <SiteEcommerceProcessSection
        kicker={INTEGRATION_IA_PROCESS.kicker}
        title={INTEGRATION_IA_PROCESS.title}
        steps={INTEGRATION_IA_PROCESS.steps}
      />
      <SiteEcommerceStackSection
        kicker={INTEGRATION_IA_STACK.kicker}
        title={INTEGRATION_IA_STACK.title}
        body={INTEGRATION_IA_STACK.body}
        labels={INTEGRATION_IA_STACK.labels}
        pillarHref="/ia"
        pillarLabel="IA"
      />
      <PremiumCases
        caseStudies={caseStudies}
        sectionId="portfolio"
        kicker={INTEGRATION_IA_CASES.kicker}
        title={INTEGRATION_IA_CASES.title}
        intro={casesIntro}
      />
      <SiteEcommerceFaqSection
        kicker={INTEGRATION_IA_FAQ.kicker}
        title={INTEGRATION_IA_FAQ.title}
        subtitle={INTEGRATION_IA_FAQ.subtitle}
        items={INTEGRATION_IA_FAQ_ITEMS}
      />
      <PremiumFinalCta
        title={INTEGRATION_IA_FINAL_CTA.title}
        primaryHref={INTEGRATION_IA_FINAL_CTA.primaryHref}
        primaryLabel={INTEGRATION_IA_FINAL_CTA.primaryLabel}
        secondaryHref={INTEGRATION_IA_FINAL_CTA.secondaryHref}
        secondaryLabel={INTEGRATION_IA_FINAL_CTA.secondaryLabel}
      />
    </main>
  );
}

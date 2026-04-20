import Link from 'next/link';

import { IaPillarEditorialContent } from '@/components/silos/ia/ia-pillar-editorial-content';
import { IaPremiumBento } from '@/components/silos/ia/ia-premium-bento';
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
  IA_PILLAR_AUDIENCE,
  IA_PILLAR_BENEFITS,
  IA_PILLAR_CASES,
  IA_PILLAR_COMPARE,
  IA_PILLAR_EDITORIAL,
  IA_PILLAR_FAQ,
  IA_PILLAR_FAQ_ITEMS,
  IA_PILLAR_FINAL_CTA,
  IA_PILLAR_HERO,
  IA_PILLAR_PROCESS,
  IA_PILLAR_STACK,
} from '@/lib/constants/ia-pillar-premium';
import { prioritizeIaPillarCaseStudies } from '@/lib/content/ia-case-studies';
import { getAllCaseStudyTeasers } from '@/lib/sanity/fetch';

export default async function IaPillarPremiumPage() {
  const allStudies = await getAllCaseStudyTeasers();
  const caseStudies = prioritizeIaPillarCaseStudies(allStudies);

  const casesIntro = (
    <p className="mt-4 text-sm text-white/55 md:text-base">
      {IA_PILLAR_CASES.intro}{' '}
      <Link href="/realisations" className="text-white/70 underline-offset-4 transition hover:text-white hover:underline">
        Toutes les réalisations
      </Link>
      .
    </p>
  );

  return (
    <main className="bg-black text-white">
      <PremiumSitesChildBreadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'IA' }]} />
      <PremiumSitesChildHero
        chapter={IA_PILLAR_HERO.chapter}
        subline={IA_PILLAR_HERO.subline}
        h1={IA_PILLAR_HERO.h1}
        lead={IA_PILLAR_HERO.lead}
        primaryCta={IA_PILLAR_HERO.primaryCta}
        secondaryCta={IA_PILLAR_HERO.secondaryCta}
      />
      <PremiumSitesTrustMarquee />
      <SiteEcommerceBenefitsSection
        kicker={IA_PILLAR_BENEFITS.kicker}
        title={IA_PILLAR_BENEFITS.title}
        subtitle={IA_PILLAR_BENEFITS.subtitle}
        items={IA_PILLAR_BENEFITS.items}
      />
      <IaPremiumBento />
      <PremiumChildEditorialShell kicker={IA_PILLAR_EDITORIAL.kicker} title={IA_PILLAR_EDITORIAL.title}>
        <IaPillarEditorialContent />
      </PremiumChildEditorialShell>
      <PremiumInternalLinksSection />
      <SiteEcommerceAudienceSection
        kicker={IA_PILLAR_AUDIENCE.kicker}
        title={IA_PILLAR_AUDIENCE.title}
        subtitle={IA_PILLAR_AUDIENCE.subtitle}
        cards={IA_PILLAR_AUDIENCE.cards}
      />
      <SiteEcommerceCompareSection
        kicker={IA_PILLAR_COMPARE.kicker}
        title={IA_PILLAR_COMPARE.title}
        subtitle={IA_PILLAR_COMPARE.subtitle}
        columns={IA_PILLAR_COMPARE.columns}
        rows={IA_PILLAR_COMPARE.rows}
      />
      <SiteEcommerceProcessSection
        kicker={IA_PILLAR_PROCESS.kicker}
        title={IA_PILLAR_PROCESS.title}
        steps={IA_PILLAR_PROCESS.steps}
      />
      <SiteEcommerceStackSection
        kicker={IA_PILLAR_STACK.kicker}
        title={IA_PILLAR_STACK.title}
        body={IA_PILLAR_STACK.body}
        labels={IA_PILLAR_STACK.labels}
      />
      <PremiumCases
        caseStudies={caseStudies}
        sectionId="portfolio"
        kicker={IA_PILLAR_CASES.kicker}
        title={IA_PILLAR_CASES.title}
        intro={casesIntro}
      />
      <PremiumSitesTestimonials />
      <SiteEcommerceFaqSection
        kicker={IA_PILLAR_FAQ.kicker}
        title={IA_PILLAR_FAQ.title}
        subtitle={IA_PILLAR_FAQ.subtitle}
        items={IA_PILLAR_FAQ_ITEMS}
      />
      <SiteEcommerceBudgetSection
        title="Budget"
        line="Une première intégration IA sérieuse démarre souvent vers 3 500 € — chaque page fille précise son ordre de grandeur."
        note="Devis gratuit, personnalisé, sans engagement."
      />
      <PremiumFinalCta
        title={IA_PILLAR_FINAL_CTA.title}
        primaryHref={IA_PILLAR_FINAL_CTA.primaryHref}
        primaryLabel={IA_PILLAR_FINAL_CTA.primaryLabel}
        secondaryHref={IA_PILLAR_FINAL_CTA.secondaryHref}
        secondaryLabel={IA_PILLAR_FINAL_CTA.secondaryLabel}
      />
    </main>
  );
}

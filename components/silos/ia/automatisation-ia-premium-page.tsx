import Link from 'next/link';

import { AutomatisationIaEditorialContent } from '@/components/silos/ia/automatisation-ia-editorial-content';
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
  AUTOMATISATION_IA_AUDIENCE,
  AUTOMATISATION_IA_BENEFITS,
  AUTOMATISATION_IA_CASES,
  AUTOMATISATION_IA_COMPARE,
  AUTOMATISATION_IA_EDITORIAL,
  AUTOMATISATION_IA_FAQ,
  AUTOMATISATION_IA_FAQ_ITEMS,
  AUTOMATISATION_IA_FINAL_CTA,
  AUTOMATISATION_IA_HERO,
  AUTOMATISATION_IA_PROCESS,
  AUTOMATISATION_IA_STACK,
} from '@/lib/constants/automatisation-ia-page';
import { prioritizeIaCaseStudies } from '@/lib/content/ia-case-studies';
import { getAllCaseStudyTeasers } from '@/lib/sanity/fetch';

export default async function AutomatisationIaPremiumPage() {
  const raw = await getAllCaseStudyTeasers();
  const caseStudies = prioritizeIaCaseStudies(raw);

  const casesIntro = (
    <p className="mt-4 text-sm text-white/55 md:text-base">
      {AUTOMATISATION_IA_CASES.intro}{' '}
      <Link href="/realisations" className="text-white/70 underline-offset-4 transition hover:text-white hover:underline">
        Toutes les réalisations
      </Link>
      .
    </p>
  );

  return (
    <main className="bg-black text-white">
      <PremiumSitesChildBreadcrumb
        items={[{ label: 'Accueil', href: '/' }, { label: 'IA', href: '/ia' }, { label: 'Automatisation IA' }]}
      />
      <PremiumSitesChildHero
        chapter={AUTOMATISATION_IA_HERO.chapter}
        subline={AUTOMATISATION_IA_HERO.subline}
        h1={AUTOMATISATION_IA_HERO.h1}
        lead={AUTOMATISATION_IA_HERO.lead}
        primaryCta={AUTOMATISATION_IA_HERO.primaryCta}
        secondaryCta={AUTOMATISATION_IA_HERO.secondaryCta}
      />
      <PremiumSitesTrustMarquee />
      <SiteEcommerceBenefitsSection
        kicker={AUTOMATISATION_IA_BENEFITS.kicker}
        title={AUTOMATISATION_IA_BENEFITS.title}
        subtitle={AUTOMATISATION_IA_BENEFITS.subtitle}
        items={AUTOMATISATION_IA_BENEFITS.items}
      />
      <PremiumChildEditorialShell kicker={AUTOMATISATION_IA_EDITORIAL.kicker} title={AUTOMATISATION_IA_EDITORIAL.title}>
        <AutomatisationIaEditorialContent />
      </PremiumChildEditorialShell>
      <SiteEcommerceAudienceSection
        kicker={AUTOMATISATION_IA_AUDIENCE.kicker}
        title={AUTOMATISATION_IA_AUDIENCE.title}
        subtitle={AUTOMATISATION_IA_AUDIENCE.subtitle}
        cards={AUTOMATISATION_IA_AUDIENCE.cards}
      />
      <SiteEcommerceCompareSection
        kicker={AUTOMATISATION_IA_COMPARE.kicker}
        title={AUTOMATISATION_IA_COMPARE.title}
        subtitle={AUTOMATISATION_IA_COMPARE.subtitle}
        columns={AUTOMATISATION_IA_COMPARE.columns}
        rows={AUTOMATISATION_IA_COMPARE.rows}
      />
      <SiteEcommerceProcessSection
        kicker={AUTOMATISATION_IA_PROCESS.kicker}
        title={AUTOMATISATION_IA_PROCESS.title}
        steps={AUTOMATISATION_IA_PROCESS.steps}
      />
      <SiteEcommerceStackSection
        kicker={AUTOMATISATION_IA_STACK.kicker}
        title={AUTOMATISATION_IA_STACK.title}
        body={AUTOMATISATION_IA_STACK.body}
        labels={AUTOMATISATION_IA_STACK.labels}
        pillarHref="/ia"
        pillarLabel="IA"
      />
      <PremiumCases
        caseStudies={caseStudies}
        sectionId="portfolio"
        kicker={AUTOMATISATION_IA_CASES.kicker}
        title={AUTOMATISATION_IA_CASES.title}
        intro={casesIntro}
      />
      <PremiumSitesTestimonials />
      <SiteEcommerceFaqSection
        kicker={AUTOMATISATION_IA_FAQ.kicker}
        title={AUTOMATISATION_IA_FAQ.title}
        subtitle={AUTOMATISATION_IA_FAQ.subtitle}
        items={AUTOMATISATION_IA_FAQ_ITEMS}
      />
      <PremiumFinalCta
        title={AUTOMATISATION_IA_FINAL_CTA.title}
        primaryHref={AUTOMATISATION_IA_FINAL_CTA.primaryHref}
        primaryLabel={AUTOMATISATION_IA_FINAL_CTA.primaryLabel}
        secondaryHref={AUTOMATISATION_IA_FINAL_CTA.secondaryHref}
        secondaryLabel={AUTOMATISATION_IA_FINAL_CTA.secondaryLabel}
      />
    </main>
  );
}

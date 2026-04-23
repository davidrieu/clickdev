import Link from 'next/link';

import { AgentsIaEditorialContent } from '@/components/silos/ia/agents-ia-editorial-content';
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
  AGENTS_IA_AUDIENCE,
  AGENTS_IA_BENEFITS,
  AGENTS_IA_CASES,
  AGENTS_IA_COMPARE,
  AGENTS_IA_EDITORIAL,
  AGENTS_IA_FAQ,
  AGENTS_IA_FAQ_ITEMS,
  AGENTS_IA_FINAL_CTA,
  AGENTS_IA_HERO,
  AGENTS_IA_PROCESS,
  AGENTS_IA_STACK,
} from '@/lib/constants/agents-ia-page';
import { getFeaturedCaseStudies } from '@/lib/sanity/fetch';

export default async function AgentsIaPremiumPage() {
  const caseStudies = await getFeaturedCaseStudies();

  const casesIntro = (
    <p className="mt-4 text-sm text-white/55 md:text-base">
      {AGENTS_IA_CASES.intro}{' '}
      <Link href="/realisations" className="text-white/70 underline-offset-4 transition hover:text-white hover:underline">
        Toutes les réalisations
      </Link>
      .
    </p>
  );

  return (
    <main className="bg-black text-white">
      <PremiumSitesChildBreadcrumb
        items={[{ label: 'Accueil', href: '/' }, { label: 'IA', href: '/ia' }, { label: 'Scénarios multi-étapes' }]}
      />
      <PremiumSitesChildHero
        chapter={AGENTS_IA_HERO.chapter}
        subline={AGENTS_IA_HERO.subline}
        h1={AGENTS_IA_HERO.h1}
        lead={AGENTS_IA_HERO.lead}
        primaryCta={AGENTS_IA_HERO.primaryCta}
        secondaryCta={AGENTS_IA_HERO.secondaryCta}
      />
      <PremiumSitesTrustMarquee />
      <SiteEcommerceBenefitsSection
        kicker={AGENTS_IA_BENEFITS.kicker}
        title={AGENTS_IA_BENEFITS.title}
        subtitle={AGENTS_IA_BENEFITS.subtitle}
        items={AGENTS_IA_BENEFITS.items}
      />
      <PremiumChildEditorialShell kicker={AGENTS_IA_EDITORIAL.kicker} title={AGENTS_IA_EDITORIAL.title}>
        <AgentsIaEditorialContent />
      </PremiumChildEditorialShell>
      <SiteEcommerceAudienceSection
        kicker={AGENTS_IA_AUDIENCE.kicker}
        title={AGENTS_IA_AUDIENCE.title}
        subtitle={AGENTS_IA_AUDIENCE.subtitle}
        cards={AGENTS_IA_AUDIENCE.cards}
      />
      <SiteEcommerceCompareSection
        kicker={AGENTS_IA_COMPARE.kicker}
        title={AGENTS_IA_COMPARE.title}
        subtitle={AGENTS_IA_COMPARE.subtitle}
        columns={AGENTS_IA_COMPARE.columns}
        rows={AGENTS_IA_COMPARE.rows}
      />
      <SiteEcommerceProcessSection
        kicker={AGENTS_IA_PROCESS.kicker}
        title={AGENTS_IA_PROCESS.title}
        steps={AGENTS_IA_PROCESS.steps}
      />
      <SiteEcommerceStackSection
        kicker={AGENTS_IA_STACK.kicker}
        title={AGENTS_IA_STACK.title}
        body={AGENTS_IA_STACK.body}
        labels={AGENTS_IA_STACK.labels}
        pillarHref="/ia"
        pillarLabel="IA"
      />
      <PremiumCases
        caseStudies={caseStudies}
        sectionId="portfolio"
        kicker={AGENTS_IA_CASES.kicker}
        title={AGENTS_IA_CASES.title}
        intro={casesIntro}
      />
      <SiteEcommerceFaqSection
        kicker={AGENTS_IA_FAQ.kicker}
        title={AGENTS_IA_FAQ.title}
        subtitle={AGENTS_IA_FAQ.subtitle}
        items={AGENTS_IA_FAQ_ITEMS}
      />
      <PremiumFinalCta
        title={AGENTS_IA_FINAL_CTA.title}
        primaryHref={AGENTS_IA_FINAL_CTA.primaryHref}
        primaryLabel={AGENTS_IA_FINAL_CTA.primaryLabel}
        secondaryHref={AGENTS_IA_FINAL_CTA.secondaryHref}
        secondaryLabel={AGENTS_IA_FINAL_CTA.secondaryLabel}
      />
    </main>
  );
}

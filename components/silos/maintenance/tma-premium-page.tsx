import Link from 'next/link';

import { TmaEditorialContent } from '@/components/silos/maintenance/tma-editorial-content';
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
  TMA_AUDIENCE,
  TMA_BENEFITS,
  TMA_CASES,
  TMA_COMPARE,
  TMA_EDITORIAL,
  TMA_FAQ,
  TMA_FAQ_ITEMS,
  TMA_FINAL_CTA,
  TMA_HERO,
  TMA_PROCESS,
  TMA_STACK,
} from '@/lib/constants/tma-page';
import { getFeaturedCaseStudies } from '@/lib/sanity/fetch';

export default async function TmaPremiumPage() {
const caseStudies = await getFeaturedCaseStudies();
  const casesIntro = (
    <p className="mt-4 text-sm text-white/55 md:text-base">
      {TMA_CASES.intro}{' '}
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
          { label: 'TMA' },
        ]}
      />
      <PremiumSitesChildHero
        chapter={TMA_HERO.chapter}
        subline={TMA_HERO.subline}
        h1={TMA_HERO.h1}
        lead={TMA_HERO.lead}
        primaryCta={TMA_HERO.primaryCta}
        secondaryCta={TMA_HERO.secondaryCta}
        mockupId="maintenance"
      />
      <PremiumSitesTrustMarquee />
      <SiteEcommerceBenefitsSection
        kicker={TMA_BENEFITS.kicker}
        title={TMA_BENEFITS.title}
        subtitle={TMA_BENEFITS.subtitle}
        items={TMA_BENEFITS.items}
      />
      <PremiumChildEditorialShell kicker={TMA_EDITORIAL.kicker} title={TMA_EDITORIAL.title}>
        <TmaEditorialContent />
      </PremiumChildEditorialShell>
      <SiteEcommerceAudienceSection
        kicker={TMA_AUDIENCE.kicker}
        title={TMA_AUDIENCE.title}
        subtitle={TMA_AUDIENCE.subtitle}
        cards={TMA_AUDIENCE.cards}
      />
      <SiteEcommerceCompareSection
        kicker={TMA_COMPARE.kicker}
        title={TMA_COMPARE.title}
        subtitle={TMA_COMPARE.subtitle}
        columns={TMA_COMPARE.columns}
        rows={TMA_COMPARE.rows}
      />
      <SiteEcommerceProcessSection
        kicker={TMA_PROCESS.kicker}
        title={TMA_PROCESS.title}
        steps={TMA_PROCESS.steps}
      />
      <SiteEcommerceStackSection
        kicker={TMA_STACK.kicker}
        title={TMA_STACK.title}
        body={TMA_STACK.body}
        labels={TMA_STACK.labels}
      />
      <PremiumCases
        caseStudies={caseStudies}
        sectionId="portfolio"
        kicker={TMA_CASES.kicker}
        title={TMA_CASES.title}
        intro={casesIntro}
      />
      <SiteEcommerceFaqSection
        kicker={TMA_FAQ.kicker}
        title={TMA_FAQ.title}
        subtitle={TMA_FAQ.subtitle}
        items={TMA_FAQ_ITEMS}
      />
      <PremiumFinalCta
        title={TMA_FINAL_CTA.title}
        primaryHref={TMA_FINAL_CTA.primaryHref}
        primaryLabel={TMA_FINAL_CTA.primaryLabel}
        secondaryHref={TMA_FINAL_CTA.secondaryHref}
        secondaryLabel={TMA_FINAL_CTA.secondaryLabel}
      />
    </main>
  );
}

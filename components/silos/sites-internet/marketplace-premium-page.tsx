import Link from 'next/link';

import { PremiumChildEditorialShell } from '@/components/silos/sites-internet/premium-child-editorial-shell';
import { MarketplaceEditorialContent } from '@/components/silos/sites-internet/marketplace-editorial-content';
import { PremiumFinalCta } from '@/components/silos/sites-internet/premium-final-cta';
import { PremiumCases } from '@/components/silos/sites-internet/premium-cases';
import { PremiumSitesChildBreadcrumb } from '@/components/silos/sites-internet/premium-sites-child-breadcrumb';
import { PremiumSitesChildHero } from '@/components/silos/sites-internet/premium-sites-child-hero';
import { PremiumSitesTestimonials } from '@/components/silos/sites-internet/premium-sites-testimonials';
import { PremiumSitesTrustMarquee } from '@/components/silos/sites-internet/premium-sites-trust-marquee';
import {
  MARKETPLACE_AUDIENCE,
  MARKETPLACE_BENEFITS,
  MARKETPLACE_BUDGET,
  MARKETPLACE_CASES,
  MARKETPLACE_COMPARE,
  MARKETPLACE_EDITORIAL,
  MARKETPLACE_FAQ,
  MARKETPLACE_FAQ_ITEMS,
  MARKETPLACE_FINAL_CTA,
  MARKETPLACE_HERO,
  MARKETPLACE_PROCESS,
  MARKETPLACE_STACK,
} from '@/lib/constants/marketplace-page';
import { prioritizeMarketplaceCaseStudies } from '@/lib/content/marketplace-cases';
import {
  SiteEcommerceAudienceSection,
  SiteEcommerceBenefitsSection,
  SiteEcommerceBudgetSection,
  SiteEcommerceCompareSection,
  SiteEcommerceFaqSection,
  SiteEcommerceProcessSection,
  SiteEcommerceStackSection,
} from '@/components/silos/sites-internet/site-ecommerce-blocks';
import { getRecentWebCaseStudies } from '@/lib/sanity/fetch';

/** Page fille premium `/sites-internet/marketplace`. */
export default async function MarketplacePremiumPage() {
  const raw = await getRecentWebCaseStudies();
  const caseStudies = prioritizeMarketplaceCaseStudies(raw);

  const casesIntro = (
    <p className="mt-4 text-sm text-white/55 md:text-base">
      {MARKETPLACE_CASES.intro}{' '}
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
          { label: 'Sites internet', href: '/sites-internet' },
          { label: 'Marketplace' },
        ]}
      />
      <PremiumSitesChildHero
        chapter={MARKETPLACE_HERO.chapter}
        subline={MARKETPLACE_HERO.subline}
        h1={MARKETPLACE_HERO.h1}
        lead={MARKETPLACE_HERO.lead}
        primaryCta={MARKETPLACE_HERO.primaryCta}
        secondaryCta={MARKETPLACE_HERO.secondaryCta}
      />
      <PremiumSitesTrustMarquee />
      <SiteEcommerceBenefitsSection
        kicker={MARKETPLACE_BENEFITS.kicker}
        title={MARKETPLACE_BENEFITS.title}
        subtitle={MARKETPLACE_BENEFITS.subtitle}
        items={MARKETPLACE_BENEFITS.items}
      />
      <PremiumChildEditorialShell kicker={MARKETPLACE_EDITORIAL.kicker} title={MARKETPLACE_EDITORIAL.title}>
        <MarketplaceEditorialContent />
      </PremiumChildEditorialShell>
      <SiteEcommerceAudienceSection
        kicker={MARKETPLACE_AUDIENCE.kicker}
        title={MARKETPLACE_AUDIENCE.title}
        subtitle={MARKETPLACE_AUDIENCE.subtitle}
        cards={MARKETPLACE_AUDIENCE.cards}
      />
      <SiteEcommerceCompareSection
        kicker={MARKETPLACE_COMPARE.kicker}
        title={MARKETPLACE_COMPARE.title}
        subtitle={MARKETPLACE_COMPARE.subtitle}
        columns={MARKETPLACE_COMPARE.columns}
        rows={MARKETPLACE_COMPARE.rows}
      />
      <SiteEcommerceProcessSection
        kicker={MARKETPLACE_PROCESS.kicker}
        title={MARKETPLACE_PROCESS.title}
        steps={MARKETPLACE_PROCESS.steps}
      />
      <SiteEcommerceStackSection
        kicker={MARKETPLACE_STACK.kicker}
        title={MARKETPLACE_STACK.title}
        body={MARKETPLACE_STACK.body}
        labels={MARKETPLACE_STACK.labels}
      />
      <PremiumCases
        caseStudies={caseStudies}
        sectionId="portfolio"
        kicker={MARKETPLACE_CASES.kicker}
        title={MARKETPLACE_CASES.title}
        intro={casesIntro}
      />
      <PremiumSitesTestimonials />
      <SiteEcommerceFaqSection
        kicker={MARKETPLACE_FAQ.kicker}
        title={MARKETPLACE_FAQ.title}
        subtitle={MARKETPLACE_FAQ.subtitle}
        items={MARKETPLACE_FAQ_ITEMS}
      />
      <SiteEcommerceBudgetSection
        title={MARKETPLACE_BUDGET.title}
        line={MARKETPLACE_BUDGET.line}
        note={MARKETPLACE_BUDGET.note}
      />
      <PremiumFinalCta
        title={MARKETPLACE_FINAL_CTA.title}
        primaryHref={MARKETPLACE_FINAL_CTA.primaryHref}
        primaryLabel={MARKETPLACE_FINAL_CTA.primaryLabel}
        secondaryHref={MARKETPLACE_FINAL_CTA.secondaryHref}
        secondaryLabel={MARKETPLACE_FINAL_CTA.secondaryLabel}
      />
    </main>
  );
}

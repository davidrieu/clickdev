import Link from 'next/link';

import { PremiumChildEditorialShell } from '@/components/silos/sites-internet/premium-child-editorial-shell';
import { PremiumFinalCta } from '@/components/silos/sites-internet/premium-final-cta';
import { PremiumCases } from '@/components/silos/sites-internet/premium-cases';
import { PremiumSitesChildBreadcrumb } from '@/components/silos/sites-internet/premium-sites-child-breadcrumb';
import { PremiumSitesChildHero } from '@/components/silos/sites-internet/premium-sites-child-hero';
import { PremiumSitesTestimonials } from '@/components/silos/sites-internet/premium-sites-testimonials';
import { PremiumSitesTrustMarquee } from '@/components/silos/sites-internet/premium-sites-trust-marquee';
import { LandingPageEditorialContent } from '@/components/silos/sites-internet/landing-page-editorial-content';
import {
  SiteEcommerceAudienceSection,
  SiteEcommerceBenefitsSection,
  SiteEcommerceCompareSection,
  SiteEcommerceFaqSection,
  SiteEcommerceProcessSection,
  SiteEcommerceStackSection,
} from '@/components/silos/sites-internet/site-ecommerce-blocks';
import {
  LANDING_PAGE_AUDIENCE,
  LANDING_PAGE_BENEFITS,
  LANDING_PAGE_CASES,
  LANDING_PAGE_COMPARE,
  LANDING_PAGE_EDITORIAL,
  LANDING_PAGE_FAQ,
  LANDING_PAGE_FAQ_ITEMS,
  LANDING_PAGE_FINAL_CTA,
  LANDING_PAGE_HERO,
  LANDING_PAGE_PROCESS,
  LANDING_PAGE_STACK,
} from '@/lib/constants/landing-page';
import { prioritizeVitrineCaseStudies } from '@/lib/content/site-vitrine-cases';
import { getRecentWebCaseStudies } from '@/lib/sanity/fetch';

export default async function LandingPagePremiumPage() {
  const raw = await getRecentWebCaseStudies();
  const caseStudies = prioritizeVitrineCaseStudies(raw);

  const casesIntro = (
    <p className="mt-4 text-sm text-white/55 md:text-base">
      {LANDING_PAGE_CASES.intro}{' '}
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
          { label: 'Landing page' },
        ]}
      />
      <PremiumSitesChildHero
        chapter={LANDING_PAGE_HERO.chapter}
        subline={LANDING_PAGE_HERO.subline}
        h1={LANDING_PAGE_HERO.h1}
        lead={LANDING_PAGE_HERO.lead}
        primaryCta={LANDING_PAGE_HERO.primaryCta}
        secondaryCta={LANDING_PAGE_HERO.secondaryCta}
      />
      <PremiumSitesTrustMarquee />
      <SiteEcommerceBenefitsSection
        kicker={LANDING_PAGE_BENEFITS.kicker}
        title={LANDING_PAGE_BENEFITS.title}
        subtitle={LANDING_PAGE_BENEFITS.subtitle}
        items={LANDING_PAGE_BENEFITS.items}
      />
      <PremiumChildEditorialShell kicker={LANDING_PAGE_EDITORIAL.kicker} title={LANDING_PAGE_EDITORIAL.title}>
        <LandingPageEditorialContent />
      </PremiumChildEditorialShell>
      <SiteEcommerceAudienceSection
        kicker={LANDING_PAGE_AUDIENCE.kicker}
        title={LANDING_PAGE_AUDIENCE.title}
        subtitle={LANDING_PAGE_AUDIENCE.subtitle}
        cards={LANDING_PAGE_AUDIENCE.cards}
      />
      <SiteEcommerceCompareSection
        kicker={LANDING_PAGE_COMPARE.kicker}
        title={LANDING_PAGE_COMPARE.title}
        subtitle={LANDING_PAGE_COMPARE.subtitle}
        columns={LANDING_PAGE_COMPARE.columns}
        rows={LANDING_PAGE_COMPARE.rows}
      />
      <SiteEcommerceProcessSection
        kicker={LANDING_PAGE_PROCESS.kicker}
        title={LANDING_PAGE_PROCESS.title}
        steps={LANDING_PAGE_PROCESS.steps}
      />
      <SiteEcommerceStackSection
        kicker={LANDING_PAGE_STACK.kicker}
        title={LANDING_PAGE_STACK.title}
        body={LANDING_PAGE_STACK.body}
        labels={LANDING_PAGE_STACK.labels}
      />
      <PremiumCases
        caseStudies={caseStudies}
        sectionId="portfolio"
        kicker={LANDING_PAGE_CASES.kicker}
        title={LANDING_PAGE_CASES.title}
        intro={casesIntro}
      />
      <PremiumSitesTestimonials />
      <SiteEcommerceFaqSection
        kicker={LANDING_PAGE_FAQ.kicker}
        title={LANDING_PAGE_FAQ.title}
        subtitle={LANDING_PAGE_FAQ.subtitle}
        items={LANDING_PAGE_FAQ_ITEMS}
      />
      <PremiumFinalCta
        title={LANDING_PAGE_FINAL_CTA.title}
        primaryHref={LANDING_PAGE_FINAL_CTA.primaryHref}
        primaryLabel={LANDING_PAGE_FINAL_CTA.primaryLabel}
        secondaryHref={LANDING_PAGE_FINAL_CTA.secondaryHref}
        secondaryLabel={LANDING_PAGE_FINAL_CTA.secondaryLabel}
      />
    </main>
  );
}

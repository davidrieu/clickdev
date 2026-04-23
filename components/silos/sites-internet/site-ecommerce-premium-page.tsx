import Link from 'next/link';

import { PremiumFinalCta } from '@/components/silos/sites-internet/premium-final-cta';
import { PremiumCases } from '@/components/silos/sites-internet/premium-cases';
import { PremiumSitesTrustMarquee } from '@/components/silos/sites-internet/premium-sites-trust-marquee';
import { PremiumSitesChildBreadcrumb } from '@/components/silos/sites-internet/premium-sites-child-breadcrumb';
import { PremiumChildEditorialShell } from '@/components/silos/sites-internet/premium-child-editorial-shell';
import { PremiumSitesChildHero } from '@/components/silos/sites-internet/premium-sites-child-hero';
import { SiteEcommerceEditorialContent } from '@/components/silos/sites-internet/site-ecommerce-editorial-content';
import {
  SiteEcommerceAudienceSection,
  SiteEcommerceBenefitsSection,
  SiteEcommerceCompareSection,
  SiteEcommerceFaqSection,
  SiteEcommerceProcessSection,
  SiteEcommerceStackSection,
} from '@/components/silos/sites-internet/site-ecommerce-blocks';
import {
  SITE_ECOMMERCE_AUDIENCE,
  SITE_ECOMMERCE_BENEFITS,
  SITE_ECOMMERCE_CASES,
  SITE_ECOMMERCE_COMPARE,
  SITE_ECOMMERCE_EDITORIAL,
  SITE_ECOMMERCE_FAQ,
  SITE_ECOMMERCE_FAQ_ITEMS,
  SITE_ECOMMERCE_FINAL_CTA,
  SITE_ECOMMERCE_HERO,
  SITE_ECOMMERCE_PROCESS,
  SITE_ECOMMERCE_STACK,
} from '@/lib/constants/site-ecommerce-page';
import { getFeaturedCaseStudies } from '@/lib/sanity/fetch';

/** Page fille premium `/sites-internet/site-ecommerce` — même ADN visuel que le pilier. */
export default async function SiteEcommercePremiumPage() {
  const caseStudies = await getFeaturedCaseStudies();

  const casesIntro = (
    <p className="mt-4 text-sm text-white/55 md:text-base">
      {SITE_ECOMMERCE_CASES.intro}{' '}
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
          { label: 'Site e-commerce' },
        ]}
      />
      <PremiumSitesChildHero
        chapter={SITE_ECOMMERCE_HERO.chapter}
        subline={SITE_ECOMMERCE_HERO.subline}
        h1={SITE_ECOMMERCE_HERO.h1}
        lead={SITE_ECOMMERCE_HERO.lead}
        primaryCta={SITE_ECOMMERCE_HERO.primaryCta}
        secondaryCta={SITE_ECOMMERCE_HERO.secondaryCta}
      />
      <PremiumSitesTrustMarquee />
      <SiteEcommerceBenefitsSection
        kicker={SITE_ECOMMERCE_BENEFITS.kicker}
        title={SITE_ECOMMERCE_BENEFITS.title}
        subtitle={SITE_ECOMMERCE_BENEFITS.subtitle}
        items={SITE_ECOMMERCE_BENEFITS.items}
      />
      <PremiumChildEditorialShell kicker={SITE_ECOMMERCE_EDITORIAL.kicker} title={SITE_ECOMMERCE_EDITORIAL.title}>
        <SiteEcommerceEditorialContent />
      </PremiumChildEditorialShell>
      <SiteEcommerceAudienceSection
        kicker={SITE_ECOMMERCE_AUDIENCE.kicker}
        title={SITE_ECOMMERCE_AUDIENCE.title}
        subtitle={SITE_ECOMMERCE_AUDIENCE.subtitle}
        cards={SITE_ECOMMERCE_AUDIENCE.cards}
      />
      <SiteEcommerceCompareSection
        kicker={SITE_ECOMMERCE_COMPARE.kicker}
        title={SITE_ECOMMERCE_COMPARE.title}
        subtitle={SITE_ECOMMERCE_COMPARE.subtitle}
        columns={SITE_ECOMMERCE_COMPARE.columns}
        rows={SITE_ECOMMERCE_COMPARE.rows}
      />
      <SiteEcommerceProcessSection
        kicker={SITE_ECOMMERCE_PROCESS.kicker}
        title={SITE_ECOMMERCE_PROCESS.title}
        steps={SITE_ECOMMERCE_PROCESS.steps}
      />
      <SiteEcommerceStackSection
        kicker={SITE_ECOMMERCE_STACK.kicker}
        title={SITE_ECOMMERCE_STACK.title}
        body={SITE_ECOMMERCE_STACK.body}
        labels={SITE_ECOMMERCE_STACK.labels}
      />
      <PremiumCases
        caseStudies={caseStudies}
        sectionId="portfolio"
        kicker={SITE_ECOMMERCE_CASES.kicker}
        title={SITE_ECOMMERCE_CASES.title}
        intro={casesIntro}
      />
      <SiteEcommerceFaqSection
        kicker={SITE_ECOMMERCE_FAQ.kicker}
        title={SITE_ECOMMERCE_FAQ.title}
        subtitle={SITE_ECOMMERCE_FAQ.subtitle}
        items={SITE_ECOMMERCE_FAQ_ITEMS}
      />
      <PremiumFinalCta
        title={SITE_ECOMMERCE_FINAL_CTA.title}
        primaryHref={SITE_ECOMMERCE_FINAL_CTA.primaryHref}
        primaryLabel={SITE_ECOMMERCE_FINAL_CTA.primaryLabel}
        secondaryHref={SITE_ECOMMERCE_FINAL_CTA.secondaryHref}
        secondaryLabel={SITE_ECOMMERCE_FINAL_CTA.secondaryLabel}
      />
    </main>
  );
}

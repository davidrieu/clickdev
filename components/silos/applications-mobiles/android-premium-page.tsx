import Link from 'next/link';

import { AndroidEditorialContent } from '@/components/silos/applications-mobiles/android-editorial-content';
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
  SiteEcommerceBudgetSection,
  SiteEcommerceCompareSection,
  SiteEcommerceFaqSection,
  SiteEcommerceProcessSection,
  SiteEcommerceStackSection,
} from '@/components/silos/sites-internet/site-ecommerce-blocks';
import {
  ANDROID_APP_AUDIENCE,
  ANDROID_APP_BENEFITS,
  ANDROID_APP_BUDGET,
  ANDROID_APP_CASES,
  ANDROID_APP_COMPARE,
  ANDROID_APP_EDITORIAL,
  ANDROID_APP_FAQ,
  ANDROID_APP_FAQ_ITEMS,
  ANDROID_APP_FINAL_CTA,
  ANDROID_APP_HERO,
  ANDROID_APP_PROCESS,
  ANDROID_APP_STACK,
} from '@/lib/constants/android-app-page';
import { prioritizeMobileCaseStudies } from '@/lib/content/mobile-app-cases';
import { getRecentMobileCaseStudies } from '@/lib/sanity/fetch';

export default async function AndroidPremiumPage() {
  const raw = await getRecentMobileCaseStudies();
  const caseStudies = prioritizeMobileCaseStudies(raw);

  const casesIntro = (
    <p className="mt-4 text-sm text-white/55 md:text-base">
      {ANDROID_APP_CASES.intro}{' '}
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
          { label: 'Applications mobiles', href: '/applications-mobiles' },
          { label: 'Android' },
        ]}
      />
      <PremiumSitesChildHero
        chapter={ANDROID_APP_HERO.chapter}
        subline={ANDROID_APP_HERO.subline}
        h1={ANDROID_APP_HERO.h1}
        lead={ANDROID_APP_HERO.lead}
        primaryCta={ANDROID_APP_HERO.primaryCta}
        secondaryCta={ANDROID_APP_HERO.secondaryCta}
      />
      <PremiumSitesTrustMarquee />
      <SiteEcommerceBenefitsSection
        kicker={ANDROID_APP_BENEFITS.kicker}
        title={ANDROID_APP_BENEFITS.title}
        subtitle={ANDROID_APP_BENEFITS.subtitle}
        items={ANDROID_APP_BENEFITS.items}
      />
      <PremiumChildEditorialShell kicker={ANDROID_APP_EDITORIAL.kicker} title={ANDROID_APP_EDITORIAL.title}>
        <AndroidEditorialContent />
      </PremiumChildEditorialShell>
      <SiteEcommerceAudienceSection
        kicker={ANDROID_APP_AUDIENCE.kicker}
        title={ANDROID_APP_AUDIENCE.title}
        subtitle={ANDROID_APP_AUDIENCE.subtitle}
        cards={ANDROID_APP_AUDIENCE.cards}
      />
      <SiteEcommerceCompareSection
        kicker={ANDROID_APP_COMPARE.kicker}
        title={ANDROID_APP_COMPARE.title}
        subtitle={ANDROID_APP_COMPARE.subtitle}
        columns={ANDROID_APP_COMPARE.columns}
        rows={ANDROID_APP_COMPARE.rows}
      />
      <SiteEcommerceProcessSection
        kicker={ANDROID_APP_PROCESS.kicker}
        title={ANDROID_APP_PROCESS.title}
        steps={ANDROID_APP_PROCESS.steps}
      />
      <SiteEcommerceStackSection
        kicker={ANDROID_APP_STACK.kicker}
        title={ANDROID_APP_STACK.title}
        body={ANDROID_APP_STACK.body}
        labels={ANDROID_APP_STACK.labels}
      />
      <PremiumCases
        caseStudies={caseStudies}
        sectionId="portfolio"
        kicker={ANDROID_APP_CASES.kicker}
        title={ANDROID_APP_CASES.title}
        intro={casesIntro}
      />
      <PremiumSitesTestimonials />
      <SiteEcommerceFaqSection
        kicker={ANDROID_APP_FAQ.kicker}
        title={ANDROID_APP_FAQ.title}
        subtitle={ANDROID_APP_FAQ.subtitle}
        items={ANDROID_APP_FAQ_ITEMS}
      />
      <SiteEcommerceBudgetSection
        title={ANDROID_APP_BUDGET.title}
        line={ANDROID_APP_BUDGET.line}
        note={ANDROID_APP_BUDGET.note}
      />
      <PremiumFinalCta
        title={ANDROID_APP_FINAL_CTA.title}
        primaryHref={ANDROID_APP_FINAL_CTA.primaryHref}
        primaryLabel={ANDROID_APP_FINAL_CTA.primaryLabel}
        secondaryHref={ANDROID_APP_FINAL_CTA.secondaryHref}
        secondaryLabel={ANDROID_APP_FINAL_CTA.secondaryLabel}
      />
    </main>
  );
}

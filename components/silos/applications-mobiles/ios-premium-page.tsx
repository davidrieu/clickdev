import Link from 'next/link';

import { IosEditorialContent } from '@/components/silos/applications-mobiles/ios-editorial-content';
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
  IOS_APP_AUDIENCE,
  IOS_APP_BENEFITS,
  IOS_APP_CASES,
  IOS_APP_COMPARE,
  IOS_APP_EDITORIAL,
  IOS_APP_FAQ,
  IOS_APP_FAQ_ITEMS,
  IOS_APP_FINAL_CTA,
  IOS_APP_HERO,
  IOS_APP_PROCESS,
  IOS_APP_STACK,
} from '@/lib/constants/ios-app-page';
import { prioritizeMobileCaseStudies } from '@/lib/content/mobile-app-cases';
import { getRecentMobileCaseStudies } from '@/lib/sanity/fetch';

export default async function IosPremiumPage() {
  const raw = await getRecentMobileCaseStudies();
  const caseStudies = prioritizeMobileCaseStudies(raw);

  const casesIntro = (
    <p className="mt-4 text-sm text-white/55 md:text-base">
      {IOS_APP_CASES.intro}{' '}
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
          { label: 'iOS' },
        ]}
      />
      <PremiumSitesChildHero
        chapter={IOS_APP_HERO.chapter}
        subline={IOS_APP_HERO.subline}
        h1={IOS_APP_HERO.h1}
        lead={IOS_APP_HERO.lead}
        primaryCta={IOS_APP_HERO.primaryCta}
        secondaryCta={IOS_APP_HERO.secondaryCta}
      />
      <PremiumSitesTrustMarquee />
      <SiteEcommerceBenefitsSection
        kicker={IOS_APP_BENEFITS.kicker}
        title={IOS_APP_BENEFITS.title}
        subtitle={IOS_APP_BENEFITS.subtitle}
        items={IOS_APP_BENEFITS.items}
      />
      <PremiumChildEditorialShell kicker={IOS_APP_EDITORIAL.kicker} title={IOS_APP_EDITORIAL.title}>
        <IosEditorialContent />
      </PremiumChildEditorialShell>
      <SiteEcommerceAudienceSection
        kicker={IOS_APP_AUDIENCE.kicker}
        title={IOS_APP_AUDIENCE.title}
        subtitle={IOS_APP_AUDIENCE.subtitle}
        cards={IOS_APP_AUDIENCE.cards}
      />
      <SiteEcommerceCompareSection
        kicker={IOS_APP_COMPARE.kicker}
        title={IOS_APP_COMPARE.title}
        subtitle={IOS_APP_COMPARE.subtitle}
        columns={IOS_APP_COMPARE.columns}
        rows={IOS_APP_COMPARE.rows}
      />
      <SiteEcommerceProcessSection
        kicker={IOS_APP_PROCESS.kicker}
        title={IOS_APP_PROCESS.title}
        steps={IOS_APP_PROCESS.steps}
      />
      <SiteEcommerceStackSection
        kicker={IOS_APP_STACK.kicker}
        title={IOS_APP_STACK.title}
        body={IOS_APP_STACK.body}
        labels={IOS_APP_STACK.labels}
        pillarHref="/applications-mobiles"
        pillarLabel="Applications mobiles"
      />
      <PremiumCases
        caseStudies={caseStudies}
        sectionId="portfolio"
        kicker={IOS_APP_CASES.kicker}
        title={IOS_APP_CASES.title}
        intro={casesIntro}
      />
      <PremiumSitesTestimonials />
      <SiteEcommerceFaqSection
        kicker={IOS_APP_FAQ.kicker}
        title={IOS_APP_FAQ.title}
        subtitle={IOS_APP_FAQ.subtitle}
        items={IOS_APP_FAQ_ITEMS}
      />
      <PremiumFinalCta
        title={IOS_APP_FINAL_CTA.title}
        primaryHref={IOS_APP_FINAL_CTA.primaryHref}
        primaryLabel={IOS_APP_FINAL_CTA.primaryLabel}
        secondaryHref={IOS_APP_FINAL_CTA.secondaryHref}
        secondaryLabel={IOS_APP_FINAL_CTA.secondaryLabel}
      />
    </main>
  );
}

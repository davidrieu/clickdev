import Link from 'next/link';

import { PwaEditorialContent } from '@/components/silos/applications-mobiles/pwa-editorial-content';
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
  PWA_APP_AUDIENCE,
  PWA_APP_BENEFITS,
  PWA_APP_CASES,
  PWA_APP_COMPARE,
  PWA_APP_EDITORIAL,
  PWA_APP_FAQ,
  PWA_APP_FAQ_ITEMS,
  PWA_APP_FINAL_CTA,
  PWA_APP_HERO,
  PWA_APP_PROCESS,
  PWA_APP_STACK,
} from '@/lib/constants/pwa-app-page';
import { getFeaturedCaseStudies } from '@/lib/sanity/fetch';

export default async function PwaPremiumPage() {
  const caseStudies = await getFeaturedCaseStudies();

  const casesIntro = (
    <p className="mt-4 text-sm text-white/55 md:text-base">
      {PWA_APP_CASES.intro}{' '}
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
          { label: 'PWA' },
        ]}
      />
      <PremiumSitesChildHero
        chapter={PWA_APP_HERO.chapter}
        subline={PWA_APP_HERO.subline}
        h1={PWA_APP_HERO.h1}
        lead={PWA_APP_HERO.lead}
        primaryCta={PWA_APP_HERO.primaryCta}
        secondaryCta={PWA_APP_HERO.secondaryCta}
        mockupId="applications-mobiles"
      />
      <PremiumSitesTrustMarquee />
      <SiteEcommerceBenefitsSection
        kicker={PWA_APP_BENEFITS.kicker}
        title={PWA_APP_BENEFITS.title}
        subtitle={PWA_APP_BENEFITS.subtitle}
        items={PWA_APP_BENEFITS.items}
      />
      <PremiumChildEditorialShell kicker={PWA_APP_EDITORIAL.kicker} title={PWA_APP_EDITORIAL.title}>
        <PwaEditorialContent />
      </PremiumChildEditorialShell>
      <SiteEcommerceAudienceSection
        kicker={PWA_APP_AUDIENCE.kicker}
        title={PWA_APP_AUDIENCE.title}
        subtitle={PWA_APP_AUDIENCE.subtitle}
        cards={PWA_APP_AUDIENCE.cards}
      />
      <SiteEcommerceCompareSection
        kicker={PWA_APP_COMPARE.kicker}
        title={PWA_APP_COMPARE.title}
        subtitle={PWA_APP_COMPARE.subtitle}
        columns={PWA_APP_COMPARE.columns}
        rows={PWA_APP_COMPARE.rows}
      />
      <SiteEcommerceProcessSection
        kicker={PWA_APP_PROCESS.kicker}
        title={PWA_APP_PROCESS.title}
        steps={PWA_APP_PROCESS.steps}
      />
      <SiteEcommerceStackSection
        kicker={PWA_APP_STACK.kicker}
        title={PWA_APP_STACK.title}
        body={PWA_APP_STACK.body}
        labels={PWA_APP_STACK.labels}
        pillarHref="/applications-mobiles"
        pillarLabel="Applications mobiles"
      />
      <PremiumCases
        caseStudies={caseStudies}
        sectionId="portfolio"
        kicker={PWA_APP_CASES.kicker}
        title={PWA_APP_CASES.title}
        intro={casesIntro}
      />
      <SiteEcommerceFaqSection
        kicker={PWA_APP_FAQ.kicker}
        title={PWA_APP_FAQ.title}
        subtitle={PWA_APP_FAQ.subtitle}
        items={PWA_APP_FAQ_ITEMS}
      />
      <PremiumFinalCta
        title={PWA_APP_FINAL_CTA.title}
        primaryHref={PWA_APP_FINAL_CTA.primaryHref}
        primaryLabel={PWA_APP_FINAL_CTA.primaryLabel}
        secondaryHref={PWA_APP_FINAL_CTA.secondaryHref}
        secondaryLabel={PWA_APP_FINAL_CTA.secondaryLabel}
      />
    </main>
  );
}

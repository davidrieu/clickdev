import Link from 'next/link';

import { ReactNativeEditorialContent } from '@/components/silos/applications-mobiles/react-native-editorial-content';
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
  REACT_NATIVE_APP_AUDIENCE,
  REACT_NATIVE_APP_BENEFITS,
  REACT_NATIVE_APP_CASES,
  REACT_NATIVE_APP_COMPARE,
  REACT_NATIVE_APP_EDITORIAL,
  REACT_NATIVE_APP_FAQ,
  REACT_NATIVE_APP_FAQ_ITEMS,
  REACT_NATIVE_APP_FINAL_CTA,
  REACT_NATIVE_APP_HERO,
  REACT_NATIVE_APP_PROCESS,
  REACT_NATIVE_APP_STACK,
} from '@/lib/constants/react-native-app-page';
import { prioritizeMobileCaseStudies } from '@/lib/content/mobile-app-cases';
import { getRecentMobileCaseStudies } from '@/lib/sanity/fetch';

export default async function ReactNativePremiumPage() {
  const raw = await getRecentMobileCaseStudies();
  const caseStudies = prioritizeMobileCaseStudies(raw);

  const casesIntro = (
    <p className="mt-4 text-sm text-white/55 md:text-base">
      {REACT_NATIVE_APP_CASES.intro}{' '}
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
          { label: 'React Native' },
        ]}
      />
      <PremiumSitesChildHero
        chapter={REACT_NATIVE_APP_HERO.chapter}
        subline={REACT_NATIVE_APP_HERO.subline}
        h1={REACT_NATIVE_APP_HERO.h1}
        lead={REACT_NATIVE_APP_HERO.lead}
        primaryCta={REACT_NATIVE_APP_HERO.primaryCta}
        secondaryCta={REACT_NATIVE_APP_HERO.secondaryCta}
      />
      <PremiumSitesTrustMarquee />
      <SiteEcommerceBenefitsSection
        kicker={REACT_NATIVE_APP_BENEFITS.kicker}
        title={REACT_NATIVE_APP_BENEFITS.title}
        subtitle={REACT_NATIVE_APP_BENEFITS.subtitle}
        items={REACT_NATIVE_APP_BENEFITS.items}
      />
      <PremiumChildEditorialShell kicker={REACT_NATIVE_APP_EDITORIAL.kicker} title={REACT_NATIVE_APP_EDITORIAL.title}>
        <ReactNativeEditorialContent />
      </PremiumChildEditorialShell>
      <SiteEcommerceAudienceSection
        kicker={REACT_NATIVE_APP_AUDIENCE.kicker}
        title={REACT_NATIVE_APP_AUDIENCE.title}
        subtitle={REACT_NATIVE_APP_AUDIENCE.subtitle}
        cards={REACT_NATIVE_APP_AUDIENCE.cards}
      />
      <SiteEcommerceCompareSection
        kicker={REACT_NATIVE_APP_COMPARE.kicker}
        title={REACT_NATIVE_APP_COMPARE.title}
        subtitle={REACT_NATIVE_APP_COMPARE.subtitle}
        columns={REACT_NATIVE_APP_COMPARE.columns}
        rows={REACT_NATIVE_APP_COMPARE.rows}
      />
      <SiteEcommerceProcessSection
        kicker={REACT_NATIVE_APP_PROCESS.kicker}
        title={REACT_NATIVE_APP_PROCESS.title}
        steps={REACT_NATIVE_APP_PROCESS.steps}
      />
      <SiteEcommerceStackSection
        kicker={REACT_NATIVE_APP_STACK.kicker}
        title={REACT_NATIVE_APP_STACK.title}
        body={REACT_NATIVE_APP_STACK.body}
        labels={REACT_NATIVE_APP_STACK.labels}
        pillarHref="/applications-mobiles"
        pillarLabel="Applications mobiles"
      />
      <PremiumCases
        caseStudies={caseStudies}
        sectionId="portfolio"
        kicker={REACT_NATIVE_APP_CASES.kicker}
        title={REACT_NATIVE_APP_CASES.title}
        intro={casesIntro}
      />
      <SiteEcommerceFaqSection
        kicker={REACT_NATIVE_APP_FAQ.kicker}
        title={REACT_NATIVE_APP_FAQ.title}
        subtitle={REACT_NATIVE_APP_FAQ.subtitle}
        items={REACT_NATIVE_APP_FAQ_ITEMS}
      />
      <PremiumFinalCta
        title={REACT_NATIVE_APP_FINAL_CTA.title}
        primaryHref={REACT_NATIVE_APP_FINAL_CTA.primaryHref}
        primaryLabel={REACT_NATIVE_APP_FINAL_CTA.primaryLabel}
        secondaryHref={REACT_NATIVE_APP_FINAL_CTA.secondaryHref}
        secondaryLabel={REACT_NATIVE_APP_FINAL_CTA.secondaryLabel}
      />
    </main>
  );
}

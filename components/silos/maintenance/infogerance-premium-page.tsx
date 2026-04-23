import Link from 'next/link';

import { InfogeranceEditorialContent } from '@/components/silos/maintenance/infogerance-editorial-content';
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
  INFOGERANCE_AUDIENCE,
  INFOGERANCE_BENEFITS,
  INFOGERANCE_CASES,
  INFOGERANCE_COMPARE,
  INFOGERANCE_EDITORIAL,
  INFOGERANCE_FAQ,
  INFOGERANCE_FAQ_ITEMS,
  INFOGERANCE_FINAL_CTA,
  INFOGERANCE_HERO,
  INFOGERANCE_PROCESS,
  INFOGERANCE_STACK,
} from '@/lib/constants/infogerance-page';
import { getFeaturedCaseStudies } from '@/lib/sanity/fetch';

export default async function InfogerancePremiumPage() {
const caseStudies = await getFeaturedCaseStudies();
  const casesIntro = (
    <p className="mt-4 text-sm text-white/55 md:text-base">
      {INFOGERANCE_CASES.intro}{' '}
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
          { label: 'Infogérance' },
        ]}
      />
      <PremiumSitesChildHero
        chapter={INFOGERANCE_HERO.chapter}
        subline={INFOGERANCE_HERO.subline}
        h1={INFOGERANCE_HERO.h1}
        lead={INFOGERANCE_HERO.lead}
        primaryCta={INFOGERANCE_HERO.primaryCta}
        secondaryCta={INFOGERANCE_HERO.secondaryCta}
      />
      <PremiumSitesTrustMarquee />
      <SiteEcommerceBenefitsSection
        kicker={INFOGERANCE_BENEFITS.kicker}
        title={INFOGERANCE_BENEFITS.title}
        subtitle={INFOGERANCE_BENEFITS.subtitle}
        items={INFOGERANCE_BENEFITS.items}
      />
      <PremiumChildEditorialShell
        kicker={INFOGERANCE_EDITORIAL.kicker}
        title={INFOGERANCE_EDITORIAL.title}
      >
        <InfogeranceEditorialContent />
      </PremiumChildEditorialShell>
      <SiteEcommerceAudienceSection
        kicker={INFOGERANCE_AUDIENCE.kicker}
        title={INFOGERANCE_AUDIENCE.title}
        subtitle={INFOGERANCE_AUDIENCE.subtitle}
        cards={INFOGERANCE_AUDIENCE.cards}
      />
      <SiteEcommerceCompareSection
        kicker={INFOGERANCE_COMPARE.kicker}
        title={INFOGERANCE_COMPARE.title}
        subtitle={INFOGERANCE_COMPARE.subtitle}
        columns={INFOGERANCE_COMPARE.columns}
        rows={INFOGERANCE_COMPARE.rows}
      />
      <SiteEcommerceProcessSection
        kicker={INFOGERANCE_PROCESS.kicker}
        title={INFOGERANCE_PROCESS.title}
        steps={INFOGERANCE_PROCESS.steps}
      />
      <SiteEcommerceStackSection
        kicker={INFOGERANCE_STACK.kicker}
        title={INFOGERANCE_STACK.title}
        body={INFOGERANCE_STACK.body}
        labels={INFOGERANCE_STACK.labels}
      />
      <PremiumCases
        caseStudies={caseStudies}
        sectionId="portfolio"
        kicker={INFOGERANCE_CASES.kicker}
        title={INFOGERANCE_CASES.title}
        intro={casesIntro}
      />
      <SiteEcommerceFaqSection
        kicker={INFOGERANCE_FAQ.kicker}
        title={INFOGERANCE_FAQ.title}
        subtitle={INFOGERANCE_FAQ.subtitle}
        items={INFOGERANCE_FAQ_ITEMS}
      />
      <PremiumFinalCta
        title={INFOGERANCE_FINAL_CTA.title}
        primaryHref={INFOGERANCE_FINAL_CTA.primaryHref}
        primaryLabel={INFOGERANCE_FINAL_CTA.primaryLabel}
        secondaryHref={INFOGERANCE_FINAL_CTA.secondaryHref}
        secondaryLabel={INFOGERANCE_FINAL_CTA.secondaryLabel}
      />
    </main>
  );
}

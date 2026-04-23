import Link from 'next/link';

import { PremiumChildEditorialShell } from '@/components/silos/sites-internet/premium-child-editorial-shell';
import { PremiumFinalCta } from '@/components/silos/sites-internet/premium-final-cta';
import { PremiumCases } from '@/components/silos/sites-internet/premium-cases';
import { PremiumSitesChildBreadcrumb } from '@/components/silos/sites-internet/premium-sites-child-breadcrumb';
import { PremiumSitesChildHero } from '@/components/silos/sites-internet/premium-sites-child-hero';
import { PremiumSitesTrustMarquee } from '@/components/silos/sites-internet/premium-sites-trust-marquee';
import { IntranetExtranetEditorialContent } from '@/components/silos/sites-internet/intranet-extranet-editorial-content';
import {
  SiteEcommerceAudienceSection,
  SiteEcommerceBenefitsSection,
  SiteEcommerceCompareSection,
  SiteEcommerceFaqSection,
  SiteEcommerceProcessSection,
  SiteEcommerceStackSection,
} from '@/components/silos/sites-internet/site-ecommerce-blocks';
import {
  INTRANET_EXTRANET_AUDIENCE,
  INTRANET_EXTRANET_BENEFITS,
  INTRANET_EXTRANET_CASES,
  INTRANET_EXTRANET_COMPARE,
  INTRANET_EXTRANET_EDITORIAL,
  INTRANET_EXTRANET_FAQ,
  INTRANET_EXTRANET_FAQ_ITEMS,
  INTRANET_EXTRANET_FINAL_CTA,
  INTRANET_EXTRANET_HERO,
  INTRANET_EXTRANET_PROCESS,
  INTRANET_EXTRANET_STACK,
} from '@/lib/constants/intranet-extranet-page';
import { prioritizeVitrineCaseStudies } from '@/lib/content/site-vitrine-cases';
import { getRecentWebCaseStudies } from '@/lib/sanity/fetch';

export default async function IntranetExtranetPremiumPage() {
  const raw = await getRecentWebCaseStudies();
  const caseStudies = prioritizeVitrineCaseStudies(raw);

  const casesIntro = (
    <p className="mt-4 text-sm text-white/55 md:text-base">
      {INTRANET_EXTRANET_CASES.intro}{' '}
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
          { label: 'Intranet / extranet' },
        ]}
      />
      <PremiumSitesChildHero
        chapter={INTRANET_EXTRANET_HERO.chapter}
        subline={INTRANET_EXTRANET_HERO.subline}
        h1={INTRANET_EXTRANET_HERO.h1}
        lead={INTRANET_EXTRANET_HERO.lead}
        primaryCta={INTRANET_EXTRANET_HERO.primaryCta}
        secondaryCta={INTRANET_EXTRANET_HERO.secondaryCta}
      />
      <PremiumSitesTrustMarquee />
      <SiteEcommerceBenefitsSection
        kicker={INTRANET_EXTRANET_BENEFITS.kicker}
        title={INTRANET_EXTRANET_BENEFITS.title}
        subtitle={INTRANET_EXTRANET_BENEFITS.subtitle}
        items={INTRANET_EXTRANET_BENEFITS.items}
      />
      <PremiumChildEditorialShell kicker={INTRANET_EXTRANET_EDITORIAL.kicker} title={INTRANET_EXTRANET_EDITORIAL.title}>
        <IntranetExtranetEditorialContent />
      </PremiumChildEditorialShell>
      <SiteEcommerceAudienceSection
        kicker={INTRANET_EXTRANET_AUDIENCE.kicker}
        title={INTRANET_EXTRANET_AUDIENCE.title}
        subtitle={INTRANET_EXTRANET_AUDIENCE.subtitle}
        cards={INTRANET_EXTRANET_AUDIENCE.cards}
      />
      <SiteEcommerceCompareSection
        kicker={INTRANET_EXTRANET_COMPARE.kicker}
        title={INTRANET_EXTRANET_COMPARE.title}
        subtitle={INTRANET_EXTRANET_COMPARE.subtitle}
        columns={INTRANET_EXTRANET_COMPARE.columns}
        rows={INTRANET_EXTRANET_COMPARE.rows}
      />
      <SiteEcommerceProcessSection
        kicker={INTRANET_EXTRANET_PROCESS.kicker}
        title={INTRANET_EXTRANET_PROCESS.title}
        steps={INTRANET_EXTRANET_PROCESS.steps}
      />
      <SiteEcommerceStackSection
        kicker={INTRANET_EXTRANET_STACK.kicker}
        title={INTRANET_EXTRANET_STACK.title}
        body={INTRANET_EXTRANET_STACK.body}
        labels={INTRANET_EXTRANET_STACK.labels}
      />
      <PremiumCases
        caseStudies={caseStudies}
        sectionId="portfolio"
        kicker={INTRANET_EXTRANET_CASES.kicker}
        title={INTRANET_EXTRANET_CASES.title}
        intro={casesIntro}
      />
      <SiteEcommerceFaqSection
        kicker={INTRANET_EXTRANET_FAQ.kicker}
        title={INTRANET_EXTRANET_FAQ.title}
        subtitle={INTRANET_EXTRANET_FAQ.subtitle}
        items={INTRANET_EXTRANET_FAQ_ITEMS}
      />
      <PremiumFinalCta
        title={INTRANET_EXTRANET_FINAL_CTA.title}
        primaryHref={INTRANET_EXTRANET_FINAL_CTA.primaryHref}
        primaryLabel={INTRANET_EXTRANET_FINAL_CTA.primaryLabel}
        secondaryHref={INTRANET_EXTRANET_FINAL_CTA.secondaryHref}
        secondaryLabel={INTRANET_EXTRANET_FINAL_CTA.secondaryLabel}
      />
    </main>
  );
}

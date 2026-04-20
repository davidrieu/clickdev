import Link from 'next/link';

import { PremiumChildEditorialShell } from '@/components/silos/sites-internet/premium-child-editorial-shell';
import { PremiumFinalCta } from '@/components/silos/sites-internet/premium-final-cta';
import { PremiumCases } from '@/components/silos/sites-internet/premium-cases';
import { PremiumSitesChildBreadcrumb } from '@/components/silos/sites-internet/premium-sites-child-breadcrumb';
import { PremiumSitesChildHero } from '@/components/silos/sites-internet/premium-sites-child-hero';
import { PremiumSitesTestimonials } from '@/components/silos/sites-internet/premium-sites-testimonials';
import { PremiumSitesTrustMarquee } from '@/components/silos/sites-internet/premium-sites-trust-marquee';
import { SiteVitrineEditorialContent } from '@/components/silos/sites-internet/site-vitrine-editorial-content';
import {
  SiteEcommerceAudienceSection,
  SiteEcommerceBenefitsSection,
  SiteEcommerceCompareSection,
  SiteEcommerceFaqSection,
  SiteEcommerceProcessSection,
  SiteEcommerceStackSection,
} from '@/components/silos/sites-internet/site-ecommerce-blocks';
import {
  SITE_VITRINE_AUDIENCE,
  SITE_VITRINE_BENEFITS,
  SITE_VITRINE_CASES,
  SITE_VITRINE_COMPARE,
  SITE_VITRINE_EDITORIAL,
  SITE_VITRINE_FAQ,
  SITE_VITRINE_FAQ_ITEMS,
  SITE_VITRINE_FINAL_CTA,
  SITE_VITRINE_HERO,
  SITE_VITRINE_PROCESS,
  SITE_VITRINE_STACK,
} from '@/lib/constants/site-vitrine-page';
import { prioritizeVitrineCaseStudies } from '@/lib/content/site-vitrine-cases';
import { getRecentWebCaseStudies } from '@/lib/sanity/fetch';

export default async function SiteVitrinePremiumPage() {
  const raw = await getRecentWebCaseStudies();
  const caseStudies = prioritizeVitrineCaseStudies(raw);

  const casesIntro = (
    <p className="mt-4 text-sm text-white/55 md:text-base">
      {SITE_VITRINE_CASES.intro}{' '}
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
          { label: 'Site vitrine' },
        ]}
      />
      <PremiumSitesChildHero
        chapter={SITE_VITRINE_HERO.chapter}
        subline={SITE_VITRINE_HERO.subline}
        h1={SITE_VITRINE_HERO.h1}
        lead={SITE_VITRINE_HERO.lead}
        primaryCta={SITE_VITRINE_HERO.primaryCta}
        secondaryCta={SITE_VITRINE_HERO.secondaryCta}
      />
      <PremiumSitesTrustMarquee />
      <SiteEcommerceBenefitsSection
        kicker={SITE_VITRINE_BENEFITS.kicker}
        title={SITE_VITRINE_BENEFITS.title}
        subtitle={SITE_VITRINE_BENEFITS.subtitle}
        items={SITE_VITRINE_BENEFITS.items}
      />
      <PremiumChildEditorialShell kicker={SITE_VITRINE_EDITORIAL.kicker} title={SITE_VITRINE_EDITORIAL.title}>
        <SiteVitrineEditorialContent />
      </PremiumChildEditorialShell>
      <SiteEcommerceAudienceSection
        kicker={SITE_VITRINE_AUDIENCE.kicker}
        title={SITE_VITRINE_AUDIENCE.title}
        subtitle={SITE_VITRINE_AUDIENCE.subtitle}
        cards={SITE_VITRINE_AUDIENCE.cards}
      />
      <SiteEcommerceCompareSection
        kicker={SITE_VITRINE_COMPARE.kicker}
        title={SITE_VITRINE_COMPARE.title}
        subtitle={SITE_VITRINE_COMPARE.subtitle}
        columns={SITE_VITRINE_COMPARE.columns}
        rows={SITE_VITRINE_COMPARE.rows}
      />
      <SiteEcommerceProcessSection
        kicker={SITE_VITRINE_PROCESS.kicker}
        title={SITE_VITRINE_PROCESS.title}
        steps={SITE_VITRINE_PROCESS.steps}
      />
      <SiteEcommerceStackSection
        kicker={SITE_VITRINE_STACK.kicker}
        title={SITE_VITRINE_STACK.title}
        body={SITE_VITRINE_STACK.body}
        labels={SITE_VITRINE_STACK.labels}
      />
      <PremiumCases
        caseStudies={caseStudies}
        sectionId="portfolio"
        kicker={SITE_VITRINE_CASES.kicker}
        title={SITE_VITRINE_CASES.title}
        intro={casesIntro}
      />
      <PremiumSitesTestimonials />
      <SiteEcommerceFaqSection
        kicker={SITE_VITRINE_FAQ.kicker}
        title={SITE_VITRINE_FAQ.title}
        subtitle={SITE_VITRINE_FAQ.subtitle}
        items={SITE_VITRINE_FAQ_ITEMS}
      />
      <PremiumFinalCta
        title={SITE_VITRINE_FINAL_CTA.title}
        primaryHref={SITE_VITRINE_FINAL_CTA.primaryHref}
        primaryLabel={SITE_VITRINE_FINAL_CTA.primaryLabel}
        secondaryHref={SITE_VITRINE_FINAL_CTA.secondaryHref}
        secondaryLabel={SITE_VITRINE_FINAL_CTA.secondaryLabel}
      />
    </main>
  );
}

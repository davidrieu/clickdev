import Link from 'next/link';

import { IaGenerativeEcommerceEditorialContent } from '@/components/silos/ia/ia-generative-ecommerce-editorial-content';
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
  IA_GENERATIVE_ECOMMERCE_AUDIENCE,
  IA_GENERATIVE_ECOMMERCE_BENEFITS,
  IA_GENERATIVE_ECOMMERCE_BUDGET,
  IA_GENERATIVE_ECOMMERCE_CASES,
  IA_GENERATIVE_ECOMMERCE_COMPARE,
  IA_GENERATIVE_ECOMMERCE_EDITORIAL,
  IA_GENERATIVE_ECOMMERCE_FAQ,
  IA_GENERATIVE_ECOMMERCE_FAQ_ITEMS,
  IA_GENERATIVE_ECOMMERCE_FINAL_CTA,
  IA_GENERATIVE_ECOMMERCE_HERO,
  IA_GENERATIVE_ECOMMERCE_PROCESS,
  IA_GENERATIVE_ECOMMERCE_STACK,
} from '@/lib/constants/ia-generative-ecommerce-page';
import { prioritizeIaEcommerceCaseStudies } from '@/lib/content/ia-ecommerce-cases';
import { getAllCaseStudyTeasers } from '@/lib/sanity/fetch';

export default async function IaGenerativeEcommercePremiumPage() {
  const raw = await getAllCaseStudyTeasers();
  const caseStudies = prioritizeIaEcommerceCaseStudies(raw);

  const casesIntro = (
    <p className="mt-4 text-sm text-white/55 md:text-base">
      {IA_GENERATIVE_ECOMMERCE_CASES.intro}{' '}
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
          { label: 'IA', href: '/ia' },
          { label: 'IA & e-commerce' },
        ]}
      />
      <PremiumSitesChildHero
        chapter={IA_GENERATIVE_ECOMMERCE_HERO.chapter}
        subline={IA_GENERATIVE_ECOMMERCE_HERO.subline}
        h1={IA_GENERATIVE_ECOMMERCE_HERO.h1}
        lead={IA_GENERATIVE_ECOMMERCE_HERO.lead}
        primaryCta={IA_GENERATIVE_ECOMMERCE_HERO.primaryCta}
        secondaryCta={IA_GENERATIVE_ECOMMERCE_HERO.secondaryCta}
      />
      <PremiumSitesTrustMarquee />
      <SiteEcommerceBenefitsSection
        kicker={IA_GENERATIVE_ECOMMERCE_BENEFITS.kicker}
        title={IA_GENERATIVE_ECOMMERCE_BENEFITS.title}
        subtitle={IA_GENERATIVE_ECOMMERCE_BENEFITS.subtitle}
        items={IA_GENERATIVE_ECOMMERCE_BENEFITS.items}
      />
      <PremiumChildEditorialShell kicker={IA_GENERATIVE_ECOMMERCE_EDITORIAL.kicker} title={IA_GENERATIVE_ECOMMERCE_EDITORIAL.title}>
        <IaGenerativeEcommerceEditorialContent />
      </PremiumChildEditorialShell>
      <SiteEcommerceAudienceSection
        kicker={IA_GENERATIVE_ECOMMERCE_AUDIENCE.kicker}
        title={IA_GENERATIVE_ECOMMERCE_AUDIENCE.title}
        subtitle={IA_GENERATIVE_ECOMMERCE_AUDIENCE.subtitle}
        cards={IA_GENERATIVE_ECOMMERCE_AUDIENCE.cards}
      />
      <SiteEcommerceCompareSection
        kicker={IA_GENERATIVE_ECOMMERCE_COMPARE.kicker}
        title={IA_GENERATIVE_ECOMMERCE_COMPARE.title}
        subtitle={IA_GENERATIVE_ECOMMERCE_COMPARE.subtitle}
        columns={IA_GENERATIVE_ECOMMERCE_COMPARE.columns}
        rows={IA_GENERATIVE_ECOMMERCE_COMPARE.rows}
      />
      <SiteEcommerceProcessSection
        kicker={IA_GENERATIVE_ECOMMERCE_PROCESS.kicker}
        title={IA_GENERATIVE_ECOMMERCE_PROCESS.title}
        steps={IA_GENERATIVE_ECOMMERCE_PROCESS.steps}
      />
      <SiteEcommerceStackSection
        kicker={IA_GENERATIVE_ECOMMERCE_STACK.kicker}
        title={IA_GENERATIVE_ECOMMERCE_STACK.title}
        body={IA_GENERATIVE_ECOMMERCE_STACK.body}
        labels={IA_GENERATIVE_ECOMMERCE_STACK.labels}
      />
      <PremiumCases
        caseStudies={caseStudies}
        sectionId="portfolio"
        kicker={IA_GENERATIVE_ECOMMERCE_CASES.kicker}
        title={IA_GENERATIVE_ECOMMERCE_CASES.title}
        intro={casesIntro}
      />
      <PremiumSitesTestimonials />
      <SiteEcommerceFaqSection
        kicker={IA_GENERATIVE_ECOMMERCE_FAQ.kicker}
        title={IA_GENERATIVE_ECOMMERCE_FAQ.title}
        subtitle={IA_GENERATIVE_ECOMMERCE_FAQ.subtitle}
        items={IA_GENERATIVE_ECOMMERCE_FAQ_ITEMS}
      />
      <SiteEcommerceBudgetSection
        title={IA_GENERATIVE_ECOMMERCE_BUDGET.title}
        line={IA_GENERATIVE_ECOMMERCE_BUDGET.line}
        note={IA_GENERATIVE_ECOMMERCE_BUDGET.note}
      />
      <PremiumFinalCta
        title={IA_GENERATIVE_ECOMMERCE_FINAL_CTA.title}
        primaryHref={IA_GENERATIVE_ECOMMERCE_FINAL_CTA.primaryHref}
        primaryLabel={IA_GENERATIVE_ECOMMERCE_FINAL_CTA.primaryLabel}
        secondaryHref={IA_GENERATIVE_ECOMMERCE_FINAL_CTA.secondaryHref}
        secondaryLabel={IA_GENERATIVE_ECOMMERCE_FINAL_CTA.secondaryLabel}
      />
    </main>
  );
}

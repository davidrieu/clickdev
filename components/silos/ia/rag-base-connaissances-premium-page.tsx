import Link from 'next/link';

import { RagBaseConnaissancesEditorialContent } from '@/components/silos/ia/rag-base-connaissances-editorial-content';
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
  RAG_BASE_CONNAISSANCES_AUDIENCE,
  RAG_BASE_CONNAISSANCES_BENEFITS,
  RAG_BASE_CONNAISSANCES_CASES,
  RAG_BASE_CONNAISSANCES_COMPARE,
  RAG_BASE_CONNAISSANCES_EDITORIAL,
  RAG_BASE_CONNAISSANCES_FAQ,
  RAG_BASE_CONNAISSANCES_FAQ_ITEMS,
  RAG_BASE_CONNAISSANCES_FINAL_CTA,
  RAG_BASE_CONNAISSANCES_HERO,
  RAG_BASE_CONNAISSANCES_PROCESS,
  RAG_BASE_CONNAISSANCES_STACK,
} from '@/lib/constants/rag-base-connaissances-page';
import { prioritizeIaCaseStudies } from '@/lib/content/ia-case-studies';
import { getAllCaseStudyTeasers } from '@/lib/sanity/fetch';

export default async function RagBaseConnaissancesPremiumPage() {
  const raw = await getAllCaseStudyTeasers();
  const caseStudies = prioritizeIaCaseStudies(raw);

  const casesIntro = (
    <p className="mt-4 text-sm text-white/55 md:text-base">
      {RAG_BASE_CONNAISSANCES_CASES.intro}{' '}
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
          { label: 'Assistant sur vos documents' },
        ]}
      />
      <PremiumSitesChildHero
        chapter={RAG_BASE_CONNAISSANCES_HERO.chapter}
        subline={RAG_BASE_CONNAISSANCES_HERO.subline}
        h1={RAG_BASE_CONNAISSANCES_HERO.h1}
        lead={RAG_BASE_CONNAISSANCES_HERO.lead}
        primaryCta={RAG_BASE_CONNAISSANCES_HERO.primaryCta}
        secondaryCta={RAG_BASE_CONNAISSANCES_HERO.secondaryCta}
      />
      <PremiumSitesTrustMarquee />
      <SiteEcommerceBenefitsSection
        kicker={RAG_BASE_CONNAISSANCES_BENEFITS.kicker}
        title={RAG_BASE_CONNAISSANCES_BENEFITS.title}
        subtitle={RAG_BASE_CONNAISSANCES_BENEFITS.subtitle}
        items={RAG_BASE_CONNAISSANCES_BENEFITS.items}
      />
      <PremiumChildEditorialShell kicker={RAG_BASE_CONNAISSANCES_EDITORIAL.kicker} title={RAG_BASE_CONNAISSANCES_EDITORIAL.title}>
        <RagBaseConnaissancesEditorialContent />
      </PremiumChildEditorialShell>
      <SiteEcommerceAudienceSection
        kicker={RAG_BASE_CONNAISSANCES_AUDIENCE.kicker}
        title={RAG_BASE_CONNAISSANCES_AUDIENCE.title}
        subtitle={RAG_BASE_CONNAISSANCES_AUDIENCE.subtitle}
        cards={RAG_BASE_CONNAISSANCES_AUDIENCE.cards}
      />
      <SiteEcommerceCompareSection
        kicker={RAG_BASE_CONNAISSANCES_COMPARE.kicker}
        title={RAG_BASE_CONNAISSANCES_COMPARE.title}
        subtitle={RAG_BASE_CONNAISSANCES_COMPARE.subtitle}
        columns={RAG_BASE_CONNAISSANCES_COMPARE.columns}
        rows={RAG_BASE_CONNAISSANCES_COMPARE.rows}
      />
      <SiteEcommerceProcessSection
        kicker={RAG_BASE_CONNAISSANCES_PROCESS.kicker}
        title={RAG_BASE_CONNAISSANCES_PROCESS.title}
        steps={RAG_BASE_CONNAISSANCES_PROCESS.steps}
      />
      <SiteEcommerceStackSection
        kicker={RAG_BASE_CONNAISSANCES_STACK.kicker}
        title={RAG_BASE_CONNAISSANCES_STACK.title}
        body={RAG_BASE_CONNAISSANCES_STACK.body}
        labels={RAG_BASE_CONNAISSANCES_STACK.labels}
        pillarHref="/ia"
        pillarLabel="IA"
      />
      <PremiumCases
        caseStudies={caseStudies}
        sectionId="portfolio"
        kicker={RAG_BASE_CONNAISSANCES_CASES.kicker}
        title={RAG_BASE_CONNAISSANCES_CASES.title}
        intro={casesIntro}
      />
      <SiteEcommerceFaqSection
        kicker={RAG_BASE_CONNAISSANCES_FAQ.kicker}
        title={RAG_BASE_CONNAISSANCES_FAQ.title}
        subtitle={RAG_BASE_CONNAISSANCES_FAQ.subtitle}
        items={RAG_BASE_CONNAISSANCES_FAQ_ITEMS}
      />
      <PremiumFinalCta
        title={RAG_BASE_CONNAISSANCES_FINAL_CTA.title}
        primaryHref={RAG_BASE_CONNAISSANCES_FINAL_CTA.primaryHref}
        primaryLabel={RAG_BASE_CONNAISSANCES_FINAL_CTA.primaryLabel}
        secondaryHref={RAG_BASE_CONNAISSANCES_FINAL_CTA.secondaryHref}
        secondaryLabel={RAG_BASE_CONNAISSANCES_FINAL_CTA.secondaryLabel}
      />
    </main>
  );
}

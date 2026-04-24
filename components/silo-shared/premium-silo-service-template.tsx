import Link from 'next/link';
import type { ReactNode } from 'react';

import { PremiumChildEditorialShell } from '@/components/silos/sites-internet/premium-child-editorial-shell';
import { PremiumFinalCta } from '@/components/silos/sites-internet/premium-final-cta';
import { PremiumCases } from '@/components/silos/sites-internet/premium-cases';
import { PremiumSitesChildBreadcrumb } from '@/components/silos/sites-internet/premium-sites-child-breadcrumb';
import type { HeroSiloMockupId } from '@/components/silos/hero/hero-silo-mockup';
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
import { getFeaturedCaseStudies } from '@/lib/sanity/fetch';

type BreadcrumbItem = { label: string; href?: string };

type Cta = { href: string; label: string };

type Hero = {
  chapter: string;
  subline: string;
  h1: string;
  lead: string;
  primaryCta: Cta;
  secondaryCta: Cta;
};

type Block4 = { kicker: string; title: string; subtitle: string; items: readonly { title: string; body: string }[] };

type Editorial = { kicker: string; title: string };

type Audience = { kicker: string; title: string; subtitle: string; cards: readonly { title: string; body: string }[] };

type Compare = {
  kicker: string;
  title: string;
  subtitle: string;
  columns: readonly [string, string, string];
  rows: readonly { label: string; c: readonly [boolean, boolean, boolean] }[];
};

type Process = {
  kicker: string;
  title: string;
  steps: readonly { n: string; title: string; body: string }[];
};

type Stack = { kicker: string; title: string; body: string; labels: readonly string[] };

type Cases = { kicker: string; title: string; intro: string };

type Faq = { kicker: string; title: string; subtitle: string };

type FaqItem = { question: string; answer: string };

type FinalCta = { title: string; primaryHref: string; primaryLabel: string; secondaryHref: string; secondaryLabel: string };

export type PremiumSiloServiceTemplateProps = {
  breadcrumbItems: BreadcrumbItem[];
  hero: Hero;
  benefits: Block4;
  editorial: Editorial;
  editorialContent: ReactNode;
  audience: Audience;
  compare: Compare;
  process: Process;
  stack: Stack;
  cases: Cases;
  faq: Faq;
  faqItems: readonly FaqItem[];
  finalCta: FinalCta;
  /** Page pilier du silo (lien « Retour à … » dans le bloc stack). */
  stackPillar: { href: string; label: string };
  /** Aperçu visuel du hero (wireframe) aligné sur le silo. */
  heroMockupId: HeroSiloMockupId;
};

export async function PremiumSiloServiceTemplate(props: PremiumSiloServiceTemplateProps) {
  const caseStudies = await getFeaturedCaseStudies();

  const casesIntro = (
    <p className="mt-4 text-sm text-white/55 md:text-base">
      {props.cases.intro}{' '}
      <Link href="/realisations" className="text-white/70 underline-offset-4 transition hover:text-white hover:underline">
        Voir les réalisations
      </Link>
      .
    </p>
  );

  return (
    <main className="bg-black text-white">
      <PremiumSitesChildBreadcrumb items={props.breadcrumbItems} />
      <PremiumSitesChildHero
        chapter={props.hero.chapter}
        subline={props.hero.subline}
        h1={props.hero.h1}
        lead={props.hero.lead}
        primaryCta={props.hero.primaryCta}
        secondaryCta={props.hero.secondaryCta}
        mockupId={props.heroMockupId}
      />
      <PremiumSitesTrustMarquee />
      <SiteEcommerceBenefitsSection
        kicker={props.benefits.kicker}
        title={props.benefits.title}
        subtitle={props.benefits.subtitle}
        items={props.benefits.items}
      />
      <PremiumChildEditorialShell kicker={props.editorial.kicker} title={props.editorial.title}>
        {props.editorialContent}
      </PremiumChildEditorialShell>
      <SiteEcommerceAudienceSection
        kicker={props.audience.kicker}
        title={props.audience.title}
        subtitle={props.audience.subtitle}
        cards={props.audience.cards}
      />
      <SiteEcommerceCompareSection
        kicker={props.compare.kicker}
        title={props.compare.title}
        subtitle={props.compare.subtitle}
        columns={props.compare.columns}
        rows={props.compare.rows}
      />
      <SiteEcommerceProcessSection kicker={props.process.kicker} title={props.process.title} steps={props.process.steps} />
      <SiteEcommerceStackSection
        kicker={props.stack.kicker}
        title={props.stack.title}
        body={props.stack.body}
        labels={props.stack.labels}
        pillarHref={props.stackPillar.href}
        pillarLabel={props.stackPillar.label}
      />
      <PremiumCases
        caseStudies={caseStudies}
        sectionId="portfolio"
        kicker={props.cases.kicker}
        title={props.cases.title}
        intro={casesIntro}
      />
      <SiteEcommerceFaqSection
        kicker={props.faq.kicker}
        title={props.faq.title}
        subtitle={props.faq.subtitle}
        items={props.faqItems}
      />
      <PremiumFinalCta
        title={props.finalCta.title}
        primaryHref={props.finalCta.primaryHref}
        primaryLabel={props.finalCta.primaryLabel}
        secondaryHref={props.finalCta.secondaryHref}
        secondaryLabel={props.finalCta.secondaryLabel}
      />
    </main>
  );
}

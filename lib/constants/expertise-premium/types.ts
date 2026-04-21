import type { PremiumChildCompareRow } from '@/components/silos/sites-internet/site-ecommerce-blocks';
import type { ExpertiseSlug } from '@/lib/constants/sitemap';

export type ExpertiseFaqItem = { question: string; answer: string };

/** Données complètes d’une fiche expertise premium (même squelette que les pages filles Sites internet). */
export type ExpertisePremiumDoc = {
  slug: ExpertiseSlug;
  metaTitle: string;
  metaDescription: string;
  keywords: readonly string[];
  hero: {
    chapter: string;
    subline: string;
    h1: string;
    lead: string;
    primaryCta: { href: string; label: string };
    secondaryCta: { href: string; label: string };
  };
  benefits: {
    kicker: string;
    title: string;
    subtitle: string;
    items: readonly { title: string; body: string }[];
  };
  editorial: {
    kicker: string;
    title: string;
    paragraphs: readonly string[];
  };
  audience: {
    kicker: string;
    title: string;
    subtitle: string;
    cards: readonly { title: string; body: string }[];
  };
  compare: {
    kicker: string;
    title: string;
    subtitle: string;
    columns: readonly [string, string, string];
    rows: readonly PremiumChildCompareRow[];
  };
  process: {
    kicker: string;
    title: string;
    steps: readonly { n: string; title: string; body: string }[];
  };
  stack: {
    kicker: string;
    title: string;
    body: string;
    labels: readonly string[];
  };
  cases: {
    kicker: string;
    title: string;
    intro: string;
  };
  faq: {
    kicker: string;
    title: string;
    subtitle: string;
    items: readonly ExpertiseFaqItem[];
  };
  finalCta: {
    title: string;
    primaryHref: string;
    primaryLabel: string;
    secondaryHref: string;
    secondaryLabel: string;
  };
};

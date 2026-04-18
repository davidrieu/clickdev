import type { ReactNode } from "react";
import {
  MarketingDualCta,
} from "@/components/templates/marketing-dual-cta";
import {
  MarketingEyebrow,
  MarketingLead,
  MarketingPageTitle,
  MarketingRelatedPagesNav,
  MarketingTldr,
} from "@/components/templates/marketing-editorial";
import { MarketingArticleShell } from "@/components/templates/marketing-article-shell";
import { MarketingPageContainer } from "@/components/templates/marketing-page-container";
import { MarketingProseSection } from "@/components/templates/marketing-prose-section";
import type { MarketingSectionBlock } from "@/lib/types/marketing-prose";

export type SiloPillarSection = MarketingSectionBlock;

export type SiloPillarLayoutProps = {
  eyebrow: string;
  h1: string;
  lead: string;
  tldr: string[];
  sections: SiloPillarSection[];
  /** Liens vers les pages filles du silo (menu / footer). */
  childLinks?: { label: string; href: string }[];
  /** Contenu additionnel sous les sections (ex. FAQ). */
  afterSections?: ReactNode;
};

export function SiloPillarLayout({
  eyebrow,
  h1,
  lead,
  tldr,
  sections,
  childLinks,
  afterSections,
}: SiloPillarLayoutProps) {
  return (
    <MarketingArticleShell aurora="medium">
      <MarketingPageContainer width="article">
        <MarketingEyebrow>{eyebrow}</MarketingEyebrow>
        <MarketingPageTitle variant="pillar">{h1}</MarketingPageTitle>
        <MarketingLead>{lead}</MarketingLead>
        <MarketingTldr items={tldr} />
        <MarketingRelatedPagesNav links={childLinks ?? []} />

        {sections.map((s, i) => (
          <MarketingProseSection key={s.heading} block={s} index={i} density="pillar" />
        ))}

        {afterSections}

        <MarketingDualCta
          primary={{ href: "/devis/", label: "Demander un devis →" }}
          secondary={{ href: "/contact/", label: "Contact" }}
        />
      </MarketingPageContainer>
    </MarketingArticleShell>
  );
}

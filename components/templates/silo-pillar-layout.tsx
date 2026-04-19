import type { ReactNode } from "react";
import { MarketingHeroStage } from "@/components/marketing/marketing-hero-stage";
import { MarketingTldrBento } from "@/components/marketing/marketing-tldr-bento";
import { MarketingDualCta } from "@/components/templates/marketing-dual-cta";
import { MarketingRelatedPagesNav } from "@/components/templates/marketing-editorial";
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
    <MarketingArticleShell>
      <MarketingPageContainer width="article">
        <MarketingHeroStage variant="pillar" eyebrow={eyebrow} title={h1} lead={lead} />
        <MarketingTldrBento items={tldr} />
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

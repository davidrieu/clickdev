import type { ReactNode } from "react";
import { SectionAurora } from "@/components/effects/section-aurora";
import { MarketingAmbientLayer } from "@/components/marketing/marketing-ambient-layer";
import { cn } from "@/lib/utils";

export type MarketingAuroraVariant = "none" | "soft" | "medium";

type Props = {
  children: ReactNode;
  /** Halo de fond ; `none` pour pages déjà enveloppées ailleurs. */
  aurora?: MarketingAuroraVariant;
  className?: string;
};

/**
 * Enveloppe commune des pages marketing : article sémantique, bord bas, overflow, aurora.
 */
export function MarketingArticleShell({ aurora = "medium", children, className }: Props) {
  return (
    <article
      className={cn("relative overflow-hidden border-b border-line/80", className)}
    >
      {aurora !== "none" ? (
        <SectionAurora variant={aurora === "soft" ? "subtle" : "soft"} />
      ) : null}
      <MarketingAmbientLayer />
      {children}
    </article>
  );
}

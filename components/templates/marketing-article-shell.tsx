import type { ReactNode } from "react";
import { SectionAurora } from "@/components/effects/section-aurora";
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
        <SectionAurora variant={aurora === "soft" ? "soft" : "medium"} />
      ) : null}
      {/* Voile chaud statique : lisible même si l’aurora est absente (reduced motion). */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(165deg,rgba(217,119,87,0.085)_0%,transparent_38%,rgba(13,13,13,0.35)_100%)]"
      />
      {children}
    </article>
  );
}

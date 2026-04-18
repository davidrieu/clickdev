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
        <SectionAurora variant={aurora === "soft" ? "soft" : "medium"} />
      ) : null}
      <MarketingAmbientLayer />
      {/* Voile de profondeur (statique) — complète l’aurora sans la remplacer. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(165deg,rgba(217,119,87,0.06)_0%,transparent_40%,rgba(13,13,13,0.38)_100%)]"
      />
      {children}
    </article>
  );
}

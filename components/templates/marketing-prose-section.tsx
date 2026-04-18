import { MarketingSectionShell } from "@/components/marketing/marketing-section-shell";
import { MarketingSubsectionTitle, MarketingSectionTitle } from "@/components/templates/marketing-editorial";
import type { MarketingSectionBlock } from "@/lib/types/marketing-prose";

type Props = {
  block: MarketingSectionBlock;
  /** Premier bloc après TL;DR : légèrement resserré pour coller au brief visuel. */
  index: number;
  /** Pages filles : espacement identique entre chaque H2 (comportement historique). */
  density?: "pillar" | "child";
};

/**
 * Section H2 + paragraphes + sous-parties H3 — utilisé par piliers et pages filles.
 */
export function MarketingProseSection({ block, index, density = "pillar" }: Props) {
  return (
    <MarketingSectionShell index={index} density={density}>
      <MarketingSectionTitle>{block.heading}</MarketingSectionTitle>
      {block.paragraphs.map((p, i) => (
        <p
          key={`${block.heading}-p-${i}`}
          className="mt-4 text-base leading-relaxed text-ink-dim md:text-lg"
        >
          {p}
        </p>
      ))}
      {block.subsections?.map((sub) => (
        <div key={sub.heading} className="mt-10">
          <MarketingSubsectionTitle>{sub.heading}</MarketingSubsectionTitle>
          {sub.paragraphs.map((p, i) => (
            <p
              key={`${sub.heading}-p-${i}`}
              className="mt-4 text-base leading-relaxed text-ink-dim md:text-lg"
            >
              {p}
            </p>
          ))}
        </div>
      ))}
    </MarketingSectionShell>
  );
}

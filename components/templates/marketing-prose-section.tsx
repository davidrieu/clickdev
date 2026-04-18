import type { MarketingSectionBlock } from "@/lib/types/marketing-prose";
import { MarketingSubsectionTitle, MarketingSectionTitle } from "@/components/templates/marketing-editorial";
import { cn } from "@/lib/utils";

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
  const isFirst = index === 0;
  const pillarSpacing = isFirst ? "mt-14 md:mt-16" : "mt-16 md:mt-20";
  const childSpacing = "mt-14 md:mt-16";
  const pillarPad = "pt-12 md:pt-16";
  const childPad = "pt-12 md:pt-14";
  return (
    <section
      className={cn(
        "border-t border-line",
        density === "child" ? childSpacing : pillarSpacing,
        density === "child" ? childPad : pillarPad,
      )}
    >
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
    </section>
  );
}

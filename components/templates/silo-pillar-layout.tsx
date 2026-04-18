import Link from "next/link";
import type { ReactNode } from "react";
import { SectionAurora } from "@/components/effects/section-aurora";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type SiloPillarSection = {
  heading: string;
  paragraphs: string[];
  /** Sous-parties H3 sous le H2 (densité éditoriale / scan SEO). */
  subsections?: { heading: string; paragraphs: string[] }[];
};

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
    <article className="relative overflow-hidden border-b border-line/80">
      <SectionAurora variant="medium" />
      <div className="relative z-[1] mx-auto max-w-[960px] px-4 py-20 md:px-8 md:py-28 lg:py-[120px]">
        <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-ink-muted">
          {eyebrow}
        </p>
        <h1 className="mt-4 font-serif text-[clamp(2rem,5vw,3.25rem)] font-medium leading-tight tracking-tight text-ink">
          {h1}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-dim md:text-xl">{lead}</p>

        <aside className="mt-10 rounded-lg border border-line bg-bg-3 p-6 md:p-8">
          <p className="font-mono text-[10px] font-medium uppercase tracking-widest text-ink-muted">
            TL;DR
          </p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-ink-dim md:text-base">
            {tldr.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>

        {childLinks && childLinks.length > 0 ? (
          <nav
            className="mt-10 rounded-lg border border-line bg-bg-2/80 p-5 md:p-6"
            aria-label="Pages du silo"
          >
            <p className="font-mono text-[10px] font-medium uppercase tracking-widest text-ink-muted">
              Approfondir
            </p>
            <ul className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
              {childLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm font-medium text-terracotta underline-offset-4 hover:underline"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}

        {sections.map((s) => (
          <section
            key={s.heading}
            className="mt-16 border-t border-line pt-12 first:mt-14 md:mt-20 md:pt-16"
          >
            <h2 className="font-serif text-2xl font-medium tracking-tight text-ink md:text-3xl">
              {s.heading}
            </h2>
            {s.paragraphs.map((p, i) => (
              <p
                key={`${s.heading}-${i}`}
                className="mt-4 text-base leading-relaxed text-ink-dim md:text-lg"
              >
                {p}
              </p>
            ))}
            {s.subsections?.map((sub) => (
              <div key={sub.heading} className="mt-10">
                <h3 className="font-serif text-xl font-medium tracking-tight text-ink md:text-2xl">
                  {sub.heading}
                </h3>
                {sub.paragraphs.map((p, i) => (
                  <p
                    key={`${sub.heading}-${i}`}
                    className="mt-4 text-base leading-relaxed text-ink-dim md:text-lg"
                  >
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </section>
        ))}

        {afterSections}

        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-12 sm:flex-row sm:items-center md:mt-20 md:pt-16">
          <Link href="/devis/" className={cn(buttonVariants({ size: "cta" }))}>
            Demander un devis →
          </Link>
          <Link
            href="/contact/"
            className={cn(
              buttonVariants({ variant: "ghost", size: "lg" }),
              "justify-center",
            )}
          >
            Contact
          </Link>
        </div>
      </div>
    </article>
  );
}

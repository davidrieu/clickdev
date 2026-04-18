import Link from "next/link";
import { ContextualInternalLinks } from "@/components/seo/contextual-internal-links";
import { PageFaqAccordion } from "@/components/seo/page-faq-accordion";
import { SectionAurora } from "@/components/effects/section-aurora";
import { buttonVariants } from "@/components/ui/button";
import type { SiloChildPageContent } from "@/lib/content/silo-child-types";
import { faqPageJsonLd } from "@/lib/seo/faq-json-ld";
import { cn } from "@/lib/utils";

type SiloChildLayoutProps = SiloChildPageContent & {
  parentHref: string;
  parentLabel: string;
};

export function SiloChildLayout({
  parentHref,
  parentLabel,
  eyebrow,
  h1,
  lead,
  tldr,
  sections,
  faq,
  internalLinks,
}: SiloChildLayoutProps) {
  return (
    <article className="relative overflow-hidden border-b border-line/80">
      <SectionAurora variant="soft" />
      <div className="relative z-[1] mx-auto max-w-[960px] px-4 py-20 md:px-8 md:py-28 lg:py-[120px]">
        <nav aria-label="Fil d’Ariane" className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
          <Link href={parentHref} className="text-terracotta underline-offset-4 hover:underline">
            ← {parentLabel}
          </Link>
        </nav>
        <p className="mt-6 font-mono text-[11px] font-medium uppercase tracking-widest text-ink-muted">
          {eyebrow}
        </p>
        <h1 className="mt-3 font-serif text-[clamp(1.85rem,4.5vw,2.75rem)] font-medium leading-tight tracking-tight text-ink">
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

        {sections.map((s) => (
          <section key={s.heading} className="mt-14 border-t border-line pt-12 md:mt-16 md:pt-14">
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

        {internalLinks.length > 0 ? (
          <ContextualInternalLinks
            className="mt-16 border-t border-line pt-12 md:mt-20 md:pt-16"
            eyebrow="Pour aller plus loin"
            title="Maillage interne — parcours utiles depuis cette page"
            intro="Chaque lien est choisi pour prolonger votre réflexion (stack, risques SEO, maintenance ou preuves terrain), pas pour remplir une colonne."
            links={internalLinks}
          />
        ) : null}

        {faq.length > 0 ? (
          <div className="mt-16 border-t border-line pt-12 md:mt-20 md:pt-16">
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd(faq)) }}
            />
            <PageFaqAccordion
              ariaLabelledBy="silo-child-faq-heading"
              headingId="silo-child-faq-heading"
              title="Questions fréquentes"
              subtitle="Réponses directes — format utile pour la lecture humaine et pour le référencement assisté par IA (GEO)."
              items={faq}
            />
          </div>
        ) : null}

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-12 sm:flex-row md:mt-16 md:pt-14">
          <Link href="/devis/" className={cn(buttonVariants({ size: "cta" }))}>
            Demander un devis →
          </Link>
          <Link
            href={parentHref}
            className={cn(buttonVariants({ variant: "ghost", size: "lg" }), "justify-center")}
          >
            Vue d’ensemble {parentLabel}
          </Link>
        </div>
      </div>
    </article>
  );
}

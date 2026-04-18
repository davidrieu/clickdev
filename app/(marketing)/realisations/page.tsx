import type { Metadata } from "next";
import Link from "next/link";
import { ContextualInternalLinks } from "@/components/seo/contextual-internal-links";
import { SectionAurora } from "@/components/effects/section-aurora";
import { RealisationsView } from "@/components/sections/realisations/realisations-view";
import { buttonVariants } from "@/components/ui/button";
import { realisationsContextLinks } from "@/lib/content/marketing-pages-extra";
import { getCaseStudiesList } from "@/lib/sanity/get-case-studies";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Réalisations — études de cas e-commerce, apps & outils métiers",
  description:
    "Portfolio Sanity : contexte, stack, résultats. Maillage vers offres Sites, IA, SEO et blog — preuves pour E-E-A-T.",
};

export default async function RealisationsPage() {
  const items = await getCaseStudiesList();

  return (
    <article className="relative overflow-hidden border-b border-line/80">
      <SectionAurora variant="medium" />
      <div className="relative z-[1] mx-auto max-w-[960px] px-4 py-20 md:px-8 md:py-28 lg:py-[120px]">
        <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-ink-muted">
          Portfolio
        </p>
        <h1 className="mt-4 font-serif text-[clamp(2rem,5vw,3.25rem)] font-medium leading-tight tracking-tight text-ink">
          Réalisations
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-dim">
          Les études de cas servent de preuve terrain : secteur, problème, solution, stack et métriques lorsqu’elles
          peuvent être communiquées. Elles complètent les pages silo (Sites internet, IA, SEO, CRM) en montrant comment
          la méthode se traduit en livrables — utile pour l’E-E-A-T et pour le GEO, car elles mêlent faits techniques
          et contexte business. Le contenu est géré dans Sanity ; les filtres ci-dessous aident à parcourir les
          typologies de projets lorsque le catalogue grossit.
        </p>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-dim md:text-lg">
          Les cartes mises en avant sur la home pointent vers les mêmes URLs{" "}
          <code className="font-mono text-xs text-ink-muted">/realisations/[slug]/</code> lorsque les documents
          existent — ce qui renforce le maillage interne entre intention commerciale (home) et preuve détaillée
          (page étude).
        </p>

        <RealisationsView items={items} />

        <ContextualInternalLinks
          className="mt-16 border-t border-line pt-12"
          eyebrow="Maillage interne"
          title="Continuer la lecture hors portfolio"
          intro="Six liens vers les silos et pages qui contextualisent le plus souvent les projets listés ici."
          links={realisationsContextLinks}
        />

        <div className="mt-16 flex justify-center border-t border-line pt-12">
          <Link href="/devis/" className={cn(buttonVariants({ size: "cta" }))}>
            Parler d’un projet
          </Link>
        </div>
      </div>
    </article>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { MarketingHeroStage } from "@/components/marketing/marketing-hero-stage";
import { ContextualInternalLinks } from "@/components/seo/contextual-internal-links";
import { MarketingArticleShell } from "@/components/templates/marketing-article-shell";
import { MarketingBodyParagraph } from "@/components/templates/marketing-editorial";
import { MarketingPageContainer } from "@/components/templates/marketing-page-container";
import { RealisationsView } from "@/components/sections/realisations/realisations-view";
import { buttonVariants } from "@/components/ui/button";
import { realisationsContextLinks } from "@/lib/content/marketing-pages-extra";
import { getCaseStudiesList } from "@/lib/sanity/get-case-studies";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Réalisations — études de cas e-commerce, apps & outils métiers",
  description:
    "Portfolio Sanity : contexte, stack, résultats. Liens vers offres Sites, IA, SEO et blog — preuves pour E-E-A-T.",
};

export default async function RealisationsPage() {
  const items = await getCaseStudiesList();

  return (
    <MarketingArticleShell aurora="medium">
      <MarketingPageContainer width="article">
        <MarketingHeroStage
          variant="pillar"
          eyebrow="Portfolio"
          title="Réalisations"
          leadClassName="max-w-3xl"
          lead="Les études de cas servent de preuve terrain : secteur, problème, solution, stack et métriques lorsqu’elles peuvent être communiquées. Elles complètent les pages silo (Sites internet, IA, SEO, CRM) en montrant comment la méthode se traduit en livrables — utile pour l’E-E-A-T et pour le GEO, car elles mêlent faits techniques et contexte business. Le contenu est géré dans Sanity ; les filtres ci-dessous aident à parcourir les typologies de projets lorsque le catalogue grossit."
        />
        <MarketingBodyParagraph className="max-w-3xl">
          Les cartes mises en avant sur la home pointent vers les mêmes URLs{" "}
          <code className="font-mono text-xs text-ink-muted">/realisations/[slug]/</code> lorsque les documents
          existent — ce qui renforce la continuité entre intention commerciale (home) et preuve détaillée (page étude).
        </MarketingBodyParagraph>

        <RealisationsView items={items} />

        <ContextualInternalLinks
          className="mt-16 border-t border-line pt-12"
          eyebrow="Pour aller plus loin"
          title="Continuer la lecture hors portfolio"
          intro="Six liens vers les silos et pages qui contextualisent le plus souvent les projets listés ici."
          links={realisationsContextLinks}
        />

        <div className="mt-16 flex justify-center border-t border-line pt-12">
          <Link href="/devis/" className={cn(buttonVariants({ size: "cta" }))}>
            Parler d’un projet
          </Link>
        </div>
      </MarketingPageContainer>
    </MarketingArticleShell>
  );
}

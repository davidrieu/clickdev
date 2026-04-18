import Link from "next/link";
import { MarketingHeroStage } from "@/components/marketing/marketing-hero-stage";
import { MarketingArticleShell } from "@/components/templates/marketing-article-shell";
import { MarketingPageContainer } from "@/components/templates/marketing-page-container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function MarketingNotFound() {
  return (
    <MarketingArticleShell aurora="soft">
      <MarketingPageContainer
        width="narrow"
        className="flex min-h-[min(70dvh,560px)] flex-col items-center justify-center pb-24 text-center"
      >
        <MarketingHeroStage
          variant="child"
          compact
          eyebrow="Erreur 404"
          title="Page introuvable"
          leadClassName="mx-auto max-w-md text-center"
          lead="Cette page n’existe pas ou a été déplacée."
        />
        <Link href="/" className={cn(buttonVariants({ size: "cta" }), "mt-10")}>
          Retour à l’accueil
        </Link>
      </MarketingPageContainer>
    </MarketingArticleShell>
  );
}

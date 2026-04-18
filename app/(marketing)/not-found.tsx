import Link from "next/link";
import { MarketingArticleShell } from "@/components/templates/marketing-article-shell";
import { MarketingEyebrow, MarketingPageTitle } from "@/components/templates/marketing-editorial";
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
        <MarketingEyebrow>Erreur 404</MarketingEyebrow>
        <MarketingPageTitle variant="child" className="max-w-md">
          Page introuvable
        </MarketingPageTitle>
        <p className="mt-4 max-w-md text-ink-dim">
          Cette page n’existe pas ou a été déplacée.
        </p>
        <Link href="/" className={cn(buttonVariants({ size: "cta" }), "mt-10")}>
          Retour à l’accueil
        </Link>
      </MarketingPageContainer>
    </MarketingArticleShell>
  );
}

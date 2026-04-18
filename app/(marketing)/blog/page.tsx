import type { Metadata } from "next";
import Link from "next/link";
import { SectionAurora } from "@/components/effects/section-aurora";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles techniques, retours d’expérience et veille — publiés depuis Sanity (listing à brancher).",
};

export default function BlogIndexPage() {
  return (
    <article className="relative overflow-hidden border-b border-line/80">
      <SectionAurora variant="soft" />
      <div className="relative z-[1] mx-auto max-w-[720px] px-4 py-20 md:px-8 md:py-28 lg:py-[120px]">
        <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-ink-muted">
          Blog
        </p>
        <h1 className="mt-4 font-serif text-[clamp(2rem,5vw,3rem)] font-medium leading-tight tracking-tight text-ink">
          Articles & notes
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-dim">
          Le listing dynamique (requêtes Sanity, pagination, catégories) sera branché
          ici. La home affiche déjà un aperçu des derniers posts lorsque le contenu
          existe.
        </p>
        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className={cn(buttonVariants({ variant: "ghost", size: "lg" }))}
          >
            ← Retour à l’accueil
          </Link>
          <Link href="/devis/" className={cn(buttonVariants({ size: "cta" }))}>
            Demander un devis
          </Link>
        </div>
      </div>
    </article>
  );
}

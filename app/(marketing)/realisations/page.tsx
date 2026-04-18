import type { Metadata } from "next";
import Link from "next/link";
import { SectionAurora } from "@/components/effects/section-aurora";
import { RealisationsToolbar } from "@/components/sections/realisations/realisations-toolbar";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Réalisations",
  description:
    "Études de cas et projets livrés — e-commerce, marketplaces, apps et outils métiers (contenu CMS à brancher).",
};

export default function RealisationsPage() {
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
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-dim">
          Les fiches détaillées seront alimentées depuis Sanity (études de cas, filtres,
          visuels). La barre ci-dessous préfigure le filtrage par type de projet.
        </p>

        <div className="mt-10">
          <RealisationsToolbar />
        </div>

        <div className="mt-16 rounded-lg border border-dashed border-line bg-bg-3/50 px-6 py-16 text-center">
          <p className="text-ink-dim">
            Aucune étude de cas publiée pour l’instant — le gabarit liste + page détail
            arrive avec le branchement CMS (phase suivante).
          </p>
          <Link
            href="/devis/"
            className={cn(buttonVariants({ size: "cta" }), "mt-8 inline-flex")}
          >
            Parler d’un projet concret
          </Link>
        </div>
      </div>
    </article>
  );
}

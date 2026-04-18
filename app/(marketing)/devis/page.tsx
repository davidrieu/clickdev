import type { Metadata } from "next";
import Link from "next/link";
import { SectionAurora } from "@/components/effects/section-aurora";
import { DevisForm } from "@/components/forms/devis-form";
import { buttonVariants } from "@/components/ui/button";
import { calBookingUrl } from "@/lib/constants/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Demander un devis",
  description:
    "Décrivez votre projet e-commerce, marketplace, app ou outil métier — réponse personnalisée sous peu.",
};

export default function DevisPage() {
  return (
    <article className="relative overflow-hidden border-b border-line/80">
      <SectionAurora variant="medium" />
      <div className="relative z-[1] mx-auto max-w-[640px] px-4 py-20 md:px-8 md:py-28 lg:py-[120px]">
        <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-ink-muted">
          Devis
        </p>
        <h1 className="mt-4 font-serif text-[clamp(2rem,5vw,3rem)] font-medium leading-tight tracking-tight text-ink">
          Démarrer un projet
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-dim">
          Plus le contexte est clair (objectifs, contraintes, stack, calendrier), plus
          la réponse sera utile. Aucun engagement à ce stade.
        </p>
        <p className="mt-4 text-sm text-ink-muted">
          Préférez un échange oral d’abord ?{" "}
          <a
            href={calBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-terracotta underline-offset-4 hover:underline"
          >
            Réserver un créneau
          </a>
          .
        </p>

        <div className="mt-12 rounded-lg border border-line bg-bg-3/80 p-6 md:p-8">
          <DevisForm />
        </div>

        <p className="mt-8 text-center text-xs text-ink-muted">
          Envoi automatisé (e-mail) : prochaine étape du brief — pour l’instant
          enregistrement côté navigateur uniquement.
        </p>

        <div className="mt-10 flex justify-center">
          <Link
            href="/contact/"
            className={cn(
              buttonVariants({ variant: "ghost", size: "lg" }),
              "justify-center",
            )}
          >
            Autres moyens de contact
          </Link>
        </div>
      </div>
    </article>
  );
}

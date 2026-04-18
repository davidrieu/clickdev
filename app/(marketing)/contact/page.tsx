import type { Metadata } from "next";
import Link from "next/link";
import { SectionAurora } from "@/components/effects/section-aurora";
import { buttonVariants } from "@/components/ui/button";
import { calBookingUrl } from "@/lib/constants/site";
import { contactLinks } from "@/lib/constants/navigation";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contacter David Rieu (Clickdev) — e-mail, réseaux ou demande de devis pour votre projet web ou mobile.",
};

export default function ContactPage() {
  return (
    <article className="relative overflow-hidden border-b border-line/80">
      <SectionAurora variant="soft" />
      <div className="relative z-[1] mx-auto max-w-[640px] px-4 py-20 md:px-8 md:py-28 lg:py-[120px]">
        <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-ink-muted">
          Contact
        </p>
        <h1 className="mt-4 font-serif text-[clamp(2rem,5vw,3rem)] font-medium leading-tight tracking-tight text-ink">
          Parlons de votre projet
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-dim">
          Pour un besoin précis, le formulaire de devis est le canal le plus efficace.
          Pour une question courte, vous pouvez aussi écrire directement.
        </p>

        <ul className="mt-10 space-y-4 text-base text-ink">
          <li>
            <span className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
              E-mail
            </span>
            <br />
            <a
              href={contactLinks.email}
              className="text-terracotta underline-offset-4 hover:underline"
            >
              bonjour@clickdev.fr
            </a>
          </li>
          <li>
            <span className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
              Calendrier
            </span>
            <br />
            <a
              href={calBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-terracotta underline-offset-4 hover:underline"
            >
              Réserver un créneau
            </a>
          </li>
        </ul>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <Link href="/devis/" className={cn(buttonVariants({ size: "cta" }))}>
            Demander un devis →
          </Link>
          <Link
            href="/a-propos/"
            className={cn(
              buttonVariants({ variant: "ghost", size: "lg" }),
              "justify-center",
            )}
          >
            À propos
          </Link>
        </div>
      </div>
    </article>
  );
}

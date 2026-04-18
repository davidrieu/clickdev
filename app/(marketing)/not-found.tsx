import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function MarketingNotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-24 text-center">
      <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-ink-muted">
        Erreur 404
      </p>
      <h1 className="mt-4 font-serif text-3xl font-medium tracking-tight text-ink md:text-4xl">
        Page introuvable
      </h1>
      <p className="mt-4 max-w-md text-ink-dim">
        Cette page n’existe pas ou a été déplacée.
      </p>
      <Link href="/" className={cn(buttonVariants({ size: "cta" }), "mt-10")}>
        Retour à l’accueil
      </Link>
    </div>
  );
}

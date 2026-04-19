import Link from "next/link";
import type { ReactNode } from "react";
import { MarketingRelatedPages } from "@/components/marketing/marketing-related-pages";
import { cn } from "@/lib/utils";

export function MarketingEyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span
        className="h-px w-10 shrink-0 bg-gradient-to-r from-[#f26a06] via-[#f26a06]/70 to-transparent md:w-14"
        aria-hidden
      />
      <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-white/50">
        {children}
      </p>
    </div>
  );
}

const titleVariants = {
  pillar:
    "text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-tight tracking-tight text-white",
  child:
    "text-[clamp(1.85rem,4.5vw,2.75rem)] font-semibold leading-tight tracking-tight text-white",
  display:
    "text-[clamp(2rem,5vw,3rem)] font-semibold leading-tight tracking-tight text-white",
} as const;

type TitleVariant = keyof typeof titleVariants;

type MarketingPageTitleProps = {
  children: ReactNode;
  variant: TitleVariant;
  /** Attribut id pour aria-labelledby / ancres */
  id?: string;
  className?: string;
};

export function MarketingPageTitle({ children, variant, id, className }: MarketingPageTitleProps) {
  return (
    <h1 id={id} className={cn(titleVariants[variant], "mt-4", className)}>
      {children}
    </h1>
  );
}

/** Titre H1 sans marge haute (ex. après fil d’Ariane). */
export function MarketingPageTitleTight({
  children,
  variant,
  id,
  className,
}: MarketingPageTitleProps) {
  return (
    <h1 id={id} className={cn(titleVariants[variant], "mt-3", className)}>
      {children}
    </h1>
  );
}

export function MarketingLead({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("mt-6 text-lg leading-relaxed text-white/70 md:text-xl", className)}>{children}</p>
  );
}

/** Paragraphe corps de texte (sections éditoriales statiques). */
export function MarketingBodyParagraph({
  children,
  className,
}: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("mt-4 text-base leading-relaxed text-white/70 md:text-lg", className)}>{children}</p>
  );
}

export function MarketingTldr({ items }: { items: string[] }) {
  return (
    <aside className="mt-10 rounded-lg border border-white/15 border-l-[3px] border-l-[#f26a06]/60 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] md:p-8">
      <p className="font-mono text-[10px] font-medium uppercase tracking-widest text-white/45">
        TL;DR
      </p>
      <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-white/70 md:text-base">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </aside>
  );
}

export function MarketingBackLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <nav aria-label="Fil d’Ariane">
      <Link
        href={href}
        className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3.5 py-2 font-mono text-[11px] uppercase tracking-wider text-[#f26a06] transition-[color,background-color,border-color] hover:border-[#f26a06]/50 hover:bg-white/15 hover:text-[#ff9c6b]"
      >
        {children}
      </Link>
    </nav>
  );
}

/** Titre de section H2 — même style partout (silos, études de cas, pages statiques). */
export function MarketingSectionTitle({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={cn(
        "text-2xl font-semibold tracking-tight text-white md:text-3xl",
        "after:mt-4 after:block after:h-px after:w-14 after:bg-gradient-to-r after:from-[#f26a06]/85 after:to-transparent md:after:w-16",
        className,
      )}
    >
      {children}
    </h2>
  );
}

/** Titre H3 sous-section. */
export function MarketingSubsectionTitle({
  children,
  className,
}: { children: ReactNode; className?: string }) {
  return (
    <h3
      className={cn(
        "text-xl font-semibold tracking-tight text-white md:text-2xl",
        className,
      )}
    >
      {children}
    </h3>
  );
}

/** Bloc « Approfondir » — liens pages filles (cartes animées + icônes). */
export function MarketingRelatedPagesNav({
  title = "Approfondir",
  links,
}: {
  title?: string;
  links: { label: string; href: string }[];
}) {
  return <MarketingRelatedPages title={title} links={links} />;
}

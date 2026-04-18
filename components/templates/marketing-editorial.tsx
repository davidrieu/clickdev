import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function MarketingEyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span
        className="h-px w-10 shrink-0 bg-gradient-to-r from-terracotta via-terracotta/70 to-transparent md:w-14"
        aria-hidden
      />
      <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-ink-muted">
        {children}
      </p>
    </div>
  );
}

const titleVariants = {
  pillar:
    "font-serif text-[clamp(2rem,5vw,3.25rem)] font-medium leading-tight tracking-tight text-ink",
  child:
    "font-serif text-[clamp(1.85rem,4.5vw,2.75rem)] font-medium leading-tight tracking-tight text-ink",
  /** Pages « éditoriales » (à propos, blog index, etc.) */
  display:
    "font-serif text-[clamp(2rem,5vw,3rem)] font-medium leading-tight tracking-tight text-ink",
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
    <p className={cn("mt-6 text-lg leading-relaxed text-ink-dim md:text-xl", className)}>{children}</p>
  );
}

/** Paragraphe corps de texte (sections éditoriales statiques). */
export function MarketingBodyParagraph({
  children,
  className,
}: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("mt-4 text-base leading-relaxed text-ink-dim md:text-lg", className)}>{children}</p>
  );
}

export function MarketingTldr({ items }: { items: string[] }) {
  return (
    <aside className="mt-10 rounded-lg border border-line/80 border-l-[3px] border-l-terracotta/55 bg-gradient-to-br from-bg-3/90 to-bg-3/50 p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.03)] md:p-8">
      <p className="font-mono text-[10px] font-medium uppercase tracking-widest text-ink-muted">
        TL;DR
      </p>
      <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-ink-dim md:text-base">
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
        className="inline-flex items-center rounded-full border border-line/80 bg-bg-3/70 px-3.5 py-2 font-mono text-[11px] uppercase tracking-wider text-terracotta transition-[color,background-color,border-color] hover:border-terracotta/45 hover:bg-bg-3 hover:text-terracotta-soft"
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
        "font-serif text-2xl font-medium tracking-tight text-ink md:text-3xl",
        "after:mt-4 after:block after:h-px after:w-14 after:bg-gradient-to-r after:from-terracotta/80 after:to-transparent md:after:w-16",
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
        "font-serif text-xl font-medium tracking-tight text-ink md:text-2xl",
        className,
      )}
    >
      {children}
    </h3>
  );
}

/** Bloc « Approfondir » — liens pages filles. */
export function MarketingRelatedPagesNav({
  title = "Approfondir",
  links,
}: {
  title?: string;
  links: { label: string; href: string }[];
}) {
  if (links.length === 0) return null;
  return (
    <nav
      className="mt-10 rounded-lg border border-line border-t-terracotta/30 border-t-2 bg-bg-2/85 p-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.03)] md:p-6"
      aria-label="Pages du silo"
    >
      <p className="font-mono text-[10px] font-medium uppercase tracking-widest text-ink-muted">
        {title}
      </p>
      <ul className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-sm font-medium text-terracotta underline-offset-4 hover:underline"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

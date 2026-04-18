import Link from "next/link";
import type { SiloContextualLink } from "@/lib/content/silo-child-types";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  intro?: string;
  links: SiloContextualLink[];
  className?: string;
};

export function ContextualInternalLinks({
  eyebrow = "Pour aller plus loin",
  title,
  intro,
  links,
  className,
}: Props) {
  if (links.length === 0) return null;

  return (
    <section className={cn(className)} aria-labelledby="contextual-links-heading">
      <p className="font-mono text-[10px] font-medium uppercase tracking-widest text-ink-muted">
        {eyebrow}
      </p>
      <h2
        id="contextual-links-heading"
        className="mt-3 font-serif text-2xl font-medium tracking-tight text-ink md:text-3xl"
      >
        {title}
      </h2>
      {intro ? (
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-dim md:text-lg">{intro}</p>
      ) : null}
      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {links.map((link) => (
          <li
            key={link.href}
            className="rounded-lg border border-line bg-bg-2/60 p-5 transition-colors hover:border-line-2 md:p-6"
          >
            <Link
              href={link.href}
              className="font-serif text-lg font-medium text-terracotta underline-offset-4 hover:underline md:text-xl"
            >
              {link.label}
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-ink-dim md:text-base">{link.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

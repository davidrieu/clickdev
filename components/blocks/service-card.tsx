import Link from "next/link";
import type { HomeService } from "@/lib/constants/home-services";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  index: number;
  service: HomeService;
};

export function ServiceCard({ index, service }: ServiceCardProps) {
  const n = String(index + 1).padStart(2, "0");

  return (
    <Link
      href={service.href}
      className={cn(
        "group flex flex-col rounded-lg border border-line bg-bg p-6 transition-colors duration-200",
        "hover:bg-bg-2 hover:border-line-2",
      )}
    >
      <span className="font-mono text-[11px] font-medium tabular-nums tracking-widest text-ink-muted">
        {n}
      </span>
      <h3 className="mt-3 font-serif text-xl font-normal tracking-tight text-ink md:text-2xl">
        {service.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-dim">
        {service.description}
      </p>
      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
        {service.tags.map((tag) => (
          <li key={tag}>
            <span className="inline-block rounded-full border border-line bg-bg-3 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-ink-dim">
              {tag}
            </span>
          </li>
        ))}
      </ul>
      <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-terracotta transition-transform duration-200 group-hover:translate-x-0.5">
        Découvrir
        <span aria-hidden>→</span>
      </span>
    </Link>
  );
}

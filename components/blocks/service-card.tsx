"use client";

import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import type { HomeService } from "@/lib/constants/home-services";
import { cn } from "@/lib/utils";

const MotionLink = motion.create(Link);

type ServiceCardProps = {
  index: number;
  service: HomeService;
};

export function ServiceCard({ index, service }: ServiceCardProps) {
  const reduceMotion = useReducedMotion();
  const n = String(index + 1).padStart(2, "0");

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - r.left);
    mouseY.set(e.clientY - r.top);
  }

  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${mouseX}px ${mouseY}px, rgba(242,106,6,0.16), transparent 55%)`;

  return (
    <MotionLink
      href={service.href}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-lg border border-line bg-bg p-6",
        "transition-shadow duration-300",
        "hover:border-line-2 hover:shadow-[0_24px_48px_-28px_rgba(0,0,0,0.65)]",
      )}
      onMouseMove={reduceMotion ? undefined : handleMouseMove}
      onMouseLeave={
        reduceMotion
          ? undefined
          : () => {
              mouseX.set(0);
              mouseY.set(0);
            }
      }
      whileHover={reduceMotion ? undefined : { y: -6 }}
      whileTap={reduceMotion ? undefined : { scale: 0.985 }}
      transition={{ type: "spring", stiffness: 380, damping: 22 }}
    >
      {!reduceMotion ? (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: spotlight }}
        />
      ) : null}

      <span className="relative font-mono text-[11px] font-medium tabular-nums tracking-widest text-ink-muted">
        {n}
      </span>
      <h3 className="relative mt-3 font-serif text-xl font-normal tracking-tight text-ink md:text-2xl">
        {service.title}
      </h3>
      <p className="relative mt-3 flex-1 text-sm leading-relaxed text-ink-dim">
        {service.description}
      </p>
      <ul className="relative mt-5 flex flex-wrap gap-2" aria-label="Technologies">
        {service.tags.map((tag) => (
          <li key={tag}>
            <span className="inline-block rounded-full border border-line bg-bg-3 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-ink-dim transition-colors group-hover:border-line-2">
              {tag}
            </span>
          </li>
        ))}
      </ul>
      <span className="relative mt-6 inline-flex items-center gap-1 text-sm font-medium text-[#f26a06] transition-transform duration-200 group-hover:translate-x-1">
        Découvrir
        <span aria-hidden>→</span>
      </span>
    </MotionLink>
  );
}

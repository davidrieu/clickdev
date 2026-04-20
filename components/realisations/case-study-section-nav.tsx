'use client';

import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export type CaseStudyNavItem = { id: string; label: string };

type Props = {
  items: CaseStudyNavItem[];
  /** Barre mobile scrollable (xl:hidden côté parent) */
  variant: 'bar' | 'sidebar';
  className?: string;
};

export function CaseStudySectionNav({ items, variant, className }: Props) {
  const [activeId, setActiveId] = useState<string | null>(items[0]?.id ?? null);

  useEffect(() => {
    if (items.length === 0) return;

    const updateActive = () => {
      const anchorY = window.scrollY + Math.min(180, window.innerHeight * 0.22);
      let current = items[0]?.id;
      for (const item of items) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= anchorY) current = item.id;
      }
      setActiveId((prev) => (prev === current ? prev : (current ?? null)));
    };

    updateActive();
    window.addEventListener('scroll', updateActive, { passive: true });
    window.addEventListener('resize', updateActive, { passive: true });
    return () => {
      window.removeEventListener('scroll', updateActive);
      window.removeEventListener('resize', updateActive);
    };
  }, [items]);

  const go = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  if (items.length === 0) return null;

  const isBar = variant === 'bar';
  const listClass = isBar
    ? 'flex flex-nowrap items-center gap-1 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
    : 'space-y-0.5';
  const itemClass = (id: string) =>
    cn(
      'whitespace-nowrap text-left text-[13px] leading-snug transition',
      isBar
        ? 'shrink-0 rounded-full border px-3 py-2 font-medium'
        : 'w-full border-l-2 border-transparent py-1.5 pl-4 -ml-px',
      activeId === id
        ? isBar
          ? 'border-white/25 bg-white/[0.08] text-white'
          : 'border-white/50 bg-white/[0.04] text-white'
        : isBar
          ? 'border-white/10 text-white/55 hover:border-white/20 hover:text-white/90'
          : 'text-white/50 hover:text-white/90',
    );

  return (
    <nav className={cn('text-sm', className)} aria-label="Sections de la fiche">
      {isBar ? <p className="sr-only">Aller à une section</p> : null}
      <ul className={listClass}>
        {items.map((item) => (
          <li key={item.id} className={isBar ? 'shrink-0' : ''}>
            <button
              type="button"
              onClick={() => go(item.id)}
              className={itemClass(item.id)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

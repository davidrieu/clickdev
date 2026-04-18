"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDownIcon, MenuIcon, XIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { mainNavFlat, mainNavSilos } from "@/lib/constants/navigation";

function DesktopSiloNav({ silo }: { silo: (typeof mainNavSilos)[number] }) {
  return (
    <div className="group relative">
      <Link
        href={silo.href}
        className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm text-ink-dim transition-colors hover:bg-bg-3 hover:text-ink"
      >
        {silo.label}
        <ChevronDownIcon
          className="size-4 opacity-60 transition-transform duration-150 group-hover:rotate-180"
          aria-hidden
        />
      </Link>
      <div
        className="pointer-events-none absolute left-0 top-full z-50 pt-2 opacity-0 transition-opacity duration-150 group-hover:pointer-events-auto group-hover:opacity-100"
        role="presentation"
      >
        <div className="min-w-[14rem] rounded-lg border border-line bg-bg-3 p-2 shadow-xl ring-1 ring-foreground/5">
          <ul className="flex flex-col gap-0.5">
            {silo.children.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-sm text-ink-dim transition-colors hover:bg-bg-2 hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function MobileNav({ onNavigate }: { onNavigate: () => void }) {
  return (
    <Accordion className="w-full border-t border-line" defaultValue={[]}>
      {mainNavSilos.map((silo) => (
        <AccordionItem key={silo.href} value={silo.href}>
          <AccordionTrigger className="text-ink">{silo.label}</AccordionTrigger>
          <AccordionContent>
            <ul className="flex flex-col gap-1 border-l border-line pl-3">
              <li>
                <Link
                  href={silo.href}
                  className="text-sm font-medium text-terracotta hover:underline"
                  onClick={onNavigate}
                >
                  Vue d’ensemble
                </Link>
              </li>
              {silo.children.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink-dim hover:text-ink"
                    onClick={onNavigate}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
      {mainNavFlat.map((item) => (
        <div key={item.href} className="border-b border-line py-3">
          <Link
            href={item.href}
            className="text-sm font-medium text-ink"
            onClick={onNavigate}
          >
            {item.label}
          </Link>
        </div>
      ))}
    </Accordion>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 h-[72px] border-b border-line/80",
          "bg-[rgba(13,13,13,0.85)] backdrop-blur-[20px] supports-[backdrop-filter]:bg-[rgba(13,13,13,0.72)]",
        )}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-4 focus:z-[60] focus:rounded-md focus:bg-bg-3 focus:px-3 focus:py-2 focus:text-sm focus:text-ink"
        >
          Aller au contenu
        </a>
        <div className="mx-auto flex h-full max-w-[1600px] items-center justify-between gap-4 px-4 md:px-8">
          <Link
            href="/"
            className="font-serif text-xl italic tracking-tight text-ink md:text-2xl"
          >
            Clickdev
          </Link>

          <nav
            aria-label="Navigation principale"
            className="hidden items-center gap-1 xl:flex"
          >
            {mainNavSilos.map((silo) => (
              <DesktopSiloNav key={silo.href} silo={silo} />
            ))}
            {mainNavFlat.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm text-ink-dim transition-colors hover:bg-bg-3 hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center gap-3 xl:flex">
            <Link href="/devis/" className={cn(buttonVariants({ size: "cta" }))}>
              Demander un devis
            </Link>
          </div>

          <div className="flex items-center gap-2 xl:hidden">
            <Link
              href="/devis/"
              className={cn(buttonVariants({ size: "sm" }), "rounded-full")}
            >
              Devis
            </Link>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
              onClick={() => setMobileOpen((o) => !o)}
            >
              {mobileOpen ? (
                <XIcon className="size-5" />
              ) : (
                <MenuIcon className="size-5" />
              )}
            </Button>
          </div>
        </div>
      </header>

      {mobileOpen ? (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-bg xl:hidden"
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navigation"
        >
          <div className="flex h-[72px] shrink-0 items-center justify-between border-b border-line px-4">
            <span className="font-serif text-lg italic text-ink">Menu</span>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label="Fermer le menu"
              onClick={() => setMobileOpen(false)}
            >
              <XIcon className="size-5" />
            </Button>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto px-4 pb-10 pt-4">
            <MobileNav onNavigate={() => setMobileOpen(false)} />
            <div className="mt-8">
              <Link
                href="/devis/"
                className={cn(buttonVariants({ size: "cta" }), "w-full justify-center")}
                onClick={() => setMobileOpen(false)}
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

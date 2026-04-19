"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDownIcon, MenuIcon, XIcon } from "lucide-react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { mainNavFlat, mainNavSilos } from "@/lib/constants/navigation";

function DesktopSiloNavGenesis({ silo }: { silo: (typeof mainNavSilos)[number] }) {
  return (
    <div className="group relative">
      <Link
        href={silo.href}
        className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm text-white/90 transition hover:bg-white/10 hover:text-white"
      >
        {silo.label}
        <ChevronDownIcon
          className="size-4 opacity-70 transition-transform duration-150 group-hover:rotate-180"
          aria-hidden
        />
      </Link>
      <div
        className="pointer-events-none absolute left-0 top-full z-[80] pt-2 opacity-0 transition-opacity duration-150 group-hover:pointer-events-auto group-hover:opacity-100"
        role="presentation"
      >
        <div className="glass min-w-[15rem] rounded-xl p-2 shadow-2xl ring-1 ring-white/10">
          <ul className="flex flex-col gap-0.5">
            <li>
              <Link
                href={silo.href}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-white/95 hover:bg-white/10"
              >
                Vue d’ensemble
              </Link>
            </li>
            {silo.children.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-sm text-neutral-200 hover:bg-white/10 hover:text-white"
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

function MobileNavGenesis({ onNavigate }: { onNavigate: () => void }) {
  return (
    <Accordion className="w-full border-t border-white/15" defaultValue={[]}>
      {mainNavSilos.map((silo) => (
        <AccordionItem key={silo.href} value={silo.href} className="border-white/10">
          <AccordionTrigger className="py-3 text-left text-base text-white hover:no-underline">
            {silo.label}
          </AccordionTrigger>
          <AccordionContent>
            <ul className="flex flex-col gap-1 border-l border-white/20 py-1 pl-3">
              <li>
                <Link
                  href={silo.href}
                  className="text-sm font-medium text-white/95 hover:underline"
                  onClick={onNavigate}
                >
                  Vue d’ensemble
                </Link>
              </li>
              {silo.children.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-300 hover:text-white"
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
        <div key={item.href} className="border-b border-white/10 py-3">
          <Link href={item.href} className="text-base font-medium text-white" onClick={onNavigate}>
            {item.label}
          </Link>
        </div>
      ))}
      <div className="border-b border-white/10 py-3">
        <Link href="/contact/" className="text-base font-medium text-white" onClick={onNavigate}>
          Contact
        </Link>
      </div>
      <div className="py-3">
        <Link href="/a-propos/" className="text-base font-medium text-white" onClick={onNavigate}>
          À propos
        </Link>
      </div>
    </Accordion>
  );
}

export function GenesisNavbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  React.useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-[60] flex w-full items-center justify-between px-4 py-3.5 transition-colors md:px-16 lg:px-24",
          isScrolled || mobileOpen ? "bg-white/15 backdrop-blur-lg" : "bg-transparent",
        )}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[100] focus:rounded-md focus:bg-white/15 focus:px-3 focus:py-2 focus:text-sm focus:text-white"
        >
          Aller au contenu
        </a>
        <Link href="/" className="shrink-0">
          <Image
            src="/assets/logo.svg"
            alt="Clickdev"
            className="h-[34px] w-auto"
            width={205}
            height={48}
            priority
          />
        </Link>

        <nav
          aria-label="Navigation principale"
          className="hidden flex-wrap items-center justify-end gap-x-2 gap-y-2 xl:flex xl:gap-x-1"
        >
          {mainNavSilos.map((silo) => (
            <DesktopSiloNavGenesis key={silo.href} silo={silo} />
          ))}
          {mainNavFlat.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm text-white/90 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact/"
            className="rounded-full px-3 py-2 text-sm text-white/90 transition hover:bg-white/10 hover:text-white"
          >
            Contact
          </Link>
          <Link
            href="/a-propos/"
            className="rounded-full px-3 py-2 text-sm text-white/90 transition hover:bg-white/10 hover:text-white"
          >
            À propos
          </Link>
          <Link href="/devis/" className="btn glass ml-2 text-sm">
            Demander un devis
          </Link>
        </nav>

        <div className="flex items-center gap-2 xl:hidden">
          <Link href="/devis/" className={cn(buttonVariants({ size: "sm" }), "rounded-full border-white/20 bg-white/10")}>
            Devis
          </Link>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10"
            aria-expanded={mobileOpen}
            aria-controls="genesis-mobile-navigation"
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <XIcon className="size-5" /> : <MenuIcon className="size-5" />}
          </Button>
        </div>
      </header>

      {mobileOpen ? (
        <div
          id="genesis-mobile-navigation"
          className="fixed inset-0 z-[70] flex flex-col bg-black/85 backdrop-blur-xl xl:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navigation"
        >
          <div className="flex h-14 shrink-0 items-center justify-between border-b border-white/15 px-4">
            <span className="text-sm font-medium text-white">Menu</span>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10"
              aria-label="Fermer le menu"
              onClick={() => setMobileOpen(false)}
            >
              <XIcon className="size-5" />
            </Button>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto px-4 pb-10 pt-2">
            <MobileNavGenesis onNavigate={() => setMobileOpen(false)} />
            <div className="mt-8">
              <Link
                href="/devis/"
                className={cn(buttonVariants({ size: "cta" }), "w-full justify-center border-white/20 bg-white/15 text-white hover:bg-white/25")}
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

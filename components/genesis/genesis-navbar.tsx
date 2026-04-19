"use client";

import { MenuIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { mainNavFlat, mainNavSilos } from "@/lib/constants/navigation";

const extraLinks = [
  { name: "Accueil", href: "/" },
  ...mainNavSilos.map((s) => ({ name: s.label, href: s.href })),
  ...mainNavFlat.map((l) => ({ name: l.label, href: l.href })),
  { name: "Contact", href: "/contact/" },
] as const;

export function GenesisNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        className={`sticky top-0 z-50 flex w-full items-center justify-between px-4 py-3.5 transition-colors md:px-16 lg:px-24 ${
          isScrolled ? "bg-white/15 backdrop-blur-lg" : ""
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
      >
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

        <div className="hidden flex-wrap items-center justify-end gap-x-8 gap-y-2 md:flex lg:gap-x-10">
          {extraLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white/90 transition hover:text-white"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/devis/" className="btn glass text-sm">
            Demander un devis
          </Link>
        </div>

        <button type="button" onClick={() => setIsOpen(true)} className="transition active:scale-90 md:hidden">
          <MenuIcon className="size-[26px]" />
        </button>
      </motion.nav>

      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-black/20 text-lg font-medium backdrop-blur-2xl transition duration-300 md:hidden ${
          isOpen ? "pointer-events-auto translate-x-0" : "pointer-events-none invisible -translate-x-full"
        }`}
      >
        {extraLinks.map((link) => (
          <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
            {link.name}
          </Link>
        ))}
        <Link href="/devis/" className="btn glass" onClick={() => setIsOpen(false)}>
          Demander un devis
        </Link>
        <button type="button" onClick={() => setIsOpen(false)} className="glass rounded-md p-2">
          <XIcon className="size-5" />
        </button>
      </div>
    </>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { contactLinks, footerCompany } from "@/lib/constants/navigation";

export function GenesisFooter() {
  return (
    <motion.footer
      className="mt-40 flex w-full flex-col items-center justify-center border-0 px-4 pt-16 glass md:px-16 lg:px-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link href="/" className="shrink-0">
        <Image src="/assets/logo.svg" alt="Clickdev" className="h-[34px] w-auto" width={205} height={48} />
      </Link>

      <div className="flex flex-wrap items-center justify-center gap-8 py-8">
        {footerCompany.map((link) => (
          <Link key={link.href} href={link.href} className="transition hover:text-neutral-300">
            {link.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-8 pb-6 text-sm text-neutral-200">
        <a
          href={contactLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-white"
        >
          LinkedIn
        </a>
        <a href={contactLinks.github} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
          GitHub
        </a>
      </div>
      <hr className="mt-6 w-full border-white/20" />
      <div className="flex w-full flex-col items-center justify-between gap-4 py-4 md:flex-row">
        <p className="text-center text-sm text-neutral-300 md:text-left">
          Développeur freelance — e-commerce, marketplaces & outils métiers.
        </p>
        <p className="text-center text-sm text-neutral-400 md:text-right">
          © {new Date().getFullYear()} Clickdev
        </p>
      </div>
    </motion.footer>
  );
}

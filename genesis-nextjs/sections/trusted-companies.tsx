'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const logos = [
  '/assets/company-logo-1.svg',
  '/assets/company-logo-2.svg',
  '/assets/company-logo-3.svg',
  '/assets/company-logo-4.svg',
  '/assets/company-logo-5.svg',
] as const;

export default function TrustedCompanies() {
  return (
    <motion.section
      className="mt-14"
      initial={{ y: 150, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 200, damping: 70, mass: 1 }}
    >
      <p className="mt-14 py-6 text-center">Trusting by leading brands, including —</p>

      <div
        className="mx-auto flex w-full max-w-4xl flex-wrap justify-between gap-10 py-4 max-sm:justify-center"
        id="logo-container"
      >
        {logos.map((logo) => (
          <Image
            key={logo}
            src={logo}
            alt=""
            width={140}
            height={28}
            className="h-7 w-auto max-w-xs"
          />
        ))}
      </div>
    </motion.section>
  );
}

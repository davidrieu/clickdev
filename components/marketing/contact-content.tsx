import { SITE_EMAIL, SOCIAL_LINKS } from '@/lib/constants/site';
import Link from 'next/link';

export default function ContactContent() {
  const mailto = `mailto:${SITE_EMAIL}?subject=${encodeURIComponent('Prise de contact — Clickdev')}`;

  return (
    <div className="mt-10 space-y-10 text-sm leading-relaxed text-white/75 md:text-base">
      <p>
        Pour un échange rapide, écrivez directement à{' '}
        <a
          href={mailto}
          className="font-medium text-[#F26A06] underline-offset-4 hover:underline"
        >
          {SITE_EMAIL}
        </a>
        . Indiquez votre contexte (produit, délais, budget indicatif) : je réponds en général sous 1 à
        2 jours ouvrés.
      </p>
      <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6">
        <p className="font-mono text-[11px] tracking-widest text-white/45 uppercase">Réseaux</p>
        <ul className="mt-4 flex flex-wrap gap-4">
          <li>
            <a
              href={SOCIAL_LINKS.linkedin}
              className="font-medium text-white/90 underline-offset-4 hover:underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={SOCIAL_LINKS.github}
              className="font-medium text-white/90 underline-offset-4 hover:underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href={SOCIAL_LINKS.malt}
              className="font-medium text-white/90 underline-offset-4 hover:underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              Malt
            </a>
          </li>
        </ul>
      </div>
      <p className="text-white/60">
        Besoin d’un devis structuré ? Utilisez le{' '}
        <Link href="/devis" className="font-medium text-white/90 underline-offset-4 hover:underline">
          formulaire devis
        </Link>
        .
      </p>
    </div>
  );
}

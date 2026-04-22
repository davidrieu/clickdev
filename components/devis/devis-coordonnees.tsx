import { ServiceCardGlow } from '@/components/premium/service-card-glow';
import { SITE_ADDRESS_CITY, SITE_ADDRESS_MAPS_QUERY, SITE_ADDRESS_STREET, SITE_EMAIL, SITE_PHONE } from '@/lib/constants/site';
import Link from 'next/link';

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE_ADDRESS_MAPS_QUERY)}`;

export function DevisCoordonnees() {
  return (
    <div className="group relative flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-white/[0.1] bg-gradient-to-br from-neutral-950 via-neutral-900/85 to-neutral-900 p-6 transition duration-500 hover:border-white/[0.16] md:p-7">
      <ServiceCardGlow />
      <div className="relative z-[2] flex flex-col">
        <p className="font-mono text-[11px] tracking-[0.28em] text-white/50 uppercase">Coordonnées</p>
        <h2 className="si-serif-display mt-3 text-lg font-medium tracking-[-0.02em] text-white md:text-xl">Me joindre</h2>
        <p className="mt-2 text-sm leading-relaxed text-white/60">
          Téléphone et e-mail pour un retour direct ; l&apos;adresse pour la réception ou un rendez-vous sur
          prise de contact.
        </p>
        <ul className="mt-8 space-y-6 text-left">
          <li className="border-b border-white/[0.08] pb-5 last:border-b-0 last:pb-0">
            <p className="font-mono text-[10px] tracking-[0.22em] text-white/40 uppercase">Téléphone</p>
            <a
              href={`tel:${SITE_PHONE.replace(/\s/g, '')}`}
              className="mt-2 block text-base font-medium tracking-tight text-white transition hover:text-white/90"
            >
              {SITE_PHONE}
            </a>
          </li>
          <li className="border-b border-white/[0.08] pb-5 last:border-b-0 last:pb-0">
            <p className="font-mono text-[10px] tracking-[0.22em] text-white/40 uppercase">E-mail</p>
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="mt-2 block break-all text-sm font-medium text-white/85 transition hover:text-white md:text-base"
            >
              {SITE_EMAIL}
            </a>
          </li>
          <li>
            <p className="font-mono text-[10px] tracking-[0.22em] text-white/40 uppercase">Adresse</p>
            <Link
              href={mapsUrl}
              className="mt-2 block text-sm leading-relaxed text-white/75 transition hover:text-white/95"
              target="_blank"
              rel="noreferrer"
            >
              {SITE_ADDRESS_STREET}
              <br />
              {SITE_ADDRESS_CITY}
              <span className="ml-1.5 text-xs text-white/40">(carte ↗)</span>
            </Link>
          </li>
        </ul>
        <p className="mt-6 border-t border-white/[0.08] pt-5 text-xs leading-relaxed text-white/45">
          Domiciliation : rendez-vous sur prise de contact. Déplacements possibles, à cadrer selon le besoin.
        </p>
      </div>
    </div>
  );
}

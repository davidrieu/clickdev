import { SITE_ADDRESS_CITY, SITE_ADDRESS_MAPS_QUERY, SITE_ADDRESS_STREET, SITE_EMAIL, SITE_PHONE } from '@/lib/constants/site';

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE_ADDRESS_MAPS_QUERY)}`;

export function DevisCoordonnees() {
  return (
    <div className="lg:pt-1">
      <h2 className="font-mono text-[11px] tracking-[0.28em] text-white/45 uppercase">Coordonnées</h2>
      <ul className="mt-6 space-y-6 text-left">
        <li>
          <p className="text-xs font-medium tracking-wide text-white/40 uppercase">Téléphone</p>
          <a
            href={`tel:${SITE_PHONE.replace(/\s/g, '')}`}
            className="mt-1.5 block text-base font-medium text-white transition hover:text-white/90"
          >
            {SITE_PHONE}
          </a>
        </li>
        <li>
          <p className="text-xs font-medium tracking-wide text-white/40 uppercase">E-mail</p>
          <a
            href={`mailto:${SITE_EMAIL}`}
            className="mt-1.5 block break-all text-base font-medium text-[#F26A06] underline-offset-2 transition hover:underline"
          >
            {SITE_EMAIL}
          </a>
        </li>
        <li>
          <p className="text-xs font-medium tracking-wide text-white/40 uppercase">Adresse</p>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-1.5 block text-sm leading-relaxed text-white/80 transition hover:text-white"
          >
            {SITE_ADDRESS_STREET}
            <br />
            {SITE_ADDRESS_CITY}
            <span className="ml-1 text-xs text-white/40">(ouvrir la carte ↗)</span>
          </a>
        </li>
      </ul>
      <p className="mt-8 text-xs leading-relaxed text-white/45">
        Domiciliation et rendez-vous : sur prise de contact. Déplacements possibles selon le besoin, à cadrer.
      </p>
    </div>
  );
}

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://clickdev.fr';

export const SITE_NAME = 'Clickdev';

export const SITE_TAGLINE =
  'Je conçois des sites, des applications et des outils digitaux qui performent — développeur web freelance en France.';

export const SITE_EMAIL = 'bonjour@clickdev.fr';

export const SITE_PHONE = '+33 7 56 85 76 49';

/** Adresse professionnelle (devis, mentions légales, JSON-LD). */
export const SITE_ADDRESS_STREET = '48 rue de la Glacière' as const;
export const SITE_ADDRESS_POSTAL = '75013' as const;
export const SITE_ADDRESS_LOCALITY = 'Paris' as const;
export const SITE_ADDRESS_CITY = '75013 Paris' as const;
export const SITE_ADDRESS = `${SITE_ADDRESS_STREET}, ${SITE_ADDRESS_CITY}` as const;
export const SITE_ADDRESS_MAPS_QUERY = '48 rue de la Glacière 75013 Paris' as const;

export const SITE_SIRET = 'SIRET à renseigner';

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/david-rieu',
  github: 'https://github.com/davidrieu',
  malt: 'https://www.malt.fr/profile/davidrieu',
  codeur: 'https://www.codeur.com/-clickdev',
} as const;

import { SITE_URL } from '@/lib/constants/site';

export function schemaOrigin(): string {
  return SITE_URL.replace(/\/$/, '');
}

export function organizationJsonLdId(): string {
  return `${schemaOrigin()}/#organization`;
}

export function websiteJsonLdId(): string {
  return `${schemaOrigin()}/#website`;
}

/** Aligné sur `PersonJsonLd` (page À propos). */
export function personJsonLdId(): string {
  return `${schemaOrigin()}/a-propos#person`;
}

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

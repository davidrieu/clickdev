import { SITE_NAME, SITE_URL } from '@/lib/constants/site';
import type { Metadata } from 'next';

function absoluteUrl(path: string) {
  const base = SITE_URL.replace(/\/$/, '');
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${base}${p}`;
}

export function pageMetadata(opts: {
  title: string;
  description: string;
  path: string;
  ogImage?: string | null;
  /** Pages marketing hors blog : utiliser `website` pour éviter le type Open Graph « article ». */
  openGraphType?: 'website' | 'article';
}): Metadata {
  const url = absoluteUrl(opts.path);
  const ogType = opts.openGraphType ?? 'article';
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      type: ogType,
      url,
      title: opts.title,
      description: opts.description,
      siteName: SITE_NAME,
      ...(opts.ogImage ? { images: [{ url: opts.ogImage }] } : {}),
    },
    twitter: {
      card: opts.ogImage ? 'summary_large_image' : 'summary',
      title: opts.title,
      description: opts.description,
      ...(opts.ogImage ? { images: [opts.ogImage] } : {}),
    },
  };
}

export function listingPageMetadata(opts: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = absoluteUrl(opts.path);
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      title: opts.title,
      description: opts.description,
      siteName: SITE_NAME,
    },
    twitter: {
      card: 'summary',
      title: opts.title,
      description: opts.description,
    },
  };
}

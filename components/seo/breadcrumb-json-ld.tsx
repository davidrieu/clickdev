import { SITE_URL } from '@/lib/constants/site';

export type BreadcrumbJsonLdItem = { name: string; path: string };

type Props = { items: BreadcrumbJsonLdItem[] };

export function BreadcrumbJsonLd({ items }: Props) {
  if (items.length === 0) {
    return null;
  }

  const origin = SITE_URL.replace(/\/$/, '');
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${origin}${item.path.startsWith('/') ? item.path : `/${item.path}`}`,
    })),
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

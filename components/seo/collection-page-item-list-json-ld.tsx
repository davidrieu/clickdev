import { schemaOrigin, websiteJsonLdId } from '@/lib/seo/schema-ids';

export type CollectionListItem = { path: string; name: string };

type Props = {
  pagePath: string;
  pageTitle: string;
  items: CollectionListItem[];
};

/** WebPage + ItemList pour les index (blog, réalisations, expertises). */
export function CollectionPageItemListJsonLd({ pagePath, pageTitle, items }: Props) {
  if (items.length === 0) {
    return null;
  }

  const origin = schemaOrigin();
  const pageUrl = `${origin}${pagePath.startsWith('/') ? pagePath : `/${pagePath}`}`;

  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: pageTitle,
        isPartOf: { '@id': websiteJsonLdId() },
        mainEntity: { '@id': `${pageUrl}#itemlist` },
      },
      {
        '@type': 'ItemList',
        '@id': `${pageUrl}#itemlist`,
        numberOfItems: items.length,
        itemListElement: items.map((it, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: it.name,
          url: `${origin}${it.path.startsWith('/') ? it.path : `/${it.path}`}`,
        })),
      },
    ],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

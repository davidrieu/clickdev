import { organizationJsonLdId, schemaOrigin, websiteJsonLdId } from '@/lib/seo/schema-ids';

export type CollectionListItem = { path: string; name: string };

export type CollectionPageEntity = 'WebPage' | 'CollectionPage';

type Props = {
  pagePath: string;
  pageTitle: string;
  items: CollectionListItem[];
  /** CollectionPage pour un index type portfolio ; WebPage par défaut. */
  pageEntity?: CollectionPageEntity;
};

/** WebPage (ou CollectionPage) + ItemList pour les index (réalisations, expertises, silos…). */
export function CollectionPageItemListJsonLd({
  pagePath,
  pageTitle,
  items,
  pageEntity = 'WebPage',
}: Props) {
  if (items.length === 0) {
    return null;
  }

  const origin = schemaOrigin();
  const pageUrl = `${origin}${pagePath.startsWith('/') ? pagePath : `/${pagePath}`}`;

  const pageNode: Record<string, unknown> = {
    '@type': pageEntity,
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: pageTitle,
    isPartOf: { '@id': websiteJsonLdId() },
    mainEntity: { '@id': `${pageUrl}#itemlist` },
  };

  if (pageEntity === 'CollectionPage') {
    pageNode.publisher = { '@id': organizationJsonLdId() };
  }

  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      pageNode,
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

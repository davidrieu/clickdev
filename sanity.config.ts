import { StarIcon } from '@sanity/icons';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './sanity/schemaTypes';

const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ??
  process.env.SANITY_STUDIO_PROJECT_ID ??
  'missing-project-id';
const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET ?? process.env.SANITY_STUDIO_DATASET ?? 'production';

export default defineConfig({
  name: 'default',
  title: 'Clickdev',
  projectId,
  dataset,
  /** Requis quand le Studio est monté sur le site (ex. /studio sur Vercel) */
  basePath: '/studio',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Contenu')
          .items([
            S.listItem()
              .title('Projets phares (6 max.)')
              .icon(StarIcon)
              .id('portfolioHighlights')
              .child(S.document().schemaType('portfolioHighlights').documentId('portfolioHighlights')),
            S.divider(),
            ...S.documentTypeListItems().filter(
              (item) => item.getId() !== 'portfolioHighlights',
            ),
          ]),
    }),
  ],
  schema: { types: schemaTypes },
});

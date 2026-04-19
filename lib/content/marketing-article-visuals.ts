import type { MarketingLongArticle } from './marketing-article-types';

const DEFAULT_CAPTION =
  'Emplacement réservé pour votre visuel (capture, mockup, infographie). Vous pourrez le brancher sans toucher au layout.';

function placeholderForHeading(heading: string) {
  return {
    alt: `Illustration prévue : ${heading}`,
    caption: DEFAULT_CAPTION,
  };
}

/** Ajoute 1–2 blocs image « vides » par article si les sections n’en ont pas déjà. */
export function withMarketingVisualPlaceholders(article: MarketingLongArticle): MarketingLongArticle {
  const { sections } = article;
  if (sections.length === 0) return article;

  const secondIndex = sections.length > 1 ? Math.min(2, sections.length - 1) : -1;

  return {
    ...article,
    sections: sections.map((section, i) => {
      const slot = i === 0 || i === secondIndex;
      if (!slot || section.image) return section;
      return { ...section, image: placeholderForHeading(section.heading) };
    }),
  };
}

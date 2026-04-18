/** Requêtes GROQ partagées — Phase 1.7 (aperçu home / blog). */

export const postsLatestQuery = /* groq */ `
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0...3] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    readingTimeMinutes,
    "coverImage": coverImage.asset->url,
    "coverAlt": coverImage.alt,
    "authorName": author->name,
    "categories": categories
  }
`;

export const postBySlugQuery = /* groq */ `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    readingTimeMinutes,
    body,
    "coverImage": coverImage.asset->url,
    "coverAlt": coverImage.alt,
    "author": author->{ name, slug, image, role, bio, linkedin }
  }
`;

export const caseStudiesFeaturedQuery = /* groq */ `
  *[_type == "caseStudy" && featured == true && defined(slug.current)]
    | order(order asc, publishedAt desc)[0...6] {
    _id,
    title,
    "slug": slug.current,
    client,
    year,
    category,
    featuredMetric,
    "thumbnail": thumbnail.asset->url
  }
`;

export const caseStudiesListQuery = /* groq */ `
  *[_type == "caseStudy" && defined(slug.current)] | order(order asc, publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    client,
    year,
    category,
    featuredMetric,
    "thumbnail": thumbnail.asset->url
  }
`;

export const caseStudySlugsQuery = /* groq */ `
  *[_type == "caseStudy" && defined(slug.current)].slug.current
`;

export const caseStudyBySlugQuery = /* groq */ `
  *[_type == "caseStudy" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    client,
    year,
    category,
    tagline,
    featuredMetric,
    liveUrl,
    role,
    duration,
    technologies,
    sectors,
    metrics,
    metaTitle,
    metaDescription,
    "thumbnail": thumbnail.asset->url,
    "heroImage": heroImage.asset->url,
    context,
    solution,
    results,
    challenges,
    "gallery": gallery[]{
      "url": image.asset->url,
      caption
    }
  }
`;

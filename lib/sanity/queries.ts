const postTeaserProjection = `{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  "coverImage": coverImage.asset->url
}`;

export function latestPostsQuery(limit: number) {
  return `*[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0...${limit}]${postTeaserProjection}`;
}

export const allPostsTeasersQuery = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc)${postTeaserProjection}`;

export const postSlugsQuery = `*[_type == "post" && defined(slug.current)].slug.current`;

export const postSitemapEntriesQuery = `*[_type == "post" && defined(slug.current)]{
  "slug": slug.current,
  "lastModified": coalesce(_updatedAt, publishedAt)
}`;

export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  "coverImage": coverImage.asset->url,
  metaTitle,
  metaDescription,
  "ogImage": ogImage.asset->url,
  body,
  "author": author->{ name }
}`;

const caseStudyTeaserProjection = `{
  _id,
  title,
  "slug": slug.current,
  client,
  year,
  category,
  typeTag,
  tagline,
  featuredMetric,
  metrics,
  featured,
  "thumbnail": thumbnail.asset->url,
  publishedAt
}`;

export const featuredCaseStudiesQuery = `*[_type == "caseStudy" && defined(slug.current)] | order(featured desc, publishedAt desc)[0...6]${caseStudyTeaserProjection}`;

/** Derniers projets « web » (site, e-commerce, marketplace) pour la page pilier /sites-internet. */
export const recentWebCaseStudiesQuery = `*[_type == "caseStudy" && defined(slug.current) && category in ["website", "ecommerce", "marketplace"]] | order(coalesce(publishedAt, _updatedAt) desc)[0...5]${caseStudyTeaserProjection}`;

/** Derniers projets « app mobile » (catégorie Sanity `mobile`) pour le silo applications mobiles. */
export const recentMobileCaseStudiesQuery = `*[_type == "caseStudy" && defined(slug.current) && category == "mobile"] | order(coalesce(publishedAt, _updatedAt) desc)[0...5]${caseStudyTeaserProjection}`;

export const allCaseStudiesTeasersQuery = `*[_type == "caseStudy" && defined(slug.current)] | order(featured desc, coalesce(publishedAt, _updatedAt) desc)${caseStudyTeaserProjection}`;

export const caseStudySlugsQuery = `*[_type == "caseStudy" && defined(slug.current)].slug.current`;

export const caseStudySitemapEntriesQuery = `*[_type == "caseStudy" && defined(slug.current)]{
  "slug": slug.current,
  "lastModified": coalesce(_updatedAt, publishedAt)
}`;

export const caseStudyBySlugQuery = `*[_type == "caseStudy" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  client,
  year,
  duration,
  role,
  liveUrl,
  category,
  sectors,
  technologies,
  tagline,
  typeTag,
  featuredMetric,
  metrics,
  context,
  challenges[]{
    title,
    description,
    "image": image.asset->url
  },
  solution,
  gallery[]{
    "image": image.asset->url,
    caption
  },
  results,
  stackDetails,
  "testimonial": testimonial->{
    quote,
    name,
    role
  },
  metaTitle,
  metaDescription,
  "heroImage": heroImage.asset->url,
  "ogImage": ogImage.asset->url,
  "thumbnail": thumbnail.asset->url,
  publishedAt
}`;

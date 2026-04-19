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

export const featuredCaseStudiesQuery = `*[_type == "caseStudy" && defined(slug.current)] | order(featured desc, publishedAt desc)[0...6]{
  _id,
  title,
  "slug": slug.current,
  client,
  year,
  tagline,
  featuredMetric,
  "thumbnail": thumbnail.asset->url
}`;

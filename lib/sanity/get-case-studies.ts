import type {
  SanityCaseStudyDetail,
  SanityCaseStudyListItem,
} from "@/types/sanity-case-study";
import { sanityClient } from "@/lib/sanity/client";
import {
  caseStudiesListQuery,
  caseStudyBySlugQuery,
  caseStudySlugsQuery,
} from "@/lib/sanity/queries";

export async function getCaseStudiesList(): Promise<SanityCaseStudyListItem[]> {
  try {
    const data = await sanityClient.fetch<SanityCaseStudyListItem[]>(caseStudiesListQuery);
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export async function getCaseStudySlugs(): Promise<string[]> {
  try {
    const data = await sanityClient.fetch<string[]>(caseStudySlugsQuery);
    return Array.isArray(data) ? data.filter(Boolean) : [];
  } catch {
    return [];
  }
}

export async function getCaseStudyBySlug(
  slug: string,
): Promise<SanityCaseStudyDetail | null> {
  try {
    const data = await sanityClient.fetch<SanityCaseStudyDetail | null>(caseStudyBySlugQuery, {
      slug,
    });
    return data && data.slug ? data : null;
  } catch {
    return null;
  }
}

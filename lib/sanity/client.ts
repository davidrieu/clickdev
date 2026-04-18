import { createClient, type SanityClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "@/sanity/env";

/** Client lecture publique (contenu publié). */
export const sanityClient: SanityClient = createClient({
  projectId: projectId || "placehldr", // remplacer par NEXT_PUBLIC_SANITY_PROJECT_ID (8 caractères)
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === "production",
  perspective: "published",
});

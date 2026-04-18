import createImageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { dataset, projectId } from "@/sanity/env";

const builder = createImageUrlBuilder({
  projectId: projectId || "placehldr",
  dataset,
});

export const urlFor = (source: SanityImageSource) =>
  builder.image(source).auto("format").fit("max");

import { type SchemaTypeDefinition } from "sanity";
import { author } from "./author";
import { blockContent } from "./blockContent";
import { caseStudy } from "./caseStudy";
import { post } from "./post";
import { testimonial } from "./testimonial";

export const schemaTypes: SchemaTypeDefinition[] = [
  blockContent,
  author,
  testimonial,
  post,
  caseStudy,
];

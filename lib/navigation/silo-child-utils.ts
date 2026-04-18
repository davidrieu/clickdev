import type { NavChild, NavSilo } from "@/lib/constants/navigation";

/** Extrait le segment `[slug]` depuis une URL fille et l’URL pilier du silo. */
export function slugFromChildHref(childHref: string, siloHref: string): string {
  const silo = siloHref.endsWith("/") ? siloHref : `${siloHref}/`;
  const child = childHref.endsWith("/") ? childHref : `${childHref}/`;
  if (!child.startsWith(silo)) {
    const parts = child.split("/").filter(Boolean);
    return parts[parts.length - 1] ?? "";
  }
  return child.slice(silo.length).replace(/\/$/, "");
}

export function findChildBySlug(silo: NavSilo, slug: string): NavChild | undefined {
  return silo.children.find((c) => slugFromChildHref(c.href, silo.href) === slug);
}

export function siloChildStaticParams(silo: NavSilo) {
  return silo.children.map((c) => ({ slug: slugFromChildHref(c.href, silo.href) }));
}

import type { Dirent } from 'node:fs';
import { readdir } from 'node:fs/promises';
import { join } from 'node:path';

function isRouteGroup(name: string): boolean {
  return name.startsWith('(') && name.endsWith(')');
}

function isDynamicRouteSegment(name: string): boolean {
  return name.startsWith('[') && name.endsWith(']');
}

const PAGE_FILE = new Set(['page.tsx', 'page.js', 'page.mjs', 'page.ts', 'page.jsx', 'page.mdx']);

/**
 * Découvre les URLs de pages statiques sous `app/(marketing)`.
 * Les segments dynamiques (`[slug]`, `[silo]`, etc.) ne sont pas parcourus :
 * leurs URL sont alimentées ailleurs (NAV, EXPERTISE_SLUGS, Sanity).
 */
export async function discoverStaticMarketingPathsFromApp(): Promise<string[]> {
  const root = join(process.cwd(), 'app', '(marketing)');

  async function walk(absDir: string, urlSegments: string[]): Promise<string[]> {
    const out: string[] = [];
    let entries: Dirent[];

    try {
      entries = await readdir(absDir, { withFileTypes: true });
    } catch {
      return out;
    }

    for (const ent of entries) {
      if (ent.name.startsWith('.')) continue;
      if (isRouteGroup(ent.name)) {
        out.push(...(await walk(join(absDir, ent.name), urlSegments)));
        continue;
      }
      if (isDynamicRouteSegment(ent.name)) {
        continue;
      }
      if (ent.isDirectory()) {
        out.push(
          ...(await walk(join(absDir, ent.name), [...urlSegments, ent.name])),
        );
      }
    }

    const hasPage = entries.some((e) => e.isFile() && PAGE_FILE.has(e.name));
    if (hasPage && !urlSegments.some((s) => s.startsWith('['))) {
      if (urlSegments.length === 0) {
        out.push('/');
      } else {
        out.push(`/${urlSegments.join('/')}`);
      }
    }

    return out;
  }

  return walk(root, []);
}

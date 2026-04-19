import Link from 'next/link';

export type PageBreadcrumbItem = { label: string; href: string };

type Props = { items: PageBreadcrumbItem[] };

export default function PageBreadcrumb({ items }: Props) {
  if (items.length === 0) {
    return null;
  }

  return (
    <nav aria-label="Fil d’Ariane" className="mb-8 text-xs text-white/50">
      <ol className="flex flex-wrap gap-2">
        {items.map((b, i) => (
          <li key={b.href} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden>/</span>}
            <Link href={b.href} className="transition hover:text-white/80">
              {b.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}

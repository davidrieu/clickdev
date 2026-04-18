import Link from "next/link";
import { PortableText, type PortableTextComponents } from "@portabletext/react";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mt-4 text-base leading-relaxed text-ink-dim">{children}</p>,
    h2: ({ children }) => (
      <h3 className="mt-10 font-serif text-2xl font-medium tracking-tight text-ink first:mt-0 md:text-[1.65rem]">
        {children}
      </h3>
    ),
    h3: ({ children }) => (
      <h4 className="mt-8 font-serif text-xl font-medium tracking-tight text-ink">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mt-6 border-l-2 border-terracotta/60 pl-5 font-serif text-lg italic text-ink-dim">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-4 list-inside list-disc space-y-2 text-ink-dim">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mt-4 list-inside list-decimal space-y-2 text-ink-dim">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-ink">{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ value, children }) => {
      const href = value?.href as string | undefined;
      if (!href) return <>{children}</>;
      const external = href.startsWith("http") || href.startsWith("mailto");
      if (external) {
        return (
          <a
            href={href}
            className="text-terracotta underline-offset-4 hover:underline"
            rel="noopener noreferrer"
            target={href.startsWith("http") ? "_blank" : undefined}
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className="text-terracotta underline-offset-4 hover:underline">
          {children}
        </Link>
      );
    },
  },
};

type BlockContentProps = {
  value: unknown[] | null | undefined;
};

export function BlockContent({ value }: BlockContentProps) {
  if (!value || !Array.isArray(value) || value.length === 0) return null;
  return (
    <div className="prose-portable max-w-none">
      <PortableText value={value as never} components={components} />
    </div>
  );
}

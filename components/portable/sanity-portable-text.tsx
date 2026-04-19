import { PortableText, type PortableTextComponents } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';
import Link from 'next/link';

import { urlForImage } from '@/lib/sanity/image';

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="mt-12 mb-4 text-2xl font-semibold tracking-tight text-white">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-10 mb-3 text-xl font-semibold tracking-tight text-white">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-2 border-[#F26A06]/80 pl-5 text-base italic text-white/75">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="my-5 text-base leading-relaxed text-white/80">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="my-6 list-disc space-y-2 pl-6 text-white/80">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="my-6 list-decimal space-y-2 pl-6 text-white/80">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    code: ({ children }) => (
      <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[0.9em] text-[#F26A06]">
        {children}
      </code>
    ),
    link: ({ value, children }) => {
      const href = typeof value?.href === 'string' ? value.href : '';
      const isExternal = /^https?:\/\//.test(href) || href.startsWith('mailto:');
      if (!href) {
        return <span>{children}</span>;
      }
      if (isExternal) {
        return (
          <a
            href={href}
            className="font-medium text-[#F26A06] underline-offset-4 hover:underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className="font-medium text-[#F26A06] underline-offset-4 hover:underline">
          {children}
        </Link>
      );
    },
  },
  types: {
    image: ({ value }) => {
      const src = value?.asset ? urlForImage(value)?.width(1400).quality(85).url() : null;
      if (!src) {
        return null;
      }
      return (
        <figure className="my-10">
          {/* eslint-disable-next-line @next/next/no-img-element -- Sanity CDN URLs, dimensions vary */}
          <img
            src={src}
            alt={typeof value?.alt === 'string' ? value.alt : ''}
            className="w-full rounded-lg border border-white/10"
            loading="lazy"
          />
          {value?.caption ? (
            <figcaption className="mt-2 text-center text-xs text-white/50">{value.caption}</figcaption>
          ) : null}
        </figure>
      );
    },
  },
};

type Props = { value: PortableTextBlock[] | null | undefined };

export default function SanityPortableText({ value }: Props) {
  if (!value || value.length === 0) {
    return null;
  }

  return <PortableText value={value} components={components} />;
}

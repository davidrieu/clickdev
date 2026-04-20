'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import { BlogPostSidebar } from '@/components/blog/blog-post-sidebar';
import SanityPortableText from '@/components/portable/sanity-portable-text';
import { formatDateFr } from '@/lib/format/date';
import type { SanityPostDocument, SanityPostTeaser } from '@/types/sanity-post';

type Props = {
  post: SanityPostDocument;
  currentSlug: string;
  recentPosts: SanityPostTeaser[];
};

export function BlogPostClient({ post, currentSlug, recentPosts }: Props) {
  const dateLabel = formatDateFr(post.publishedAt);

  return (
    <div className="grid gap-12 xl:grid-cols-[minmax(0,1fr)_17.5rem] 2xl:grid-cols-[minmax(0,1fr)_19rem] xl:items-stretch xl:gap-10 2xl:gap-12">
      <div className="min-w-0 space-y-12 md:space-y-16 lg:space-y-20">
        <header className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-4">
              <span className="font-mono text-[11px] tracking-[0.28em] text-white/55 uppercase">Chapitre · Blog</span>
              <span className="block h-px max-w-[120px] flex-1 origin-left bg-gradient-to-r from-white/50 to-white/12" />
            </div>
            <p className="mt-2 font-mono text-[10px] tracking-[0.22em] text-white/45 uppercase md:text-[11px]">Article — Clickdev</p>
            <h1 className="si-serif-display mt-8 text-[clamp(2.125rem,4vw,3.5rem)] leading-[1.06] font-medium tracking-[-0.035em] text-white">
              {post.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-white/55">
              {dateLabel ? <time dateTime={post.publishedAt ?? undefined}>{dateLabel}</time> : null}
              {post.author?.name ? (
                <span>
                  {dateLabel ? <span className="text-white/30">·</span> : null} Par {post.author.name}
                </span>
              ) : null}
            </div>
          </motion.div>
          {post.coverImage ? (
            <motion.div
              className="relative mt-10 aspect-[16/9] w-full max-w-4xl overflow-hidden rounded-2xl border border-white/[0.1] bg-gradient-to-br from-neutral-950 via-neutral-900/85 to-neutral-900"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={post.coverImage}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
                priority
              />
            </motion.div>
          ) : null}
        </header>

        {post.excerpt ? (
          <p className="max-w-3xl text-base leading-relaxed text-white/72 md:text-lg">{post.excerpt}</p>
        ) : null}

        {post.body?.length ? (
          <div className="prose-portable max-w-3xl text-white/80">
            <SanityPortableText value={post.body} />
          </div>
        ) : null}
      </div>

      <BlogPostSidebar currentSlug={currentSlug} posts={recentPosts} />
    </div>
  );
}

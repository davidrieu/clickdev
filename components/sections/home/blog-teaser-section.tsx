"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { SectionAurora } from "@/components/effects/section-aurora";
import {
  staggerContainer,
  staggerItemReveal,
  viewportOnceTight,
} from "@/lib/motion/home";
import type { SanityPostTeaser } from "@/types/sanity-post";

type BlogTeaserSectionProps = {
  posts: SanityPostTeaser[];
};

function formatPostDate(iso: string | null): string | null {
  if (!iso) return null;
  try {
    const d = new Date(iso);
    return new Intl.DateTimeFormat("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(d);
  } catch {
    return null;
  }
}

export function BlogTeaserSection({ posts }: BlogTeaserSectionProps) {
  const reduceMotion = useReducedMotion();
  const validPosts = posts.filter((p) => p.slug);
  const head = staggerItemReveal(reduceMotion);
  const linkBlock = staggerItemReveal(reduceMotion);
  const grid = staggerContainer(reduceMotion, 0.1, 0.04);
  const card = staggerItemReveal(reduceMotion);

  return (
    <section
      className="relative overflow-hidden border-b border-line/80 py-20 md:py-28 lg:py-[120px]"
      aria-labelledby="blog-teaser-heading"
    >
      <SectionAurora variant="soft" />
      <div className="relative z-[1] mx-auto max-w-[1600px] px-4 md:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <motion.div
            variants={head}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnceTight}
            className="max-w-3xl"
          >
            <h2
              id="blog-teaser-heading"
              className="font-serif text-3xl font-normal tracking-tight text-ink md:text-4xl lg:text-[2.75rem] lg:leading-tight"
            >
              Blog
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-dim md:text-lg">
              Notes techniques, retours d’expérience et veille — alimenté depuis Sanity.
            </p>
          </motion.div>
          <motion.div
            variants={linkBlock}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnceTight}
            whileHover={reduceMotion ? undefined : { x: 3 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
          >
            <Link
              href="/blog/"
              className="font-mono text-[11px] font-medium uppercase tracking-widest text-terracotta underline-offset-4 hover:underline"
            >
              Tous les articles →
            </Link>
          </motion.div>
        </div>

        {validPosts.length === 0 ? (
          <motion.p
            className="mt-14 rounded-lg border border-dashed border-line bg-bg-2/50 px-6 py-12 text-center text-ink-dim"
            variants={head}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnceTight}
          >
            Les prochains articles seront publiés ici. En attendant,{" "}
            <Link
              href="/devis/"
              className="text-terracotta underline-offset-4 hover:underline"
            >
              parlons de votre projet
            </Link>
            .
          </motion.p>
        ) : (
          <motion.ul
            className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10"
            variants={grid}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnceTight}
          >
            {validPosts.map((post) => {
              const href = `/blog/${post.slug}/`;
              const dateLabel = formatPostDate(post.publishedAt);
              return (
                <motion.li
                  key={post._id}
                  variants={card}
                  whileHover={reduceMotion ? undefined : { y: -6 }}
                  transition={{ type: "spring", stiffness: 380, damping: 22 }}
                >
                  <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-line bg-bg transition-colors hover:border-line-2 hover:bg-bg-2">
                    <Link href={href} className="block shrink-0">
                      <div className="relative aspect-[16/10] overflow-hidden bg-bg-3">
                        {post.coverImage ? (
                          <Image
                            src={post.coverImage}
                            alt={post.coverAlt ?? post.title ?? "Illustration article"}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        ) : (
                          <span className="absolute inset-0 flex items-center justify-center font-mono text-[10px] uppercase tracking-widest text-ink-muted">
                            Aperçu
                          </span>
                        )}
                      </div>
                    </Link>
                    <div className="flex flex-1 flex-col p-5 md:p-6">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-wider text-ink-muted">
                        {dateLabel ? (
                          <time dateTime={post.publishedAt ?? undefined}>
                            {dateLabel}
                          </time>
                        ) : null}
                        {post.readingTimeMinutes != null ? (
                          <>
                            {dateLabel ? <span aria-hidden>·</span> : null}
                            <span>{post.readingTimeMinutes} min</span>
                          </>
                        ) : null}
                      </div>
                      <h3 className="mt-3 font-serif text-xl font-normal leading-snug text-ink md:text-2xl">
                        <Link href={href} className="hover:text-terracotta">
                          {post.title ?? "Sans titre"}
                        </Link>
                      </h3>
                      {post.excerpt ? (
                        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-ink-dim">
                          {post.excerpt}
                        </p>
                      ) : null}
                      <Link
                        href={href}
                        className="mt-5 inline-flex font-mono text-[11px] font-medium uppercase tracking-widest text-terracotta underline-offset-4 hover:underline"
                      >
                        Lire →
                      </Link>
                    </div>
                  </article>
                </motion.li>
              );
            })}
          </motion.ul>
        )}
      </div>
    </section>
  );
}

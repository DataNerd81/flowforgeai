import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { getBlogPost, getBlogPosts } from "@/lib/blog";
import { createMetadata } from "@/lib/metadata";
import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "../../../../mdx-components";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return createMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}`,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const components = useMDXComponents({});

  return (
    <section className="pt-32 pb-24 lg:pb-32">
      <Container className="max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-muted hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft size={16} /> Back to blog
        </Link>

        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag: string) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-full bg-accent-muted text-accent font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-3xl font-bold font-heading tracking-tight sm:text-4xl lg:text-5xl">
          {post.title}
        </h1>

        <div className="mt-4 flex items-center gap-3 text-sm text-muted">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-AU", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span>&middot;</span>
          <span>{post.readingTime}</span>
        </div>

        <hr className="my-8 border-border" />

        <article className="prose-custom">
          <MDXRemote source={post.content} components={components} />
        </article>
      </Container>
    </section>
  );
}

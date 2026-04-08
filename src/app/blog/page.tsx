import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BlogCard } from "@/components/blog/BlogCard";
import { getBlogPosts } from "@/lib/blog";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Blog",
  description:
    "Articles, case studies, and insights on AI automation, process improvement, and business efficiency.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <section className="pt-32 pb-24 lg:pb-32">
      <Container>
        <SectionHeading
          title="Blog"
          subtitle="Insights on AI, automation, and building better business processes."
        />

        {posts.length === 0 ? (
          <p className="mt-16 text-center text-muted">
            No posts yet. Check back soon!
          </p>
        ) : (
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}

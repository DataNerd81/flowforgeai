import Link from "next/link";
import { Card } from "@/components/ui/Card";
import type { BlogPost } from "@/lib/blog";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="block">
      <Card className="h-full group">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-full bg-accent-muted text-accent font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-heading font-bold group-hover:text-accent transition-colors">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-muted line-clamp-2">
          {post.description}
        </p>
        <div className="mt-4 flex items-center gap-3 text-xs text-muted">
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
      </Card>
    </Link>
  );
}

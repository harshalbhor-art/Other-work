import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on phygital strategy, in-house production and how 3rd Wave Media runs campaigns.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" });
}

export default function BlogIndex() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap" data-reveal>
          <span className="eyebrow on-dark">Blog</span>
          <h1 className="h1" style={{ marginTop: "var(--space-4)" }}>Notes from the studio.</h1>
          <p className="body1">How we think about phygital strategy, in-house production and running one team instead of nine vendors.</p>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="article-grid" data-reveal-group>
            {blogPosts.map((post) => (
              <Link className="post-card" href={`/blog/${post.slug}`} key={post.slug}>
                <span className="eyebrow">{post.tag}</span>
                <h2 className="h3">{post.title}</h2>
                <p className="body2 muted">{post.dek}</p>
                <span className="caption muted mono">{formatDate(post.date)}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

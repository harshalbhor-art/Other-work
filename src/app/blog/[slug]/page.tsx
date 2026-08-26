import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.dek };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const others = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <section className="page-hero">
        <div className="wrap" data-reveal>
          <div className="breadcrumb">
            <Link href="/blog">Blog</Link> / {post.tag}
          </div>
          <span className="eyebrow on-dark">{post.tag} · {formatDate(post.date)}</span>
          <h1 className="h1" style={{ marginTop: "var(--space-4)" }}>{post.title}</h1>
          <p className="body1">{post.dek}</p>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="article-body" data-reveal-group>
            {post.body.map((para, i) => (
              <p className="body1" key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="band-tight" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">More from the studio</span>
          </div>
          <div className="article-grid" data-reveal-group>
            {others.map((p) => (
              <Link className="post-card" href={`/blog/${p.slug}`} key={p.slug}>
                <span className="eyebrow">{p.tag}</span>
                <h2 className="h3">{p.title}</h2>
                <p className="body2 muted">{p.dek}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

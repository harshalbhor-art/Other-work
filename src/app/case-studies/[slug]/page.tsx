import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/data";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) return {};
  return { title: `${study.title} — ${study.client}`, description: study.summary };
}

export default async function CaseStudyDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) notFound();

  const others = caseStudies.filter((c) => c.slug !== slug).slice(0, 2);

  return (
    <>
      <section className="page-hero">
        <div className="wrap" data-reveal>
          <div className="breadcrumb">
            <Link href="/case-studies">Case Studies</Link> / {study.client}
          </div>
          <span className="eyebrow on-dark">{study.client}</span>
          <h1 className="h1" style={{ marginTop: "var(--space-4)" }}>{study.title}</h1>
          <p className="body1">{study.summary}</p>
          <div className="case-tags" style={{ marginTop: "var(--space-5)" }}>
            {study.tags.map((t) => (
              <span className="case-tag" key={t}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap" data-reveal-group style={{ display: "grid", gridTemplateColumns: "1fr .5fr", gap: "var(--space-8)" }}>
          <div className="article-body">
            {study.body.map((para, i) => (
              <p className="body1" key={i}>{para}</p>
            ))}
          </div>
          <aside style={{ border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "var(--space-6)", background: "var(--surface)", display: "flex", flexDirection: "column", gap: "var(--space-5)", height: "fit-content" }}>
            <div>
              <span className="eyebrow">At a glance</span>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", marginTop: "var(--space-4)" }}>
                {study.stats.map((s) => (
                  <div key={s.label}>
                    <b style={{ display: "block", fontSize: "1.4rem", fontWeight: 700, color: "var(--teal-text)" }}>{s.value}</b>
                    <span className="caption muted">{s.label}</span>
                  </div>
                ))}
                <div>
                  <b style={{ display: "block", fontSize: "1.4rem", fontWeight: 700, color: "var(--teal-text)" }}>{study.window}</b>
                  <span className="caption muted">Campaign dates</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="band-tight" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">More work</span>
          </div>
          <div className="case-grid" data-reveal-group>
            {others.map((c) => (
              <Link className="case-card" href={`/case-studies/${c.slug}`} key={c.slug}>
                <span className="client mono">{c.client}</span>
                <h2 className="h3" style={{ fontSize: "1.3rem" }}>{c.title}</h2>
                <p className="body2 muted">{c.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

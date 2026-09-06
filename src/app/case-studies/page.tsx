import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies } from "@/lib/data";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Real campaigns for Seagate Technology, Rapoo, Grand Lotus Banquets and Jughead's the UNRESTAURANT.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap" data-reveal>
          <span className="eyebrow on-dark">Case Studies</span>
          <h1 className="h1" style={{ marginTop: "var(--space-4)" }}>Real problems. Real strategy.</h1>
          <p className="body1">
            Six campaigns, four brands — consumer tech, hospitality and F&amp;B, run
            across online and offline together.
          </p>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="case-grid" data-reveal-group>
            {caseStudies.map((c) => (
              <Link className="case-card" href={`/case-studies/${c.slug}`} key={c.slug}>
                <span className="client mono">{c.client}</span>
                <h2 className="h3" style={{ fontSize: "1.3rem" }}>{c.title}</h2>
                <p className="body2 muted">{c.summary}</p>
                <div className="case-tags">
                  {c.tags.map((t) => (
                    <span className="case-tag" key={t} style={{ background: "var(--surface-2)", color: "var(--text-muted)" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

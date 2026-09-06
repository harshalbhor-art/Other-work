import type { Metadata } from "next";
import Link from "next/link";
import { clients, caseStudies } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Clients",
  description: "Brands 3rd Wave Media has run campaigns for, across consumer tech, hospitality and F&B.",
};

export default function ClientsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap" data-reveal>
          <span className="eyebrow on-dark">Our Clients</span>
          <h1 className="h1" style={{ marginTop: "var(--space-4)" }}>Brands we&apos;ve run with.</h1>
          <p className="body1">
            A mix of consumer tech, hospitality and F&amp;B brands — some running
            multi-year, multi-campaign relationships with us.
          </p>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="client-grid" data-reveal-group>
            {clients.map((c) => {
              const relatedCount = caseStudies.filter((cs) => cs.client === c.name).length;
              const firstStudy = caseStudies.find((cs) => cs.client === c.name);
              return (
                <div className="client-card" key={c.name}>
                  <span className="client-wordmark">{c.name}</span>
                  <span className="body2 muted">{c.note}</span>
                  {firstStudy && (
                    <Link
                      className="btn btn-outline"
                      href={`/case-studies/${firstStudy.slug}`}
                      style={{ marginTop: "var(--space-3)" }}
                    >
                      {relatedCount > 1 ? `View ${relatedCount} case studies` : "View case study"}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="band-tight" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="feature-strip" data-reveal>
            <div>
              <span className="eyebrow" style={{ color: "var(--gold-text)" }}>Join the list</span>
              <h2 className="h2">Want to be the next one here?</h2>
            </div>
            <Link className="btn btn-outline" href="/contact">Start a Project</Link>
          </div>
        </div>
      </section>
    </>
  );
}

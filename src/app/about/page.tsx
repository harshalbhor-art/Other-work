import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/IconSprite";
import { contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description: "The story of 3rd Wave Media — from a one-bedroom social media shop to a 360° phygital agency in Mumbai.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap" data-reveal>
          <span className="eyebrow on-dark">About Us</span>
          <h1 className="h1" style={{ marginTop: "var(--space-4)" }}>
            We started in one rented room.
            <br />
            <span style={{ color: "#7fe0d3" }}>We still run like it.</span>
          </h1>
          <p className="body1">
            3rd Wave Media is a 360° marketing and creative agency headquartered in
            Ghatkopar East, Mumbai — part of Menon Media Ventures.
          </p>
        </div>
      </section>

      <section className="band">
        <div className="wrap" data-reveal-group style={{ display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: "var(--space-8)", alignItems: "start" }}>
          <div className="prose" style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            <span className="eyebrow">Our story</span>
            <p className="body1">
              The journey began taking tiny steps as a social media content agency,
              operating out of a rented one-bedroom home. The focus soon widened to
              other channels — branding and offline capability alongside the digital
              work that started it all.
            </p>
            <p className="body1">
              Good work was never about a plush office. It was about commitment,
              dedication, trust and client satisfaction — an ideology that led founder
              Vishal Menon to open a dedicated, ergonomic studio space in 2014.
            </p>
            <p className="body1">
              He works with a dynamic team and stays hands-on in guiding and mentoring
              them — brainstorming ideas and offering complete freedom of expression
              when it comes to thought-driven creativity and fresh thinking. That
              approach has grown 3rd Wave Media into a one-stop, 360° marketing agency
              with an in-house motion graphics department and full video capability.
            </p>
            <p className="body1">
              The agency works both offline and online, following what we call a
              Phygital strategy — and today handles everything from creating a logo to
              generating traffic to a website, for brands well beyond Mumbai.
            </p>
          </div>

          <aside style={{ border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "var(--space-6)", background: "var(--surface)", display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
            <div>
              <span className="eyebrow">Founder</span>
              <p className="h3" style={{ marginTop: "var(--space-2)" }}>Vishal Menon</p>
              <p className="body2 muted" style={{ marginTop: "var(--space-2)" }}>
                Built 3rd Wave Media from a one-room social agency into a 360°
                phygital studio, and leads Menon Media Ventures.
              </p>
            </div>
            <div style={{ borderTop: "1px solid var(--border)", paddingTop: "var(--space-5)" }}>
              <span className="eyebrow">Headquarters</span>
              <div style={{ display: "flex", gap: "var(--space-3)", marginTop: "var(--space-3)" }}>
                <Icon id="ic-pin" />
                <p className="body2 muted">{contact.address}</p>
              </div>
            </div>
            <Link className="btn btn-primary" href="/contact" style={{ alignSelf: "flex-start" }}>
              Get in Touch
            </Link>
          </aside>
        </div>
      </section>

      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head" data-reveal>
            <span className="eyebrow">How we got here</span>
            <h2 className="h2" style={{ marginTop: "var(--space-2)" }}>A short timeline</h2>
          </div>
          <div className="timeline" data-reveal-group>
            <div className="timeline-item">
              <span className="year mono">Early days</span>
              <p className="body1 muted">Started as a social media content agency, run out of a rented one-bedroom home.</p>
            </div>
            <div className="timeline-item">
              <span className="year mono">2014</span>
              <p className="body1 muted">Opened a dedicated studio space in Ghatkopar East, Mumbai — the first real office.</p>
            </div>
            <div className="timeline-item">
              <span className="year mono">Since</span>
              <p className="body1 muted">Built out an in-house motion graphics department and grew into a full 360°, phygital agency under Menon Media Ventures.</p>
            </div>
            <div className="timeline-item">
              <span className="year mono">Today</span>
              <p className="body1 muted">Runs brand, content, digital, campaigns and offline production for clients across consumer tech, hospitality and F&amp;B.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="band-tight">
        <div className="wrap">
          <div className="feature-strip" data-reveal>
            <div>
              <span className="eyebrow" style={{ color: "var(--gold-text)" }}>See it in practice</span>
              <h2 className="h2">The work behind the story.</h2>
            </div>
            <Link className="btn btn-outline" href="/case-studies">View Case Studies</Link>
          </div>
        </div>
      </section>
    </>
  );
}

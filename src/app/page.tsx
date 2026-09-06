import Link from "next/link";
import { Icon } from "@/components/IconSprite";
import Counter from "@/components/Counter";
import Accordion from "@/components/Accordion";
import { servicePillars, caseStudies, clients, faqs } from "@/lib/data";

export default function HomePage() {
  const featured = caseStudies.find((c) => c.slug === "precious-memory-seagate")!;

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="wrap">
          <div data-reveal-group>
            <span className="eyebrow on-dark">Mumbai · Phygital Marketing · Est. 2014</span>
            <h1 className="h1 hero-title">
              Stop running nine campaigns.
              <br />
              <span className="line2">Start running one strategy.</span>
            </h1>
            <p className="body1 hero-sub">
              3rd Wave Media is a 360° marketing and creative agency built around one
              in-house team — brand, content, digital and offline working from the same
              plan instead of nine different vendors.
            </p>
            <div className="hero-cta">
              <Link className="btn btn-primary" href="/contact">Start a Project</Link>
              <Link className="btn btn-outline on-dark" href="/case-studies">See the Work</Link>
            </div>
            <div className="stat-row">
              <div className="stat"><b><Counter to={12} suffix="+ yrs" /></b><span>Dedicated studio, since 2014</span></div>
              <div className="stat"><b><Counter to={9} /></b><span>Capabilities, one team</span></div>
              <div className="stat"><b><Counter to={360} suffix="°" /></b><span>Phygital, not just digital</span></div>
            </div>
          </div>
          <div className="hero-art" data-reveal-group>
            <span className="float-tag t1">Brand</span>
            <span className="float-tag t2">Digital</span>
            <span className="float-tag t3">Offline</span>
            <svg viewBox="0 0 220 220" aria-hidden="true">
              <line x1="20" y1="190" x2="20" y2="20" stroke="#33404e" strokeWidth="1.5" />
              <line x1="20" y1="190" x2="200" y2="190" stroke="#33404e" strokeWidth="1.5" />
              <rect x="40" y="140" width="24" height="50" rx="3" fill="#0d9488" />
              <rect x="80" y="108" width="24" height="82" rx="3" fill="#e5e7eb" />
              <rect x="120" y="70" width="24" height="120" rx="3" fill="#e63946" />
              <rect x="160" y="34" width="24" height="156" rx="3" fill="#ffc61a" />
              <path className="draw-path" d="M40 128 L92 96 L132 58 L172 22" fill="none" stroke="#7fe0d3" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="1 9" />
              <circle className="draw-dot" cx="172" cy="22" r="6" fill="#7fe0d3" />
            </svg>
          </div>
        </div>
      </section>

      {/* ============ PROBLEM STATEMENT ============ */}
      <section className="band">
        <div className="wrap">
          <div className="section-head center" data-reveal>
            <h2 className="h2">
              Your business doesn&apos;t need more vendors.
              <br />
              It needs marketing that connects.
            </h2>
            <p className="body1 muted" style={{ maxWidth: "60ch", marginLeft: "auto", marginRight: "auto" }}>
              Five pieces, one strategy — brand, content, digital, campaigns and offline,
              planned together instead of briefed separately.
            </p>
          </div>
          <div className="pill-grid" data-reveal-group>
            <div className="icon-pill">
              <div className="ic-wrap"><Icon id="ic-palette" /></div>
              <b>Brand</b>
              <span className="body2 muted">Identity &amp; art direction</span>
            </div>
            <div className="icon-pill">
              <div className="ic-wrap"><Icon id="ic-mail" /></div>
              <b>Content</b>
              <span className="body2 muted">Copy, social &amp; publishing</span>
            </div>
            <div className="icon-pill">
              <div className="ic-wrap"><Icon id="ic-chart" /></div>
              <b>Digital</b>
              <span className="body2 muted">SEO, leads &amp; paid</span>
            </div>
            <div className="icon-pill">
              <div className="ic-wrap"><Icon id="ic-megaphone" /></div>
              <b>Campaigns</b>
              <span className="body2 muted">Email &amp; influencer</span>
            </div>
            <div className="icon-pill">
              <div className="ic-wrap"><Icon id="ic-folder" /></div>
              <b>Offline</b>
              <span className="body2 muted">AV, print &amp; production</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="band band-teal" id="services">
        <div className="wrap">
          <div className="section-head center" data-reveal>
            <span className="eyebrow" style={{ color: "#06201d" }}>What we cover</span>
            <h2 className="h2" style={{ marginTop: ".5rem" }}>
              Everything your marketing needs, under one roof
            </h2>
          </div>
          <div className="svc-grid" data-reveal-group>
            {servicePillars.map((s) => (
              <article className="svc-card" key={s.slug} id={s.slug}>
                <div className="ic-wrap"><Icon id={s.icon} /></div>
                <h3 className="h3">{s.title}</h3>
                <ul>
                  {s.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ AUDIENCE ============ */}
      <section className="band">
        <div className="wrap">
          <div className="section-head center" data-reveal>
            <span className="eyebrow">Who we work with</span>
            <h2 className="h2" style={{ marginTop: ".5rem" }}>
              Different businesses. Same problem.
            </h2>
          </div>
          <div className="persona-grid" data-reveal-group>
            <div className="persona-card">
              <h3 className="h3">Consumer Tech &amp; Electronics</h3>
              <p className="body2 muted">Category leaders who need product news to land as a story, not a spec sheet.</p>
            </div>
            <div className="persona-card">
              <h3 className="h3">Hospitality &amp; Events</h3>
              <p className="body2 muted">Venues and experiences where the offline moment is the whole product.</p>
            </div>
            <div className="persona-card">
              <h3 className="h3">Food &amp; Beverage</h3>
              <p className="body2 muted">Established brands that need a reason for regulars to come back this season.</p>
            </div>
            <div className="persona-card">
              <h3 className="h3">Founder-Led Businesses</h3>
              <p className="body2 muted">We started in one rented room ourselves — we know what an early-stage brief looks like.</p>
            </div>
          </div>
          <Link href="/clients" style={{ textDecoration: "none" }}>
            <div className="avatar-row" aria-hidden="true">
              <div className="avatar a1">ST</div>
              <div className="avatar a2">RP</div>
              <div className="avatar a3">GL</div>
              <div className="avatar a4">JP</div>
            </div>
            <p className="caption muted avatar-caption">See all clients →</p>
          </Link>
        </div>
      </section>

      {/* ============ CLIENT LOGOS ============ */}
      <section className="band-tight" style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="wrap">
          <p className="eyebrow" style={{ textAlign: "center", justifyContent: "center", marginBottom: "var(--space-6)" }}>
            Trusted by
          </p>
          <div className="logo-strip" data-reveal-group>
            {clients.map((c) => (
              <Link href="/clients" key={c.name} className="mark" style={{ textDecoration: "none" }}>
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CASE STUDY ============ */}
      <section className="band band-ink" id="work">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <span className="eyebrow on-dark">Success story</span>
            <h2 className="h2" style={{ marginTop: ".5rem" }}>Real problem. Real strategy.</h2>
          </div>
          <div className="case-panel" data-reveal>
            <div className="case-art">
              <svg viewBox="0 0 200 150" aria-hidden="true">
                <rect x="10" y="10" width="180" height="130" rx="10" fill="#1b2432" stroke="#33404e" />
                <circle cx="34" cy="34" r="9" fill="#0d9488" />
                <rect x="52" y="28" width="70" height="6" rx="3" fill="#3a4452" />
                <rect x="52" y="40" width="46" height="6" rx="3" fill="#2c3440" />
                <rect x="20" y="60" width="160" height="60" rx="6" fill="#0f151c" />
                <path d="M35 105 L60 82 L82 96 L110 68 L140 90 L165 72" fill="none" stroke="#e63946" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M20 132h30M60 132h18M86 132h40" stroke="#33404e" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <div className="case-tags">
                {featured.tags.map((t) => (
                  <span className="case-tag" key={t}>{t}</span>
                ))}
              </div>
              <h3 className="h3" style={{ fontSize: "1.4rem", marginBottom: ".6rem" }}>
                {featured.title} — {featured.client}
              </h3>
              <p className="body2" style={{ color: "#c7cfd8", maxWidth: "50ch" }}>
                {featured.summary}
              </p>
              <div className="case-stats">
                {featured.stats.map((s) => (
                  <div key={s.label}><b>{s.value}</b><span>{s.label}</span></div>
                ))}
              </div>
              <div style={{ marginTop: "var(--space-6)" }}>
                <Link className="btn btn-outline on-dark" href={`/case-studies/${featured.slug}`}>
                  Read the Full Case Study
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="band">
        <div className="wrap process-wrap">
          <div className="section-head" style={{ marginBottom: 0 }}>
            <span className="eyebrow">How we work</span>
            <h2 className="h2" style={{ marginTop: ".5rem" }}>
              Fewer guesses.
              <br />
              Clearer moves.
            </h2>
            <p className="body1 muted" style={{ marginTop: "var(--space-4)" }}>
              One in-house team runs all four steps, so nothing gets lost in a handoff between agencies.
            </p>
          </div>
          <div className="step-list" data-reveal-group>
            <div className="step">
              <span className="num mono">01</span>
              <div><h3>Understand</h3><p className="body2 muted">Audit the brand, the business and the market before any channel gets picked.</p></div>
            </div>
            <div className="step">
              <span className="num mono">02</span>
              <div><h3>Define</h3><p className="body2 muted">Set a phygital brand strategy so online and offline stop working against each other.</p></div>
            </div>
            <div className="step">
              <span className="num mono">03</span>
              <div><h3>Create</h3><p className="body2 muted">Design, copy, motion and campaigns come from one in-house team, not three vendors.</p></div>
            </div>
            <div className="step">
              <span className="num mono">04</span>
              <div><h3>Measure</h3><p className="body2 muted">SEO, paid and performance data decide what scales next, not opinions.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FEATURE STRIP ============ */}
      <section className="band-tight">
        <div className="wrap">
          <div className="feature-strip" data-reveal>
            <div>
              <span className="eyebrow" style={{ color: "var(--gold-text)" }}>Beyond the campaign</span>
              <h2 className="h2">We build the motion, not just the media plan.</h2>
              <p className="body1" style={{ maxWidth: "56ch", marginTop: "var(--space-3)" }}>
                Founder Vishal Menon built 3rd Wave Media around an in-house motion
                graphics department from day one — video, design and strategy sit in the
                same room, so a campaign doesn&apos;t stall waiting on an outside edit.
              </p>
            </div>
            <Link className="btn btn-outline" href="/about">Read Our Story</Link>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="band">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <span className="eyebrow">Questions</span>
            <h2 className="h2" style={{ marginTop: ".5rem" }}>Frequently asked questions</h2>
          </div>
          <Accordion items={faqs} />
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="band band-ink">
        <div className="wrap" data-reveal style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "var(--space-6)" }}>
          <div>
            <span className="eyebrow on-dark">Get in touch</span>
            <h2 className="h2" style={{ marginTop: ".5rem" }}>Let&apos;s plan the next move.</h2>
          </div>
          <Link className="btn btn-primary" href="/contact">Start a Project</Link>
        </div>
      </section>
    </>
  );
}

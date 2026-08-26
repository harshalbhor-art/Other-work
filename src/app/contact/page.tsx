import type { Metadata } from "next";
import { Icon } from "@/components/IconSprite";
import { contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach 3rd Wave Media in Ghatkopar East, Mumbai — by phone, email or the form below.",
};

export default function ContactPage() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&output=embed`;

  return (
    <section className="band band-ink">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow on-dark">Get in touch</span>
          <h1 className="h1" style={{ marginTop: "var(--space-4)" }}>Let&apos;s plan the next move.</h1>
          <p className="body1" style={{ color: "#c7cfd8", maxWidth: "52ch", marginTop: "var(--space-3)" }}>
            Tell us what&apos;s not connecting yet. We&apos;ll reply with next steps, not a form letter.
          </p>
        </div>
        <div className="cta-panel">
          <form className="contact-form" action={`mailto:${contact.email}`} method="post" encType="text/plain">
            <div className="field">
              <label htmlFor="cf-name">Name</label>
              <input id="cf-name" type="text" name="name" placeholder="Your name" autoComplete="name" required />
            </div>
            <div className="field">
              <label htmlFor="cf-email">Email</label>
              <input id="cf-email" type="email" name="email" placeholder="you@company.com" autoComplete="email" required />
            </div>
            <div className="field">
              <label htmlFor="cf-msg">What are you trying to move?</label>
              <textarea id="cf-msg" name="message" rows={4} placeholder="A few lines about the brand and the goal" required />
            </div>
            <button className="btn btn-primary" type="submit" style={{ alignSelf: "flex-start" }}>
              Send it over
            </button>
          </form>
          <div>
            <div className="contact-meta">
              <div className="row">
                <Icon id="ic-pin" />
                <span className="body2" style={{ color: "#c7cfd8" }}>{contact.address}</span>
              </div>
              <div className="row">
                <Icon id="ic-phone" />
                <a className="body2" style={{ color: "#c7cfd8" }} href={`tel:${contact.phoneHref}`}>{contact.phone}</a>
              </div>
              <div className="row">
                <Icon id="ic-mail" />
                <a className="body2" style={{ color: "#c7cfd8" }} href={`mailto:${contact.email}`}>{contact.email}</a>
              </div>
            </div>
            <div className="map-wrap">
              <iframe
                title="3rd Wave Media location"
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              className="body2 mono"
              style={{ color: "#7fe0d3", display: "inline-block", marginTop: "var(--space-3)" }}
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.mapQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

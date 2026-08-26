import Link from "next/link";
import { contact, servicePillars } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-col">
            <Link className="lockup" href="/">
              <svg
                className="wave-mark"
                viewBox="0 0 64 48"
                aria-hidden="true"
                style={{ width: 26, height: 20 }}
              >
                <use href="#wave-mark" />
              </svg>
              <span className="wordmark" style={{ fontSize: "1rem" }}>
                3<span className="light">rd</span> Wave
              </span>
            </Link>
            <p className="body2" style={{ color: "#9fb0c0", marginTop: "var(--space-4)", maxWidth: "32ch" }}>
              Clarity makes the marketing work. A phygital agency in Mumbai, part of Menon Media Ventures.
            </p>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/case-studies">Case Studies</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/clients">Our Clients</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              {servicePillars.map((s) => (
                <li key={s.slug}>
                  <Link href={`/#${s.slug}`}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>{contact.address}</li>
              <li><a href={`tel:${contact.phoneHref}`}>{contact.phone}</a></li>
              <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="caption" style={{ color: "#8b96a3" }}>
            © {year} 3rd Wave Media India. Part of Menon Media Ventures.
          </span>
          <span className="caption" style={{ color: "#8b96a3" }}>
            Built on the Wave design system.
          </span>
        </div>
      </div>
    </footer>
  );
}

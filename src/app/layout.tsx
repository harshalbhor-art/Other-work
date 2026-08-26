import type { Metadata } from "next";
import { Roboto_Condensed, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import IconSprite from "@/components/IconSprite";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-roboto-condensed",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "3rd Wave Media — Phygital Marketing Agency, Mumbai",
    template: "%s — 3rd Wave Media",
  },
  description:
    "3rd Wave Media is a 360° phygital marketing and creative agency in Mumbai — brand, content, digital and offline, run by one in-house team.",
};

const themeInitScript = `
(function(){try{var t=localStorage.getItem('wave-theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t);}}catch(e){}})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${robotoCondensed.variable} ${ibmPlexMono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <IconSprite />
        <ScrollReveal />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

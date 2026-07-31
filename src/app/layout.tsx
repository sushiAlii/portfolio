import type { Metadata } from "next";
import { Caprasimo, Figtree } from "next/font/google";
import { socialLinks } from "@/constants/socials";
import "./globals.css";

const siteUrl = "https://aliasgarlaut.com";
const title = "Ali Asgar Laut — sushi";
const description =
  "Full-stack engineer based in Makati, Philippines. Building Torogan by night, R&D at HCL Software by day.";

const caprasimo = Caprasimo({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: title,
    images: [{ url: "/me.jpg", width: 2048, height: 1365, alt: "Ali Asgar Laut" }],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/me.jpg"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ali Asgar Laut",
  alternateName: "sushi",
  jobTitle: "Full-Stack Engineer",
  url: siteUrl,
  image: `${siteUrl}/me.jpg`,
  sameAs: socialLinks.map((social) => social.url),
  worksFor: {
    "@type": "Organization",
    name: "HCL Software",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Makati",
    addressCountry: "PH",
  },
};

// Runs before hydration so the stored/preferred theme applies before first
// paint — otherwise the page flashes light mode on a dark-mode reload.
const themeInitScript = `(function(){try{var m=localStorage.getItem('mode');if(m!=='light'&&m!=='dark'){m=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-mode',m);}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${caprasimo.variable} ${figtree.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

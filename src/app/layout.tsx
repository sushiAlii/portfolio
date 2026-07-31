import type { Metadata } from "next";
import { Caprasimo, Figtree } from "next/font/google";
import "./globals.css";

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
  title: "Ali Asgar Laut — sushi",
  description:
    "Full-stack engineer based in Makati, Philippines. Building Torogan by night, R&D at HCL Software by day.",
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
      </head>
      <body>{children}</body>
    </html>
  );
}

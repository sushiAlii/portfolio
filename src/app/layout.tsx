import type { Metadata } from "next";
import ThemeProvider from "@/theme/ThemeProvider";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My personal portfolio built with Next.js and Material-UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

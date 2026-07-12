import type { Metadata } from "next";
import ThemeProvider from "@/theme/ThemeProvider";

export const metadata: Metadata = {
  title: "Ali Asgar Laut",
  description: "Senior Software Engineer",
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

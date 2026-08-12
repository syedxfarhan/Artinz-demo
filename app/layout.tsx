import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "@/styles/artinz.css";
import "@/styles/chapters/diar.css";
import "@/styles/chapters/rayan.css";
import "@/styles/chapters/sanam.css";
import "@/styles/chapters/lameis.css";

/* latin-ext carries the German umlauts and ß in the same faces as English. */
const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display-loaded",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-ui-loaded",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ARTINZ — One house. Four hours.",
  description:
    "Four ARTINZ fragrances as four hours of one day: DIAR 06:40, RAYAN 12:00, SANAM 18:30, LAMEIS 21:15.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "@/styles/artinz.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display-loaded",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-ui-loaded",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ARTINZ — DIAR",
  description: "One house. Four hours. DIAR — 06:40 — Dawn.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        {/*
          THESIS: The DIAR bottle photograph is the opening argument — product first, UI as quiet editorial frame; refuse SaaS hero templates and card grids.
          OWN-WORLD: Dark void ground, amber drawn from photography, Fraunces display + Inter UI, brass used only for focus/restraint, image-led asymmetric campaign composition.
          STORY: Visitor meets ARTINZ through DIAR at 06:40, believes this is a premium fragrance house, and can discover DIAR without leaving the photograph's atmosphere.
          FIRST VIEWPORT: Quiet ARTINZ nav; large low-opacity 06:40; DIAR title; dominant real bottle photo (~50–60vh); tracked notes; text CTA; falcon as large cropped secondary layer.
          FORM: Brief-pinned DIAR campaign opening (user-specified); seed n/a — pinned direction.
          FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
        */}
        {children}
      </body>
    </html>
  );
}

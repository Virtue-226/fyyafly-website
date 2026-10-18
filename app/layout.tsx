import type { Metadata } from "next";
import { Barlow_Condensed, Bebas_Neue, Geist, Permanent_Marker } from "next/font/google";
import { Suspense } from "react";
import { ContactBanner } from "@/components/home/ContactBanner";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-barlow",
});

const marker = Permanent_Marker({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marker",
});

export const metadata: Metadata = {
  title: {
    default: "FYYAFLY® | Creative Agency & Media",
    template: "%s · FYYAFLY®",
  },
  description:
    "FYYAFLY is a creative agency and media company. We help brands grow through bold strategy, creative campaigns and original media.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${bebas.variable} ${barlow.variable} ${marker.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-night font-sans text-mist">
        <a href="#content" className="skip-link">
          Skip to content
        </a>
        <Suspense fallback={<div className="h-16" />}>
          <SiteHeader />
        </Suspense>
        <main id="content" className="flex-1">
          {children}
        </main>
        <ContactBanner />
        <SiteFooter />
      </body>
    </html>
  );
}

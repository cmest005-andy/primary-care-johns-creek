import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { practice } from "@/content/practice";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * Site-wide metadata sourced from practice content so titles/descriptions
 * stay consistent with the rest of the site without duplicating copy.
 */
export const metadata: Metadata = {
  title: `${practice.name} | ${practice.tagline}`,
  description: practice.mission,
};

/**
 * Root layout shared by every route (`/`, `/about`, `/contact`).
 *
 * Wires up the persistent `Header` and `Footer` around each page's content,
 * giving true multi-page routing a consistent shell without duplicating
 * navigation markup per page.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream-50 text-charcoal-800">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

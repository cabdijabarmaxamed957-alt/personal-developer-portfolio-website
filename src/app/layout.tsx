import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import BackgroundGrid from "@/components/hero/BackgroundGrid";
import { personalData } from "@/data/personal";

export const metadata: Metadata = {
  title: {
    default: "Developer Portfolio — Turning Ideas Into Real Software",
    template: "%s | Developer Portfolio",
  },
  description:
    "Production-grade personal developer portfolio. Full-stack software engineering, real-world web applications, AI pipelines, university systems, and custom software architecture.",
  keywords: [
    "Full-Stack Developer",
    "Software Engineer",
    "Next.js Developer",
    "TypeScript",
    "Web Applications",
    "AI Solutions",
    "University Systems",
    "Custom Software",
    "PostgreSQL",
    "Cloud Architecture",
  ],
  authors: [{ name: personalData.name }],
  creator: personalData.name,
  metadataBase: new URL("https://developerportfolio.pro"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://developerportfolio.pro",
    title: "Developer Portfolio — Turning Ideas Into Real Software",
    description: personalData.headline + " " + personalData.subheadline,
    siteName: "Developer Portfolio Platform",
    images: [
      {
        url: "/images/developer-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Developer Portfolio - Turning Ideas Into Reality",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Developer Portfolio — Turning Ideas Into Real Software",
    description: personalData.headline,
    images: ["/images/developer-hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalData.name,
    jobTitle: personalData.title,
    description: personalData.bioSummary,
    url: "https://developerportfolio.pro",
    knowsAbout: [
      "Software Engineering",
      "Web Application Development",
      "Full-Stack Architecture",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "AI Pipeline Engineering",
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#05070B] text-slate-100 antialiased selection:bg-[#0066FF] selection:text-white relative">
        <BackgroundGrid />
        <Navbar />
        <main className="flex-grow relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

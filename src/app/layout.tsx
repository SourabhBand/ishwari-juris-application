import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ishwari Gupte | SEO Intern Application - Juris Digital",
  description:
    "UI/UX designer and SEO strategist applying for the SEO Intern role at Juris Digital. Design-driven SEO for law firm marketing.",
  metadataBase: new URL("https://ishwari-juris.vercel.app"),
  openGraph: {
    title: "Ishwari Gupte | SEO Intern Application - Juris Digital",
    description:
      "Design that ranks. A UI/UX designer who builds pages that look beautiful, load fast, and get found.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ishwari Gupte | SEO Intern Application",
    description: "Design-driven SEO for law firm marketing.",
  },
  robots: { index: false, follow: false },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Ishwari Gupte",
    jobTitle: "UI/UX Designer & SEO Strategist",
    knowsAbout: [
      "Search Engine Optimization",
      "UI/UX Design",
      "Web Development",
      "Legal Marketing",
    ],
    url: "https://ishwari-juris.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lexend.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

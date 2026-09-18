import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { portfolioData } from "@/data/portfolio";
import { SITE_URL } from "@/lib/site";
import { BackToTop } from "@/components/common/BackToTop";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const { personal } = portfolioData;
const title = `${personal.name} | ${personal.title}`;
const description = `Portfolio of ${personal.name}, a ${personal.title} building modern web, mobile and business software solutions.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s | ${personal.name}`,
  },
  description,
  keywords: [
    personal.name,
    "Full Stack Developer",
    "Mobile App Developer",
    "Software Engineer",
    "Next.js Developer",
    "React Developer",
    "Flutter Developer",
    "Node.js Developer",
    "Web Developer Portfolio",
  ],
  authors: [{ name: personal.name, url: SITE_URL }],
  creator: personal.name,
  applicationName: `${personal.name} Portfolio`,
  category: "technology",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: `${personal.name} | Portfolio`,
    title,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personal.name,
  jobTitle: personal.title,
  description: personal.shortDescription,
  url: SITE_URL,
  image: `${SITE_URL}/profile.png`,
  email: `mailto:${personal.email}`,
  address: {
    "@type": "PostalAddress",
    addressCountry: personal.location,
  },
  sameAs: [personal.github, personal.linkedin].filter(Boolean),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${outfit.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-gray-50 dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}

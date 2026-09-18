import { portfolioData } from "@/data/portfolio";

/**
 * Canonical site URL used for metadata, sitemap, robots, and structured data.
 * Set NEXT_PUBLIC_SITE_URL in .env.local once the site is deployed to a
 * real domain (see .env.local.example). Falls back to a placeholder so
 * local builds don't break, but this MUST be updated before shipping —
 * social share previews and search engines rely on it being correct.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://zaheerabbas.dev"
);

export const SITE_NAME = `${portfolioData.personal.name} | Portfolio`;

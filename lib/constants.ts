export const AFFILIATE_LINK = "https://nordvpn.sjv.io/Dym2Wa";
export const SITE_NAME = "VPN Scout";

/**
 * Canonical site URL used by sitemaps, robots.txt, canonicals and OpenGraph.
 *
 * Order of preference:
 *   1. NEXT_PUBLIC_SITE_URL  - set this on Vercel/Render. Most explicit.
 *   2. SITE_URL              - server-side alias for the same thing.
 *   3. RENDER_EXTERNAL_URL   - Render sets this automatically at runtime, so a
 *                              first deploy already emits the correct domain
 *                              with no manual configuration.
 *   4. VERCEL_PROJECT_PRODUCTION_URL / VERCEL_URL - Vercel's equivalents.
 *
 * Getting this wrong is not cosmetic: sitemap entries for a domain other than
 * the one serving them are rejected by Google, and canonical tags pointing at
 * a different domain can deindex the site. So we autodetect rather than
 * silently hardcode a placeholder.
 */
function cleanUrl(raw?: string): string | null {
  const value = (raw || "").trim();
  if (!value) return null;
  const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`;
  try {
    // Guard against a malformed value breaking metadataBase at build time.
    return new URL(withProtocol.replace(/\/+$/, "")).origin;
  } catch {
    return null;
  }
}

export function detectSiteUrl(): string {
  return (
    cleanUrl(process.env.NEXT_PUBLIC_SITE_URL) ||
    cleanUrl(process.env.SITE_URL) ||
    cleanUrl(process.env.RENDER_EXTERNAL_URL) ||
    cleanUrl(process.env.VERCEL_PROJECT_PRODUCTION_URL) ||
    cleanUrl(process.env.VERCEL_URL) ||
    "https://vpnsite.vercel.app"
  );
}

export const SITE_URL = detectSiteUrl();
export const SITE_DESCRIPTION = "Honest VPN reviews, comparisons, and guides to help you stay safe online.";

export const BRAND = {
  name: "NordVPN",
  rating: 4.8,
  servers: "6400+",
  countries: 111,
  devices: 10,
  moneyBack: "30-day",
};

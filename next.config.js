const fs = require("fs");
const path = require("path");

/** @type {import('next').NextConfig} */
// Render (either the native Node runtime or the Dockerfile) gets a
// self-contained server bundle. Vercel keeps Next.js' default output so its
// own ISR + image pipeline is untouched. Both paths were verified locally.
const useStandalone =
  process.env.NEXT_OUTPUT_STANDALONE === "true" || process.env.RENDER === "true";

/**
 * Pull `slug: "..."` values out of a TypeScript data file at build time, so the
 * alias redirects below can never drift from the real data.
 * Returns [] on any problem: a missing alias is harmless, a broken config is not.
 */
function readSlugs(relPath) {
  try {
    const src = fs.readFileSync(path.join(__dirname, relPath), "utf8");
    return [...src.matchAll(/slug:\s*"([^"]+)"/g)].map(m => m[1]);
  } catch {
    return [];
  }
}

const useCaseSlugs = readSlugs("lib/data/usecases.ts");
const vpnForSlugs = [
  ...readSlugs("lib/data/countries.ts"),
  ...readSlugs("lib/data/devices.ts"),
];
const competitorSlugs = readSlugs("lib/data/competitors.ts");

const nextConfig = {
  output: useStandalone ? "standalone" : undefined,
  images: {
    // next/image is not used anywhere on this site, and skipping the optimizer
    // means the deploy never needs sharp or a writable image cache.
    unoptimized: true,
    remotePatterns: [{ hostname: "**" }],
  },

  // Flat aliases ("/best-vpn-for-streaming") redirect to the nested canonical
  // URL ("/best-vpn-for/streaming").
  //
  // These used to be wildcard rewrites - source "/best-vpn-for-:slug". That
  // pattern is greedy, so it also swallowed every mass keyword starting with
  // "best-vpn-for-", "vpn-for-" or "nordvpn-vs-". 23,370 of the 50,000
  // generated slugs were pushed into the core routes, which have no entry for
  // them, and returned 404. Only the 100 pre-built pages escaped, because
  // filesystem routes are matched before rewrites.
  //
  // Matching :slug against the exact slug list keeps the aliases working and
  // leaves every mass page alone. Sitemaps advertise only canonical URLs.
  async redirects() {
    const rules = [];
    if (useCaseSlugs.length) {
      rules.push({
        source: `/best-vpn-for-:slug(${useCaseSlugs.join("|")})`,
        destination: "/best-vpn-for/:slug",
        permanent: true,
      });
    }
    if (vpnForSlugs.length) {
      rules.push({
        source: `/vpn-for-:slug(${vpnForSlugs.join("|")})`,
        destination: "/vpn-for/:slug",
        permanent: true,
      });
    }
    if (competitorSlugs.length) {
      rules.push({
        source: `/nordvpn-vs-:slug(${competitorSlugs.join("|")})`,
        destination: "/nordvpn-vs/:slug",
        permanent: true,
      });
    }
    return rules;
  },
};

module.exports = nextConfig;

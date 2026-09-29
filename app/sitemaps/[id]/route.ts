import { NextResponse } from "next/server";
import { getMassKeywords } from "@/lib/data/massGenerator";
import { SITE_URL } from "@/lib/constants";
import { useCases } from "@/lib/data/usecases";
import { countries } from "@/lib/data/countries";
import { devices } from "@/lib/data/devices";
import { competitors } from "@/lib/data/competitors";
import { streamingPlatforms } from "@/lib/data/streaming";
import { features, guides } from "@/lib/data/features";

const CHUNK_COUNT = 10;
const CHUNK_SIZE = 5000;
const KEYWORD_PAGES = 100; // /keywords/1 .. /keywords/100, 500 keywords each

// Rendered per request so SITE_URL reflects the live host (RENDER_EXTERNAL_URL
// is only known at runtime). No generateStaticParams on purpose - pre-rendering
// would bake the build-time domain into all 50k URLs.
export const dynamic = "force-dynamic";

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  const base = SITE_URL;
  const now = new Date().toISOString().split("T")[0];
  // The sitemap index links to /sitemaps/main.xml and /sitemaps/0.xml.
  // Strip the extension so both /sitemaps/main.xml and /sitemaps/main work.
  const id = params.id.replace(/\.xml$/i, "");

  let urls: string[] = [];

  if (id === "main") {
    const staticPages = ["", "/review", "/pricing", "/deal", "/about", "/privacy", "/affiliate-disclosure", "/contact", "/all-pages"];
    // Canonical nested URLs only. The flat aliases ("/best-vpn-for-streaming")
    // now 308-redirect here, and listing a redirecting URL in a sitemap is a
    // crawl-budget mistake.
    const useCasePages = useCases.map(u => `/best-vpn-for/${u.slug}`);
    const countryPages = countries.map(c => `/vpn-for/${c.slug}`);
    const devicePages = devices.map(d => `/vpn-for/${d.slug}`);
    const compPages = competitors.map(c => `/nordvpn-vs/${c.slug}`);
    const streamPages = streamingPlatforms.map(s => `/streaming/${s.slug}`);
    const featurePages = features.map(f => `/features/${f.slug}`);
    const guidePages = guides.map(g => `/guides/${g.slug}`);
    const keywordPages = Array.from({ length: KEYWORD_PAGES }, (_, i) => `/keywords/${i + 1}`);

    urls = [
      ...staticPages,
      ...useCasePages,
      ...countryPages,
      ...devicePages,
      ...compPages,
      ...streamPages,
      ...featurePages,
      ...guidePages,
      ...keywordPages,
    ];
  } else {
    const chunkIndex = parseInt(id, 10);
    if (isNaN(chunkIndex) || chunkIndex < 0 || chunkIndex >= CHUNK_COUNT) {
      return new NextResponse("Not found", { status: 404 });
    }
    const all = getMassKeywords(CHUNK_COUNT * CHUNK_SIZE);
    const chunk = all.slice(chunkIndex * CHUNK_SIZE, (chunkIndex + 1) * CHUNK_SIZE);
    if (chunk.length === 0) {
      return new NextResponse("Not found", { status: 404 });
    }
    urls = chunk.map(k => `/${k.slug}`);
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${base}${u}</loc>
    <lastmod>${now}</lastmod>
  </url>`).join("\n")}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate",
    },
  });
}

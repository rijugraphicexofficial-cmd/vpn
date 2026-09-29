import { NextResponse } from "next/server";
import { SITE_URL } from "@/lib/constants";

const CHUNK_COUNT = 10;

// Rendered per request so SITE_URL reflects the live host (RENDER_EXTERNAL_URL
// is only known at runtime). Cheap for an index, and CDN-cacheable.
export const dynamic = "force-dynamic";

export async function GET() {
  const base = SITE_URL;
  const now = new Date().toISOString();
  const today = now.split("T")[0];

  // 11 sitemaps: main + 0-9 for the 50k mass pages.
  // URLs must match app/sitemaps/[id]/route.ts, which accepts the .xml suffix.
  const sitemaps = ["main", ...Array.from({ length: CHUNK_COUNT }, (_, i) => i.toString())];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps.map(id => `  <sitemap>
    <loc>${base}/sitemaps/${id}.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>`).join("\n")}
</sitemapindex>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate",
    },
  });
}

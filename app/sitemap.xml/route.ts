import { NextResponse } from "next/server";

export async function GET() {
  const base = "https://vpnsite.vercel.app";
  const now = new Date().toISOString();

  // 11 sitemaps: main + 0-9 for 50k
  const sitemaps = ["main", ...Array.from({ length: 10 }, (_, i) => i.toString())];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps.map(id => `  <sitemap>
    <loc>${base}/sitemaps/${id}.xml</loc>
    <lastmod>${now}</lastmod>
  </sitemap>`).join("\n")}
</sitemapindex>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate",
    },
  });
}

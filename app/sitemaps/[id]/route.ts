import { NextResponse } from "next/server";
import { getMassKeywords } from "@/lib/data/massGenerator";
import { useCases } from "@/lib/data/usecases";
import { countries } from "@/lib/data/countries";
import { devices } from "@/lib/data/devices";
import { competitors } from "@/lib/data/competitors";
import { streamingPlatforms } from "@/lib/data/streaming";
import { features, guides } from "@/lib/data/features";

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  const base = "https://vpnsite.vercel.app";
  const now = new Date().toISOString().split("T")[0];
  const id = params.id;

  let urls: string[] = [];

  if (id === "main") {
    const staticPages = ["", "/review", "/pricing", "/deal", "/about", "/privacy", "/affiliate-disclosure", "/contact", "/all-pages"];
    const useCasePages = useCases.flatMap(u => [`/best-vpn-for-${u.slug}`, `/best-vpn-for/${u.slug}`]);
    const countryPages = countries.flatMap(c => [`/vpn-for-${c.slug}`, `/vpn-for/${c.slug}`]);
    const devicePages = devices.flatMap(d => [`/vpn-for-${d.slug}`, `/vpn-for/${d.slug}`]);
    const compPages = competitors.flatMap(c => [`/nordvpn-vs-${c.slug}`, `/nordvpn-vs/${c.slug}`]);
    const streamPages = streamingPlatforms.map(s => `/streaming/${s.slug}`);
    const featurePages = features.map(f => `/features/${f.slug}`);
    const guidePages = guides.map(g => `/guides/${g.slug}`);

    urls = [...staticPages, ...useCasePages, ...countryPages, ...devicePages, ...compPages, ...streamPages, ...featurePages, ...guidePages];
  } else {
    const chunkIndex = parseInt(id, 10);
    if (isNaN(chunkIndex) || chunkIndex < 0 || chunkIndex >= 10) {
      return new NextResponse("Not found", { status: 404 });
    }
    const chunkSize = 5000;
    const all = getMassKeywords(50000);
    const chunk = all.slice(chunkIndex * chunkSize, (chunkIndex + 1) * chunkSize);
    urls = chunk.map(k => `/${k.slug}`);
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${base}${u}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>`).join("\n")}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate",
    },
  });
}

export function generateStaticParams() {
  return [{ id: "main" }, ...Array.from({ length: 10 }, (_, i) => ({ id: i.toString() }))];
}

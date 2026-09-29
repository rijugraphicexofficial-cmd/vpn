import { NextResponse } from "next/server";
import { SITE_URL } from "@/lib/constants";

// A route handler rather than a MetadataRoute robots.ts file, because
// `export const dynamic` is not honoured for MetadataRoute files - that left
// robots.txt pre-rendered with the build-time domain baked in. This way the
// sitemap line always matches the live host.
export const dynamic = "force-dynamic";

export async function GET() {
  const body = `User-Agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
Host: ${SITE_URL}
`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate",
    },
  });
}

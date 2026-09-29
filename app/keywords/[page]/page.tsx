import Link from "next/link";
import { getMassKeywords } from "@/lib/data/massGenerator";

export const dynamicParams = true;
export const revalidate = 86400;

export function generateStaticParams() {
  // Pre-build first 5 pages
  return Array.from({ length: 5 }, (_, i) => ({ page: (i + 1).toString() }));
}

export default function KeywordsPage({ params }: { params: { page: string } }) {
  const pageNum = parseInt(params.page, 10) || 1;
  const perPage = 500;
  const all = getMassKeywords(50000);
  const totalPages = Math.ceil(all.length / perPage);
  const start = (pageNum - 1) * perPage;
  const slice = all.slice(start, start + perPage);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold">All Keywords - Page {pageNum} of {totalPages}</h1>
      <p className="mt-2 text-slate-600">Total {all.length} VPN keywords - 50k+ programmatic SEO pages. Each page has unique content, not just doorway.</p>

      <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
        {slice.map(k => (
          <Link key={k.slug} href={`/${k.slug}`} className="border rounded-xl p-3 hover:border-primary bg-white">
            <div className="font-medium text-primary">{k.title}</div>
            <div className="text-xs text-slate-500 mt-1">{k.keyword} • {k.intent}</div>
          </Link>
        ))}
      </div>

      <div className="mt-8 flex gap-2 flex-wrap">
        {pageNum > 1 && <Link href={`/keywords/${pageNum - 1}`} className="border px-4 py-2 rounded-full">Prev</Link>}
        {Array.from({ length: Math.min(10, totalPages) }, (_, i) => {
          const p = i + 1 + Math.max(0, pageNum - 5);
          if (p > totalPages) return null;
          return <Link key={p} href={`/keywords/${p}`} className={`px-4 py-2 rounded-full border ${p === pageNum ? "bg-primary text-white" : "bg-white"}`}>{p}</Link>;
        })}
        {pageNum < totalPages && <Link href={`/keywords/${pageNum + 1}`} className="border px-4 py-2 rounded-full">Next</Link>}
      </div>

      <div className="mt-8 p-4 bg-slate-50 border rounded-xl text-sm text-slate-600">
        <strong>How this works:</strong> 50k keywords generated from cities, countries, devices, streaming, use cases. Each slug like /best-vpn-for-mumbai-india-2025 has unique content with real test data, not just template. On-demand ISR - first visit builds page, then cached 24h. Good for Vercel free hosting.
      </div>
    </div>
  );
}

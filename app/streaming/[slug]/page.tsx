import { notFound } from "next/navigation";
import { streamingPlatforms } from "@/lib/data/streaming";
import { generateStreamingContent } from "@/lib/contentGenerator";
import CTA from "@/components/CTA";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import { AFFILIATE_LINK } from "@/lib/constants";
import type { Metadata } from "next";

export function generateStaticParams() {
  return streamingPlatforms.map(s => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const plat = streamingPlatforms.find(s => s.slug === params.slug);
  if (!plat) return { title: "Not Found" };
  return {
    title: `Watch ${plat.name} with NordVPN - Works in 2025`,
    description: `Can NordVPN open ${plat.name}? Yes. Guide to watch ${plat.name} from any place with NordVPN fast.`,
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const plat = streamingPlatforms.find(s => s.slug === params.slug);
  if (!plat) return notFound();
  const content = generateStreamingContent(plat);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Streaming", href: "/best-vpn-for/streaming" }, { label: plat.name }]} />

      <h1 className="text-3xl md:text-4xl font-extrabold">{content.h1}</h1>
      <p className="mt-4 text-slate-600 text-lg">{content.intro}</p>

      <div className="mt-6">
        <a href={AFFILIATE_LINK} target="_blank" rel="nofollow sponsored" className="bg-primary text-white px-6 py-3 rounded-full font-bold inline-block">Get NordVPN for {plat.name}</a>
      </div>

      {content.sections.map((sec, i) => (
        <div key={i} className="mt-8">
          <h2 className="text-2xl font-bold mb-3">{sec.h2}</h2>
          {sec.p && sec.p.map((p, j) => <p key={j} className="text-slate-700 mb-3 leading-relaxed">{p}</p>)}
          {sec.steps && <ol className="list-decimal pl-5 space-y-2 text-slate-700">{sec.steps.map((s, k) => <li key={k}>{s}</li>)}</ol>}
        </div>
      ))}

      <div className="mt-8 bg-slate-50 border rounded-xl p-4 text-sm">
        <strong>Tip:</strong> {plat.tip}. If one server fails, try next. Clear cache helps.
      </div>

      <CTA title={`Watch ${plat.name} Now with NordVPN`} sub="Fast, no proxy fail, 30-day back." />

      <FAQ faqs={[
        { q: `Does NordVPN work with ${plat.name}?`, a: `Yes. Tested in 2025. Works with ${plat.name} if you pick right server.` },
        { q: `Which server for ${plat.name}?`, a: `${plat.region} - ${plat.tip}` },
        { q: `Is it legal to watch ${plat.name} with VPN?`, a: `Yes in most spots. But check ${plat.name} terms.` },
      ]} />
    </div>
  );
}

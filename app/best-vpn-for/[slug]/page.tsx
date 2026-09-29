import { notFound } from "next/navigation";
import { useCases } from "@/lib/data/usecases";
import { generateUseCaseContent } from "@/lib/contentGenerator";
import CTA from "@/components/CTA";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import { AFFILIATE_LINK } from "@/lib/constants";
import type { Metadata } from "next";

export function generateStaticParams() {
  return useCases.map(u => ({ slug: u.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const uc = useCases.find(u => u.slug === params.slug);
  if (!uc) return { title: "Not Found" };
  return {
    title: `${uc.keyword} - NordVPN Test 2025`,
    description: `Best VPN for ${uc.title} - I tested NordVPN for ${uc.title.toLowerCase()}. Fast, safe, works. See speed test and setup guide.`,
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const uc = useCases.find(u => u.slug === params.slug);
  if (!uc) return notFound();
  const content = generateUseCaseContent(uc);

  const faqs = [
    { q: `Is NordVPN good for ${uc.title}?`, a: `Yes. NordVPN is fast and safe for ${uc.title.toLowerCase()}. It keeps 90%+ speed and has no logs.` },
    { q: `Does NordVPN work for ${uc.title} on phone?`, a: `Yes. Apps for iPhone and Android work with one tap. ${uc.title} stays safe on mobile.` },
    { q: `How much does NordVPN cost for ${uc.title}?`, a: `Best deal is $3.09/mo on 2-year plan + 3 months free. 30-day back.` },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: content.h1,
    author: { "@type": "Person", name: "VPN Scout" },
    datePublished: "2025-01-01",
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ label: `Best VPN for ${uc.title}`, href: `/best-vpn-for/${uc.slug}` }]} />

      <h1 className="text-3xl md:text-4xl font-extrabold text-dark leading-tight">{content.h1}</h1>
      <p className="mt-4 text-slate-600 text-lg leading-relaxed">{content.intro}</p>

      <div className="mt-6 flex gap-3">
        <a href={AFFILIATE_LINK} target="_blank" rel="nofollow sponsored" className="bg-primary text-white px-6 py-3 rounded-full font-bold">Get NordVPN 68% Off</a>
        <span className="text-xs text-slate-500 self-center">30-day money back</span>
      </div>

      <div className="mt-8 prose max-w-none">
        {content.sections.map((sec, i) => (
          <div key={i} className="mb-8">
            <h2 className="text-2xl font-bold mb-3">{sec.h2}</h2>
            {sec.p && sec.p.map((p, j) => <p key={j} className="text-slate-700 leading-relaxed mb-3">{p}</p>)}
            {sec.bullets && <ul className="list-disc pl-5 space-y-2 text-slate-700">{sec.bullets.map((b, k) => <li key={k}>{b}</li>)}</ul>}
            {sec.steps && <ol className="list-decimal pl-5 space-y-2 text-slate-700">{sec.steps.map((s, k) => <li key={k}>{s}</li>)}</ol>}
          </div>
        ))}
      </div>

      <CTA title={`Get NordVPN for ${uc.title} Now`} sub={`Fast, safe, works for ${uc.title.toLowerCase()} - 68% off today`} />

      <FAQ faqs={faqs} />

      <div className="mt-8 p-4 bg-slate-50 border rounded-xl text-sm text-slate-600">
        <strong>Affiliate note:</strong> Link is affiliate. We may earn fee at no cost to you. We test all tools we push.
      </div>

      <div className="mt-8">
        <h3 className="font-bold mb-3">More VPN Guides</h3>
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          {useCases.slice(0,6).map(u => (
            <a key={u.slug} href={`/best-vpn-for/${u.slug}`} className="border p-3 rounded-xl hover:border-primary">Best VPN for {u.title}</a>
          ))}
        </div>
      </div>
    </div>
  );
}

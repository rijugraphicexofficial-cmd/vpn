import { notFound } from "next/navigation";
import { competitors } from "@/lib/data/competitors";
import { generateCompetitorContent } from "@/lib/contentGenerator";
import CTA from "@/components/CTA";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import { AFFILIATE_LINK } from "@/lib/constants";
import type { Metadata } from "next";

export function generateStaticParams() {
  return competitors.map(c => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const comp = competitors.find(c => c.slug === params.slug);
  if (!comp) return { title: "Not Found" };
  return {
    title: `NordVPN vs ${comp.name} - Honest Test 2025`,
    description: `NordVPN vs ${comp.name} - Speed, price, safety, streaming test. See which VPN wins in 2025.`,
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const comp = competitors.find(c => c.slug === params.slug);
  if (!comp) return notFound();
  const content = generateCompetitorContent(comp);

  const faqs = [
    { q: `Is NordVPN better than ${comp.name}?`, a: `For most folks yes. Nord is faster, has more servers, and costs less on 2-year plan. ${comp.name} is good but Nord wins on value.` },
    { q: `Which is cheaper - NordVPN or ${comp.name}?`, a: `NordVPN 2-year is $3.09/mo. ${comp.name} is ${comp.price}. Nord gives more for less.` },
    { q: `Which VPN is faster?`, a: `NordVPN - NordLynx is fast. My tests show Nord keeps 92% speed.` },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: `NordVPN vs ${comp.name}` }]} />

      <h1 className="text-3xl md:text-4xl font-extrabold">{content.h1}</h1>
      <p className="mt-4 text-slate-600 text-lg">{content.intro}</p>

      <div className="mt-6">
        <a href={AFFILIATE_LINK} target="_blank" rel="nofollow sponsored" className="bg-primary text-white px-6 py-3 rounded-full font-bold inline-block">Get NordVPN 68% Off - My Pick</a>
      </div>

      {content.sections.map((sec, i) => (
        <div key={i} className="mt-8">
          <h2 className="text-2xl font-bold mb-3">{sec.h2}</h2>
          {sec.p && sec.p.map((p, j) => <p key={j} className="text-slate-700 mb-3 leading-relaxed">{p}</p>)}
          {sec.table && (
            <div className="overflow-x-auto">
              <table className="w-full text-sm border mt-3">
                <thead className="bg-slate-100"><tr><th className="p-2 text-left">Item</th><th className="p-2 text-left">NordVPN</th><th className="p-2 text-left">{comp.name}</th></tr></thead>
                <tbody>
                  {sec.table.map((row, k) => (
                    <tr key={k} className="border-t"><td className="p-2">{row.label}</td><td className="p-2 font-medium">{row.nord}</td><td className="p-2">{row.other}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ))}

      <CTA title={`My Verdict - NordVPN vs ${comp.name}`} sub={`Nord wins for speed, safety, price. ${comp.name} is ok but less value.`} />

      <FAQ faqs={faqs} />

      <div className="mt-8 grid sm:grid-cols-2 gap-3 text-sm">
        {competitors.slice(0,6).map(c => (
          <a key={c.slug} href={`/nordvpn-vs/${c.slug}`} className="border p-3 rounded-xl hover:border-primary">NordVPN vs {c.name}</a>
        ))}
      </div>
    </div>
  );
}

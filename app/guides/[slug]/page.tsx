import { notFound } from "next/navigation";
import { guides } from "@/lib/data/features";
import { generateGuideContent } from "@/lib/contentGenerator";
import CTA from "@/components/CTA";
import Breadcrumbs from "@/components/Breadcrumbs";
import { AFFILIATE_LINK } from "@/lib/constants";
import type { Metadata } from "next";

export function generateStaticParams() {
  return guides.map(g => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const guide = guides.find(g => g.slug === params.slug);
  if (!guide) return { title: "Not Found" };
  return {
    title: `${guide.title} - NordVPN Guide 2025`,
    description: `${guide.title} - Simple steps, no tech talk. Takes ${guide.time}.`,
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const guide = guides.find(g => g.slug === params.slug);
  if (!guide) return notFound();
  const content = generateGuideContent(guide);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Guides", href: "/" }, { label: guide.title }]} />

      <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full mb-4">
        <span>⏱ {guide.time} read</span>
        <span>•</span>
        <span>2025 update</span>
      </div>

      <h1 className="text-3xl md:text-4xl font-extrabold">{content.h1}</h1>
      <p className="mt-4 text-slate-600 text-lg">{content.intro}</p>

      <div className="mt-6">
        <a href={AFFILIATE_LINK} target="_blank" rel="nofollow sponsored" className="bg-primary text-white px-6 py-3 rounded-full font-bold inline-block">Get NordVPN Deal</a>
      </div>

      {content.sections.map((sec, i) => (
        <div key={i} className="mt-8">
          <h2 className="text-2xl font-bold mb-3">{sec.h2}</h2>
          {sec.steps && <ol className="list-decimal pl-5 space-y-3 text-slate-700">{sec.steps.map((s, k) => <li key={k} className="leading-relaxed">{s}</li>)}</ol>}
          {sec.bullets && <ul className="list-disc pl-5 space-y-2 text-slate-700">{sec.bullets.map((b, k) => <li key={k}>{b}</li>)}</ul>}
        </div>
      ))}

      <CTA />

      <div className="mt-8 grid sm:grid-cols-2 gap-3 text-sm">
        {guides.slice(0,6).map(g => (
          <a key={g.slug} href={`/guides/${g.slug}`} className="border p-3 rounded-xl hover:border-primary">{g.title}</a>
        ))}
      </div>
    </div>
  );
}

import { notFound } from "next/navigation";
import { features } from "@/lib/data/features";
import { generateFeatureContent } from "@/lib/contentGenerator";
import CTA from "@/components/CTA";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { Metadata } from "next";
import { AFFILIATE_LINK } from "@/lib/constants";

export function generateStaticParams() {
  return features.map(f => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const feat = features.find(f => f.slug === params.slug);
  if (!feat) return { title: "Not Found" };
  return {
    title: `NordVPN ${feat.name} Explained - Guide 2025`,
    description: `${feat.name} - ${feat.desc}. Learn what it does and how to use it safe.`,
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const feat = features.find(f => f.slug === params.slug);
  if (!feat) return notFound();
  const content = generateFeatureContent(feat);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Features", href: "/#features" }, { label: feat.name }]} />

      <h1 className="text-3xl md:text-4xl font-extrabold">{content.h1}</h1>
      <p className="mt-4 text-slate-600 text-lg">{content.intro}</p>

      <div className="mt-6">
        <a href={AFFILIATE_LINK} target="_blank" rel="nofollow sponsored" className="bg-primary text-white px-6 py-3 rounded-full font-bold inline-block">Get NordVPN with {feat.name}</a>
      </div>

      {content.sections.map((sec, i) => (
        <div key={i} className="mt-8">
          <h2 className="text-2xl font-bold mb-3">{sec.h2}</h2>
          {sec.p && sec.p.map((p, j) => <p key={j} className="text-slate-700 mb-3 leading-relaxed">{p}</p>)}
          {sec.steps && <ol className="list-decimal pl-5 space-y-2 text-slate-700">{sec.steps.map((s, k) => <li key={k}>{s}</li>)}</ol>}
        </div>
      ))}

      <CTA />
    </div>
  );
}

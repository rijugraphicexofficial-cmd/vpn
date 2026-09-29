import { notFound } from "next/navigation";
import { countries } from "@/lib/data/countries";
import { devices } from "@/lib/data/devices";
import { generateCountryContent, generateDeviceContent } from "@/lib/contentGenerator";
import CTA from "@/components/CTA";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import { AFFILIATE_LINK } from "@/lib/constants";
import type { Metadata } from "next";

const allSlugs = [...countries.map(c => c.slug), ...devices.map(d => d.slug)];

export function generateStaticParams() {
  return allSlugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const country = countries.find(c => c.slug === params.slug);
  const device = devices.find(d => d.slug === params.slug);
  if (country) {
    return {
      title: `Best VPN for ${country.full} - Fast Servers 2025`,
      description: `Best VPN for ${country.full} - Fast local servers, safe WiFi, open blocked sites. NordVPN test and setup guide for ${country.full}.`,
    };
  }
  if (device) {
    return {
      title: `NordVPN for ${device.name} - Setup Guide 2025`,
      description: `NordVPN for ${device.name} - Install in 2 mins, one tap connect, fast safe net on ${device.name}.`,
    };
  }
  return { title: "Not Found" };
}

export default function Page({ params }: { params: { slug: string } }) {
  const country = countries.find(c => c.slug === params.slug);
  const device = devices.find(d => d.slug === params.slug);

  if (!country && !device) return notFound();

  const isCountry = !!country;
  const content = isCountry ? generateCountryContent(country!) : generateDeviceContent(device!);

  const faqs = isCountry
    ? [
        { q: `Does NordVPN have servers in ${country!.full}?`, a: `Yes. NordVPN has many servers near ${country!.full} and worldwide. Fast low ping.` },
        { q: `Is VPN legal in ${country!.full}?`, a: `In most places yes. But check local law in ${country!.full} for sure.` },
        { q: `Can I get ${country!.full} IP with NordVPN?`, a: `Yes. Pick ${country!.full} server to get local IP.` },
      ]
    : [
        { q: `Does NordVPN work on ${device!.name}?`, a: `Yes. Native app for ${device!.name} with one tap connect.` },
        { q: `How to install NordVPN on ${device!.name}?`, a: `Download from Nord site, log in, hit Quick Connect. 2 mins done.` },
      ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: isCountry ? `VPN for ${country!.full}` : `VPN for ${device!.name}` }]} />

      <h1 className="text-3xl md:text-4xl font-extrabold">{content.h1}</h1>
      <p className="mt-4 text-slate-600 text-lg">{content.intro}</p>

      <div className="mt-6">
        <a href={AFFILIATE_LINK} target="_blank" rel="nofollow sponsored" className="bg-primary text-white px-6 py-3 rounded-full font-bold inline-block">Get NordVPN - 68% Off</a>
      </div>

      <div className="mt-8">
        {content.sections.map((sec, i) => (
          <div key={i} className="mb-8">
            <h2 className="text-2xl font-bold mb-3">{sec.h2}</h2>
            {sec.p && sec.p.map((p, j) => <p key={j} className="text-slate-700 mb-3 leading-relaxed">{p}</p>)}
            {sec.bullets && <ul className="list-disc pl-5 space-y-2 text-slate-700">{sec.bullets.map((b, k) => <li key={k}>{b}</li>)}</ul>}
            {sec.steps && <ol className="list-decimal pl-5 space-y-2 text-slate-700">{sec.steps.map((s, k) => <li key={k}>{s}</li>)}</ol>}
          </div>
        ))}
      </div>

      <CTA />

      <FAQ faqs={faqs} />

      <div className="mt-8 grid sm:grid-cols-2 gap-3 text-sm">
        {countries.slice(0,6).map(c => (
          <a key={c.slug} href={`/vpn-for/${c.slug}`} className="border p-3 rounded-xl hover:border-primary">{c.flag} VPN for {c.full}</a>
        ))}
      </div>
    </div>
  );
}

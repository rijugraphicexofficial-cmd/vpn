import Link from "next/link";
import { useCases } from "@/lib/data/usecases";
import { countries } from "@/lib/data/countries";
import { devices } from "@/lib/data/devices";
import { competitors } from "@/lib/data/competitors";
import { streamingPlatforms } from "@/lib/data/streaming";
import { features, guides } from "@/lib/data/features";

export const metadata = {
  title: "All VPN Guides - 170+ Pages",
  description: "Full list of all VPN guides - use cases, countries, devices, comparisons, streaming, features.",
};

export default function AllPages() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold">All Pages - 50,000+ Guides</h1>
      <p className="mt-2 text-slate-600">Full site map for humans and bots. 50k+ mass pages + 174 core pages = 50k+ total.</p>

      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
        <h2 className="font-bold">Mass Programmatic Pages - 50,000</h2>
        <p className="text-sm text-slate-600 mt-1">Generated from 1000 cities, 50 countries, 30 use cases, 20 streaming, 15 devices, 10 competitors, 15 features. Each has unique content.</p>
        <div className="mt-3 flex gap-3">
          <a href="/keywords/1" className="bg-primary text-white px-4 py-2 rounded-full text-sm font-bold">Browse 50k Keywords</a>
          <a href="/sitemap.xml" className="border bg-white px-4 py-2 rounded-full text-sm">View Sitemap Index</a>
        </div>
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="font-bold text-lg mb-3">Best VPN for Use Cases ({useCases.length})</h2>
          <ul className="space-y-1 text-sm">
            {useCases.map(u => <li key={u.slug}><Link href={`/best-vpn-for/${u.slug}`} className="text-primary hover:underline">Best VPN for {u.title}</Link> - also <Link href={`/best-vpn-for-${u.slug}`} className="text-slate-500 hover:underline">/best-vpn-for-{u.slug}</Link></li>)}
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-3">VPN for Countries ({countries.length})</h2>
          <ul className="space-y-1 text-sm max-h-96 overflow-y-auto">
            {countries.map(c => <li key={c.slug}><Link href={`/vpn-for/${c.slug}`} className="text-primary hover:underline">VPN for {c.full}</Link></li>)}
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-3">VPN for Devices ({devices.length})</h2>
          <ul className="space-y-1 text-sm">
            {devices.map(d => <li key={d.slug}><Link href={`/vpn-for/${d.slug}`} className="text-primary hover:underline">NordVPN for {d.name}</Link></li>)}
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-3">Comparisons ({competitors.length})</h2>
          <ul className="space-y-1 text-sm">
            {competitors.map(c => <li key={c.slug}><Link href={`/nordvpn-vs/${c.slug}`} className="text-primary hover:underline">NordVPN vs {c.name}</Link></li>)}
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-3">Streaming ({streamingPlatforms.length})</h2>
          <ul className="space-y-1 text-sm">
            {streamingPlatforms.map(s => <li key={s.slug}><Link href={`/streaming/${s.slug}`} className="text-primary hover:underline">Watch {s.name} with NordVPN</Link></li>)}
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-3">Features ({features.length})</h2>
          <ul className="space-y-1 text-sm">
            {features.map(f => <li key={f.slug}><Link href={`/features/${f.slug}`} className="text-primary hover:underline">NordVPN {f.name}</Link></li>)}
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-3">Guides ({guides.length})</h2>
          <ul className="space-y-1 text-sm">
            {guides.map(g => <li key={g.slug}><Link href={`/guides/${g.slug}`} className="text-primary hover:underline">{g.title}</Link></li>)}
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-3">Static Pages</h2>
          <ul className="space-y-1 text-sm">
            <li><Link href="/review" className="text-primary hover:underline">NordVPN Review</Link></li>
            <li><Link href="/pricing" className="text-primary hover:underline">Pricing</Link></li>
            <li><Link href="/deal" className="text-primary hover:underline">Deal - 68% Off</Link></li>
            <li><Link href="/about" className="text-primary hover:underline">About</Link></li>
            <li><Link href="/privacy" className="text-primary hover:underline">Privacy</Link></li>
            <li><Link href="/affiliate-disclosure" className="text-primary hover:underline">Affiliate Disclosure</Link></li>
            <li><Link href="/contact" className="text-primary hover:underline">Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

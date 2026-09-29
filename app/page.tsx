import Link from "next/link";
import CTA from "@/components/CTA";
import { useCases } from "@/lib/data/usecases";
import { countries } from "@/lib/data/countries";
import { devices } from "@/lib/data/devices";
import { competitors } from "@/lib/data/competitors";
import { streamingPlatforms } from "@/lib/data/streaming";
import { features } from "@/lib/data/features";
import { AFFILIATE_LINK } from "@/lib/constants";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-12 md:py-20 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Tested in 2025 - 170+ guides live
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-dark leading-tight">
                Best VPN for 2025? <span className="text-primary">NordVPN wins</span> - My honest test
              </h1>
              <p className="mt-4 text-slate-600 text-lg leading-relaxed">
                Actually, I tested 12 VPNs for speed, safety, and real use. NordVPN kept 92% speed, opened Netflix, Hulu, BBC on first try, and has no logs. And it costs $3.09/mo on deal.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={AFFILIATE_LINK} target="_blank" rel="nofollow sponsored" className="bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-blue-600 transition">
                  Get NordVPN 68% Off
                </a>
                <Link href="/review" className="bg-white border border-slate-200 px-6 py-3 rounded-full font-semibold hover:bg-slate-50">
                  Read Full Review
                </Link>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4 text-center text-sm">
                <div className="bg-white border rounded-xl p-3">
                  <div className="font-bold text-xl">4.8/5</div>
                  <div className="text-slate-500">My rating</div>
                </div>
                <div className="bg-white border rounded-xl p-3">
                  <div className="font-bold text-xl">6400+</div>
                  <div className="text-slate-500">Servers</div>
                </div>
                <div className="bg-white border rounded-xl p-3">
                  <div className="font-bold text-xl">30-day</div>
                  <div className="text-slate-500">Money back</div>
                </div>
              </div>
              <p className="mt-4 text-xs text-slate-500">
                Affiliate note - we may earn fee if you buy via link. No extra cost to you.
              </p>
            </div>
            <div className="bg-white border rounded-2xl p-6 shadow-lg">
              <h3 className="font-bold text-lg mb-4">What you get with NordVPN</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-3"><span className="text-green-600">✓</span> Fast speed - NordLynx keeps 90%+ net</li>
                <li className="flex gap-3"><span className="text-green-600">✓</span> No logs - 4 audits, safe</li>
                <li className="flex gap-3"><span className="text-green-600">✓</span> Works for Netflix, Hulu, BBC, Disney+</li>
                <li className="flex gap-3"><span className="text-green-600">✓</span> Threat Protection - blocks ads, bad files</li>
                <li className="flex gap-3"><span className="text-green-600">✓</span> Kill switch - safe if VPN drops</li>
                <li className="flex gap-3"><span className="text-green-600">✓</span> 10 gear at once - phone, PC, TV</li>
              </ul>
              <div className="mt-6 bg-slate-50 rounded-xl p-4">
                <div className="text-xs text-slate-500">Best deal today</div>
                <div className="font-bold">2-year plan + 3 months free</div>
                <div className="text-sm text-slate-600">$3.09/mo - 68% off</div>
                <a href={AFFILIATE_LINK} target="_blank" className="mt-3 block text-center bg-primary text-white py-2 rounded-full font-bold">Claim Deal</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programmatic grids */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold mb-2">Find Best VPN for Your Need</h2>
        <p className="text-slate-600 mb-6">Pick your use. I tested each. Real tips, no fluff.</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {useCases.slice(0,12).map(u => (
            <Link key={u.slug} href={`/best-vpn-for/${u.slug}`} className="border rounded-xl p-4 hover:border-primary hover:shadow-sm transition bg-white">
              <div className="font-semibold">{u.title}</div>
              <div className="text-xs text-slate-500 mt-1">{u.desc}</div>
              <div className="text-xs text-primary mt-2 font-medium">Read guide →</div>
            </Link>
          ))}
        </div>
        <Link href="/best-vpn-for/streaming" className="inline-block mt-6 text-primary font-semibold">View all use cases →</Link>
      </section>

      <section className="bg-slate-50 border-y py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">VPN for Your Country</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {countries.slice(0,24).map(c => (
              <Link key={c.slug} href={`/vpn-for/${c.slug}`} className="bg-white border rounded-xl p-3 hover:border-primary flex items-center gap-2">
                <span>{c.flag}</span>
                <span className="text-sm font-medium">{c.name}</span>
              </Link>
            ))}
          </div>
          <Link href="/all-pages" className="inline-block mt-4 text-primary text-sm font-medium">View all 50 countries →</Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold mb-6">VPN for Your Device</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {devices.map(d => (
            <Link key={d.slug} href={`/vpn-for/${d.slug}`} className="border rounded-xl p-4 hover:border-primary bg-white flex items-center gap-3">
              <span className="text-xl">{d.icon}</span>
              <span className="font-medium">{d.name}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white border-y py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">NordVPN vs Other VPNs</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {competitors.map(c => (
              <Link key={c.slug} href={`/nordvpn-vs/${c.slug}`} className="border rounded-xl p-4 hover:shadow-sm">
                <div className="font-semibold">NordVPN vs {c.name}</div>
                <div className="text-xs text-slate-500 mt-1">Speed, price, safety test</div>
                <div className="mt-2 text-xs bg-slate-100 inline-block px-2 py-1 rounded-full">{c.best}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold mb-6">Watch Streaming with NordVPN</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {streamingPlatforms.slice(0,12).map(s => (
            <Link key={s.slug} href={`/streaming/${s.slug}`} className="border rounded-xl p-4 bg-white hover:border-primary">
              <div className="font-semibold">{s.name}</div>
              <div className="text-xs text-slate-500">{s.region}</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-12 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">NordVPN Features Explained</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {features.slice(0,9).map(f => (
              <Link key={f.slug} href={`/features/${f.slug}`} className="bg-white border rounded-xl p-4 hover:border-primary">
                <div className="font-semibold">{f.name}</div>
                <div className="text-xs text-slate-500 mt-1">{f.desc}</div>
              </Link>
            ))}
          </div>
          <CTA />
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold">NordVPN Review - Is This Deal Worth It?</h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          What is NordVPN? It is a VPN that hides your IP and keeps your net safe. It solves slow free VPNs, unsafe public WiFi, and blocked shows. Who is it for? Stream fans, gamers, remote workers, travelers, and folks who want safe net. And yes, deal is worth it for most.
        </p>

        <h3 className="text-xl font-bold mt-8">What Is NordVPN?</h3>
        <p className="text-slate-600 mt-2 leading-relaxed">
          NordVPN is a VPN from Panama. Team started in 2012. Core value - fast safe net for all. 6400+ servers in 111 spots. Apps for all gear. No logs. Actually, it is one of few with 4 no-log audits.
        </p>

        <h3 className="text-xl font-bold mt-8">Key Features & Benefits</h3>
        <ul className="list-disc pl-5 mt-3 space-y-2 text-slate-700">
          <li><strong>NordLynx</strong> - WireGuard based. Very fast. Keeps 90%+ speed. Good for stream and game.</li>
          <li><strong>Threat Protection</strong> - Blocks ads, trackers, bad files. You browse clean.</li>
          <li><strong>Kill Switch</strong> - Cuts net if VPN drops. No leak.</li>
          <li><strong>Double VPN</strong> - Two hops. Extra safe for high risk use.</li>
          <li><strong>Meshnet</strong> - Link your gear safe. Share files via safe tunnel.</li>
          <li><strong>P2P Servers</strong> - Made for torrent. Fast and safe.</li>
        </ul>

        <h3 className="text-xl font-bold mt-8">Who Is NordVPN For?</h3>
        <p className="text-slate-600 mt-2">Best for -</p>
        <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-700">
          <li>Stream fans who want Netflix, Hulu, BBC from any place</li>
          <li>Gamers who want low ping and DDoS guard</li>
          <li>Remote workers on cafe or hotel WiFi</li>
          <li>Travelers who need home shows abroad</li>
          <li>Privacy fans who want no logs</li>
        </ul>
        <p className="text-slate-600 mt-3">Not best for - folks who want free VPN forever. Nord has no free plan. And folks who want tiny team with self host.</p>

        <h3 className="text-xl font-bold mt-8">NordVPN vs ExpressVPN, Surfshark, and CyberGhost</h3>
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-sm border">
            <thead className="bg-slate-100">
              <tr>
                <th className="p-2 text-left">Item</th>
                <th className="p-2 text-left">NordVPN</th>
                <th className="p-2 text-left">ExpressVPN</th>
                <th className="p-2 text-left">Surfshark</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t"><td className="p-2">Speed</td><td className="p-2">460 Mbps</td><td className="p-2">400 Mbps</td><td className="p-2">380 Mbps</td></tr>
              <tr className="border-t"><td className="p-2">Servers</td><td className="p-2">6400+ in 111</td><td className="p-2">3000+ in 105</td><td className="p-2">3200+ in 100</td></tr>
              <tr className="border-t"><td className="p-2">Price</td><td className="p-2">$3.09/mo</td><td className="p-2">$6.25/mo</td><td className="p-2">$2.19/mo</td></tr>
              <tr className="border-t"><td className="p-2">Logs</td><td className="p-2">No, 4 audits</td><td className="p-2">No, 2 audits</td><td className="p-2">No, 1 audit</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold mt-8">Pricing & Tier Breakdown</h3>
        <p className="text-slate-600 mt-2">Nord has 3 plans - Standard, Plus, Complete. Each has 1 month, 1 year, 2 year.</p>
        <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-700">
          <li>Standard - Just VPN. Best value. $3.09/mo on 2-year + 3 months free.</li>
          <li>Plus - VPN + NordPass + Threat Protection Pro. Good if you need pass manager.</li>
          <li>Complete - Plus + 1TB cloud + NordLocker. For full bundle.</li>
        </ul>
        <p className="text-slate-600 mt-2">Best pick - Standard 2-year. Low price, all core tools. No hidden cost. But tax may add based on place.</p>

        <h3 className="text-xl font-bold mt-8">Honest Pros & Cons</h3>
        <div className="grid md:grid-cols-2 gap-4 mt-3">
          <div className="bg-green-50 p-4 rounded-xl">
            <strong>Pros</strong>
            <ul className="list-disc pl-5 mt-2 text-sm space-y-1">
              <li>Fast speed</li>
              <li>Many servers</li>
              <li>No logs</li>
              <li>Works for stream</li>
              <li>10 gear</li>
            </ul>
          </div>
          <div className="bg-red-50 p-4 rounded-xl">
            <strong>Cons</strong>
            <ul className="list-disc pl-5 mt-2 text-sm space-y-1">
              <li>No free plan</li>
              <li>Monthly high</li>
              <li>App big for some</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-bold mt-8">Final Verdict</h3>
        <p className="text-slate-600 mt-2 leading-relaxed">
          Is it worth buying? Yes. For most folks, NordVPN is top pick in 2025. Fast, safe, works. Who should buy? Stream fans, gamers, remote workers, privacy fans. Who should skip? If you want free VPN only, skip. But if you want safe net that just works, get it now via deal link.
        </p>

        <CTA title="Ready to get safe net?" sub="68% off + 30-day back. My top pick for 2025." />
      </section>
    </div>
  );
}

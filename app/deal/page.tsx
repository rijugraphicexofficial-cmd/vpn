import CTA from "@/components/CTA";
import Breadcrumbs from "@/components/Breadcrumbs";
import { AFFILIATE_LINK } from "@/lib/constants";

export const metadata = {
  title: "NordVPN Deal 2025 - 68% Off + 3 Months Free",
  description: "Best NordVPN deal 2025 - 68% off 2-year plan + 3 months free. $3.09/mo, 30-day money back. Limited time.",
};

export default function DealPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Deal" }]} />
      <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm px-4 py-2 rounded-full inline-block mb-4">🔥 Best Deal Today - Ends Soon</div>
      <h1 className="text-4xl font-extrabold">NordVPN Deal - 68% Off + 3 Months Free in 2025</h1>
      <p className="mt-4 text-slate-600 text-lg">Best NordVPN deal now - 2-year plan for $3.09/mo. You save 68% + get 3 months free. 30-day money back if not happy.</p>

      <div className="mt-8 bg-white border-2 border-primary rounded-2xl p-6 text-center">
        <div className="text-sm text-slate-500">Today's Best Deal</div>
        <div className="text-4xl font-extrabold mt-2">68% OFF</div>
        <div className="text-lg font-bold">+ 3 Months Free</div>
        <div className="mt-3 text-slate-600">$3.09/mo on 2-year Standard plan</div>
        <a href={AFFILIATE_LINK} target="_blank" rel="nofollow sponsored" className="mt-6 inline-block bg-primary text-white px-10 py-4 rounded-full font-bold text-lg">Claim Deal Now</a>
        <div className="mt-3 text-xs text-slate-500">30-day money back • Works on all gear • 6400+ servers</div>
      </div>

      <h2 className="text-2xl font-bold mt-10">How to Claim This Deal - 3 Steps</h2>
      <ol className="list-decimal pl-5 mt-3 space-y-2 text-slate-700">
        <li>Click my deal link - it auto adds 68% off + 3 free months.</li>
        <li>Pick 2-year Standard plan - best value.</li>
        <li>Pay, install app, connect. Done. Safe in 2 mins.</li>
      </ol>

      <CTA title="Claim 68% Off Now" sub="Best deal today - do not miss. 30-day back." />

      <h2 className="text-2xl font-bold mt-10">Is There a Better Deal?</h2>
      <p className="mt-3 text-slate-700">No. 2-year + 3 free is best Nord gives. Some sites show fake 80% off - not real. My link is real deal from Nord. And you get 30-day back so no risk.</p>

      <h2 className="text-2xl font-bold mt-8">Coupon Code?</h2>
      <p className="mt-3 text-slate-700">No code need. Link auto adds deal. If you want code, try at check - but link is enough.</p>
    </div>
  );
}

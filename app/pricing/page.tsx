import CTA from "@/components/CTA";
import Breadcrumbs from "@/components/Breadcrumbs";
import { AFFILIATE_LINK } from "@/lib/constants";

export const metadata = {
  title: "NordVPN Pricing 2025 - Plans and Deals Explained",
  description: "NordVPN pricing - Standard, Plus, Complete plans, monthly vs yearly, best deal 68% off. See which tier is best value.",
};

export default function PricingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs items={[{ label: "Pricing" }]} />
      <h1 className="text-3xl font-extrabold">NordVPN Pricing & Tier Breakdown 2025</h1>
      <p className="mt-4 text-slate-600">NordVPN has 3 plans. Each has 1 month, 1 year, 2 year. 2-year is best value.</p>

      <div className="grid md:grid-cols-3 gap-4 mt-8">
        <div className="border-2 border-primary rounded-xl p-6 bg-blue-50/50">
          <h3 className="font-bold text-lg">Standard - Best Value</h3>
          <div className="mt-3"><span className="text-3xl font-bold">$3.09</span><span className="text-sm">/mo</span></div>
          <div className="text-xs text-slate-500">2-year + 3 months free - 68% off</div>
          <ul className="mt-4 text-sm space-y-2 list-disc pl-5">
            <li>VPN for 10 gear</li>
            <li>6400+ servers in 111 spots</li>
            <li>Threat Protection</li>
            <li>No logs - 4 audits</li>
            <li>30-day money back</li>
          </ul>
          <a href={AFFILIATE_LINK} target="_blank" rel="nofollow sponsored" className="mt-6 block bg-primary text-white text-center py-3 rounded-full font-bold">Get Standard Deal</a>
        </div>

        <div className="border rounded-xl p-6 bg-white">
          <h3 className="font-bold text-lg">Plus</h3>
          <div className="mt-3"><span className="text-3xl font-bold">$3.99</span><span className="text-sm">/mo</span></div>
          <div className="text-xs text-slate-500">2-year plan</div>
          <ul className="mt-4 text-sm space-y-2 list-disc pl-5">
            <li>All Standard perks</li>
            <li>NordPass - pass manager</li>
            <li>Threat Protection Pro</li>
            <li>Data breach scan</li>
          </ul>
          <a href={AFFILIATE_LINK} target="_blank" rel="nofollow sponsored" className="mt-6 block border text-center py-3 rounded-full font-bold">Get Plus Deal</a>
        </div>

        <div className="border rounded-xl p-6 bg-white">
          <h3 className="font-bold text-lg">Complete</h3>
          <div className="mt-3"><span className="text-3xl font-bold">$5.09</span><span className="text-sm">/mo</span></div>
          <div className="text-xs text-slate-500">2-year plan</div>
          <ul className="mt-4 text-sm space-y-2 list-disc pl-5">
            <li>All Plus perks</li>
            <li>1TB NordLocker cloud</li>
            <li>Safe file lock</li>
            <li>All Nord tools in one</li>
          </ul>
          <a href={AFFILIATE_LINK} target="_blank" rel="nofollow sponsored" className="mt-6 block border text-center py-3 rounded-full font-bold">Get Complete Deal</a>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-10">Which Tier Is Best Value?</h2>
      <p className="mt-3 text-slate-700 leading-relaxed">
        Actually, Standard 2-year is best for most. You get full VPN for low price. Plus is good if you need pass manager - saves you $ for other tool. Complete is for folks who want cloud + VPN in one bill.
      </p>
      <p className="mt-3 text-slate-700">Hidden costs - tax may add based on spot. Dedicated IP is extra $3-5/mo. No hidden fee for core VPN.</p>

      <CTA title="Get Best Price Now - 68% Off" sub="2-year + 3 months free. My top pick." />

      <h2 className="text-2xl font-bold mt-10">Monthly vs Yearly</h2>
      <table className="w-full text-sm border mt-4">
        <thead className="bg-slate-100"><tr><th className="p-2 text-left">Plan</th><th className="p-2 text-left">Monthly cost</th><th className="p-2 text-left">Total</th></tr></thead>
        <tbody>
          <tr className="border-t"><td className="p-2">1 month Standard</td><td className="p-2">$12.99</td><td className="p-2">$12.99</td></tr>
          <tr className="border-t"><td className="p-2">1 year Standard</td><td className="p-2">$4.59</td><td className="p-2">$59.88 first year</td></tr>
          <tr className="border-t"><td className="p-2">2 year Standard</td><td className="p-2">$3.09</td><td className="p-2">$86.13 first 2 years</td></tr>
        </tbody>
      </table>
    </div>
  );
}

import { AFFILIATE_LINK } from "@/lib/constants";

export default function CTA({ title = "Get NordVPN - 68% Off Today", sub = "30-day money back. 6400+ servers. Works for all use.", label = "Claim 68% Off Now" }: { title?: string; sub?: string; label?: string }) {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 md:p-8 text-white my-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
          <p className="text-blue-100 mt-2 text-sm md:text-base">{sub}</p>
          <ul className="mt-3 text-sm text-blue-100 list-disc pl-5 space-y-1">
            <li>Fast NordLynx speed</li>
            <li>No logs - 4 audits done</li>
            <li>10 gear at once</li>
          </ul>
        </div>
        <div className="shrink-0 text-center">
          <a href={AFFILIATE_LINK} target="_blank" rel="nofollow sponsored" className="inline-block bg-white text-blue-700 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition shadow-lg">
            {label}
          </a>
          <p className="text-xs text-blue-200 mt-2">68% off + 3 months free on 2-year plan</p>
        </div>
      </div>
    </div>
  );
}

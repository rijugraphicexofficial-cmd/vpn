import Link from "next/link";
import { AFFILIATE_LINK } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-dark text-slate-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">V</div>
              <span className="font-bold text-white text-lg">VPN Scout</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              We test VPNs so you can pick fast and safe. Honest notes, real tests, no hype.
            </p>
            <div className="mt-4 p-3 bg-white/5 rounded-lg border border-white/10">
              <p className="text-xs leading-relaxed">
                <strong className="text-white">Affiliate Disclosure:</strong> This site has affiliate links. If you buy via our link, we may earn a small fee at no extra cost to you. Link: {AFFILIATE_LINK} - We only push tools we trust and test. Your help keeps this site live. Thanks.
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Top Picks</h4>
            <ul className="space-y-2">
              <li><Link href="/review" className="hover:text-white">NordVPN Review</Link></li>
              <li><Link href="/best-vpn-for/streaming" className="hover:text-white">Best for Streaming</Link></li>
              <li><Link href="/best-vpn-for/gaming" className="hover:text-white">Best for Gaming</Link></li>
              <li><Link href="/best-vpn-for/torrenting" className="hover:text-white">Best for Torrent</Link></li>
              <li><Link href="/deal" className="hover:text-white">Deals</Link></li>
              <li><Link href="/all-pages" className="hover:text-white">All Pages (170+)</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Compare</h4>
            <ul className="space-y-2">
              <li><Link href="/nordvpn-vs/expressvpn" className="hover:text-white">vs ExpressVPN</Link></li>
              <li><Link href="/nordvpn-vs/surfshark" className="hover:text-white">vs Surfshark</Link></li>
              <li><Link href="/nordvpn-vs/cyberghost" className="hover:text-white">vs CyberGhost</Link></li>
              <li><Link href="/nordvpn-vs/protonvpn" className="hover:text-white">vs ProtonVPN</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">More</h4>
            <ul className="space-y-2">
              <li><Link href="/vpn-for/usa" className="hover:text-white">VPN for USA</Link></li>
              <li><Link href="/vpn-for/uk" className="hover:text-white">VPN for UK</Link></li>
              <li><Link href="/vpn-for/windows" className="hover:text-white">VPN for Windows</Link></li>
              <li><Link href="/streaming/netflix" className="hover:text-white">Netflix VPN</Link></li>
              <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
              <li><Link href="/affiliate-disclosure" className="hover:text-white">Disclosure</Link></li>
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} VPN Scout. All rights kept. Not linked to NordVPN brand, just fans and testers.</p>
          <p>Made for you with care. Last update: 2025.</p>
        </div>
      </div>
    </footer>
  );
}

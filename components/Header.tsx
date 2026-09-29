"use client";
import Link from "next/link";
import { useState } from "react";
import { AFFILIATE_LINK, SITE_NAME } from "@/lib/constants";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">V</div>
            <span className="font-bold text-xl text-dark">{SITE_NAME}</span>
            <span className="hidden sm:inline text-xs bg-slate-100 px-2 py-1 rounded-full ml-2">NordVPN Picks</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
            <Link href="/review" className="hover:text-primary">Review</Link>
            <Link href="/best-vpn-for/streaming" className="hover:text-primary">Best For Streaming</Link>
            <Link href="/nordvpn-vs/expressvpn" className="hover:text-primary">Comparisons</Link>
            <Link href="/vpn-for/usa" className="hover:text-primary">Countries</Link>
            <Link href="/vpn-for/windows" className="hover:text-primary">Devices</Link>
            <Link href="/guides/how-to-install-nordvpn" className="hover:text-primary">Guides</Link>
          </nav>

          <div className="flex items-center gap-3">
            <a href={AFFILIATE_LINK} target="_blank" rel="nofollow sponsored" className="hidden sm:inline-flex bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 transition">
              Get NordVPN 68% Off
            </a>
            <button onClick={() => setOpen(!open)} className="md:hidden p-2">
              <div className="w-6 h-0.5 bg-dark mb-1"></div>
              <div className="w-6 h-0.5 bg-dark mb-1"></div>
              <div className="w-6 h-0.5 bg-dark"></div>
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden py-4 border-t space-y-3 text-sm">
            <Link href="/review" className="block">Review</Link>
            <Link href="/best-vpn-for-streaming" className="block">Streaming</Link>
            <Link href="/nordvpn-vs-expressvpn" className="block">Vs Express</Link>
            <Link href="/vpn-for-usa" className="block">Countries</Link>
            <Link href="/vpn-for-windows" className="block">Devices</Link>
            <Link href="/streaming/netflix" className="block">Netflix Guide</Link>
            <a href={AFFILIATE_LINK} className="block bg-primary text-white text-center py-2 rounded-full">Get NordVPN Deal</a>
          </div>
        )}
      </div>
    </header>
  );
}

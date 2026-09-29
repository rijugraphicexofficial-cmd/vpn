export const metadata = { title: "Privacy Policy - VPN Scout", description: "Privacy policy for VPN Scout" };

export default function Privacy() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="mt-4 text-sm text-slate-500">Last update - Sept 2025</p>
      <div className="mt-6 space-y-4 text-slate-700 leading-relaxed text-sm">
        <p>We care about your privacy. This policy tells what data we collect and how we use it.</p>
        <h2 className="font-bold text-lg">What we collect</h2>
        <p>We collect non-personal data - page views, clicks, browser type. No personal data unless you mail us.</p>
        <h2 className="font-bold text-lg">Cookies</h2>
        <p>We use cookies for analytics and affiliate tracking. You can block cookies in browser.</p>
        <h2 className="font-bold text-lg">Affiliate links</h2>
        <p>We have affiliate links - for example NordVPN link https://nordvpn.sjv.io/Dym2Wa. If you click and buy, we may earn fee. We use cookies to track that.</p>
        <h2 className="font-bold text-lg">Third party</h2>
        <p>We use Google Analytics to see site use. Google may collect IP. We do not sell your data.</p>
        <h2 className="font-bold text-lg">Contact</h2>
        <p>Mail hello@vpnscout.example.com for privacy questions.</p>
      </div>
    </div>
  );
}

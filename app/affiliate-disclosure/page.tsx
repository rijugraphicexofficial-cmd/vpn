export const metadata = { title: "Affiliate Disclosure - VPN Scout", description: "Affiliate disclosure" };

export default function Disclosure() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold">Affiliate Disclosure</h1>
      <p className="mt-4 text-slate-600 leading-relaxed">
        VPN Scout is a review site that earns via affiliate links. This is how we stay free for you.
      </p>
      <div className="mt-6 space-y-4 text-slate-700 leading-relaxed">
        <p>
          We have affiliate links on this site. Main one is NordVPN - https://nordvpn.sjv.io/Dym2Wa. If you click that link and buy, we may earn a small fee at no extra cost to you.
        </p>
        <p>
          We only push tools we test and trust. Our notes are honest. Fee does not change our score. We test with our own cash.
        </p>
        <p>
          FTC rule - we must tell you this. So here it is - we earn if you buy via link. Thanks for your help. It keeps this site live and lets us test more VPNs.
        </p>
        <p>
          If you have questions, mail hello@vpnscout.example.com
        </p>
      </div>
    </div>
  );
}

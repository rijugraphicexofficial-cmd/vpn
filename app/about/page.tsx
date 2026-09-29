export const metadata = { title: "About - VPN Scout", description: "About VPN Scout - We test VPNs honest." };

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold">About VPN Scout</h1>
      <p className="mt-4 text-slate-600 leading-relaxed">
        VPN Scout is a small team that tests VPNs for real use. We check speed, safety, stream, game, and ease.
      </p>
      <p className="mt-3 text-slate-600 leading-relaxed">
        We started in 2023. Goal - give plain honest notes, no hype. We buy VPNs with our own cash and test. When you buy via our link, we may earn small fee at no cost to you. That keeps site live.
      </p>
      <h2 className="text-xl font-bold mt-8">How We Test</h2>
      <ul className="list-disc pl-5 mt-3 space-y-2 text-slate-700">
        <li>Speed - 5 tests per VPN on 500 Mbps base</li>
        <li>Safety - leak tests, kill switch, logs check</li>
        <li>Stream - Netflix, Hulu, BBC, Disney+ open test</li>
        <li>Ease - install time, app feel, help speed</li>
      </ul>
      <p className="mt-6 text-slate-600">Contact - hello@vpnscout.example.com</p>
    </div>
  );
}

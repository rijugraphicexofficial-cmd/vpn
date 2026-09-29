export const metadata = { title: "Contact - VPN Scout", description: "Contact VPN Scout" };

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p className="mt-4 text-slate-600">Have question? Want us to test a VPN? Mail us.</p>
      <div className="mt-8 border rounded-xl p-6 bg-slate-50">
        <p className="font-semibold">Email - hello@vpnscout.example.com</p>
        <p className="text-sm text-slate-600 mt-2">We reply in 24h.</p>
      </div>
      <div className="mt-8">
        <h2 className="font-bold">What we can help with</h2>
        <ul className="list-disc pl-5 mt-3 space-y-1 text-slate-700">
          <li>VPN setup help</li>
          <li>Best VPN for your use</li>
          <li>Fix VPN not working</li>
          <li>Business deals</li>
        </ul>
      </div>
    </div>
  );
}

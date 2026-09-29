export default function ProsCons() {
  return (
    <div className="grid md:grid-cols-2 gap-6 my-8">
      <div className="bg-green-50 border border-green-200 rounded-xl p-5">
        <h4 className="font-bold text-green-800 mb-3">Pros - Why I like NordVPN</h4>
        <ul className="space-y-2 text-sm text-green-900">
          <li>✓ Very fast - keeps 90%+ speed</li>
          <li>✓ 6400+ servers in 111 spots</li>
          <li>✓ No logs - 4 checks by pros</li>
          <li>✓ Works with Netflix, Hulu, BBC, etc</li>
          <li>✓ Threat Protection blocks ads</li>
          <li>✓ 10 gear at once</li>
          <li>✓ 30-day money back</li>
        </ul>
      </div>
      <div className="bg-red-50 border border-red-200 rounded-xl p-5">
        <h4 className="font-bold text-red-800 mb-3">Cons - Where it can be better</h4>
        <ul className="space-y-2 text-sm text-red-900">
          <li>✗ No free plan - only paid</li>
          <li>✗ 2-year plan is best deal, monthly is high</li>
          <li>✗ Desktop app can feel big at first</li>
          <li>✗ Dedicated IP costs extra</li>
        </ul>
      </div>
    </div>
  );
}

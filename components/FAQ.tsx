export default function FAQ({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">FAQs</h2>
      <div className="space-y-4">
        {faqs.map((f, i) => (
          <div key={i} className="border border-slate-200 rounded-xl p-4">
            <h3 className="font-semibold text-dark">{f.q}</h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">{f.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

import Link from "next/link";

export default function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="text-xs text-slate-500 mb-4">
      <ol className="flex flex-wrap gap-1 items-center">
        <li><Link href="/" className="hover:text-primary">Home</Link></li>
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-1">
            <span className="mx-1">/</span>
            {it.href ? <Link href={it.href} className="hover:text-primary">{it.label}</Link> : <span className="text-slate-700">{it.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

import { howItWorks } from '@/data/landing';

export default function HowItWorks() {
  return (
    <section className="container py-12">
      <h2 className="text-2xl md:text-3xl font-semibold">{howItWorks.title}</h2>
      <ol className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {howItWorks.steps.map((s, i) => (
          <li key={i} className="rounded-lg border bg-white p-5 shadow-sm">
            <div className="text-2xl font-bold text-zinc-400 mb-2">{s.number}</div>
            <h3 className="font-medium">{s.title}</h3>
            <p className="mt-1 text-zinc-600 text-sm">{s.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

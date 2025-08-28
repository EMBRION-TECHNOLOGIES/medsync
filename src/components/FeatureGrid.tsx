import { features } from '@/data/landing';

export default function FeatureGrid() {
  return (
    <section className="container py-12">
      <h2 className="text-2xl md:text-3xl font-semibold">{features.title}</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.items.map((f) => (
          <div key={f.title} className="rounded-lg border bg-white p-5 shadow-sm">
            <div className="text-2xl mb-2">{f.icon}</div>
            <h3 className="text-lg font-semibold">{f.title}</h3>
            <p className="mt-1 text-zinc-600">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

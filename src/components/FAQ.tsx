import { faq } from '@/data/landing';

export default function FAQ() {
  return (
    <section className="container py-12">
      <h2 className="text-2xl md:text-3xl font-semibold">FAQ</h2>
      <div className="mt-6 grid gap-4">
        {faq.map((f, i) => (
          <details key={i} className="rounded-lg border bg-white p-4 shadow-sm">
            <summary className="font-medium cursor-pointer">{f.q}</summary>
            <p className="mt-2 text-zinc-600">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

import { testimonials } from '@/data/landing';

export default function Testimonials() {
  return (
    <section className="container py-12">
      <h2 className="text-2xl md:text-3xl font-semibold">What people say</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <figure key={i} className="rounded-lg border p-6 bg-white shadow-sm">
            <blockquote className="text-zinc-800">{t.quote}</blockquote>
            <figcaption className="mt-3 text-sm text-zinc-600">
              <strong>{t.author}</strong> • {t.role}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

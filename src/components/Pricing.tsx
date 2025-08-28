import { pricing } from '@/data/landing';

export default function Pricing() {
  return (
    <section className="container py-12" id="pricing">
      <h2 className="text-2xl md:text-3xl font-semibold">{pricing.title}</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {pricing.plans.map((plan, i) => (
          <div key={i} className="rounded-lg border bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">{plan.name}</h3>
            <div className="mt-2">
              <span className="text-3xl font-bold">{plan.price}</span>
              {plan.period && <span className="text-zinc-600">{plan.period}</span>}
            </div>
            <p className="mt-1 text-zinc-600">{plan.description}</p>
            <ul className="mt-3 list-disc pl-5 text-zinc-700">
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <div className="mt-4">
              <a 
                href={plan.cta.href} 
                className="rounded-md bg-primary text-primary-foreground px-4 py-2 hover:opacity-90 transition-opacity"
              >
                {plan.cta.label}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

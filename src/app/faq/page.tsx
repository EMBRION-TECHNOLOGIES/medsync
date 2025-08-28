export const metadata = {
  title: 'FAQ'
};

const faqs = [
  {
    q: 'Is Medsync free for patients?',
    a: 'Yes, patients always get free access to reminders and appointments.'
  },
  {
    q: 'What do clinics get with paid plans?',
    a: 'Dashboards, analytics, refill management, custom integrations.'
  },
  {
    q: 'Does the app need internet all the time?',
    a: 'No. Reminders work offline; data syncs when you reconnect.'
  },
  {
    q: 'How secure is my data?',
    a: 'Bank-level encryption and international standards.'
  }
];

export default function FAQPage() {
  return (
    <main className="container py-12">
      <h1 className="text-3xl md:text-4xl font-semibold">
        Frequently Asked Questions
      </h1>
      <div className="mt-6 grid gap-4">
        {faqs.map((f, i) => (
          <details key={i} className="rounded-lg border bg-white p-4 shadow-sm">
            <summary className="font-medium cursor-pointer">{f.q}</summary>
            <p className="mt-2 text-zinc-600">{f.a}</p>
          </details>
        ))}
      </div>
    </main>
  );
}

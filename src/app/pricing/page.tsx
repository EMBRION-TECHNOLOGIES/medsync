export const metadata = {
  title: 'Pricing'
};

export default function PricingPage() {
  return (
    <main className="container py-12">
      <h1 className="text-3xl md:text-4xl font-semibold">
        Affordable Plans for Patients & Clinics
      </h1>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold">Patients</h3>
          <ul className="mt-3 list-disc pl-5">
            <li>Free forever</li>
            <li>Medication reminders</li>
            <li>Appointment scheduling</li>
            <li>Offline alerts</li>
          </ul>
        </div>
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold">Clinics & Pharmacies</h3>
          <ul className="mt-3 list-disc pl-5">
            <li>Starter — ₦4,999/month</li>
            <li>Professional — ₦14,999/month</li>
            <li>Enterprise — Custom pricing</li>
          </ul>
          <a
            href="/contact"
            className="mt-4 inline-block rounded-md bg-primary text-primary-foreground px-4 py-2 hover:opacity-90 transition-opacity"
          >
            Start your free trial today
          </a>
        </div>
      </div>
    </main>
  );
}

export const metadata = {
  title: 'Features'
};

const Feature = ({ title, body }: { title: string; body: string }) => (
  <div className="rounded-lg border bg-white p-5 shadow-sm">
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="mt-1 text-zinc-600">{body}</p>
  </div>
);

export default function Features() {
  return (
    <main className="container py-12">
      <h1 className="text-3xl md:text-4xl font-semibold">
        Everything You Need to Stay on Track
      </h1>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <Feature
          title="🕑 Smart Reminders"
          body="Flexible dosing schedules with snooze/skip and adherence records."
        />
        <Feature
          title="📅 Appointments"
          body="Book, reschedule, and get automated reminders."
        />
        <Feature
          title="🏥 Clinic Portal"
          body="Doctors can monitor progress, share notes, and update prescriptions."
        />
        <Feature
          title="💊 One-Tap Refills"
          body="Request refills directly from clinic or pharmacy."
        />
        <Feature
          title="📈 Health Insights"
          body="Turn habits into simple, visual insights."
        />
        <Feature
          title="🔒 Data Privacy"
          body="End-to-end encryption and global standards."
        />
        <Feature
          title="📶 Low-Data Mode"
          body="Works offline; syncs on reconnect."
        />
        <Feature
          title="🤖 Steward AI"
          body="Patient buddy + doctor assistant for follow-ups and triage."
        />
      </div>
    </main>
  );
}

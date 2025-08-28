export const metadata = {
  title: 'About Us'
};

export default function About() {
  return (
    <main className="container py-12">
      <h1 className="text-3xl md:text-4xl font-semibold">
        Our Mission: Making Healthcare Simple and Accessible
      </h1>
      <div className="prose prose-zinc mt-6">
        <p>
          Medsync was built with one vision: to empower patients and clinics with simple, 
          reliable digital tools that improve health outcomes.
        </p>
        <p>
          We believe every patient deserves timely medication reminders, easy access to 
          providers, and secure handling of medical information.
        </p>
        <p>
          Our team of doctors, engineers, and health advocates is committed to bridging 
          the gap between patients and providers, starting in Nigeria and expanding globally.
        </p>
      </div>
    </main>
  );
}

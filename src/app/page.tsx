import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import DownloadButtons from '@/components/DownloadButtons';
import Typography from '@/components/ui/Typography';

export const metadata = {
  title: 'MedSync - Healthcare Management Made Simple',
  description: 'Manage prescriptions, appointments, and reminders — all in one simple app. Free for patients, powerful for clinics.',
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <Hero />
      <FeatureGrid />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQ />
      <section className="section-padding bg-gradient-to-br from-ms-green/5 to-ms-blue/5">
        <div className="container text-center">
          <div className="max-w-[56rem] mx-auto">
            <Typography variant="h2" className="mb-6 text-4xl md:text-5xl font-bold">
              <span className="text-gradient">Ready to take control of your health?</span>
            </Typography>
            <Typography variant="bodyLarge" className="text-xl text-slate-600 mb-8 content-narrow">
              Join thousands of patients and healthcare providers who trust MedSync 
              to manage their healthcare needs.
            </Typography>
            <DownloadButtons />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

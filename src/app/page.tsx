import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <FeatureGrid />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQ />
      <section className="container py-16">
        <h3 className="text-2xl font-semibold">
          Ready to take control of your health?
        </h3>
        <div className="mt-4 flex gap-3">
          <a href="#download" className="rounded-md bg-[hsl(var(--color-primary))] text-[hsl(var(--color-primary-foreground))] px-4 py-2 hover:opacity-90 transition-opacity">
            Get Started
          </a>
          <a href="#waitlist" className="rounded-md border px-4 py-2 hover:bg-zinc-50 transition-colors">
            Join Waitlist
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}

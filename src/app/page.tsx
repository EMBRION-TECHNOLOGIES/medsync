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
  title: 'TeraSync - Healthcare Management Made Simple',
  description: 'Manage prescriptions, appointments, and reminders — all in one simple app. Free for patients, powerful for clinics.',
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar />
      
      {/* Company Hero Banner */}
     
      
      <Hero />
      <FeatureGrid />
      <HowItWorks />
      {/* <Pricing /> */}
      {/* <Testimonials /> */}
      <FAQ />
      <section className="section-padding bg-gradient-to-br from-ms-green/5 to-ms-blue/5">
        <div className="container text-center">
          <div className="max-w-[56rem] mx-auto">
            <Typography variant="h2" className="mb-6">
              <span className="text-gradient">Ready to take control of your health?</span>
            </Typography>
            <Typography variant="bodyLarge" className="text-slate-600 mb-8 content-narrow">
              {/* Join thousands of patients and healthcare providers who trust TeraSync 
              to manage their healthcare needs. */}
               Our support team is here to help you get the most out of TeraSync. 
               Reach out and we&apos;ll get back to you within 24 hours.
            </Typography>
            <DownloadButtons />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}


// {/* <section className="relative h-[22vh] flex items-center justify-center overflow-hidden">
// {/* Dynamic Background */}
// <div 
//   className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//   style={{
//     backgroundImage: `url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
//   }}
// >
//   <div className="absolute inset-0 bg-gradient-to-br from-ms-green/40 to-ms-blue/50"></div>
//   <div className="absolute inset-0 bg-black/15"></div>
// </div>

// {/* Content */}
// <div className="relative z-10 text-center text-white px-6">
//   <div className="max-w-6xl mx-auto">
//     {/* Company Logo/Name */}
//     <div className="mb-6 animate-fade-in-up">
//       <h1 className="font-nunito font-bold text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight tracking-tight">
//         <span className="block text-white drop-shadow-2xl">TeraSync</span>
//       </h1>
//     </div>
//   </div>
// </div>

// {/* Gradient Overlay for smooth transition */}
// <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-slate-50 to-transparent"></div>
// </section> */}
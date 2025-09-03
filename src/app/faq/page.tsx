import { Metadata } from 'next';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Typography from '@/components/ui/Typography';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about MedSync - medication reminders, appointments, and healthcare management.',
};

const faqs = [
  {
    q: 'Is MedSync free for patients?',
    a: 'Yes, patients always get free access to medication reminders, appointment scheduling, and basic health insights. Our core features are designed to be accessible to everyone.'
  },
  {
    q: 'What do clinics get with paid plans?',
    a: 'Clinics get access to our comprehensive dashboard with patient management tools, medication adherence tracking, appointment scheduling, analytics, refill management, and custom integrations with existing systems.'
  },
  {
    q: 'Does the app need internet all the time?',
    a: 'No, MedSync is designed to work offline. Medication reminders work without internet connection, and your data syncs automatically when you reconnect. This is especially important for users in areas with limited connectivity.'
  },
  {
    q: 'How secure is my health data?',
    a: 'We use bank-level encryption and follow international healthcare data standards (HIPAA, GDPR). Your data is encrypted end-to-end and stored securely. We never share your personal health information without your explicit consent.'
  },
  {
    q: 'Can I use MedSync for multiple family members?',
    a: 'Yes, you can manage multiple profiles within the app. This is perfect for families who want to keep track of everyone&apos;s medications and appointments in one place.'
  },
  {
    q: 'What is Steward AI and how does it help?',
    a: 'Steward AI is our intelligent assistant that provides 24/7 support for medication questions, symptom monitoring, and health coaching. It can help identify potential issues and connect you with healthcare providers when needed.'
  },
  {
    q: 'How do I get started with MedSync?',
    a: 'Simply download the app from the App Store or Google Play, create your profile, and add your medications. The app will guide you through the setup process and start sending reminders immediately.'
  },
  {
    q: 'Can I sync with my existing healthcare providers?',
    a: 'Yes, MedSync integrates with many healthcare systems and electronic health records. Your healthcare providers can access your medication adherence data and update prescriptions directly through our clinic portal.'
  }
];

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      <NavBar />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-ms-blue/5 to-ms-green/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tr from-ms-green/5 to-ms-yellow/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="text-center max-w-[64rem] mx-auto">
            <Typography variant="h1" className="mb-8 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-gradient block">Frequently Asked Questions</span>
              <span className="text-slate-900 block text-3xl md:text-4xl lg:text-5xl font-semibold mt-4">
                Get the Answers You Need
              </span>
            </Typography>
            <Typography variant="bodyLarge" className="text-xl md:text-2xl text-slate-600 leading-relaxed content-narrow">
              Find answers to common questions about MedSync, our features, pricing, and how we can help you manage your health better.
            </Typography>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-[64rem] mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-lg border animate-fade-in-up relative overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem 
                      value={`item-${index}`} 
                      className="border-0"
                    >
                      <AccordionTrigger className="px-8 py-6 text-left hover:no-underline hover:text-ms-blue transition-colors duration-300">
                        <Typography variant="h3" className="text-xl font-semibold">
                          {faq.q}
                        </Typography>
                      </AccordionTrigger>
                      <AccordionContent className="px-8 pb-6">
                        <Typography variant="bodyLarge" className="text-gray-700 leading-relaxed text-lg">
                          {faq.a}
                        </Typography>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-ms-blue to-ms-green">
        <div className="container text-center">
          <div className="max-w-[64rem] mx-auto">
            <Typography variant="h2" className="text-4xl md:text-5xl font-bold text-white mb-6">
              Still Have Questions?
            </Typography>
            <Typography variant="bodyLarge" className="text-xl text-white/90 mb-8 leading-relaxed content-narrow">
              Our support team is here to help you get the most out of MedSync. 
              Reach out and we&apos;ll get back to you within 24 hours.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="btn bg-white text-ms-blue hover:bg-slate-50 btn-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Contact Support
              </a>
              <a 
                href="/features" 
                className="btn border-2 border-white text-white hover:bg-white hover:text-ms-blue btn-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Explore Features
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

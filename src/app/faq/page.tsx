import { Metadata } from 'next';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Typography from '@/components/ui/Typography';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'FAQ about MedSync pharmacy delivery, refills, and AI Health Assistant — privacy-first and reliable.',
};

const faqs = [
  {
    q: 'Is MedSync free for patients?',
    a: 'Yes. Core features like delivery ordering, reminders, and the AI Health Assistant (fair‑use) are free.'
  },
  {
    q: 'How does pharmacy delivery work?',
    a: 'Search nearby pharmacies in the app, confirm availability, place your order, and track delivery in real‑time where available.'
  },
  {
    q: 'Is the AI safe and private?',
    a: 'Yes. We minimize sensitive data, apply NDPR‑aligned redaction, and use end‑to‑end encryption. Your data stays private.'
  },
  {
    q: 'Does the app need internet all the time?',
    a: 'No. Reminders work offline and your data syncs automatically when you reconnect. Delivery and chat resume seamlessly.'
  },
  {
    q: 'Can I manage refills automatically?',
    a: 'Yes. You\'ll get low‑supply alerts, and can reorder in one tap with live order status updates.'
  },
  {
    q: 'What kinds of questions can the AI answer?',
    a: 'General medication guidance, side‑effects, interactions, and adherence tips. It doesn\'t diagnose or prescribe and will advise professional care when needed.'
  },
  {
    q: 'How do I get started?',
    a: 'Download the app, add your medications, and enable reminders. You can search pharmacies, place orders, and chat with the AI right away.'
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
              Answers about pharmacy delivery, refills, and our AI Health Assistant. Learn how MedSync helps you get medications fast and stay informed—privately and securely.
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
                href={process.env.NEXT_PUBLIC_APP_STORE_URL || '/contact'} 
                className="btn border-2 border-white text-white hover:bg-white hover:text-ms-blue btn-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Get the App
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

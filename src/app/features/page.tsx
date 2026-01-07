import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { 
  Clock, 
  Calendar, 
  Building2, 
  Pill, 
  TrendingUp, 
  Shield, 
  Wifi, 
  Bot,
  Stethoscope,
  CreditCard
} from 'lucide-react';

export const metadata = {
  title: 'Features',
  description: 'Pharmacy delivery and AI Health Assistant. Order meds with same‑day delivery and get safe answers about your medications.'
};

export default function Features() {
  const features = [
    {
      icon: <Pill className="w-8 h-8 text-ms-blue" />,
      title: "Pharmacy Delivery",
      description: "Order refills from nearby pharmacies with same‑day delivery where available.",
      details: [
        "Search nearby pharmacies",
        "Real‑time availability",
        "Delivery tracking",
        "Secure payments"
      ],
      category: "Delivery"
    },
    {
      icon: <Bot className="w-8 h-8 text-ms-green" />,
      title: "AI Health Assistant",
      description: "Get safe, reliable answers about your medications and general health education.",
      details: [
        "24/7 medication guidance",
        "Side‑effects and interactions",
        "Adherence support",
        "Privacy‑first design"
      ],
      category: "AI"
    },
    {
      icon: <Clock className="w-8 h-8 text-ms-blue" />,
      title: "Smart Reminders",
      description: "Adaptive reminders with streaks, gentle nudges, and skip/snooze options.",
      details: [
        "Flexible schedules",
        "Skip / Snooze",
        "Streaks & adherence",
        "Low‑supply alerts"
      ],
      category: "Medication"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-ms-green" />,
      title: "Refill Automation",
      description: "Get notified when you’re running low and reorder in one tap.",
      details: [
        "Supply countdown",
        "One‑tap reorder",
        "Order status updates",
        "Pharmacy follow‑ups"
      ],
      category: "Refills"
    },
    {
      icon: <Shield className="w-8 h-8 text-ms-yellow" />,
      title: "Privacy & Security",
      description: "End‑to‑end encryption, data minimization, and NDPR‑aligned redaction.",
      details: [
        "Encrypted by default",
        "Data minimization",
        "NDPR‑aligned redaction",
        "Role‑based access"
      ],
      category: "Security"
    },
    {
      icon: <Wifi className="w-8 h-8 text-ms-blue" />,
      title: "Offline & Low‑Data Mode",
      description: "Reliable reminders and local caching; syncs automatically when online.",
      details: [
        "Offline reminders",
        "Local storage",
        "Auto sync",
        "Low‑data optimization"
      ],
      category: "Reliability"
    }
  ];

  // const categories = ["All", "Patient Care", "Scheduling", "Provider Tools", "Medication", "Analytics", "Security", "Accessibility", "AI Assistant"];

  return (
    <>
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
            <h1 className="font-nunito font-bold text-5xl md:text-6xl lg:text-7xl leading-tight mb-8">
              <span className="text-gradient block">Delivery + AI Features</span>
              <span className="font-nunito font-semibold text-slate-900 block text-3xl md:text-4xl lg:text-5xl mt-4">
                Everything you need to get meds fast and stay informed
              </span>
            </h1>
            <p className="font-nunito font-regular text-lg md:text-xl text-slate-600 leading-relaxed content-narrow">
              Order refills with same‑day delivery where available, and get safe, reliable answers about your medications with our AI Health Assistant.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="card card-elevated p-8 group hover:scale-105 transition-all duration-300 animate-fade-in-up relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Feature Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-nunito font-semibold text-xl text-slate-900 group-hover:text-ms-blue transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <div className="font-nunito font-medium text-sm text-ms-blue">
                        {feature.category}
                      </div>
                    </div>
                  </div>
                  <p className="font-nunito font-regular text-base text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Feature Details */}
                <div className="space-y-3">
                  {feature.details.map((detail, detailIndex) => (
                    <div 
                      key={detailIndex}
                      className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300"
                      style={{ transitionDelay: `${detailIndex * 0.05}s` }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-br from-ms-green to-ms-blue rounded-full flex-shrink-0"></div>
                      <span className="font-nunito font-regular text-sm text-slate-700">{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-ms-blue/5 to-ms-green/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Flow Summary */}
      <section className="section-padding bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-nunito font-bold text-4xl md:text-5xl mb-6">
              <span className="text-gradient">How delivery works</span>
            </h2>
            <p className="font-nunito font-regular text-lg md:text-xl text-slate-600 content-narrow">
              Find a pharmacy, place your order, track delivery, and chat with our AI for safe guidance.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Find a pharmacy', desc: 'Search nearby pharmacies and confirm availability.' },
              { step: '2', title: 'Order & track', desc: 'Place your order and track delivery in‑app.' },
              { step: '3', title: 'Ask our AI', desc: 'Get helpful answers about your medications 24/7.' }
            ].map((item, i) => (
              <div key={i} className="card card-elevated p-8 text-center animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-ms-blue to-ms-green text-white flex items-center justify-center text-lg font-bold mx-auto mb-4">{item.step}</div>
                <h3 className="font-nunito font-semibold text-xl text-slate-900 mb-2">{item.title}</h3>
                <p className="font-nunito font-regular text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Partners Snapshot */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <h2 className="font-nunito font-bold text-4xl md:text-5xl mb-8">
                <span className="text-gradient">Built for pharmacies and patients</span>
              </h2>
              <div className="space-y-6 font-nunito font-regular text-lg text-slate-600 leading-relaxed">
                <p>
                  TeraSync helps community pharmacies accept in‑app orders, manage deliveries, and chat with customers. Patients get fast delivery and clear guidance.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="font-nunito font-bold text-2xl text-ms-blue">Same‑day</div>
                    <div className="font-nunito font-regular text-sm text-slate-600">Delivery windows</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="font-nunito font-bold text-2xl text-ms-green">24/7</div>
                    <div className="font-nunito font-regular text-sm text-slate-600">AI assistance</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                <div className="bg-gradient-to-br from-ms-blue/10 to-ms-green/10 rounded-3xl p-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                      <div className="w-12 h-12 bg-ms-green/10 rounded-lg flex items-center justify-center">
                        <Pill className="w-6 h-6 text-ms-green" />
                      </div>
                      <div>
                        <div className="font-nunito font-semibold text-base text-slate-900">Pharmacy network</div>
                        <div className="font-nunito font-regular text-sm text-slate-600">Local partners</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                      <div className="w-12 h-12 bg-ms-blue/10 rounded-lg flex items-center justify-center">
                        <Clock className="w-6 h-6 text-ms-blue" />
                      </div>
                      <div>
                        <div className="font-nunito font-semibold text-base text-slate-900">Tracked delivery</div>
                        <div className="font-nunito font-regular text-sm text-slate-600">Real‑time status</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                      <div className="w-12 h-12 bg-ms-yellow/10 rounded-lg flex items-center justify-center">
                        <Shield className="w-6 h-6 text-ms-yellow" />
                      </div>
                      <div>
                        <div className="font-nunito font-semibold text-base text-slate-900">Privacy first</div>
                        <div className="font-nunito font-regular text-sm text-slate-600">Encrypted by default</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-ms-blue to-ms-green">
        <div className="container text-center">
          <div className="max-w-[64rem] mx-auto">
            <h2 className="font-nunito font-bold text-4xl md:text-5xl text-white mb-6">
              Ready to Experience These Features?
            </h2>
            <p className="font-nunito font-regular text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Start your free trial today and discover how TeraSync can transform 
              your healthcare management experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="btn bg-white text-ms-blue hover:bg-slate-50 btn-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Partner with TeraSync
              </a>
              <a 
                href={process.env.NEXT_PUBLIC_APP_STORE_URL || '/contact'} 
                className="btn border-2 border-white text-white hover:bg-white hover:text-ms-blue btn-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Get the App
              </a>
            </div>
          </div>
      </div>
      </section>

      <Footer />
    </>
  );
}

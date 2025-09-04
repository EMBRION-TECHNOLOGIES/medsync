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
  description: 'Discover all the powerful features that make MedSync the perfect healthcare management solution for patients and providers.'
};

export default function Features() {
  const features = [
    {
      icon: <Clock className="w-8 h-8 text-ms-blue" />,
      title: "Smart Reminders",
      description: "Never miss a dose with intelligent medication reminders that adapt to your schedule.",
      details: [
        "Flexible dosing schedules",
        "Snooze and skip options",
        "Adherence tracking",
        "Custom reminder tones"
      ],
      category: "Patient Care"
    },
    {
      icon: <Calendar className="w-8 h-8 text-ms-green" />,
      title: "Appointment Management",
      description: "Seamlessly book, reschedule, and manage your healthcare appointments.",
      details: [
        "Online booking system",
        "Automated reminders",
        "Calendar integration",
        "Provider availability"
      ],
      category: "Scheduling"
    },
    {
      icon: <Building2 className="w-8 h-8 text-ms-yellow" />,
      title: "Clinic Portal",
      description: "Comprehensive dashboard for healthcare providers to manage patients.",
      details: [
        "Patient progress monitoring",
        "Prescription management",
        "Clinical notes sharing",
        "Adherence reports"
      ],
      category: "Provider Tools"
    },
    {
      icon: <Pill className="w-8 h-8 text-ms-blue" />,
      title: "One-Tap Refills",
      description: "Request medication refills directly from your clinic or pharmacy.",
      details: [
        "Direct pharmacy integration",
        "Prescription history",
        "Insurance verification",
        "Delivery tracking"
      ],
      category: "Medication"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-ms-green" />,
      title: "Health Insights",
      description: "Transform your health data into actionable insights and trends.",
      details: [
        "Visual health trends",
        "Medication adherence reports",
        "Symptom tracking",
        "Progress analytics"
      ],
      category: "Analytics"
    },
    {
      icon: <Shield className="w-8 h-8 text-ms-yellow" />,
      title: "Data Privacy",
      description: "Your health information is protected with enterprise-grade security.",
      details: [
        "End-to-end encryption",
        "HIPAA compliance",
        "Secure data storage",
        "Privacy controls"
      ],
      category: "Security"
    },
    {
      icon: <Wifi className="w-8 h-8 text-ms-blue" />,
      title: "Offline Mode",
      description: "Access your health information even without internet connection.",
      details: [
        "Offline medication reminders",
        "Local data storage",
        "Automatic sync",
        "Low-data optimization"
      ],
      category: "Accessibility"
    },
    {
      icon: <Bot className="w-8 h-8 text-ms-green" />,
      title: "Steward AI",
      description: "Your personal AI assistant for health management and support.",
      details: [
        "24/7 health support",
        "Symptom assessment",
        "Medication guidance",
        "Provider triage"
      ],
      category: "AI Assistant"
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
              <span className="text-gradient block">Powerful Features</span>
              <span className="font-nunito font-semibold text-slate-900 block text-3xl md:text-4xl lg:text-5xl mt-4">
                Everything You Need to Stay on Track
              </span>
            </h1>
            <p className="font-nunito font-regular text-lg md:text-xl text-slate-600 leading-relaxed content-narrow">
              Discover the comprehensive suite of tools designed to make healthcare 
              management simple, secure, and effective for patients and providers alike.
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

      {/* Feature Categories */}
      <section className="section-padding bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-nunito font-bold text-4xl md:text-5xl mb-6">
              <span className="text-gradient">Feature Categories</span>
            </h2>
            <p className="font-nunito font-regular text-lg md:text-xl text-slate-600 content-narrow">
              Our features are organized into key categories to help you find exactly what you need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Patient Care",
                description: "Tools designed to help patients manage their health effectively",
                features: ["Smart Reminders", "Health Insights", "Steward AI"],
                color: "from-ms-blue to-ms-green"
              },
              {
                title: "Provider Tools",
                description: "Comprehensive solutions for healthcare providers and clinics",
                features: ["Clinic Portal", "Patient Monitoring", "Clinical Notes"],
                color: "from-ms-green to-ms-yellow"
              },
              {
                title: "Security & Privacy",
                description: "Enterprise-grade security to protect your health information",
                features: ["Data Encryption", "HIPAA Compliance", "Privacy Controls"],
                color: "from-ms-yellow to-ms-blue"
              }
            ].map((category, index) => (
              <div 
                key={index} 
                className="card card-elevated p-8 text-center group hover:scale-105 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {index + 1}
                </div>
                <h3 className="font-nunito font-semibold text-xl text-slate-900 mb-4 group-hover:text-ms-blue transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="font-nunito font-regular text-base text-slate-600 leading-relaxed mb-6">
                  {category.description}
                </p>
                <div className="space-y-2">
                  {category.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="font-nunito font-regular text-sm text-slate-700 bg-slate-50 rounded-lg px-3 py-2">
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <h2 className="font-nunito font-bold text-4xl md:text-5xl mb-8">
                <span className="text-gradient">Seamless Integration</span>
              </h2>
              <div className="space-y-6 font-nunito font-regular text-lg text-slate-600 leading-relaxed">
                <p>
                  MedSync integrates with your existing healthcare infrastructure, 
                  making adoption simple and seamless for both patients and providers.
                </p>
                <p>
                  Our platform works with major EHR systems, pharmacy networks, 
                  and insurance providers to ensure a smooth experience.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="font-nunito font-bold text-2xl text-ms-blue">100+</div>
                    <div className="font-nunito font-regular text-sm text-slate-600">EHR Integrations</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="font-nunito font-bold text-2xl text-ms-green">50+</div>
                    <div className="font-nunito font-regular text-sm text-slate-600">Pharmacy Partners</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                <div className="bg-gradient-to-br from-ms-blue/10 to-ms-green/10 rounded-3xl p-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                      <div className="w-12 h-12 bg-ms-blue/10 rounded-lg flex items-center justify-center">
                        <Stethoscope className="w-6 h-6 text-ms-blue" />
                      </div>
                      <div>
                        <div className="font-nunito font-semibold text-base text-slate-900">EHR Systems</div>
                        <div className="font-nunito font-regular text-sm text-slate-600">Epic, Cerner, Allscripts</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                      <div className="w-12 h-12 bg-ms-green/10 rounded-lg flex items-center justify-center">
                        <Pill className="w-6 h-6 text-ms-green" />
                      </div>
                      <div>
                        <div className="font-nunito font-semibold text-base text-slate-900">Pharmacies</div>
                        <div className="font-nunito font-regular text-sm text-slate-600">CVS, Walgreens, Local</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                      <div className="w-12 h-12 bg-ms-yellow/10 rounded-lg flex items-center justify-center">
                        <CreditCard className="w-6 h-6 text-ms-yellow" />
                      </div>
                      <div>
                        <div className="font-nunito font-semibold text-base text-slate-900">Insurance</div>
                        <div className="font-nunito font-regular text-sm text-slate-600">Major Providers</div>
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
              Start your free trial today and discover how MedSync can transform 
              your healthcare management experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="btn bg-white text-ms-blue hover:bg-slate-50 btn-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Start Free Trial
              </a>
              <a 
                href="/pricing" 
                className="btn border-2 border-white text-white hover:bg-white hover:text-ms-blue btn-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                View Pricing
              </a>
            </div>
          </div>
      </div>
      </section>

      <Footer />
    </>
  );
}

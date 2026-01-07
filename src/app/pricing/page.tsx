import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Pricing',
  description: 'Choose the perfect TeraSync plan for your healthcare needs. Free for patients, affordable plans for clinics and pharmacies.'
};

export default function PricingPage() {
  const patientFeatures = [
    "Unlimited medication reminders",
    "Appointment scheduling & reminders",
    "Health insights & analytics",
    "Offline mode & sync",
    "Steward AI assistant",
    "Secure data storage",
    "24/7 customer support",
    "Mobile & web access"
  ];

  const clinicPlans = [
    {
      name: "Starter",
      price: "₦4,999",
      period: "/month",
      description: "Perfect for small clinics and individual practitioners",
      features: [
        "Up to 100 patients",
        "Basic patient management",
        "Medication tracking",
        "Appointment scheduling",
        "Basic reporting",
        "Email support"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "₦14,999",
      period: "/month",
      description: "Ideal for growing clinics and multi-provider practices",
      features: [
        "Up to 500 patients",
        "Advanced patient management",
        "Clinical notes & documentation",
        "Prescription management",
        "Advanced analytics",
        "Priority support",
        "API access",
        "Custom branding"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large healthcare organizations and hospital systems",
      features: [
        "Unlimited patients",
        "Multi-location support",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom training",
        "SLA guarantees",
        "On-premise deployment"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const faqs = [
    {
      question: "Is TeraSync really free for patients?",
      answer: "Yes! TeraSync is completely free for patients forever. We believe healthcare management should be accessible to everyone, regardless of their financial situation."
    },
    {
      question: "What's included in the free patient plan?",
      answer: "The free plan includes unlimited medication reminders, appointment scheduling, health insights, offline mode, Steward AI assistant, and secure data storage. There are no hidden fees or limitations."
    },
    {
      question: "Can I switch between clinic plans?",
      answer: "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences."
    },
    {
      question: "Do you offer discounts for annual billing?",
      answer: "Yes! We offer a 20% discount when you pay annually. This applies to both the Starter and Professional plans."
    },
    {
      question: "What happens if I exceed my patient limit?",
      answer: "We'll notify you when you're approaching your limit. You can upgrade your plan or purchase additional patient slots as needed."
    },
    {
      question: "Is there a setup fee?",
      answer: "No setup fees! We believe in transparent pricing. You only pay the monthly subscription fee, and we'll help you get started at no extra cost."
    }
  ];

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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              <span className="text-gradient block">Simple Pricing</span>
              <span className="text-slate-900 block text-3xl md:text-4xl lg:text-5xl font-semibold mt-4">
                Affordable Plans for Everyone
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed content-narrow">
              Free for patients, affordable for providers. Choose the plan that works 
              best for your healthcare needs.
            </p>
          </div>
        </div>
      </section>

      {/* Patient Plan */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">For Patients</span>
            </h2>
            <p className="text-xl text-slate-600 content-narrow">
              Complete healthcare management tools, completely free forever.
            </p>
          </div>

          <div className="max-w-[64rem] mx-auto mt-16">
            <div className="card card-elevated p-12 text-center relative group hover:scale-105 transition-all duration-300 animate-fade-in-up overflow-visible">
              {/* Free Badge */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                <div className="bg-gradient-to-r from-ms-green to-ms-blue text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg">
                  Always Free
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Patient Plan</h3>
                <div className="mb-6">
                  <span className="text-6xl font-bold text-ms-green">₦0</span>
                  <span className="text-2xl text-slate-600 ml-2">/forever</span>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Everything you need to manage your health, completely free.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {patientFeatures.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 text-left"
                  >
                    <div className="w-5 h-5 bg-gradient-to-br from-ms-green to-ms-blue rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>

              <a 
                href="/contact" 
                className="btn btn-primary btn-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Get Started Free
              </a>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-ms-blue/5 to-ms-green/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Plans */}
      <section className="section-padding bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">For Clinics & Pharmacies</span>
            </h2>
            <p className="text-xl text-slate-600 content-narrow">
              Choose the plan that fits your practice size and needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {clinicPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`relative group animate-fade-in-up ${
                  plan.popular ? 'lg:scale-105' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-ms-green to-ms-blue text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className={`card card-elevated p-8 h-full group-hover:scale-105 transition-all duration-300 ${
                  plan.popular ? 'border-2 border-ms-blue/20' : ''
                }`}>
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-ms-blue transition-colors duration-300">
                      {plan.name}
                    </h3>
                    
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                      {plan.period && (
                        <span className="text-lg text-slate-600 ml-2">{plan.period}</span>
                      )}
                    </div>
                    
                    <p className="text-slate-600 leading-relaxed">{plan.description}</p>
                  </div>

                  {/* Features List */}
                  <div className="mb-8">
                    <ul className="space-y-4">
                      {plan.features.map((feature, featureIndex) => (
                        <li 
                          key={featureIndex} 
                          className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300"
                          style={{ transitionDelay: `${featureIndex * 0.05}s` }}
                        >
                          <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-br from-ms-green to-ms-blue rounded-full flex items-center justify-center mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-slate-700 leading-relaxed">{feature}</span>
                        </li>
                      ))}
          </ul>
        </div>

                  {/* CTA Button */}
                  <div className="mt-auto">
                    <a 
                      href={plan.name === "Enterprise" ? "/contact" : "/contact"} 
                      className={`btn w-full btn-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ${
                        plan.popular ? 'btn-primary' : 'btn-outline'
                      }`}
                    >
                      {plan.cta}
                    </a>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-ms-blue/5 to-ms-green/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Frequently Asked Questions</span>
            </h2>
            <p className="text-xl text-slate-600 content-narrow">
              Got questions? We&apos;ve got answers. Here are the most common questions about our pricing.
            </p>
          </div>

          <div className="max-w-[64rem] mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="card card-elevated p-8 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">
                    {faq.question}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join thousands of patients and healthcare providers who trust TeraSync 
              to manage their healthcare needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="btn bg-white text-ms-blue hover:bg-slate-50 btn-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Start Free Trial
              </a>
          <a
            href="/contact"
                className="btn border-2 border-white text-white hover:bg-white hover:text-ms-blue btn-lg transform hover:-translate-y-1 transition-all duration-300"
          >
                Contact Sales
          </a>
        </div>
      </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

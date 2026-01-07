// import { pricing } from '@/data/landing';

const pricing = {
  title: 'Simple, transparent pricing',
  plans: [
    {
      name: 'Patients',
      price: 'Free',
      description: 'Order delivery, get reminders, and chat with AI.',
      features: [
        'Pharmacy search & delivery',
        'Medication reminders',
        'AI Health Assistant (fair‑use)',
        'Offline alerts'
      ],
      cta: { href: process.env.NEXT_PUBLIC_APP_STORE_URL || '/pricing', label: 'Get the app' }
    },
    {
      name: 'Pharmacies',
      price: '₦9,999',
      period: '/month',
      description: 'Accept in‑app orders and deliveries with simple tools.',
      features: [
        'Order & delivery dashboard',
        'Inventory & availability',
        'Customer chat (optional)',
        'Basic analytics'
      ],
      cta: { href: '/contact', label: 'Partner with TeraSync' }
    }
  ]
};

export default function Pricing() {
  return (
    <section className="section-padding bg-white relative overflow-hidden" id="pricing">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-br from-ms-green/5 to-ms-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-gradient-to-tr from-ms-blue/5 to-ms-yellow/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-nunito font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
            <span className="text-gradient">{pricing.title}</span>
          </h2>
          <p className="font-nunito font-regular text-lg md:text-xl text-slate-600 max-w-[48rem] mx-auto leading-relaxed">
            Choose the perfect plan for your healthcare needs. Start free, upgrade anytime.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 max-w-[72rem] mx-auto">
          {pricing.plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative group animate-fade-in-up ${
                index === 0 ? 'lg:scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Popular Badge */}
              {index === 0 && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="font-nunito font-semibold text-sm bg-gradient-to-r from-ms-green to-ms-blue text-white px-6 py-2 rounded-full shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              <div className={`card card-elevated p-8 h-full group-hover:scale-105 transition-all duration-300 ${
                index === 0 ? 'border-2 border-ms-blue/20' : ''
              }`}>
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="font-nunito font-bold text-2xl text-slate-900 mb-4 group-hover:text-ms-blue transition-colors duration-300">
                    {plan.name}
                  </h3>
                  
                  <div className="mb-4">
                    <span className="font-nunito font-bold text-5xl text-slate-900">{plan.price}</span>
                    {plan.period && (
                      <span className="font-nunito font-regular text-lg text-slate-600 ml-2">{plan.period}</span>
                    )}
                  </div>
                  
                  <p className="font-nunito font-regular text-base text-slate-600 leading-relaxed">{plan.description}</p>
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
                        <span className="font-nunito font-regular text-base text-slate-700 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="mt-auto">
                  <a 
                    href={plan.cta.href} 
                    className={`btn w-full btn-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ${
                      index === 0 ? 'btn-primary' : 'btn-outline'
                    }`}
                  >
                    {plan.cta.label}
                  </a>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-ms-blue/5 to-ms-green/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="bg-slate-50 rounded-2xl p-8 max-w-[64rem] mx-auto">
            <h3 className="font-nunito font-bold text-3xl md:text-4xl text-slate-900 mb-6">
              Need a custom solution?
            </h3>
            <p className="font-nunito font-regular text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-[48rem] mx-auto">
              We offer enterprise plans with custom features, dedicated support, and volume discounts for large healthcare organizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="btn btn-primary btn-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Contact Sales
              </a>
              <a 
                href="/features" 
                className="btn btn-outline btn-lg hover:bg-slate-50 transform hover:-translate-y-1 transition-all duration-300"
              >
                View All Features
              </a>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <p className="font-nunito font-regular text-lg md:text-xl text-slate-600 mb-8">Trusted by healthcare providers across Nigeria</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="font-nunito font-bold text-3xl text-slate-400">500+</div>
            <div className="w-px h-8 bg-slate-300"></div>
            <div className="font-nunito font-bold text-3xl text-slate-400">Partner Clinics</div>
            <div className="w-px h-8 bg-slate-300"></div>
            <div className="font-nunito font-bold text-3xl text-slate-400">10K+</div>
            <div className="w-px h-8 bg-slate-300"></div>
            <div className="font-nunito font-bold text-3xl text-slate-400">Active Users</div>
          </div>
        </div>
      </div>
    </section>
  );
}

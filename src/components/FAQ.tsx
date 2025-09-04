import { faq } from '@/data/landing';

export default function FAQ() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-ms-blue/5 to-ms-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tr from-ms-green/5 to-ms-yellow/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-nunito font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
            <span className="text-gradient">Frequently Asked Questions</span>
          </h2>
          <p className="font-nunito font-regular text-lg md:text-xl text-slate-600 max-w-[48rem] mx-auto leading-relaxed">
            Find answers to common questions about MedSync, our features, pricing, and how we can help you manage your health better.
          </p>
        </div>

        <div className="max-w-[64rem] mx-auto">
          <div className="grid gap-6">
            {faq.map((f, i) => (
              <div 
                key={i} 
                className="card card-elevated p-8 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <details className="group">
                  <summary className="font-nunito font-semibold text-xl text-slate-900 cursor-pointer hover:text-ms-blue transition-colors duration-300 list-none">
                    <div className="flex items-center justify-between">
                      <span>{f.q}</span>
                      <svg 
                        className="w-6 h-6 text-ms-blue transform transition-transform duration-300 group-open:rotate-180" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </summary>
                  <div className="mt-6 pt-6 border-t border-slate-200">
                    <p className="font-nunito font-regular text-base text-slate-600 leading-relaxed">{f.a}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <h3 className="font-nunito font-bold text-3xl md:text-4xl text-slate-900 mb-6">
            Still Have Questions?
          </h3>
          <p className="font-nunito font-regular text-lg md:text-xl text-slate-600 mb-8 max-w-[48rem] mx-auto leading-relaxed">
            Our support team is here to help you get the most out of MedSync. 
            Reach out and we&apos;ll get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="btn btn-primary btn-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Contact Support
            </a>
            <a 
              href="/features" 
              className="btn btn-outline btn-lg hover:bg-slate-50 transform hover:-translate-y-1 transition-all duration-300"
            >
              Explore Features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

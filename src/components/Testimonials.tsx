import { testimonials } from '@/data/landing';

export default function Testimonials() {
  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-ms-blue/5 to-ms-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-tr from-ms-green/5 to-ms-yellow/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gradient">What Our Users Say</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-[48rem] mx-auto leading-relaxed">
            Join thousands of patients and healthcare providers who trust MedSync
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 max-w-[72rem] mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="card card-elevated p-6 h-full group-hover:scale-105 transition-all duration-300">
                {/* Quote Icon */}
                <div className="mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-ms-blue to-ms-green rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-base text-slate-800 leading-relaxed mb-6 relative">
                  {/* <span className="text-6xl text-ms-blue/20 absolute -top-4 -left-2 font-serif">"</span> */}
                  <span className="relative z-10">{testimonial.quote}</span>
                  {/* <span className="text-6xl text-ms-blue/20 absolute -bottom-8 -right-2 font-serif">"</span> */}
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 bg-gradient-to-br from-ms-blue to-ms-green rounded-full flex items-center justify-center text-white font-semibold text-lg">
                    {testimonial.author.split(' ').map(name => name[0]).join('').toUpperCase()}
                  </div>
                  
                  {/* Author Info */}
                  <div>
                    <div className="font-semibold text-slate-900 group-hover:text-ms-blue transition-colors duration-300">
                      {testimonial.author}
                    </div>
                    <div className="text-slate-600 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="mt-4 flex items-center gap-1">
                  {[...Array(5)].map((_, starIndex) => (
                    <svg 
                      key={starIndex}
                      className="w-5 h-5 text-ms-yellow fill-current" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-ms-blue/5 to-ms-green/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-[64rem] mx-auto border border-slate-200/50">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Trusted by Healthcare Providers Nationwide
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-ms-blue mb-2">4.9/5</div>
                <div className="text-sm text-slate-600">User Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-ms-green mb-2">10K+</div>
                <div className="text-sm text-slate-600">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-ms-yellow mb-2">500+</div>
                <div className="text-sm text-slate-600">Partner Clinics</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-ms-blue mb-2">99%</div>
                <div className="text-sm text-slate-600">Uptime</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Ready to join our community?
          </h3>
          <p className="text-xl text-slate-600 mb-8 max-w-[48rem] mx-auto leading-relaxed">
            Start your healthcare journey with MedSync today and experience the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="btn btn-primary btn-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Get Started Free
            </a>
            <a 
              href="/pricing" 
              className="btn btn-outline btn-lg hover:bg-slate-50 transform hover:-translate-y-1 transition-all duration-300"
            >
              View Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

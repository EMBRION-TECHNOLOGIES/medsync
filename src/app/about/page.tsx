import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'About Us',
  description: 'Learn about MedSync\'s mission to make healthcare simple and accessible for everyone. Meet our team and discover our values.'
};

export default function About() {
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
              <span className="text-gradient block">Our Mission</span>
              <span className="text-slate-900 block text-3xl md:text-4xl lg:text-5xl font-semibold mt-4">
                Making Healthcare Simple and Accessible
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed content-narrow">
              We&apos;re building the future of healthcare management, one patient at a time. 
              Our mission is to bridge the gap between patients and providers through 
              innovative digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                <span className="text-gradient">Our Story</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  MedSync was born from a simple observation: healthcare management was 
                  unnecessarily complex. Patients struggled to remember medications, 
                  appointments were missed, and providers had limited visibility into 
                  patient adherence.
                </p>
                <p>
                  Founded by a team of doctors, engineers, and health advocates, we set 
                  out to create a platform that would make healthcare management as 
                  intuitive as using your favorite app.
                </p>
                <p>
                  Today, we&apos;re proud to serve thousands of patients and hundreds of 
                  healthcare providers across Nigeria, with plans to expand globally 
                  and make quality healthcare accessible to everyone.
                </p>
              </div>
            </div>
            
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                <div className="bg-gradient-to-br from-ms-blue/10 to-ms-green/10 rounded-3xl p-8 relative overflow-hidden">
                  <div className="grid grid-cols-2 gap-8 relative z-10">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-ms-blue mb-2">10K+</div>
                      <div className="text-slate-600">Active Users</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-ms-green mb-2">500+</div>
                      <div className="text-slate-600">Partner Clinics</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-ms-yellow mb-2">99%</div>
                      <div className="text-slate-600">Uptime</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-ms-blue mb-2">4.9/5</div>
                      <div className="text-slate-600">User Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Our Values</span>
            </h2>
            <p className="text-xl text-slate-600 content-narrow">
              These core principles guide everything we do and every decision we make.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🤝",
                title: "Patient-Centered",
                description: "Every feature we build starts with the patient's needs. We believe healthcare should be designed around the people it serves."
              },
              {
                icon: "🔒",
                title: "Privacy First",
                description: "Your health data is sacred. We use end-to-end encryption and follow global privacy standards to protect your information."
              },
              {
                icon: "🌍",
                title: "Accessibility",
                description: "Healthcare should be accessible to everyone, regardless of location, income, or technical expertise."
              },
              {
                icon: "⚡",
                title: "Innovation",
                description: "We continuously innovate to solve real healthcare problems using cutting-edge technology and design."
              },
              {
                icon: "🤝",
                title: "Collaboration",
                description: "We work closely with healthcare providers to ensure our solutions meet real-world needs and improve outcomes."
              },
              {
                icon: "📈",
                title: "Impact",
                description: "We measure our success by the positive impact we have on patient health and healthcare provider efficiency."
              }
            ].map((value, index) => (
              <div 
                key={index} 
                className="card card-elevated p-8 text-center group hover:scale-105 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4 group-hover:text-ms-blue transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Meet Our Team</span>
            </h2>
            <p className="text-xl text-slate-600 content-narrow">
              A diverse group of healthcare professionals, engineers, and innovators 
              working together to transform healthcare.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Johnson",
                role: "Chief Medical Officer",
                bio: "Board-certified physician with 15+ years of experience in patient care and healthcare technology.",
                avatar: "SJ"
              },
              {
                name: "Michael Chen",
                role: "Chief Technology Officer",
                bio: "Former Google engineer with expertise in healthcare systems and mobile application development.",
                avatar: "MC"
              },
              {
                name: "Dr. Aisha Okafor",
                role: "Head of Product",
                bio: "Healthcare innovation specialist focused on user experience and clinical workflow optimization.",
                avatar: "AO"
              },
              {
                name: "David Rodriguez",
                role: "Head of Engineering",
                bio: "Full-stack developer with a passion for building scalable healthcare solutions.",
                avatar: "DR"
              },
              {
                name: "Dr. James Kim",
                role: "Clinical Advisor",
                bio: "Internal medicine specialist and healthcare policy expert with international experience.",
                avatar: "JK"
              },
              {
                name: "Lisa Thompson",
                role: "Head of Design",
                bio: "UX/UI designer with a focus on making complex healthcare systems simple and intuitive.",
                avatar: "LT"
              }
            ].map((member, index) => (
              <div 
                key={index} 
                className="card card-elevated p-8 text-center group hover:scale-105 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-ms-blue to-ms-green rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-ms-blue transition-colors duration-300">
                  {member.name}
                </h3>
                <div className="text-ms-blue font-medium mb-4">{member.role}</div>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-ms-blue to-ms-green">
        <div className="container text-center">
          <div className="max-w-[64rem] mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Healthcare Experience?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join thousands of patients and healthcare providers who trust MedSync 
              to manage their healthcare needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://forms.gle/FQKHuiVtxFJNU8Cp6" 
                className="btn bg-white text-ms-blue hover:bg-slate-50 btn-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Join Waitlist
              </a>
              <a 
                href="/contact" 
                className="btn border-2 border-white text-white hover:bg-white hover:text-ms-blue btn-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

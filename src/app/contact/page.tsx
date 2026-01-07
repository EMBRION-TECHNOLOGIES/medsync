'use client';

import { useState } from 'react';
import { Mail, Phone, Building2, Clock, HelpCircle, MessageCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const Schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  type: z.enum(['patient', 'provider', 'general', 'support'])
});

type FormData = z.infer<typeof Schema>;

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(Schema)
  });

  const onSubmit = async (data: FormData) => {
    try {
      setSubmitError('');
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        reset();
      } else {
        setSubmitError('Something went wrong. Please try again.');
      }
    } catch {
      setSubmitError('Something went wrong. Please try again.');
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-7 h-7 text-ms-blue" />,
      title: "Email Support",
      description: "Get help via email",
      value: "hello@terasync.ng",
      action: "mailto:hello@terasync.ng"
    },
    {
      icon: <MessageCircle className="w-7 h-7 text-ms-green" />,
      title: "WhatsApp",
      description: "Chat with our team",
      value: "+234-901-366-1942, +234-805-156-6743",
      action: "https://wa.me/2349013661942, https://wa.me/2348051566743"
    },
    {
      icon: <Building2 className="w-7 h-7 text-ms-yellow" />,
      title: "Office",
      description: "Visit our office",
      value: "19 EE IKWUE STREET, ASOKORO, ABUJA.",
      action: "#"
    },
    {
      icon: <Clock className="w-7 h-7 text-ms-blue" />,
      title: "Business Hours",
      description: "When we&apos;re available",
      value: "Monday - Friday: 8:00 AM - 8:00 PM WAT\nSaturday - Sunday: 9:00 AM - 5:00 PM WAT",
      action: "#"
    }
  ];

  if (isSubmitted) {
    return (
      <>
        <NavBar />
        <section className="section-padding bg-gradient-to-br from-slate-50 via-white to-blue-50">
          <div className="container">
            <div className="max-w-[42rem] mx-auto text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-ms-green to-ms-blue rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient">Message Sent!</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Thank you for reaching out! We&apos;ve received your message and will get back to you within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="btn btn-primary btn-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Send Another Message
                </button>
                <Link 
                  href="/" 
                  className="btn btn-outline btn-lg hover:bg-slate-50 transform hover:-translate-y-1 transition-all duration-300"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }

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
              <span className="text-gradient block">Get in Touch</span>
              <span className="text-slate-900 block text-3xl md:text-4xl lg:text-5xl font-semibold mt-4">
                We&apos;re Here to Help
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed content-narrow">
              Have questions about TeraSync? Need support? Want to partner with us? 
              We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-fade-in-up">
              <div className="card card-elevated p-8 relative overflow-hidden">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Send us a Message</h2>
                
                {submitError && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600">{submitError}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name Field */}
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      className={`form-input ${errors.name ? 'border-red-500' : ''}`}
                      placeholder="Enter your full name"
                      {...register('name')}
                    />
                    {errors.name && (
                      <p className="form-error">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      className={`form-input ${errors.email ? 'border-red-500' : ''}`}
                      placeholder="Enter your email address"
                      {...register('email')}
                    />
                    {errors.email && (
                      <p className="form-error">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Subject Field */}
                  <div className="form-group">
                    <label className="form-label">Subject *</label>
                    <input
                      className={`form-input ${errors.subject ? 'border-red-500' : ''}`}
                      placeholder="What's this about?"
                      {...register('subject')}
                    />
                    {errors.subject && (
                      <p className="form-error">{errors.subject.message}</p>
                    )}
                  </div>

                  {/* Type Field */}
                  <div className="form-group">
                    <label className="form-label">I am a... *</label>
                    <select
                      className={`form-input ${errors.type ? 'border-red-500' : ''}`}
                      {...register('type')}
                    >
                      <option value="">Select your role</option>
                      <option value="patient">Patient</option>
                      <option value="provider">Healthcare Provider</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                    </select>
                    {errors.type && (
                      <p className="form-error">{errors.type.message}</p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div className="form-group">
                    <label className="form-label">Message *</label>
                    <textarea
                      className={`form-input form-textarea ${errors.message ? 'border-red-500' : ''}`}
                      placeholder="Tell us how we can help you..."
                      rows={6}
                      {...register('message')}
                    />
                    {errors.message && (
                      <p className="form-error">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary btn-lg w-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Message...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Other Ways to Reach Us</h2>
              
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className="card p-6 group hover:scale-105 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-ms-blue transition-colors duration-300">
                          {info.title}
                        </h3>
                        <p className="text-slate-600 mb-2">{info.description}</p>
                        <a 
                          href={info.action}
                          className="text-ms-blue font-medium hover:text-ms-blue-dark transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* FAQ Link */}
              <div className="card card-elevated p-8 text-center">
                <div className="mb-4 flex justify-center">
                  <HelpCircle className="w-10 h-10 text-ms-blue" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Have a Quick Question?
                </h3>
                <p className="text-slate-600 mb-6">
                  Check out our FAQ section for instant answers to common questions.
                </p>
                <a 
                  href="/faq" 
                  className="btn btn-outline btn-lg hover:bg-slate-50 transform hover:-translate-y-1 transition-all duration-300"
                >
                  View FAQ
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-ms-blue to-ms-green">
        <div className="container text-center">
          <div className="max-w-[56rem] mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join thousands of patients and healthcare providers who trust TeraSync 
              to manage their healthcare needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/" 
                className="btn bg-white text-ms-blue hover:bg-slate-50 btn-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Get Started Free
              </Link>
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

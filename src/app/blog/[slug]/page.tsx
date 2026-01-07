import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Typography from '@/components/ui/Typography';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

type Params = {
  params: {
    slug: string;
  };
};

const articles: Record<string, {
  title: string;
  body: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
}> = {
  'never-miss-a-dose': {
    title: '5 Ways to Never Miss a Dose Again',
    excerpt: 'Simple strategies to improve medication adherence and stay on track with your health routine.',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Health Tips',
    body: `# 5 Ways to Never Miss a Dose Again

Medication adherence is crucial for maintaining your health, but it's not always easy to remember every dose. Here are five proven strategies to help you stay on track:

## 1. Use Smart Digital Reminders

Set up multiple reminder systems:
- **Phone alarms** with custom messages
- **Medication reminder apps** like TeraSync
- **Smart watch notifications**
- **Voice assistant reminders**

The key is redundancy - if one reminder fails, you have backups.

## 2. Keep Medications Visible

Out of sight often means out of mind:
- Place medications where you'll see them daily
- Use a weekly pill organizer
- Keep a small supply in your purse or car
- Set up a dedicated medication station

## 3. Pair with Daily Routines

Link medication times to existing habits:
- Take morning pills with your first cup of coffee
- Evening medications with brushing your teeth
- Lunch pills with your midday meal
- This creates automatic associations that are hard to forget

## 4. Enlist Family Support

Don't go it alone:
- Ask family members to remind you
- Share your medication schedule with trusted friends
- Use family group chats for gentle reminders
- Consider a medication buddy system

## 5. Track and Celebrate Progress

Make adherence rewarding:
- Use a medication tracking app
- Mark successful days on a calendar
- Reward yourself for weekly/monthly streaks
- Share progress with your healthcare provider

## Conclusion

Consistency requires systems and support. By combining digital tools, visual cues, routine pairing, social support, and progress tracking, you can significantly improve your medication adherence and overall health outcomes.

Remember: It's okay to miss a dose occasionally. The goal is progress, not perfection. If you do miss a dose, check with your pharmacist or doctor about what to do next.`
  },
  'digital-health-africa': {
    title: 'The Future of Digital Health in Africa',
    excerpt: 'How mobile technology is transforming healthcare delivery across the continent.',
    date: '2024-01-10',
    readTime: '7 min read',
    category: 'Technology',
    body: `# The Future of Digital Health in Africa

Africa is experiencing a digital health revolution, with mobile technology leading the charge in transforming healthcare delivery across the continent.

## 1. Mobile Penetration Driving Innovation

With over 1.2 billion mobile subscribers across Africa, mobile health (mHealth) solutions are becoming increasingly accessible:

- **SMS-based health reminders** for medication adherence
- **Mobile appointment booking** systems
- **Telemedicine consultations** via smartphone apps
- **Health data collection** through mobile surveys

## 2. Telemedicine Breaking Barriers

Distance and infrastructure challenges are being overcome through:

- **Video consultations** connecting rural patients with urban specialists
- **AI-powered symptom checkers** for initial triage
- **Remote monitoring** of chronic conditions
- **Digital prescriptions** sent directly to pharmacies

## 3. AI and Digital Assistants

Artificial intelligence is enhancing healthcare delivery:

- **Chatbots** providing 24/7 health information
- **Predictive analytics** for disease outbreak prevention
- **Image recognition** for diagnostic support
- **Personalized treatment recommendations**

## 4. Electronic Health Records (EHRs) & Analytics

Digital record-keeping is improving care coordination:

- **Centralized patient data** accessible across facilities
- **Population health analytics** for public health planning
- **Treatment outcome tracking** and optimization
- **Resource allocation** based on data insights

## 5. Low-Data Solutions for Rural Areas

Innovative approaches for limited connectivity:

- **Offline-capable apps** that sync when connected
- **USSD-based services** for basic health information
- **Compressed data formats** for efficient transmission
- **Community health worker** digital tools

## Challenges and Opportunities

While progress is significant, challenges remain:

- **Digital literacy** gaps in some populations
- **Infrastructure** limitations in remote areas
- **Data privacy** and security concerns
- **Regulatory** frameworks still evolving

## The Road Ahead

The future of digital health in Africa looks promising, with continued innovation in:

- **5G networks** enabling advanced telemedicine
- **IoT devices** for continuous health monitoring
- **Blockchain** for secure health data management
- **Machine learning** for personalized medicine

## Conclusion

Digital health solutions are not just improving access to healthcare in Africa—they're redefining what's possible. As technology continues to evolve and infrastructure improves, we can expect even more innovative solutions that put quality healthcare within reach of every African.

The key to success lies in designing solutions that work with existing infrastructure, respect local contexts, and prioritize user experience for both patients and healthcare providers.`
  },
  'clinics-improve-adherence': {
    title: 'How Clinics Can Improve Patient Adherence with TeraSync',
    excerpt: 'Practical strategies for healthcare providers to help patients stay compliant with their medications.',
    date: '2024-01-05',
    readTime: '6 min read',
    category: 'Healthcare',
    body: `# How Clinics Can Improve Patient Adherence with TeraSync

Patient medication adherence is one of the biggest challenges in healthcare today. Studies show that up to 50% of patients don't take their medications as prescribed, leading to poor health outcomes and increased healthcare costs.

## The Adherence Challenge

Poor medication adherence results in:
- **125,000 deaths annually** in the US alone
- **$100+ billion** in avoidable healthcare costs
- **Worsening chronic conditions** and complications
- **Increased hospital readmissions**

## How TeraSync Helps Clinics

### 1. Automated Reminders

TeraSync's smart reminder system:
- Sends personalized notifications based on patient preferences
- Adapts to patient schedules and time zones
- Provides multiple reminder channels (SMS, push notifications, calls)
- Tracks reminder effectiveness and adjusts accordingly

### 2. Appointment Management

Streamlined scheduling features:
- **Online booking** reduces no-shows by up to 30%
- **Automated reminders** for upcoming appointments
- **Rescheduling options** that work with patient schedules
- **Integration** with clinic calendar systems

### 3. Clinic Portal Dashboard

Comprehensive patient monitoring:
- **Real-time adherence tracking** for all patients
- **Alert system** for patients at risk of non-adherence
- **Progress reports** for healthcare providers
- **Communication tools** for patient outreach

### 4. Data-Driven Insights

Analytics that improve care:
- **Adherence patterns** identification
- **Risk stratification** for intervention prioritization
- **Outcome tracking** and correlation analysis
- **Population health** insights for clinic management

### 5. Steward AI Assistant

Intelligent patient support:
- **24/7 patient support** for medication questions
- **Symptom monitoring** and early intervention alerts
- **Personalized health coaching** based on patient data
- **Triage capabilities** to identify urgent cases

## Implementation Strategy

### Phase 1: Pilot Program
- Start with 50-100 high-risk patients
- Train clinic staff on platform features
- Establish baseline adherence metrics
- Gather patient feedback and iterate

### Phase 2: Gradual Rollout
- Expand to all chronic disease patients
- Integrate with existing EHR systems
- Develop clinic-specific protocols
- Monitor outcomes and optimize

### Phase 3: Full Integration
- Deploy across entire patient population
- Advanced analytics and reporting
- Custom integrations and workflows
- Continuous improvement based on data

## Success Metrics

Track these key performance indicators:
- **Adherence rates** (target: 80%+)
- **Appointment attendance** (target: 90%+)
- **Patient satisfaction** scores
- **Healthcare utilization** reduction
- **Clinical outcomes** improvement

## Best Practices

### For Healthcare Providers:
1. **Set clear expectations** with patients about medication importance
2. **Simplify regimens** whenever possible
3. **Use TeraSync data** to identify and address barriers
4. **Provide ongoing support** and encouragement
5. **Celebrate patient successes** and progress

### For Clinic Staff:
1. **Regular training** on platform features
2. **Proactive monitoring** of patient dashboards
3. **Timely intervention** for at-risk patients
4. **Data-driven decision making** for care plans
5. **Continuous improvement** based on outcomes

## ROI and Benefits

Clinics using TeraSync typically see:
- **25-40% improvement** in medication adherence
- **30% reduction** in no-show rates
- **20% decrease** in hospital readmissions
- **Improved patient satisfaction** scores
- **Better clinical outcomes** and quality metrics

## Getting Started

1. **Schedule a demo** to see TeraSync in action
2. **Identify pilot patients** for initial rollout
3. **Train your team** on platform features
4. **Launch with support** from our implementation team
5. **Monitor and optimize** based on real-world usage

## Conclusion

TeraSync isn't just a medication reminder app—it's a comprehensive platform that empowers clinics to improve patient outcomes through better adherence, streamlined communication, and data-driven insights.

By leveraging technology to support patients between visits, clinics can deliver more effective care, improve patient satisfaction, and achieve better clinical outcomes while reducing overall healthcare costs.

The future of healthcare is proactive, personalized, and patient-centered. TeraSync helps clinics get there today.`
  }
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const article = articles[params.slug];
  
  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
    },
  };
}

export default function BlogPost({ params }: Params) {
  const article = articles[params.slug];

  if (!article) {
    notFound();
  }

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
          <div className="max-w-[56rem] mx-auto">
            {/* Back to Blog */}
            <Link 
              href="/blog" 
              className="inline-flex items-center text-ms-blue hover:text-ms-blue/80 transition-colors mb-8 text-lg animate-fade-in-up"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Blog
            </Link>

            {/* Article Header */}
            <header className="text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="mb-6">
                <span className="inline-block px-4 py-2 text-sm font-semibold bg-ms-blue/10 text-ms-blue rounded-full">
                  {article.category}
                </span>
              </div>
              
              <Typography variant="h1" className="mb-8 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gradient block">{article.title}</span>
              </Typography>
              
              <div className="flex items-center justify-center gap-8 text-base text-gray-600 mb-8">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5" />
                  <time dateTime={article.date}>
                    {new Date(article.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5" />
                  <span className="font-medium">{article.readTime}</span>
                </div>
              </div>
            </header>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-[56rem] mx-auto">
            <article className="prose prose-xl max-w-none content-wide animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-gray-800 leading-relaxed text-lg space-y-6">
                {article.body.split('\n').map((line, index) => {
                  const trimmedLine = line.trim();
                  
                  if (!trimmedLine) return null;
                  
                  // Handle headers
                  if (trimmedLine.startsWith('#')) {
                    const level = trimmedLine.match(/^#+/)?.[0].length || 1;
                    const text = trimmedLine.replace(/^#+\s*/, '');
                    const headingLevel = Math.min(level, 6);
                    
                    const headingProps = {
                      key: index,
                      className: `font-nunito font-bold text-slate-900 mb-4 ${
                        level === 1 ? 'text-3xl' : 
                        level === 2 ? 'text-2xl' : 
                        level === 3 ? 'text-xl' : 'text-lg'
                      }`
                    };
                    
                    switch (headingLevel) {
                      case 1:
                        return React.createElement('h1', headingProps, text);
                      case 2:
                        return React.createElement('h2', headingProps, text);
                      case 3:
                        return React.createElement('h3', headingProps, text);
                      case 4:
                        return React.createElement('h4', headingProps, text);
                      case 5:
                        return React.createElement('h5', headingProps, text);
                      case 6:
                        return React.createElement('h6', headingProps, text);
                      default:
                        return React.createElement('h1', headingProps, text);
                    }
                  }
                  
                  // Handle bullet points
                  if (trimmedLine.startsWith('- ')) {
                    const text = trimmedLine.replace(/^- /, '');
                    const parts = text.split(/(\*\*.*?\*\*)/g);
                    return (
                      <div key={index} className="flex items-start gap-3 ml-4">
                        <div className="w-2 h-2 bg-ms-blue rounded-full mt-3 flex-shrink-0"></div>
                        <span className="text-gray-800">
                          {parts.map((part, partIndex) => {
                            if (part.startsWith('**') && part.endsWith('**')) {
                              return (
                                <strong key={partIndex} className="font-nunito font-semibold text-slate-900">
                                  {part.slice(2, -2)}
                                </strong>
                              );
                            }
                            return part;
                          })}
                        </span>
                      </div>
                    );
                  }
                  
                  // Handle numbered lists
                  if (/^\d+\. /.test(trimmedLine)) {
                    const text = trimmedLine.replace(/^\d+\. /, '');
                    const parts = text.split(/(\*\*.*?\*\*)/g);
                    return (
                      <div key={index} className="flex items-start gap-3 ml-4">
                        <div className="w-6 h-6 bg-ms-green rounded-full flex items-center justify-center text-white text-sm font-semibold mt-1 flex-shrink-0">
                          {trimmedLine.match(/^\d+/)?.[0]}
                        </div>
                        <span className="text-gray-800">
                          {parts.map((part, partIndex) => {
                            if (part.startsWith('**') && part.endsWith('**')) {
                              return (
                                <strong key={partIndex} className="font-nunito font-semibold text-slate-900">
                                  {part.slice(2, -2)}
                                </strong>
                              );
                            }
                            return part;
                          })}
                        </span>
                      </div>
                    );
                  }
                  
                  // Handle bold text
                  if (trimmedLine.includes('**')) {
                    const parts = trimmedLine.split(/(\*\*.*?\*\*)/g);
                    return (
                      <p key={index} className="text-gray-800 leading-relaxed">
                        {parts.map((part, partIndex) => {
                          if (part.startsWith('**') && part.endsWith('**')) {
                            return (
                              <strong key={partIndex} className="font-nunito font-semibold text-slate-900">
                                {part.slice(2, -2)}
                              </strong>
                            );
                          }
                          return part;
                        })}
                      </p>
                    );
                  }
                  
                  // Regular paragraph
                  return (
                    <p key={index} className="text-gray-800 leading-relaxed">
                      {trimmedLine}
                    </p>
                  );
                })}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-ms-blue to-ms-green">
        <div className="container text-center">
          <div className="max-w-[64rem] mx-auto">
            <Typography variant="h2" className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Healthcare?
            </Typography>
            <Typography variant="bodyLarge" className="text-xl text-white/90 mb-8 leading-relaxed content-narrow">
              Join thousands of patients and healthcare providers who trust TeraSync 
              to manage their healthcare needs.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="btn bg-white text-ms-blue hover:bg-slate-50 btn-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Get Started Free
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

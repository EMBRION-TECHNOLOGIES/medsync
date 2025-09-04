export const navbar = {
  logo: 'MedSync',
  links: [
    { href: '/about', label: 'About' },
    { href: '/features', label: 'Features' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/blog', label: 'Blog' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' }
  ],
  cta: {
    href: '/contact',
    label: 'Get Started'
  }
};

export const hero = {
  eyebrow: 'New: Clinic & patient apps',
  title: 'Finally, your health—synced.',
  subtitle: 'Medsync brings appointments, medications, and lab updates into one simple, secure app for patients and clinics. Fewer missed doses. Fewer missed visits. Better outcomes.',
  primaryCta: { href: '/contact', label: 'Get early access', action: 'join_waitlist' },
  secondaryCta: { href: '#how-it-works', label: 'See how it works', action: 'scroll_to_how_it_works' },
  trustBadges: [
    'End-to-end encryption',
    'Low-data, offline-friendly'
  ],
  appMockup: {
    id: 'medsync-today-card',
    type: 'app-mockup',
    layout: {
      header: {
        brand: 'Medsync',
        label: 'Today',
        reminder: {
          time: '8:00 PM',
          instruction: 'Take 1 tablet of Amlodipine 5 mg'
        }
      },
      features: [
        {
          title: 'Reminders',
          description: 'Smart, streak-based reminders that adapt to your routine.'
        },
        {
          title: 'Appointments',
          description: 'Auto-sync clinic visits and get ride-time alerts.'
        },
        {
          title: 'Secure chat',
          description: 'Ask quick questions without a clinic call queue.'
        },
        {
          title: 'Clinic portal',
          description: 'Simple dashboard to update meds and follow-ups.'
        }
      ]
    }
  }
};

export const features = {
  title: 'Everything you need to keep care on track',
  subtitle: 'Designed for patients, loved ones, and healthcare teams to stay aligned—without extra work.',
  items: [
    {
      title: 'Smart medication reminders',
      description: 'Adaptive timing, refill countdowns, skip/snooze with reason capture.'
    },
    {
      title: 'Auto-synced appointments',
      description: 'One-tap calendar sync and transport time nudges.'
    },
    {
      title: 'Clinic portal',
      description: 'Lightweight portal for providers to update plans and monitor adherence.'
    },
    {
      title: 'Refill & pickup',
      description: 'Connect to pharmacies for refills and delivery.'
    },
    {
      title: 'Privacy first',
      description: 'End-to-end encryption and role-based access controls.'
    },
    {
      title: 'Low-data mode',
      description: 'Works offline and syncs when online; great for low-connectivity areas.'
    }
  ]
};

export const howItWorks = {
  title: 'How Medsync works',
  steps: [
    {
      number: 1,
      title: 'Join the waitlist',
      description: 'Sign up with your email or clinic code to reserve your spot.'
    },
    {
      number: 2,
      title: 'Connect your clinic',
      description: 'Your care team invites you and your plan is imported securely.'
    },
    {
      number: 3,
      title: 'Stay on track',
      description: 'Get reminders, updates, and gentle nudges that fit your life.'
    }
  ]
};

export const pricing = {
  title: 'Simple, Transparent Pricing',
  plans: [
    {
      name: 'Patients',
      price: 'Free',
      description: 'Always free for patients',
      features: [
        'Medication reminders',
        'Appointment scheduling',
        'Offline alerts',
        'Basic health insights'
      ],
      cta: { href: process.env.NEXT_PUBLIC_APP_STORE_URL || '/contact', label: 'Download App' }
    },
    {
      name: 'Clinics',
      price: '₦4,999',
      period: '/month',
      description: 'Perfect for small clinics',
      features: [
        'Patient management dashboard',
        'Medication adherence tracking',
        'Appointment scheduling',
        'Basic analytics'
      ],
      cta: { href: '/contact', label: 'Start Free Trial' }
    }
  ]
};

export const testimonials = [
  {
    quote: 'MedSync has been a game-changer for my medication routine. I never miss a dose anymore!',
    author: 'Sarah Johnson',
    role: 'Patient'
  },
  {
    quote: 'The clinic portal has streamlined our workflow significantly. Highly recommended!',
    author: 'Dr. Michael Chen',
    role: 'Family Physician'
  },
  {
    quote: 'Finally, a healthcare app that actually works offline. Perfect for rural areas.',
    author: 'Aisha Oke',
    role: 'Patient'
  }
];

export const faq = [
  {
    q: 'Is MedSync free for patients?',
    a: 'Yes, patients always get free access to reminders and appointments.'
  },
  {
    q: 'What do clinics get with paid plans?',
    a: 'Dashboards, analytics, refill management, custom integrations.'
  },
  {
    q: 'Does the app need internet all the time?',
    a: 'No. Reminders work offline; data syncs when you reconnect.'
  },
  {
    q: 'How secure is my data?',
    a: 'Bank-level encryption and international standards.'
  }
];

export const footer = {
  links: [
    { href: '/about', label: 'About' },
    { href: '/features', label: 'Features' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' }
  ],
  socials: [
    { href: '#', label: 'Twitter' },
    { href: '#', label: 'LinkedIn' },
    { href: '#', label: 'Facebook' }
  ],
  copyright: `© ${new Date().getFullYear()} MedSync. All rights reserved.`
};

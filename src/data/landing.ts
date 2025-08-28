export const navbar = {
  logo: 'MedSync',
  links: [
    { href: '/about', label: 'About' },
    { href: '/features', label: 'Features' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' }
  ],
  cta: {
    href: '/contact',
    label: 'Get Started'
  }
};

export const hero = {
  trust: 'Trusted by 10,000+ patients and 500+ clinics',
  title: 'Manage Your Health, Simply',
  subtitle: 'Never miss a dose again. MedSync helps you stay on track with medication reminders, appointment scheduling, and secure health records.',
  primaryCta: { href: '#download', label: 'Get Started Free' },
  secondaryCta: { href: '#waitlist', label: 'Join Waitlist' }
};

export const features = {
  title: 'Everything You Need to Stay on Track',
  items: [
    {
      icon: '🕑',
      title: 'Smart Reminders',
      description: 'Flexible dosing schedules with snooze/skip and adherence records.'
    },
    {
      icon: '📅',
      title: 'Appointments',
      description: 'Book, reschedule, and get automated reminders.'
    },
    {
      icon: '🏥',
      title: 'Clinic Portal',
      description: 'Doctors can monitor progress, share notes, and update prescriptions.'
    },
    {
      icon: '💊',
      title: 'One-Tap Refills',
      description: 'Request refills directly from clinic or pharmacy.'
    },
    {
      icon: '📈',
      title: 'Health Insights',
      description: 'Turn habits into simple, visual insights.'
    },
    {
      icon: '🔒',
      title: 'Data Privacy',
      description: 'End-to-end encryption and global standards.'
    },
    {
      icon: '📶',
      title: 'Low-Data Mode',
      description: 'Works offline; syncs on reconnect.'
    },
    {
      icon: '🤖',
      title: 'Steward AI',
      description: 'Patient buddy + doctor assistant for follow-ups and triage.'
    }
  ]
};

export const howItWorks = {
  title: 'How It Works',
  steps: [
    {
      number: '1',
      title: 'Download & Setup',
      description: 'Get the app and create your profile in minutes.'
    },
    {
      number: '2',
      title: 'Add Medications',
      description: 'Scan prescriptions or manually enter your medications.'
    },
    {
      number: '3',
      title: 'Get Reminders',
      description: 'Receive timely alerts and track your adherence.'
    },
    {
      number: '4',
      title: 'Stay Connected',
      description: 'Share progress with your healthcare team.'
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
      cta: { href: '#download', label: 'Get Started Free' }
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
    { href: '/contact', label: 'Contact' }
  ],
  socials: [
    { href: '#', label: 'Twitter' },
    { href: '#', label: 'LinkedIn' },
    { href: '#', label: 'Facebook' }
  ],
  copyright: '© 2024 MedSync. All rights reserved.'
};

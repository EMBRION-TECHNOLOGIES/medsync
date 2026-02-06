export const navbar = {
  logo: 'TeraSync',
  links: [
    // { href: '/about', label: 'About' },
    { href: '/features', label: 'Features' },
    // { href: '/pricing', label: 'Pricing' },
    { href: '/blog', label: 'Blog' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' }
  ],
  cta: {
    href: 'https://forms.gle/FQKHuiVtxFJNU8Cp6',
    label: 'Join Waitlist'
  }
};

export const hero = {
  eyebrow: 'Now with AI and same‑day pharmacy delivery',
  title: 'Your medications—delivered. Your questions—answered.',
  subtitle: 'TeraSync connects you to nearby pharmacies for fast delivery while our AI Health Assistant helps with safe, reliable answers about your meds. Refill, track, and learn in one place.',
  primaryCta: { href: 'https://forms.gle/FQKHuiVtxFJNU8Cp6', label: 'Join Waitlist', action: 'join_waitlist' },
  // secondaryCta: { href: '#how-it-works', label: 'See how it works', action: 'scroll_to_how_it_works' },
  trustBadges: [
    'Pharmacy delivery network',
    'AI health assistant (safe & private)',
    'End‑to‑end encryption',
    'Low‑data, offline‑friendly'
  ],
  appMockup: {
    id: 'terasync-today-card',
    type: 'app-mockup',
    layout: {
      header: {
        brand: 'TeraSync',
        label: 'Today',
        reminder: {
          time: '8:00 PM',
          instruction: 'Take 1 tablet of Amlodipine 5 mg'
        }
      },
      features: [
        {
          title: 'Pharmacy delivery',
          description: 'Order refills and get same‑day delivery from nearby pharmacies.'
        },
        {
          title: 'AI Health Assistant',
          description: '24/7 answers about medications, safety, and adherence support.'
        },
        {
          title: 'Medication reminders',
          description: 'Smart reminders that adapt to your routine with streaks and skips.'
        },
        {
          title: 'Refill tracking',
          description: 'Get low‑supply alerts and quick‑order shortcuts.'
        }
      ]
    }
  }
};

export const features = {
  title: 'Pharmacy delivery + AI that helps you stay on track',
  subtitle: 'Built for patients and pharmacies. Get meds delivered fast, and answers when you need them.',
  items: [
    {
      title: 'Same‑day delivery',
      description: 'Order from nearby pharmacies with verified inventory and tracked delivery.'
    },
    {
      title: 'AI Health Assistant',
      description: 'Get safe, readable answers about medication use, side‑effects, and interactions.'
    },
    {
      title: 'Smart reminders',
      description: 'Adaptive reminders with streaks, gentle nudges, and skip/snooze options.'
    },
    {
      title: 'Refill automation',
      description: 'Low‑supply alerts, one‑tap reorders, and pharmacy follow‑ups.'
    },
    {
      title: 'Private by default',
      description: 'End‑to‑end encryption, data minimization, and NDPR‑aligned redaction.'
    },
    {
      title: 'Works anywhere',
      description: 'Low‑data mode and offline support for reliable reminders.'
    }
  ]
};

export const howItWorks = {
  title: 'How delivery + AI works',
  steps: [
    {
      number: 1,
      title: 'Find a pharmacy',
      description: 'Search nearby pharmacies in‑app and confirm availability.'
    },
    {
      number: 2,
      title: 'Order & track',
      description: 'Place your order, choose delivery, and track it in real‑time.'
    },
    {
      number: 3,
      title: 'Ask our AI',
      description: 'Chat with the TeraSync AI Health Assistant for medication guidance.'
    }
  ]
};



export const testimonials = [
  {
    quote: 'Delivery was the same day and the reminders keep me on track. The AI assistant is super helpful.',
    author: 'Tola A.',
    role: 'Patient'
  },
  {
    quote: 'Accepting in‑app orders helped us serve nearby customers faster without extra phone calls.',
    author: 'Ade Pharmacy',
    role: 'Community pharmacy'
  },
  {
    quote: 'I finally understand my meds. The answers are clear and it respects my privacy.',
    author: 'Chidinma U.',
    role: 'Patient'
  }
];

export const faq = [
  {
    q: 'Is TeraSync free for patients?',
    a: 'Yes. Core features like delivery ordering, reminders, and AI assistant (fair‑use) are free.'
  },
  {
    q: 'How does pharmacy delivery work?',
    a: 'Search nearby pharmacies, confirm availability, place your order, and track delivery in‑app.'
  },
  {
    q: 'Is the AI safe and private?',
    a: 'Yes. We minimize sensitive data and use redaction with end‑to‑end encryption.'
  },
  {
    q: 'Does the app need constant internet?',
    a: 'No. Reminders work offline; delivery and chat sync when you reconnect.'
  }
];

export const footer = {
  links: [
    // { href: '/about', label: 'About' },
    { href: '/features', label: 'Features' },
    // { href: '/pricing', label: 'Pricing' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' }
  ],
  socials: [
    { href: 'https://www.instagram.com/_terasync_', label: 'Instagram' },
    { href: 'https://x.com/terasyncng', label: 'Twitter' },
    { href: 'https://m.facebook.com/terasync/', label: 'Facebook' }
  ],
  copyright: `© ${new Date().getFullYear()} TeraSync. All rights reserved.`
};

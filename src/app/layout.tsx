import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import './globals.css';

const nunitoSans = Nunito_Sans({ 
  subsets: ['latin'], 
  variable: '--font-nunito',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'MedSync',
    template: '%s | MedSync'
  },
  description: 'Manage prescriptions, appointments, and reminders — all in one simple app.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico'
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    siteName: 'MedSync',
    images: [
      {
        url: '/medsync_logo_outlined.png',
        width: 1200,
        height: 630,
        alt: 'MedSync - Healthcare Management App'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/medsync_logo_outlined.png']
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={nunitoSans.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="font-sans min-h-dvh antialiased text-zinc-900 bg-white">
        {children}
      </body>
    </html>
  );
}

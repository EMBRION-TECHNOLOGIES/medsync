import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import './globals.css';
import { PageTransition } from '@/components/ui/page-transition';
import Analytics from '@/components/Analytics';
import CookieBanner from '@/components/CookieBanner';

const nunitoSans = Nunito_Sans({ 
  subsets: ['latin'], 
  variable: '--font-nunito',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:4000'),
  title: {
    default: 'TeraSync',
    template: '%s | TeraSync'
  },
  description: 'Manage prescriptions, appointments, and reminders — all in one simple app.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    siteName: 'TeraSync',
    images: [
      {
        url: '/terasync_logo.png',
        width: 1200,
        height: 630,
        alt: 'TeraSync - Healthcare Management App'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/terasync_logo.png']
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={nunitoSans.variable}>
      <body className="font-nunito min-h-dvh antialiased text-zinc-900 bg-white">
        <PageTransition>
          {children}
        </PageTransition>
        <Analytics />
        <CookieBanner />
      </body>
    </html>
  );
}

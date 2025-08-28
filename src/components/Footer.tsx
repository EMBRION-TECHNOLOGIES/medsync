import { footer } from '@/data/landing';
import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="border-t mt-16 bg-zinc-50">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Logo and Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <Logo size="lg" showText />
            </div>
            <p className="text-zinc-600 max-w-md">
              Empowering patients and clinics with simple, reliable digital tools that improve health outcomes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {footer.links.map((l) => (
                <Link key={l.href} href={l.href} className="text-zinc-600 hover:text-zinc-900 transition-colors">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <nav className="flex flex-col gap-2">
              {footer.socials.map((s) => (
                <a key={s.label} href={s.href} className="text-zinc-600 hover:text-zinc-900 transition-colors">
                  {s.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t pt-8 mt-8 text-center text-sm text-zinc-600">
          <p>{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

import { footer } from '@/data/landing';
import Link from 'next/link';
import Logo from './Logo';
import Typography from './ui/Typography';

export default function Footer() {
  return (
    <footer className="border-t bg-zinc-50">
      <div className="container py-16">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Logo and Brand */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <Logo size="lg" showText />
            </div>
            <Typography variant="body" className="text-zinc-600 max-w-[56rem] lg:max-w-[64rem] xl:max-w-[72rem]">
              Empowering patients and clinics with simple, reliable digital tools that improve health outcomes.
            </Typography>
          </div>

          {/* Quick Links */}
          <div>
            <Typography variant="h6" className="mb-6">Quick Links</Typography>
            <nav className="flex flex-col gap-3">
              {footer.links.map((l) => (
                <Link 
                  key={l.href} 
                  href={l.href} 
                  className="font-nunito font-regular text-zinc-600 hover:text-zinc-900 transition-colors duration-200"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <Typography variant="h6" className="mb-6">Connect</Typography>
            <nav className="flex flex-col gap-3">
              {footer.socials.map((s) => (
                <a 
                  key={s.label} 
                  href={s.href} 
                  className="font-nunito font-regular text-zinc-600 hover:text-zinc-900 transition-colors duration-200"
                >
                  {s.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t pt-8 mt-12 text-center">
          <Typography variant="caption" className="text-zinc-500">
            {footer.copyright}
          </Typography>
        </div>
      </div>
    </footer>
  );
}

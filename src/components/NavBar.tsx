import Link from 'next/link';
import { navbar } from '@/data/landing';
import Logo from './Logo';

export default function NavBar() {
  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b">
      <div className="container flex h-14 items-center justify-between">
        <Logo size="md" linkToHome showText />
        <nav className="hidden md:flex gap-6 text-sm">
          {navbar.links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          href={navbar.cta.href}
          className="inline-flex items-center rounded-md bg-[hsl(var(--color-primary))] text-[hsl(var(--color-primary-foreground))] px-3 py-2 text-sm hover:opacity-90 transition-opacity"
        >
          {navbar.cta.label}
        </Link>
      </div>
    </header>
  );
}

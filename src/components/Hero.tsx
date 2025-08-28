import Link from 'next/link';
import Image from 'next/image';
import { hero } from '@/data/landing';

export default function Hero() {
  return (
    <section className="container py-16 md:py-24">
      <div className="text-center">
        {/* Logo Display */}
        <div className="flex justify-center mb-8">
          <Image
            src="/medsync_logo_outlined.svg"
            alt="MedSync Logo"
            width={120}
            height={120}
            className="w-24 h-24 md:w-32 md:h-32"
          />
        </div>
        
        <p className="text-sm text-zinc-600">{hero.trust}</p>
        <h1 className="mt-3 text-4xl md:text-6xl font-semibold tracking-tight">
          <span className="ms-gradient-text">MedSync</span> {hero.title.replace('MedSync', '').trim()}
        </h1>
        <p className="mt-4 text-lg text-zinc-600 max-w-2xl mx-auto">
          {hero.subtitle}
        </p>
        <div className="mt-6 flex gap-3 justify-center">
          <Link
            href={hero.primaryCta.href}
            className="ms-gradient text-white px-4 py-2 rounded-md shadow-md hover:opacity-90 transition-opacity"
          >
            {hero.primaryCta.label}
          </Link>
          <Link
            href={hero.secondaryCta.href}
            className="border px-4 py-2 rounded-md hover:bg-zinc-50 transition-colors"
          >
            {hero.secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  linkToHome?: boolean;
  className?: string;
}

export default function Logo({ 
  size = 'md', 
  showText = true, 
  linkToHome = false,
  className
}: LogoProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-xl'
  };

  const LogoContent = () => (
    <div className={cn("flex items-center gap-2", className)}>
      <Image
        src="/terasync_logo.png"
        alt="TeraSync Logo"
        width={32}
        height={32}
        className={cn(sizeClasses[size], "transition-all duration-300 rounded-md")}
        priority
      />
      {showText && (
        <span className={cn("font-nunito font-semibold transition-all duration-300", textSizes[size])}>
          TeraSync
        </span>
      )}
    </div>
  );

  if (linkToHome) {
    return (
      <Link 
        href="/" 
        className="hover:opacity-80 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ms-blue/20 focus:ring-offset-2 rounded-lg"
      >
        <LogoContent />
      </Link>
    );
  }

  return <LogoContent />;
}

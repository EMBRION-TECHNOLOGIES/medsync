import Image from 'next/image';
import Link from 'next/link';

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
  className = ''
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
    <div className={`flex items-center gap-2 ${className}`}>
      <Image
        src="/medsync_logo_outlined.svg"
        alt="MedSync Logo"
        width={32}
        height={32}
        className={sizeClasses[size]}
      />
      {showText && (
        <span className={`font-semibold ${textSizes[size]}`}>
          MedSync
        </span>
      )}
    </div>
  );

  if (linkToHome) {
    return (
      <Link href="/" className="hover:opacity-80 transition-opacity">
        <LogoContent />
      </Link>
    );
  }

  return <LogoContent />;
}

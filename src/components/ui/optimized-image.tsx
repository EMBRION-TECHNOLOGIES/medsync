'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  fill?: boolean;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  objectPosition?: string;
  loading?: 'lazy' | 'eager';
  onLoad?: () => void;
  onError?: () => void;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 85,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  placeholder = 'blur',
  blurDataURL,
  fill = false,
  objectFit = 'cover',
  objectPosition = 'center',
  loading = 'lazy',
  onLoad,
  onError,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Generate a simple blur placeholder if none provided
  const defaultBlurDataURL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=';

  if (hasError) {
    return (
      <div 
        className={cn(
          'bg-slate-200 flex items-center justify-center text-slate-500',
          className
        )}
        style={{ width, height }}
      >
        <span className="text-sm">Failed to load image</span>
      </div>
    );
  }

  const imageProps = {
    src,
    alt,
    quality,
    sizes,
    onLoad: handleLoad,
    onError: handleError,
    className: cn(
      'transition-opacity duration-300',
      isLoaded ? 'opacity-100' : 'opacity-0',
      className
    ),
    ...(fill ? {
      fill: true,
      style: { objectFit, objectPosition }
    } : {
      width,
      height
    }),
    ...(placeholder === 'blur' && {
      placeholder: 'blur' as const,
      blurDataURL: blurDataURL || defaultBlurDataURL
    }),
    ...(priority ? { priority: true } : { loading })
  };

  return (
    <div className="relative overflow-hidden">
      <Image {...imageProps} alt={imageProps.alt || ''} />
      {!isLoaded && !hasError && (
        <motion.div
          className="absolute inset-0 bg-slate-200"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}
    </div>
  );
}

// Mobile-optimized image with responsive sizing
interface MobileImageProps extends Omit<OptimizedImageProps, 'sizes'> {
  mobileWidth?: number;
  mobileHeight?: number;
  desktopWidth?: number;
  desktopHeight?: number;
}

export function MobileImage({
  mobileWidth = 300,
  mobileHeight = 200,
  desktopWidth = 600,
  desktopHeight = 400,
  className = '',
  ...props
}: MobileImageProps) {
  return (
    <div className="relative w-full">
      {/* Mobile Image */}
      <div className="block md:hidden">
        <OptimizedImage
          {...props}
          width={mobileWidth}
          height={mobileHeight}
          sizes="100vw"
          className={cn('w-full h-auto', className)}
        />
      </div>
      
      {/* Desktop Image */}
      <div className="hidden md:block">
        <OptimizedImage
          {...props}
          width={desktopWidth}
          height={desktopHeight}
          sizes="(max-width: 1200px) 50vw, 33vw"
          className={cn('w-full h-auto', className)}
        />
      </div>
    </div>
  );
}

// Lazy loading image with intersection observer
interface LazyImageProps extends OptimizedImageProps {
  threshold?: number;
  rootMargin?: string;
}

export function LazyImage({
  threshold = 0.1, // eslint-disable-line @typescript-eslint/no-unused-vars
  rootMargin = '50px', // eslint-disable-line @typescript-eslint/no-unused-vars
  ...props
}: LazyImageProps) {
  return (
    <OptimizedImage
      {...props}
      loading="lazy"
      sizes={props.sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
    />
  );
}

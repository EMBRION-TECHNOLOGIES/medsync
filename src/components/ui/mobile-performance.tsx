'use client';

import { ReactNode, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useMobileOptimization } from '@/hooks/use-mobile-optimization';
import { cn } from '@/lib/utils';

// Performance-optimized component wrapper
interface PerformanceWrapperProps {
  children: ReactNode;
  className?: string;
  fallback?: ReactNode;
  threshold?: number;
}

export function PerformanceWrapper({
  children,
  className = '',
  fallback,
  threshold = 0.1, // eslint-disable-line @typescript-eslint/no-unused-vars
}: PerformanceWrapperProps) {
  const { isMobile, isSlowConnection, prefersReducedMotion } = useMobileOptimization(); // eslint-disable-line @typescript-eslint/no-unused-vars
  const [shouldRender, setShouldRender] = useState(!isMobile || !isSlowConnection);

  useEffect(() => {
    if (isMobile && isSlowConnection) {
      // Delay rendering on slow connections
      const timer = setTimeout(() => {
        setShouldRender(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isMobile, isSlowConnection]);

  if (!shouldRender && fallback) {
    return <div className={className}>{fallback}</div>;
  }

  return (
    <div className={cn('performance-wrapper', className)}>
      {children}
    </div>
  );
}

// Conditional animation wrapper
interface ConditionalAnimationProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade' | 'slide' | 'scale' | 'none';
  delay?: number;
  duration?: number;
}

export function ConditionalAnimation({
  children,
  className = '',
  animation = 'fade',
  delay = 0,
  duration = 0.3,
}: ConditionalAnimationProps) {
  const { prefersReducedMotion, isMobile } = useMobileOptimization();
  
  // Disable animations on mobile if user prefers reduced motion
  const shouldAnimate = !prefersReducedMotion && (!isMobile || animation === 'fade');

  if (!shouldAnimate) {
    return <div className={className}>{children}</div>;
  }

  const animationVariants = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
    slide: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
    },
    scale: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.9 },
    },
    none: {
      initial: { opacity: 1 },
      animate: { opacity: 1 },
      exit: { opacity: 1 },
    },
  };

  return (
    <motion.div
      className={className}
      variants={animationVariants[animation]}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
}

// Mobile-optimized lazy loading component
interface LazyComponentProps {
  children: ReactNode;
  className?: string;
  fallback?: ReactNode;
  threshold?: number;
  rootMargin?: string;
}

export function LazyComponent({
  children,
  className = '',
  fallback,
  threshold = 0.1,
  rootMargin = '50px',
}: LazyComponentProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsVisible(true);
          setHasLoaded(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    const element = document.getElementById('lazy-component');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, hasLoaded]);

  return (
    <div id="lazy-component" className={className}>
      <AnimatePresence>
        {isVisible ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        ) : (
          fallback && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {fallback}
            </motion.div>
          )
        )}
      </AnimatePresence>
    </div>
  );
}

// Mobile-optimized image gallery
interface MobileImageGalleryProps {
  images: string[];
  className?: string;
  showThumbnails?: boolean;
  autoPlay?: boolean;
  interval?: number;
}

export function MobileImageGallery({
  images,
  className = '',
  showThumbnails = true,
  autoPlay = false,
  interval = 3000,
}: MobileImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isMobile } = useMobileOptimization(); // eslint-disable-line @typescript-eslint/no-unused-vars

  useEffect(() => {
    if (autoPlay && images.length > 1) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, interval);
      return () => clearInterval(timer);
    }
  }, [autoPlay, images.length, interval]);

  return (
    <div className={cn('relative', className)}>
      {/* Main image */}
      <div className="relative overflow-hidden rounded-lg">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Gallery image ${currentIndex + 1}`}
          className="w-full h-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          loading={currentIndex === 0 ? 'eager' : 'lazy'}
        />
      </div>

      {/* Thumbnails */}
      {showThumbnails && images.length > 1 && (
        <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                'flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200',
                index === currentIndex
                  ? 'border-ms-blue scale-105'
                  : 'border-slate-200 hover:border-slate-300'
              )}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
                width={100}
                height={100}
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}

      {/* Dots indicator */}
      {!showThumbnails && images.length > 1 && (
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                'w-2 h-2 rounded-full transition-all duration-200',
                index === currentIndex
                  ? 'bg-ms-blue scale-125'
                  : 'bg-slate-300 hover:bg-slate-400'
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// Mobile-optimized loading states
interface MobileLoadingProps {
  type?: 'spinner' | 'skeleton' | 'dots' | 'pulse';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  text?: string;
}

export function MobileLoading({
  type = 'spinner',
  size = 'md',
  className = '',
  text,
}: MobileLoadingProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  return (
    <div className={cn('flex flex-col items-center justify-center gap-3', className)}>
      {type === 'spinner' && (
        <div className={cn('border-2 border-slate-200 border-t-ms-blue rounded-full animate-spin', sizeClasses[size])} />
      )}
      
      {type === 'dots' && (
        <div className="flex space-x-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className={cn('bg-ms-blue rounded-full', sizeClasses[size])}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      )}
      
      {type === 'pulse' && (
        <motion.div
          className={cn('bg-ms-blue rounded', sizeClasses[size])}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      )}
      
      {text && (
        <p className={cn('text-slate-600', textSizeClasses[size])}>
          {text}
        </p>
      )}
    </div>
  );
}

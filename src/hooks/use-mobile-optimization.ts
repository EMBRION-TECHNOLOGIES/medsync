'use client';

import { useState, useEffect } from 'react';

// Hook for mobile-specific optimizations
export function useMobileOptimization() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [connectionSpeed, setConnectionSpeed] = useState<'slow' | 'fast' | 'unknown'>('unknown');

  useEffect(() => {
    // Check device type
    const checkDeviceType = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
      setIsDesktop(width >= 1024);
    };

    // Check for reduced motion preference
    const checkReducedMotion = () => {
      setPrefersReducedMotion(
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
      );
    };

    // Check connection speed
    const checkConnectionSpeed = () => {
      if ('connection' in navigator) {
        const connection = (navigator as Navigator & { connection?: { effectiveType?: string } }).connection;
        const effectiveType = connection?.effectiveType;
        setConnectionSpeed(
          effectiveType === 'slow-2g' || effectiveType === '2g' ? 'slow' : 'fast'
        );
      } else {
        setConnectionSpeed('unknown');
      }
    };

    // Initial checks
    checkDeviceType();
    checkReducedMotion();
    checkConnectionSpeed();

    // Listen for changes
    const handleResize = () => checkDeviceType();
    const handleMotionChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);

    window.addEventListener('resize', handleResize);
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', handleMotionChange);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.matchMedia('(prefers-reduced-motion: reduce)').removeEventListener('change', handleMotionChange);
    };
  }, []);

  return {
    isMobile,
    isTablet,
    isDesktop,
    prefersReducedMotion,
    connectionSpeed,
    isSlowConnection: connectionSpeed === 'slow',
  };
}

// Hook for touch interactions
export function useTouchOptimization() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);

  useEffect(() => {
    // Detect touch device
    setIsTouchDevice(
      'ontouchstart' in window || 
      navigator.maxTouchPoints > 0 || 
      ((navigator as Navigator & { msMaxTouchPoints?: number }).msMaxTouchPoints ?? 0) > 0
    );
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent, onSwipeUp?: () => void, onSwipeDown?: () => void) => {
    const touchY = e.touches[0].clientY;
    const diff = touchStartY - touchY;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0 && onSwipeUp) {
        onSwipeUp();
      } else if (diff < 0 && onSwipeDown) {
        onSwipeDown();
      }
    }
  };

  return {
    isTouchDevice,
    handleTouchStart,
    handleTouchMove,
  };
}

// Hook for lazy loading optimization
export function useLazyLoading() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  const ref = (node: HTMLElement | null) => {
    if (node && !hasLoaded) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            setHasLoaded(true);
            observer.disconnect();
          }
        },
        {
          threshold: 0.1,
          rootMargin: '50px',
        }
      );
      observer.observe(node);
    }
  };

  return { ref, isIntersecting, hasLoaded };
}

// Hook for mobile performance monitoring
export function useMobilePerformance() {
  const [performanceMetrics, setPerformanceMetrics] = useState({
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0,
  });

  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Measure page load time
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      
      // Get Web Vitals if available
      const getWebVitals = async () => {
        try {
          const { onCLS, onFCP, onLCP } = await import('web-vitals');
          
          onCLS((metric) => {
            setPerformanceMetrics(prev => ({ ...prev, cumulativeLayoutShift: metric.value }));
          });
          
          onFCP((metric) => {
            setPerformanceMetrics(prev => ({ ...prev, firstContentfulPaint: metric.value }));
          });
          
          onLCP((metric) => {
            setPerformanceMetrics(prev => ({ ...prev, largestContentfulPaint: metric.value }));
          });
        } catch {
          console.log('Web Vitals not available');
        }
      };

      setPerformanceMetrics(prev => ({ ...prev, loadTime }));
      getWebVitals();
    }
  }, []);

  return performanceMetrics;
}

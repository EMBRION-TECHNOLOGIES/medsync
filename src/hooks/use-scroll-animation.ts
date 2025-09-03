'use client';

import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function useScrollAnimation(options?: {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: options?.triggerOnce !== false,
  });

  return { ref, isInView };
}

export function useStaggeredAnimation(delay: number = 0.1) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  return { ref, isInView, delay };
}

'use client';

import { motion, Variants } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  threshold?: number;
  triggerOnce?: boolean;
  delay?: number;
}

export function AnimatedSection({
  children,
  variants,
  className = '',
  threshold = 0.1,
  triggerOnce = true,
  delay = 0,
}: AnimatedSectionProps) {
  const { ref, isInView } = useScrollAnimation({
    threshold,
    triggerOnce,
  });

  const defaultVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants || defaultVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

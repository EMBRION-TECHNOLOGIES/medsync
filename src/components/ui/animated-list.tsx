'use client';

import { motion, Variants } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { ReactNode } from 'react';

interface AnimatedListProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  itemDelay?: number;
  threshold?: number;
  triggerOnce?: boolean;
}

export function AnimatedList({
  children,
  className = '',
  staggerDelay = 0.1,
  itemDelay = 0.1,
  threshold = 0.1,
  triggerOnce = true,
}: AnimatedListProps) {
  const { ref, isInView } = useScrollAnimation({
    threshold,
    triggerOnce,
  });

  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: itemDelay,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className={className}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div key={index} variants={itemVariants}>
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}

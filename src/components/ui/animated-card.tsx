'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  hover?: boolean;
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
}

const cardVariants: Variants = {
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

const hoverVariants: Variants = {
  rest: {
    y: 0,
    scale: 1,
    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    transition: {
      duration: 0.3,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
  hover: {
    y: -8,
    scale: 1.02,
    boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    transition: {
      duration: 0.3,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export function AnimatedCard({
  children,
  className = '',
  variants = cardVariants,
  hover = true,
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
}: AnimatedCardProps) {
  const combinedVariants = hover
    ? {
        ...variants,
        visible: {
          ...variants.visible,
          transition: {
            ...(variants.visible && typeof variants.visible === 'object' && 'transition' in variants.visible 
              ? variants.visible.transition 
              : {}),
            delay,
          },
        },
      }
    : variants;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: triggerOnce, margin: `-${threshold * 100}px` }}
      whileHover={hover ? 'hover' : undefined}
      variants={hover ? hoverVariants : combinedVariants}
      className={cn('card', className)}
    >
      {children}
    </motion.div>
  );
}

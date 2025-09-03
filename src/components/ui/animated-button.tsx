'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedButtonProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
}

const buttonVariants: Variants = {
  rest: {
    scale: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
  hover: {
    scale: 1.02,
    y: -2,
    transition: {
      duration: 0.2,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
  tap: {
    scale: 0.98,
    y: 0,
    transition: {
      duration: 0.1,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  (
    {
      children,
      className = '',
      variants = buttonVariants,
      onClick,
      disabled = false,
      type = 'button',
      size = 'md',
      variant = 'primary',
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      sm: 'btn-sm',
      md: 'btn-md',
      lg: 'btn-lg',
      xl: 'btn-xl',
    };

    const variantClasses = {
      primary: 'btn-primary',
      secondary: 'btn-secondary',
      outline: 'btn-outline',
      ghost: 'btn-ghost',
    };

    return (
      <motion.button
        ref={ref}
        variants={variants}
        initial="rest"
        whileHover={disabled ? 'rest' : 'hover'}
        whileTap={disabled ? 'rest' : 'tap'}
        onClick={onClick}
        disabled={disabled}
        type={type}
        className={cn(
          'btn',
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

AnimatedButton.displayName = 'AnimatedButton';

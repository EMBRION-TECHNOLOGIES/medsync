'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

// Mobile-optimized button with touch targets
interface MobileButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export function MobileButton({
  children,
  className = '',
  onClick,
  disabled = false,
  variant = 'primary',
  size = 'md',
}: MobileButtonProps) {
  const baseClasses = 'touch-target rounded-lg font-semibold transition-all duration-200 active:scale-95';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-ms-green to-ms-blue text-white shadow-md active:shadow-lg',
    secondary: 'bg-slate-100 text-slate-900 border border-slate-200 active:bg-slate-200',
    outline: 'bg-transparent text-slate-900 border-2 border-slate-300 active:bg-slate-50',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm min-h-[44px]',
    md: 'px-6 py-3 text-base min-h-[48px]',
    lg: 'px-8 py-4 text-lg min-h-[52px]',
  };

  return (
    <motion.button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      onClick={onClick}
      disabled={disabled}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      transition={{ duration: 0.1 }}
    >
      {children}
    </motion.button>
  );
}

// Mobile-optimized card with touch interactions
interface MobileCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  interactive?: boolean;
}

export function MobileCard({
  children,
  className = '',
  onClick,
  interactive = false,
}: MobileCardProps) {
  const baseClasses = 'bg-white rounded-xl shadow-sm border border-slate-200 p-4';
  const interactiveClasses = interactive 
    ? 'cursor-pointer active:scale-[0.98] transition-transform duration-100' 
    : '';

  return (
    <motion.div
      className={cn(baseClasses, interactiveClasses, className)}
      onClick={onClick}
      whileTap={interactive ? { scale: 0.98 } : {}}
      transition={{ duration: 0.1 }}
    >
      {children}
    </motion.div>
  );
}

// Mobile-optimized input with proper sizing
interface MobileInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: 'text' | 'email' | 'tel' | 'password';
  className?: string;
  disabled?: boolean;
}

export function MobileInput({
  placeholder,
  value,
  onChange,
  type = 'text',
  className = '',
  disabled = false,
}: MobileInputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      disabled={disabled}
      className={cn(
        'w-full min-h-[48px] px-4 py-3 text-base rounded-lg border-2 border-slate-200',
        'focus:border-ms-blue focus:outline-none transition-colors duration-200',
        'disabled:bg-slate-50 disabled:text-slate-500',
        className
      )}
      style={{ fontSize: '16px' }} // Prevents zoom on iOS
    />
  );
}

// Mobile-optimized list with proper spacing
interface MobileListProps {
  children: ReactNode;
  className?: string;
  spacing?: 'sm' | 'md' | 'lg';
}

export function MobileList({
  children,
  className = '',
  spacing = 'md',
}: MobileListProps) {
  const spacingClasses = {
    sm: 'space-y-2',
    md: 'space-y-4',
    lg: 'space-y-6',
  };

  return (
    <div className={cn('w-full', spacingClasses[spacing], className)}>
      {children}
    </div>
  );
}

// Mobile-optimized grid
interface MobileGridProps {
  children: ReactNode;
  className?: string;
  columns?: 1 | 2;
  gap?: 'sm' | 'md' | 'lg';
}

export function MobileGrid({
  children,
  className = '',
  columns = 1,
  gap = 'md',
}: MobileGridProps) {
  const columnClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
  };
  
  const gapClasses = {
    sm: 'gap-3',
    md: 'gap-4',
    lg: 'gap-6',
  };

  return (
    <div className={cn('grid', columnClasses[columns], gapClasses[gap], className)}>
      {children}
    </div>
  );
}

// Mobile-optimized section with proper spacing
interface MobileSectionProps {
  children: ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
}

export function MobileSection({
  children,
  className = '',
  padding = 'md',
}: MobileSectionProps) {
  const paddingClasses = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
  };

  return (
    <section className={cn(paddingClasses[padding], className)}>
      {children}
    </section>
  );
}

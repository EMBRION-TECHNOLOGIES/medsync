import React from 'react';
import { cn } from '@/lib/utils';
import { getTypographyClass, typography } from '@/lib/typography';

interface TypographyProps {
  variant?: keyof typeof getTypographyClass extends (variant: infer V, className?: string) => string ? V : never;
  children: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

// Extract the variant type from the typography object
type TypographyVariant = keyof typeof typography;

export default function Typography({
  variant = 'body',
  children,
  className,
  as,
  ...props
}: TypographyProps & { variant?: TypographyVariant; as?: keyof React.JSX.IntrinsicElements }) {
  const Component = (as || getDefaultElement(variant)) as React.ElementType;
  
  return (
    <Component
      className={cn(getTypographyClass(variant), className)}
      {...props}
    >
      {children}
    </Component>
  );
}

// Helper function to determine the default HTML element based on variant
function getDefaultElement(variant: TypographyVariant): keyof React.JSX.IntrinsicElements {
  switch (variant) {
    case 'h1':
      return 'h1';
    case 'h2':
      return 'h2';
    case 'h3':
      return 'h3';
    case 'h4':
      return 'h4';
    case 'h5':
      return 'h5';
    case 'h6':
      return 'h6';
    case 'lead':
      return 'p';
    case 'muted':
      return 'p';
    case 'caption':
      return 'span';
    case 'label':
      return 'label';
    case 'button':
      return 'span';
    default:
      return 'p';
  }
}

// Specific typography components for common use cases
export function Heading1({ children, className, ...props }: Omit<TypographyProps, 'variant'>) {
  return (
    <Typography variant="h1" className={className} {...props}>
      {children}
    </Typography>
  );
}

export function Heading2({ children, className, ...props }: Omit<TypographyProps, 'variant'>) {
  return (
    <Typography variant="h2" className={className} {...props}>
      {children}
    </Typography>
  );
}

export function Heading3({ children, className, ...props }: Omit<TypographyProps, 'variant'>) {
  return (
    <Typography variant="h3" className={className} {...props}>
      {children}
    </Typography>
  );
}

export function Body({ children, className, ...props }: Omit<TypographyProps, 'variant'>) {
  return (
    <Typography variant="body" className={className} {...props}>
      {children}
    </Typography>
  );
}

export function Lead({ children, className, ...props }: Omit<TypographyProps, 'variant'>) {
  return (
    <Typography variant="lead" className={className} {...props}>
      {children}
    </Typography>
  );
}

export function Muted({ children, className, ...props }: Omit<TypographyProps, 'variant'>) {
  return (
    <Typography variant="muted" className={className} {...props}>
      {children}
    </Typography>
  );
}

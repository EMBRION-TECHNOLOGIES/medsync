import { cn } from './utils';

// Typography utility classes for consistent Nunito Sans usage
export const typography = {
  // Headings
  h1: 'font-nunito font-bold text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight',
  h2: 'font-nunito font-bold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight',
  h3: 'font-nunito font-semibold text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight',
  h4: 'font-nunito font-semibold text-xl md:text-2xl lg:text-3xl leading-tight tracking-tight',
  h5: 'font-nunito font-semibold text-lg md:text-xl lg:text-2xl leading-tight tracking-tight',
  h6: 'font-nunito font-semibold text-base md:text-lg lg:text-xl leading-tight tracking-tight',
  
  // Body text
  body: 'font-nunito font-regular text-base leading-relaxed',
  bodyLarge: 'font-nunito font-regular text-lg leading-relaxed',
  bodySmall: 'font-nunito font-regular text-sm leading-relaxed',
  
  // Labels and UI text
  label: 'font-nunito font-semibold text-sm',
  caption: 'font-nunito font-regular text-xs',
  button: 'font-nunito font-semibold text-sm',
  
  // Special text
  lead: 'font-nunito font-regular text-lg md:text-xl leading-relaxed text-zinc-600',
  muted: 'font-nunito font-regular text-sm text-zinc-500',
  
  // Gradient text
  gradient: 'font-nunito font-bold bg-gradient-to-r from-ms-green to-ms-blue bg-clip-text text-transparent',
} as const;

// Helper function to combine typography classes
export function getTypographyClass(
  variant: keyof typeof typography,
  className?: string
): string {
  return cn(typography[variant], className);
}

// Font weight utilities
export const fontWeights = {
  regular: 'font-nunito font-regular',
  medium: 'font-nunito font-medium',
  semibold: 'font-nunito font-semibold',
  bold: 'font-nunito font-bold',
} as const;

// Text size utilities
export const textSizes = {
  xs: 'font-nunito text-xs',
  sm: 'font-nunito text-sm',
  base: 'font-nunito text-base',
  lg: 'font-nunito text-lg',
  xl: 'font-nunito text-xl',
  '2xl': 'font-nunito text-2xl',
  '3xl': 'font-nunito text-3xl',
  '4xl': 'font-nunito text-4xl',
} as const;

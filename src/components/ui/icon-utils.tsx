/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import type { LucideProps } from 'lucide-react';
import { cn } from '@/lib/utils';

export const ICON_SIZES = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
} as const;

export const ICON_STROKES = {
  thin: 1.25,
  premium: 1.5 /* Scientific thin line style */,
  regular: 2,
  bold: 2.5,
} as const;

export interface IconWrapperProps extends LucideProps {
  icon: React.ComponentType<LucideProps>;
  size?: keyof typeof ICON_SIZES | number;
  stroke?: keyof typeof ICON_STROKES | number;
}

/**
 * Standardized icon component wrapper to enforce consistent sizing,
 * stroke width, and coloring constraints across the design system.
 */
export const IconWrapper = React.forwardRef<SVGSVGElement, IconWrapperProps>(
  ({ icon: Icon, size = 'sm', stroke = 'premium', className, ...props }, ref) => {
    const computedSize = typeof size === 'number' ? size : ICON_SIZES[size];
    const computedStroke = typeof stroke === 'number' ? stroke : ICON_STROKES[stroke];

    return (
      <Icon
        ref={ref}
        size={computedSize}
        strokeWidth={computedStroke}
        className={cn(
          'inline-block shrink-0 align-middle text-current transition-all duration-150',
          className
        )}
        {...props}
      />
    );
  }
);

IconWrapper.displayName = 'IconWrapper';

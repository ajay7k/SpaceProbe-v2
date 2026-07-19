import React from 'react';
import { cn } from '@/lib/utils';

type GridCols = 1 | 2 | 3 | 4 | 5 | 6 | 12;
type GridGap = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  cols?: GridCols | Partial<Record<'sm' | 'md' | 'lg' | 'xl' | 'default', GridCols>>;
  gap?: GridGap;
}

export const Grid = React.forwardRef<HTMLElement, GridProps>(
  ({ as: Component = 'div', cols = 1, gap = 'md', className, children, ...props }, ref) => {
    // Generate utility classes based on responsive columns object or number
    const getColClasses = () => {
      if (typeof cols === 'number') {
        return `grid-cols-${cols}`;
      }

      const classes: string[] = [];
      if (cols.default) classes.push(`grid-cols-${cols.default}`);
      if (cols.sm) classes.push(`sm:grid-cols-${cols.sm}`);
      if (cols.md) classes.push(`md:grid-cols-${cols.md}`);
      if (cols.lg) classes.push(`lg:grid-cols-${cols.lg}`);
      if (cols.xl) classes.push(`xl:grid-cols-${cols.xl}`);

      return classes.join(' ');
    };

    return (
      <Component
        ref={ref}
        className={cn(
          'grid',
          getColClasses(),
          {
            'gap-0': gap === 'none',
            'gap-xs': gap === 'xs',
            'gap-sm': gap === 'sm',
            'gap-md': gap === 'md',
            'gap-lg': gap === 'lg',
            'gap-xl': gap === 'xl',
          },
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Grid.displayName = 'Grid';

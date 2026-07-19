import React from 'react';
import { cn } from '@/lib/utils';

type ContainerWidth = 'container' | 'content' | 'reading' | 'full';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  width?: ContainerWidth;
}

export const Container = React.forwardRef<HTMLElement, ContainerProps>(
  ({ as: Component = 'div', width = 'container', className, children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          'mx-auto w-full px-xs md:px-md lg:px-lg',
          {
            'max-w-[var(--width-container-max)]': width === 'container',
            'max-w-[var(--width-content-max)]': width === 'content',
            'max-w-[var(--width-reading-max)]': width === 'reading',
            'max-w-full': width === 'full',
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

Container.displayName = 'Container';

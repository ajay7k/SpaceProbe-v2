import React from 'react';
import { cn } from '@/lib/utils';

type LoaderSize = 'sm' | 'md' | 'lg';

interface GlobalLoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: LoaderSize;
  blur?: boolean;
}

export function GlobalLoading({
  size = 'md',
  blur = false,
  className,
  ...props
}: GlobalLoadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center p-xl min-h-[200px]',
        {
          'absolute inset-0 bg-bg-space/65 backdrop-blur-md z-sticky': blur,
        },
        className
      )}
      {...props}
    >
      <div className="relative flex items-center justify-center">
        {/* Animated Outer Pulse Ring */}
        <div
          className={cn(
            'animate-ping rounded-full bg-accent-cyan/10 border border-accent-cyan/20 absolute',
            {
              'h-8 w-8': size === 'sm',
              'h-14 w-14': size === 'md',
              'h-24 w-24': size === 'lg',
            }
          )}
        />
        {/* Spinner Ring */}
        <div
          className={cn(
            'animate-spin rounded-full border-t-accent-cyan border-r-transparent border-b-transparent border-l-transparent',
            {
              'h-5 w-5 border-2': size === 'sm',
              'h-8 w-8 border-3': size === 'md',
              'h-12 w-12 border-4': size === 'lg',
            }
          )}
        />
      </div>
      <span className="mt-md font-mono text-label text-text-muted tracking-widest uppercase">
        Connecting Telemetry...
      </span>
    </div>
  );
}

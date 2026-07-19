import React from 'react';
import { cn } from '@/lib/utils';

interface GlobalErrorProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

export function GlobalError({
  title = 'Connection Timeout',
  message = 'Telemetry stream dropped. Check network and satellite sync state.',
  onRetry,
  className,
  ...props
}: GlobalErrorProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center p-xl text-center glass-panel rounded-lg max-w-[var(--width-reading-max)] mx-auto bg-bg-card border border-border-subtle shadow-overlay my-md',
        className
      )}
      {...props}
    >
      <div className="h-10 w-10 rounded-full bg-accent-alert/10 flex items-center justify-center mb-md text-accent-alert border border-accent-alert/20 font-bold">
        !
      </div>
      <h3 className="font-display text-h4 font-semibold tracking-tight text-text-primary mb-sm">
        {title}
      </h3>
      <p className="text-small text-text-muted mb-lg max-w-[80%] mx-auto">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="rounded px-lg py-sm text-small font-semibold bg-accent-blue text-white hover:bg-accent-blue/80 transition-colors"
        >
          Retry Telemetry
        </button>
      )}
    </div>
  );
}

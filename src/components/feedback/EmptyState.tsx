import React from 'react';
import { cn } from '@/lib/utils';

interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
}

export function EmptyState({
  title = 'No Telemetry Records',
  description = 'No active signal matching current scope coordinates.',
  icon,
  className,
  ...props
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center p-xl text-center border border-dashed border-border-subtle rounded-lg bg-black/10 min-h-[250px]',
        className
      )}
      {...props}
    >
      {icon ? (
        <div className="mb-md text-text-muted">{icon}</div>
      ) : (
        <div className="h-10 w-10 rounded-full bg-border-subtle flex items-center justify-center mb-md text-text-muted text-lg border border-border-subtle">
          ∅
        </div>
      )}
      <h3 className="font-display text-small font-semibold text-text-secondary mb-xs">{title}</h3>
      <p className="text-caption text-text-muted max-w-[280px]">{description}</p>
    </div>
  );
}

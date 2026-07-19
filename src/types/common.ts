import React from 'react';

export type StatusSeverity = 'success' | 'info' | 'warning' | 'error';

export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface AsyncDataState<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
}

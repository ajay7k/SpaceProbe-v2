import React, { Suspense, ReactNode } from 'react';
import { GlobalLoading } from '@/components/feedback/GlobalLoading';

interface SuspenseWrapperProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export function SuspenseWrapper({ children, fallback }: SuspenseWrapperProps) {
  return <Suspense fallback={fallback || <GlobalLoading size="md" blur />}>{children}</Suspense>;
}

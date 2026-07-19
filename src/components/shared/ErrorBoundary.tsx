import React, { ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  fallback?: ReactNode | ((error: Error, reset: () => void) => ReactNode);
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Standard debug console log; can be wired to telemetry monitoring later
    console.error('Uncaught boundary error:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  public render() {
    if (this.state.hasError && this.state.error) {
      if (typeof this.props.fallback === 'function') {
        return this.props.fallback(this.state.error, this.handleReset);
      }

      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="flex min-h-[400px] flex-col items-center justify-center p-xl text-center glass-panel rounded-lg max-w-[var(--width-reading-max)] mx-auto border border-border-subtle bg-bg-card shadow-overlay">
          <div className="h-12 w-12 rounded-full bg-accent-alert/10 flex items-center justify-center mb-lg text-accent-alert border border-accent-alert/20">
            ⚠
          </div>
          <h2 className="font-display text-h3 font-bold tracking-tight mb-sm text-text-primary">
            Critical Boundary Intercept
          </h2>
          <p className="text-small text-text-secondary mb-xl">
            A runtime exception halted interface compilation. Telemetry logs have captured this
            anomaly.
          </p>
          <pre className="text-caption text-accent-alert bg-black/40 p-md rounded border border-border-subtle font-mono text-left w-full overflow-x-auto mb-xl max-h-[150px]">
            {this.state.error.message}
          </pre>
          <button
            onClick={this.handleReset}
            className="rounded px-lg py-sm text-small font-semibold bg-accent-blue text-white hover:bg-accent-blue/80 transition-colors"
          >
            Attempt Restoration
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

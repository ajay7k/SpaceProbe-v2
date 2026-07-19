import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges CSS classes with tailwind-merge to resolve Tailwind conflicts correctly.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats telemetry values for scientific and technical precision.
 * Values >= 10,000 are formatted using scientific notation.
 * Values < 10,000 are formatted with clean decimal structures.
 */
export function formatTelemetryNumber(value: number, decimals: number = 2): string {
  if (value === 0) return '0';
  if (Math.abs(value) >= 10000) {
    return value.toExponential(decimals);
  }
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: decimals,
  }).format(value);
}

/**
 * Formats UTC timestamp into IST (Indian Standard Time) for telemetry dashboard displays.
 */
export function formatUTCtoIST(utcString: string): string {
  try {
    const date = new Date(utcString);
    return new Intl.DateTimeFormat('en-IN', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    }).format(date);
  } catch {
    return utcString;
  }
}

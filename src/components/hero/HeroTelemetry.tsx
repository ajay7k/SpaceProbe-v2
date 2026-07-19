import React, { useEffect, useState } from 'react';
import { formatTelemetryNumber } from '@/lib/utils';

interface TelemetryItemProps {
  label: string;
  value: string | number;
  unit?: string;
  statusColor?: string;
}

function TelemetryItem({ label, value, unit, statusColor }: TelemetryItemProps) {
  return (
    <div className="flex items-center gap-md px-lg py-xs">
      <div className="flex flex-col items-start gap-[2px]">
        <span className="text-[10px] uppercase tracking-wider font-semibold text-text-muted">
          {label}
        </span>
        <div className="flex items-baseline gap-xs">
          <span className="font-mono text-small font-bold text-text-secondary tabular-nums">
            {value}
          </span>
          {unit && <span className="font-mono text-[10px] text-text-muted">{unit}</span>}
        </div>
      </div>
      {statusColor && (
        <span
          className="h-1.5 w-1.5 rounded-full animate-pulse shrink-0"
          style={{ backgroundColor: statusColor }}
        />
      )}
    </div>
  );
}

export function HeroTelemetry() {
  const [solarWind, setSolarWind] = useState(412.5);
  const [protonFlux, setProtonFlux] = useState(14.2);
  const [kpIndex, setKpIndex] = useState(2.3);

  // Muted live coordinate updates to represent active tracking simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setSolarWind((prev) => +(prev + (Math.random() - 0.5) * 1.5).toFixed(1));
      setProtonFlux((prev) => +(prev + (Math.random() - 0.5) * 0.2).toFixed(1));
      setKpIndex((prev) => {
        const next = prev + (Math.random() - 0.5) * 0.1;
        return +Math.max(0, Math.min(9, next)).toFixed(1);
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-[var(--width-container-max)] mx-auto border-t border-border-subtle bg-black/10 select-none z-20">
      <div className="flex flex-wrap items-center justify-center gap-xs md:gap-md py-sm">
        <TelemetryItem
          label="Kp Index"
          value={kpIndex}
          statusColor={kpIndex < 4 ? 'var(--color-accent-teal)' : 'var(--color-accent-alert)'}
        />
        <div className="hidden sm:block text-border-subtle h-6 border-r" />
        <TelemetryItem
          label="Wind Speed"
          value={solarWind}
          unit="km/s"
          statusColor="var(--color-accent-teal)"
        />
        <div className="hidden sm:block text-border-subtle h-6 border-r" />
        <TelemetryItem
          label="Proton Flux"
          value={formatTelemetryNumber(protonFlux)}
          unit="p/cm²"
          statusColor="var(--color-accent-teal)"
        />
        <div className="hidden sm:block text-border-subtle h-6 border-r" />
        <TelemetryItem label="Sensor Feed" value="DSCOVR" statusColor="var(--color-accent-teal)" />
      </div>
    </div>
  );
}
export default HeroTelemetry;

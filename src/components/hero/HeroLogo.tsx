import React from 'react';
import logoUrl from '@/assets/logos/logo.svg';

export function HeroLogo() {
  return (
    <div className="flex justify-center items-center w-full select-none pointer-events-none mb-xl">
      <img
        src={logoUrl}
        alt="SPACEPROBE Logo"
        className="w-[clamp(240px,50vw,600px)] h-auto max-w-full select-none pointer-events-auto transition-all duration-500 hover:brightness-110 hover:drop-shadow-[0_0_30px_rgba(216,236,249,0.3)]"
      />
    </div>
  );
}
export default HeroLogo;

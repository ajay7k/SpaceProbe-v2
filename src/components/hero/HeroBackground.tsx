import React from 'react';
import { GalacticCanvas } from './GalacticCanvas';

export function HeroBackground() {
  return (
    <div className="absolute inset-0 select-none pointer-events-none" style={{ zIndex: 0 }}>
      {/* 2D Canvas Rotating starfield */}
      <GalacticCanvas />
    </div>
  );
}
export default HeroBackground;

import React, { MouseEvent } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { HeroBackground } from './HeroBackground';
import { HeroLogo } from './HeroLogo';

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section
      className="relative h-[100svh] min-h-[600px] w-full flex flex-col justify-between overflow-hidden bg-[#0A0A0A] text-white group"
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 77, 192, 0.15),
              transparent 80%
            )
          `,
          zIndex: 1,
        }}
      />

      {/* Dynamic Background Canvas Layer */}
      <HeroBackground />

      {/* Spacer to push Logo to center */}
      <div className="flex-1" />

      {/* Centered Logo */}
      <div className="flex flex-col justify-center items-center z-10">
        <HeroLogo />
      </div>

      {/* Spacer to push Know More to bottom */}
      <div className="flex-1 flex flex-col justify-end items-center z-20 pb-xl">
        <a
          href="#about"
          className="group/btn flex flex-col items-center gap-xs text-[11px] uppercase tracking-widest font-bold text-text-secondary hover:text-text-primary transition-colors cursor-pointer select-none outline-none focus-visible:ring-2 focus-visible:ring-[#004DC0] rounded-sm p-2"
          aria-label="Scroll to Who We Are section"
        >
          <span>Know More</span>
          <motion.span
            animate={{
              y: [0, 5, 0],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="text-white/70 group-hover/btn:text-white"
          >
            ↓
          </motion.span>
        </a>
      </div>
    </section>
  );
}
export default Hero;

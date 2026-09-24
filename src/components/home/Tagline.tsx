import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { TAGLINE } from '@/content/homepage';
import { useMediaQuery } from '@/hooks/use-media-query';

export function Tagline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });

  // Parallax/rotation effects for the orbital mechanics
  const orbit1Rotation = useTransform(smoothProgress, [0, 1], [-20, 20]);
  const orbit2Rotation = useTransform(smoothProgress, [0, 1], [40, -10]);
  const orbit3Rotation = useTransform(smoothProgress, [0, 1], [-60, 30]);

  // Telemetry node tracing along the orbits
  const pathProgress1 = useTransform(smoothProgress, [0.3, 0.7], [0, 1]);
  const pathProgress2 = useTransform(smoothProgress, [0.4, 0.8], [0, 1]);
  const pathProgress3 = useTransform(smoothProgress, [0.5, 0.9], [0, 1]);

  const lines = TAGLINE.text.split('\n');

  // Hardcode 3 transforms to obey Rules of Hooks
  const o1 = useTransform(smoothProgress, [0.3, 0.45], [0, 1]);
  const y1 = useTransform(smoothProgress, [0.3, 0.45], [40, 0]);
  const b1 = useTransform(smoothProgress, [0.3, 0.45], [12, 0]);
  const blur1 = useTransform(b1, (b) => `blur(${b}px)`);

  const o2 = useTransform(smoothProgress, [0.45, 0.6], [0, 1]);
  const y2 = useTransform(smoothProgress, [0.45, 0.6], [40, 0]);
  const b2 = useTransform(smoothProgress, [0.45, 0.6], [12, 0]);
  const blur2 = useTransform(b2, (b) => `blur(${b}px)`);

  const o3 = useTransform(smoothProgress, [0.6, 0.75], [0, 1]);
  const y3 = useTransform(smoothProgress, [0.6, 0.75], [40, 0]);
  const b3 = useTransform(smoothProgress, [0.6, 0.75], [12, 0]);
  const blur3 = useTransform(b3, (b) => `blur(${b}px)`);

  const lineTransforms = [
    {
      opacity: prefersReducedMotion ? 1 : o1,
      y: prefersReducedMotion ? 0 : y1,
      filter: prefersReducedMotion ? 'none' : blur1,
    },
    {
      opacity: prefersReducedMotion ? 1 : o2,
      y: prefersReducedMotion ? 0 : y2,
      filter: prefersReducedMotion ? 'none' : blur2,
    },
    {
      opacity: prefersReducedMotion ? 1 : o3,
      y: prefersReducedMotion ? 0 : y3,
      filter: prefersReducedMotion ? 'none' : blur3,
    },
  ];

  return (
    <section
      ref={containerRef}
      aria-label="SpaceProbe Philosophy"
      className="relative w-full h-[80vh] min-h-[500px] bg-[#0A0A0A] text-white overflow-hidden flex items-center justify-center border-t border-[#D8ECF9]/10"
    >
      {/* Scientific Visualization: Orbital Mechanics & Satellite Vector Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-50">
        <svg
          viewBox="0 0 1000 1000"
          className="w-[140vw] h-[140vw] max-w-[1100px] max-h-[1100px] opacity-40"
        >
          <defs>
            <linearGradient id="orbit-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#004DC0" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#D8ECF9" stopOpacity="0.1" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Orbit 1 */}
          <motion.g
            style={{ rotate: prefersReducedMotion ? 0 : orbit1Rotation, transformOrigin: 'center' }}
          >
            <ellipse
              cx="500"
              cy="500"
              rx="450"
              ry="150"
              fill="none"
              stroke="url(#orbit-grad)"
              strokeWidth="1"
              strokeDasharray="4 8"
            />
            <motion.path
              d="M 50 500 A 450 150 0 1 1 950 500 A 450 150 0 1 1 50 500"
              fill="none"
              stroke="#D8ECF9"
              strokeWidth="2"
              filter="url(#glow)"
              style={{
                pathLength: prefersReducedMotion ? 1 : pathProgress1,
                opacity: prefersReducedMotion ? 0.8 : pathProgress1,
              }}
            />
          </motion.g>

          {/* Orbit 2 */}
          <motion.g
            style={{ rotate: prefersReducedMotion ? 0 : orbit2Rotation, transformOrigin: 'center' }}
          >
            <ellipse
              cx="500"
              cy="500"
              rx="350"
              ry="250"
              fill="none"
              stroke="url(#orbit-grad)"
              strokeWidth="1"
              opacity="0.6"
            />
            <motion.path
              d="M 150 500 A 350 250 0 1 1 850 500 A 350 250 0 1 1 150 500"
              fill="none"
              stroke="#004DC0"
              strokeWidth="2.5"
              filter="url(#glow)"
              style={{
                pathLength: prefersReducedMotion ? 1 : pathProgress2,
                opacity: prefersReducedMotion ? 0.8 : pathProgress2,
              }}
            />
          </motion.g>

          {/* Orbit 3 */}
          <motion.g
            style={{ rotate: prefersReducedMotion ? 0 : orbit3Rotation, transformOrigin: 'center' }}
          >
            <ellipse
              cx="500"
              cy="500"
              rx="200"
              ry="400"
              fill="none"
              stroke="#004DC0"
              strokeWidth="1"
              strokeDasharray="2 12"
              opacity="0.4"
            />
            <motion.path
              d="M 300 500 A 200 400 0 1 1 700 500 A 200 400 0 1 1 300 500"
              fill="none"
              stroke="#D8ECF9"
              strokeWidth="1.5"
              filter="url(#glow)"
              style={{
                pathLength: prefersReducedMotion ? 1 : pathProgress3,
                opacity: prefersReducedMotion ? 0.8 : pathProgress3,
              }}
            />
          </motion.g>
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-[1.3] font-display font-medium text-white tracking-tight flex flex-col gap-2">
          {lines.map((line, idx) => {
            const transforms = lineTransforms[idx] || lineTransforms[2];
            return (
              <motion.span
                key={idx}
                style={{
                  opacity: transforms.opacity,
                  y: transforms.y,
                  filter: transforms.filter,
                }}
                className={
                  idx === lines.length - 1
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#D8ECF9] via-white to-[#00a8ff] font-bold mt-2'
                    : 'text-white/80'
                }
              >
                {line}
              </motion.span>
            );
          })}
        </h2>
      </div>
    </section>
  );
}

export default Tagline;

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { TAGLINE } from '@/content/homepage';

export function Tagline() {
  const containerRef = useRef<HTMLDivElement>(null);

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

  // Hardcode 3 transforms to obey Rules of Hooks (since the tagline has 3 lines)
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
    { opacity: o1, y: y1, filter: blur1 },
    { opacity: o2, y: y2, filter: blur2 },
    { opacity: o3, y: y3, filter: blur3 },
  ];

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[100vh] min-h-[600px] bg-[#0A0A0A] text-white overflow-hidden flex items-center justify-center"
    >
      {/* Elegant Scientific Visualization: Satellite Telemetry / Orbital Mechanics */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-60">
        <svg
          viewBox="0 0 1000 1000"
          className="w-[150vw] h-[150vw] max-w-[1200px] max-h-[1200px] opacity-40"
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
          <motion.g style={{ rotate: orbit1Rotation, transformOrigin: 'center' }}>
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
              style={{ pathLength: pathProgress1, opacity: pathProgress1 }}
            />
          </motion.g>

          {/* Orbit 2 */}
          <motion.g style={{ rotate: orbit2Rotation, transformOrigin: 'center' }}>
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
              style={{ pathLength: pathProgress2, opacity: pathProgress2 }}
            />
          </motion.g>

          {/* Orbit 3 */}
          <motion.g style={{ rotate: orbit3Rotation, transformOrigin: 'center' }}>
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
              style={{ pathLength: pathProgress3, opacity: pathProgress3 }}
            />
          </motion.g>
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-[var(--width-container-max)] mx-auto px-lg md:px-xl text-center">
        <h2 className="text-h2 md:text-h1 lg:text-display leading-[1.3] font-display font-medium text-white tracking-tight flex flex-col gap-2">
          {lines.map((line, idx) => {
            const transforms = lineTransforms[idx] || lineTransforms[2]; // fallback to last if more lines exist
            return (
              <motion.span
                key={idx}
                style={{
                  opacity: transforms.opacity,
                  y: transforms.y,
                  filter: transforms.filter,
                }}
                className={
                  idx === lines.length - 1 ? 'text-[#D8ECF9] font-bold mt-4' : 'text-white/80'
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

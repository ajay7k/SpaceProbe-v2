import React from 'react';
import { motion } from 'framer-motion';
import { WHO_WE_ARE } from '@/content/homepage';
import { ArrowRight, Compass } from 'lucide-react';
import { useMediaQuery } from '@/hooks/use-media-query';

const EASE = [0.16, 1, 0.3, 1];

export function WhoWeAre() {
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  const handleScrollToSolutions = () => {
    const el = document.getElementById('solutions');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="about"
      aria-label="About SpaceProbe"
      className="relative w-full min-h-[90vh] lg:min-h-screen bg-[#0A0A0A] text-white py-20 md:py-28 flex items-center border-t border-[#D8ECF9]/10 overflow-hidden"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,77,192,0.12)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Narrative (approx 42-45% width: 5 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: EASE }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            {/* Section Tag */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono text-[#00a8ff] tracking-widest font-semibold">
                [{WHO_WE_ARE.sectionNumber}]
              </span>
              <span className="h-px w-6 bg-[#004DC0]" />
              <span className="text-[11px] font-mono tracking-widest uppercase text-[#D8ECF9]/80 font-bold">
                {WHO_WE_ARE.tag}
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white leading-[1.15] mb-6">
              {WHO_WE_ARE.heading}
            </h2>

            {/* Concise Narrative */}
            <div className="flex flex-col gap-4 text-text-secondary text-sm md:text-base font-light leading-relaxed mb-8">
              {WHO_WE_ARE.paragraphs.map((p, idx) => (
                <p key={idx} className={idx === 0 ? 'text-white/90 font-normal' : ''}>
                  {p}
                </p>
              ))}
            </div>

            {/* Clean Action Link */}
            <div>
              <button
                type="button"
                onClick={handleScrollToSolutions}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00a8ff] hover:text-white transition-colors group outline-none focus-visible:ring-2 focus-visible:ring-[#004DC0] rounded"
              >
                <span>Explore Connected Domains</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Noticeably Larger Scientific Visualization (approx 55-58% width: 7 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: EASE, delay: 0.15 }}
            className="lg:col-span-7 flex justify-center items-center w-full"
          >
            <div className="relative w-full aspect-[16/11] max-w-[660px] rounded-3xl bg-gradient-to-br from-[#0E1334]/80 via-[#0A0A0A] to-[#0E1334]/50 border border-[#D8ECF9]/15 shadow-2xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
              {/* Top Instrumentation Header Bar */}
              <div className="relative z-10 flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#00a8ff] animate-pulse" />
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#D8ECF9]">
                    Sun–Earth Coupled Dynamics
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-text-muted text-[10px] font-mono">
                  <Compass size={13} className="text-[#00a8ff]" />
                  <span>Geomagnetic Model</span>
                </div>
              </div>

              {/* Central Scientific Diagram: Sun -> Solar Wind Flux -> Bow Shock -> Magnetosphere -> Earth */}
              <div className="relative z-10 w-full my-auto py-2 flex items-center justify-center">
                <svg
                  viewBox="0 0 600 340"
                  className="w-full h-auto select-none pointer-events-none"
                >
                  <defs>
                    {/* Solar Glow Gradient */}
                    <radialGradient id="sun-glow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#D8ECF9" stopOpacity="0.9" />
                      <stop offset="40%" stopColor="#00a8ff" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#004DC0" stopOpacity="0" />
                    </radialGradient>

                    {/* Solar Wind Linear Flow Gradient */}
                    <linearGradient id="wind-flow" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#D8ECF9" stopOpacity="0.2" />
                      <stop offset="60%" stopColor="#00a8ff" stopOpacity="0.7" />
                      <stop offset="100%" stopColor="#004DC0" stopOpacity="0.9" />
                    </linearGradient>

                    {/* Earth Core Gradient */}
                    <radialGradient id="earth-grad" cx="40%" cy="40%" r="60%">
                      <stop offset="0%" stopColor="#D8ECF9" stopOpacity="0.95" />
                      <stop offset="50%" stopColor="#004DC0" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#070913" stopOpacity="1" />
                    </radialGradient>
                  </defs>

                  {/* 1. SUN / SOLAR EMISSION (Left) */}
                  <g transform="translate(60, 170)">
                    {/* Pulsing Solar Corona */}
                    <motion.circle
                      cx="0"
                      cy="0"
                      r="46"
                      fill="url(#sun-glow)"
                      animate={
                        prefersReducedMotion
                          ? {}
                          : { scale: [0.95, 1.08, 0.95], opacity: [0.7, 0.95, 0.7] }
                      }
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <circle cx="0" cy="0" r="26" fill="#00a8ff" opacity="0.4" />
                    <circle cx="0" cy="0" r="16" fill="#D8ECF9" />
                    <text
                      x="0"
                      y="42"
                      textAnchor="middle"
                      fill="#D8ECF9"
                      fontSize="9"
                      fontFamily="monospace"
                      letterSpacing="0.1em"
                      opacity="0.8"
                    >
                      SOLAR WIND / CME
                    </text>
                  </g>

                  {/* 2. SOLAR WIND STREAMLINES (Flowing from Left to Right toward Earth) */}
                  <g stroke="url(#wind-flow)" fill="none" opacity="0.65">
                    {/* Upper Streamlines */}
                    <path
                      d="M 110,130 Q 250,110 380,80 Q 440,65 520,60"
                      strokeWidth="1.2"
                      strokeDasharray="6 8"
                      className={prefersReducedMotion ? '' : 'solar-wind-stream'}
                    />
                    <path
                      d="M 120,150 Q 260,140 370,120 Q 420,110 520,105"
                      strokeWidth="1.5"
                      strokeDasharray="5 7"
                    />

                    {/* Central Equatorial Streamline */}
                    <path
                      d="M 125,170 L 360,170"
                      strokeWidth="2"
                      strokeDasharray="4 6"
                      stroke="#00a8ff"
                    />

                    {/* Lower Streamlines */}
                    <path
                      d="M 120,190 Q 260,200 370,220 Q 420,230 520,235"
                      strokeWidth="1.5"
                      strokeDasharray="5 7"
                    />
                    <path
                      d="M 110,210 Q 250,230 380,260 Q 440,275 520,280"
                      strokeWidth="1.2"
                      strokeDasharray="6 8"
                    />
                  </g>

                  {/* 3. MAGNETOSPHERIC BOW SHOCK (Deflecting incoming solar stream) */}
                  <g transform="translate(430, 170)">
                    {/* Bow Shock Parabolic Arc */}
                    <path
                      d="M -70,-120 Q -105,0 -70,120"
                      fill="none"
                      stroke="#00a8ff"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      opacity="0.8"
                    />
                    <text
                      x="-85"
                      y="-126"
                      textAnchor="middle"
                      fill="#00a8ff"
                      fontSize="8"
                      fontFamily="monospace"
                      letterSpacing="0.08em"
                    >
                      BOW SHOCK
                    </text>

                    {/* Magnetopause Shielding Boundary */}
                    <path
                      d="M -45,-90 Q -65,0 -45,90 Q 30,130 110,135"
                      fill="none"
                      stroke="#D8ECF9"
                      strokeWidth="1.5"
                      opacity="0.5"
                    />
                    <path
                      d="M -45,90 Q 30,130 110,135"
                      fill="none"
                      stroke="#D8ECF9"
                      strokeWidth="1.5"
                      opacity="0.5"
                    />
                    <path
                      d="M -45,-90 Q 30,-130 110,-135"
                      fill="none"
                      stroke="#D8ECF9"
                      strokeWidth="1.5"
                      opacity="0.5"
                    />

                    {/* Dipole Geomagnetic Field Loops */}
                    <path
                      d="M 0,-18 C -30,-45 -40,45 0,18"
                      fill="none"
                      stroke="#004DC0"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M 0,-18 C -55,-75 -65,75 0,18"
                      fill="none"
                      stroke="#00a8ff"
                      strokeWidth="1.2"
                      strokeDasharray="3 4"
                      opacity="0.7"
                    />
                    <path
                      d="M 0,-18 C 55,-75 65,75 0,18"
                      fill="none"
                      stroke="#00a8ff"
                      strokeWidth="1.2"
                      strokeDasharray="3 4"
                      opacity="0.7"
                    />

                    {/* Orbital Trajectory Ellipse */}
                    <ellipse
                      cx="0"
                      cy="0"
                      rx="38"
                      ry="38"
                      fill="none"
                      stroke="rgba(216, 236, 249, 0.25)"
                      strokeWidth="1"
                      strokeDasharray="2 4"
                    />

                    {/* Satellite Node traversing orbit */}
                    <motion.g
                      animate={prefersReducedMotion ? {} : { rotate: 360 }}
                      transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                      style={{ transformOrigin: '0px 0px' }}
                    >
                      <circle cx="38" cy="0" r="3.5" fill="#D8ECF9" />
                      <circle
                        cx="38"
                        cy="0"
                        r="7"
                        fill="none"
                        stroke="#00a8ff"
                        strokeWidth="1"
                        opacity="0.6"
                      />
                    </motion.g>

                    {/* Earth Sphere */}
                    <circle
                      cx="0"
                      cy="0"
                      r="18"
                      fill="url(#earth-grad)"
                      stroke="#00a8ff"
                      strokeWidth="1.5"
                    />
                    <circle cx="0" cy="0" r="14" fill="#004DC0" opacity="0.4" />
                    <text
                      x="0"
                      y="32"
                      textAnchor="middle"
                      fill="#D8ECF9"
                      fontSize="9"
                      fontFamily="monospace"
                      letterSpacing="0.1em"
                    >
                      EARTH
                    </text>
                  </g>
                </svg>
              </div>

              {/* Bottom Telemetry Legend */}
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/10 text-[10px] font-mono text-text-muted">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D8ECF9]" />
                    <span>Solar Wind Vector</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00a8ff]" />
                    <span>Geomagnetic Cavity</span>
                  </span>
                </div>
                <span className="text-[#00a8ff]/80">Scale: Interplanetary</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;

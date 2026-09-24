import React from 'react';
import { motion } from 'framer-motion';
import { WHY_IT_MATTERS } from '@/content/homepage';
import { Zap, Satellite, Plane, Navigation, Radio, Shield } from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1];

const ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Zap,
  Satellite,
  Plane,
  Navigation,
  Radio,
  Shield,
};

export function WhyItMatters() {
  return (
    <section
      id="impact"
      aria-label="Why Space Weather and Space Intelligence Matters"
      className="relative w-full bg-[#0A0A0A] text-white py-20 md:py-24 overflow-hidden min-h-[90vh] flex flex-col justify-center border-t border-[#D8ECF9]/10"
    >
      {/* Background Visual: Visibly Raised Planetary Horizon / Magnetospheric Arc */}
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-end items-center overflow-hidden z-0">
        {/* Raised Atmospheric / Planetary Horizon Curve */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.2, ease: EASE }}
          className="absolute -bottom-16 sm:-bottom-12 md:-bottom-8 w-[140vw] max-w-[1700px] h-[300px] sm:h-[360px] md:h-[420px] rounded-t-[100%] bg-gradient-to-t from-[#0E1334] via-[#070913]/90 to-transparent border-t-2 border-[#00a8ff]/50 shadow-[0_-25px_80px_rgba(0,168,255,0.35)]"
        />

        {/* Faint Orbital Line Tracing the Horizon */}
        <div className="absolute -bottom-10 sm:-bottom-6 md:-bottom-2 w-[130vw] max-w-[1600px] h-[280px] sm:h-[340px] md:h-[400px] rounded-t-[100%] border-t border-dashed border-[#D8ECF9]/20" />

        {/* Auroral Limb Glow Pulse */}
        <motion.div
          animate={{ opacity: [0.35, 0.6, 0.35], scale: [1, 1.02, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-4 w-[110vw] max-w-[1300px] h-[220px] sm:h-[260px] rounded-t-[100%] bg-[radial-gradient(ellipse_at_top,rgba(0,168,255,0.22)_0%,rgba(0,77,192,0.1)_45%,transparent_75%)] blur-2xl"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 md:mb-12"
        >
          {/* Section Tag */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono text-[#00a8ff] tracking-widest font-semibold">
              [{WHY_IT_MATTERS.sectionNumber}]
            </span>
            <span className="h-px w-6 bg-[#004DC0]" />
            <span className="text-[11px] font-mono tracking-widest uppercase text-[#D8ECF9]/80 font-bold">
              {WHY_IT_MATTERS.tag}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight leading-tight mb-3">
            {WHY_IT_MATTERS.heading}
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-text-secondary font-light leading-relaxed">
            {WHY_IT_MATTERS.subheading} {WHY_IT_MATTERS.narrative}
          </p>
        </motion.div>

        {/* 4 Representative Impact Areas (Power, Satellites, Aviation, GNSS) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-8">
          {WHY_IT_MATTERS.impactVectors.map((vector, idx) => {
            const IconComponent = ICONS[vector.icon] || Shield;
            return (
              <motion.div
                key={vector.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, ease: EASE, delay: idx * 0.08 }}
                className="group p-5 md:p-6 rounded-2xl bg-black/45 hover:bg-white/[0.05] border border-[#D8ECF9]/10 hover:border-[#00a8ff]/40 backdrop-blur-md transition-all duration-300 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="h-9 w-9 rounded-xl bg-[#004DC0]/20 border border-[#004DC0]/40 flex items-center justify-center text-[#00a8ff] group-hover:scale-110 transition-transform">
                      <IconComponent size={18} />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#00a8ff]/80 font-bold px-2 py-0.5 rounded-full bg-[#004DC0]/10 border border-[#004DC0]/20">
                      {vector.system}
                    </span>
                  </div>
                  <h3 className="text-base font-display font-bold text-white mb-2 group-hover:text-[#D8ECF9] transition-colors leading-snug">
                    {vector.title}
                  </h3>
                  <p className="text-xs text-text-muted font-light leading-relaxed">
                    {vector.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Punchline Statement Framed Above the Raised Planetary Horizon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-center pt-5 relative z-10"
        >
          <span className="text-base sm:text-lg md:text-xl font-display font-medium text-white tracking-wide drop-shadow-[0_2px_15px_rgba(0,168,255,0.4)]">
            “{WHY_IT_MATTERS.punchline}”
          </span>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyItMatters;

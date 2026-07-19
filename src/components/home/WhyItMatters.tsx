import React from 'react';
import { motion } from 'framer-motion';
import { WHY_IT_MATTERS } from '@/content/homepage';

const EASE = [0.16, 1, 0.3, 1];

export function WhyItMatters() {
  return (
    <section
      id="impact"
      className="relative w-full bg-[#0A0A0A] text-white py-32 md:py-48 overflow-hidden min-h-screen flex items-center"
    >
      {/* Background Visual: Magnetosphere / Atmospheric Glow */}
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-end items-center overflow-hidden">
        {/* Core Earth shadow/arc */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.5, ease: EASE }}
          className="absolute bottom-[-40vw] w-[120vw] h-[60vw] rounded-[100%] bg-black border-t border-[#004DC0]/40 shadow-[0_-50px_150px_rgba(0,77,192,0.2)]"
        />

        {/* Breathing Auroral Glow */}
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-[-20vw] w-[100vw] h-[50vw] rounded-[100%] bg-[radial-gradient(ellipse_at_top,rgba(216,236,249,0.15)_0%,rgba(0,77,192,0.05)_50%,transparent_100%)] blur-[40px]"
        />

        {/* Subtle grid/wireframe on the magnetosphere */}
        <div className="absolute bottom-[-40vw] w-[120vw] h-[60vw] rounded-[100%] bg-[linear-gradient(rgba(216,236,249,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(216,236,249,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_top,black_10%,transparent_70%)]" />
      </div>

      <div className="relative z-10 w-full max-w-[var(--width-container-max)] mx-auto px-lg md:px-xl mb-32">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: EASE }}
            className="flex items-center gap-md mb-xl"
          >
            <span className="text-h4 font-display text-text-muted opacity-40">
              [{WHY_IT_MATTERS.sectionNumber}]
            </span>
            <span className="h-px w-8 bg-[#004DC0]" />
            <span className="text-caption font-bold tracking-[0.2em] text-[#D8ECF9] uppercase">
              {WHY_IT_MATTERS.heading}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: EASE, delay: 0.1 }}
            className="text-h2 md:text-h1 lg:text-display leading-[1.1] font-display font-medium text-white tracking-tight mb-16 drop-shadow-[0_0_30px_rgba(0,0,0,0.8)]"
          >
            {WHY_IT_MATTERS.subheading}
          </motion.h2>

          <div className="flex flex-col gap-6 items-center">
            {WHY_IT_MATTERS.paragraphs.map((par, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.2 + 0.1 * idx }}
                className="text-body-large md:text-h4 text-text-secondary leading-[1.7] max-w-[800px] font-light"
              >
                {par}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyItMatters;

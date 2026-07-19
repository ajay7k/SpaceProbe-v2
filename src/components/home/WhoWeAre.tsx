import React from 'react';
import { motion } from 'framer-motion';
import { WHO_WE_ARE } from '@/content/homepage';
import { cn } from '@/lib/utils';

// Cinematic Physics easing curve
const EASE = [0.16, 1, 0.3, 1];

const KEYWORDS = [
  'Sun',
  'Earth',
  'solar flares',
  'coronal mass ejections',
  'geomagnetic storms',
  'space weather',
  'SpaceProbe',
  'DPIIT-recognized',
  'University of Mumbai',
  'heliophysics',
  'geospatial analytics',
  'STEM education',
  'solar transients',
  'solar energetic particles',
  'corotating interaction regions',
];

function highlightText(text: string) {
  const regex = new RegExp(`(${KEYWORDS.join('|')})`, 'gi');
  const parts = text.split(regex);
  return parts.map((part, i) => {
    if (KEYWORDS.some((kw) => kw.toLowerCase() === part.toLowerCase())) {
      // Subtle emphasis on important scientific terms using Ice Blue
      return (
        <span key={i} className="font-medium text-[#D8ECF9]">
          {part}
        </span>
      );
    }
    return part;
  });
}

export function WhoWeAre() {
  return (
    <section
      id="about"
      className="relative w-full bg-[#0A0A0A] text-white py-32 md:py-48 border-t border-[#D8ECF9]/10"
    >
      <div className="max-w-[var(--width-container-max)] mx-auto px-lg md:px-xl">
        {/* Editorial Layout: Large Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: EASE }}
          className="mb-24 md:mb-32 max-w-4xl"
        >
          <h2 className="text-h1 md:text-display leading-[1.1] font-display font-bold text-white tracking-tight">
            {WHO_WE_ARE.heading}
          </h2>
        </motion.div>

        {/* Editorial Layout: Paragraphs */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-xl">
          <div className="md:col-span-4 lg:col-span-5">
            {/* Empty column or subtle accent to create generous whitespace */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              whileInView={{ opacity: 1, height: '100px' }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, ease: EASE, delay: 0.2 }}
              className="w-px bg-gradient-to-b from-[#004DC0]/40 to-transparent hidden md:block"
            />
          </div>

          <div className="md:col-span-8 lg:col-span-7 flex flex-col gap-10">
            {WHO_WE_ARE.paragraphs.map((par, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.1 * idx }}
                className={cn(
                  'leading-[1.6] font-light max-w-[700px]',
                  idx === 1
                    ? 'text-[#004DC0] font-medium text-h3 md:text-h2'
                    : 'text-text-secondary text-body-large md:text-h4'
                )}
              >
                {highlightText(par)}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

export function HeroDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="w-full max-w-[850px] mx-auto text-center z-20 mt-lg">
      {/* V1 Inspired Custom Toggle Button */}
      <button
        onClick={toggleOpen}
        aria-expanded={isOpen}
        className={cn(
          'px-xl py-md rounded-xl border border-accent-cyan/30 text-text-primary text-small font-medium tracking-wide cursor-pointer transition-all duration-350 backdrop-blur-md shadow-[0_4px_15px_rgba(0,200,255,0.15)] bg-white/5 hover:bg-[rgba(0,160,255,0.1)] hover:border-accent-cyan/50 hover:shadow-[0_0_25px_rgba(0,200,255,0.35)] hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-accent-cyan'
        )}
      >
        {isOpen ? 'Close ▲' : 'Know More ▼'}
      </button>

      {/* Expandable Dropdown Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: 'auto',
              opacity: 1,
              transition: {
                height: { type: 'spring', stiffness: 100, damping: 18 },
                opacity: { duration: 0.3 },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.25 },
                opacity: { duration: 0.2 },
              },
            }}
            className="overflow-hidden mt-lg"
          >
            {/* The Glassmorphic description panel */}
            <div className="relative rounded-2xl border border-accent-cyan/25 bg-[rgba(10,20,40,0.65)] backdrop-blur-xl px-lg py-xl md:px-xl md:py-xxl text-text-secondary text-small md:text-body leading-relaxed text-justify shadow-[0_4px_30px_rgba(0,200,255,0.15)] max-w-full">
              {/* Subtle background noise texture simulation using CSS gradient to keep it private/offline */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.06] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] rounded-2xl" />

              <div className="relative z-10 flex flex-col gap-md">
                <p>
                  SpaceProbe Pvt Ltd is a pioneering company founded with the mission to bridge the
                  gap between cutting-edge research and real-world applications. We are dedicated to
                  developing innovative tools and services that empower communities, industries, and
                  institutions.
                </p>
                <p>
                  Our expertise spans space weather alerts and forecasting, geospatial intelligence
                  through GIS and remote sensing, and advanced technological solutions, all designed
                  to promote sustainable growth and informed decision-making.
                </p>
                <p>
                  Beyond technology, we are equally committed to nurturing a scientific temperament
                  in society. Through science outreach, exhibitions, corporate events, workshops,
                  training schools, and citizen science programs, we strive to make science more
                  accessible and engaging for all.
                </p>
                <p>
                  By uniting scientific expertise with technological innovation, SpaceProbe seeks to
                  build a strong ecosystem where knowledge, exploration, and application move
                  together, helping communities not just understand space but truly benefit from it.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

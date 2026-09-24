import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { WHAT_WE_OFFER } from '@/content/homepage';
import { DomainCard } from './DomainCard';

export function WhatWeOffer() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const domains = WHAT_WE_OFFER.domains;
  const activeIndex = hoverIndex !== null ? hoverIndex : 0;

  return (
    <section
      id="solutions"
      aria-label="What SpaceProbe Offers"
      className="relative w-full bg-[#0A0A0A] text-white py-20 md:py-24 border-t border-[#D8ECF9]/10 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col justify-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center mb-10 md:mb-12 shrink-0"
        >
          {/* Section Tag */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono text-[#00a8ff] tracking-widest font-semibold">
              [{WHAT_WE_OFFER.sectionNumber}]
            </span>
            <span className="h-px w-6 bg-[#004DC0]" />
            <span className="text-[11px] font-mono tracking-widest uppercase text-[#D8ECF9]/80 font-bold">
              {WHAT_WE_OFFER.tag}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight mb-3">
            {WHAT_WE_OFFER.heading}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-text-secondary max-w-2xl font-light leading-relaxed">
            {WHAT_WE_OFFER.description}
          </p>
        </motion.div>

        {/* Stacked Cards Container: Horizontal on desktop, Vertical on mobile */}
        <div className="flex flex-col lg:flex-row w-full lg:h-[520px] gap-3 md:gap-4 relative">
          {domains.map((domain, index) => (
            <DomainCard
              key={domain.id}
              domain={domain}
              index={index}
              isActive={activeIndex === index}
              isMobile={isMobile}
              onHoverStart={() => !isMobile && setHoverIndex(index)}
              onHoverEnd={() => !isMobile && setHoverIndex(activeIndex)}
              onClick={() => setHoverIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;

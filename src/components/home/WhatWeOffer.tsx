import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { WHAT_WE_OFFER } from '@/content/homepage';
import { DomainCard } from './DomainCard';

export function WhatWeOffer() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
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
    <section id="products" className="relative w-full bg-[#0A0A0A] text-white py-32 md:py-48">
      <div className="w-full max-w-[var(--width-container-max)] mx-auto px-lg md:px-xl flex flex-col h-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center mb-16 md:mb-24 shrink-0"
        >
          <h2 className="text-h2 lg:text-h1 font-display font-bold text-white tracking-tight mb-4">
            {WHAT_WE_OFFER.heading}
          </h2>
          <h3 className="text-h4 lg:text-h3 font-display font-medium text-[#D8ECF9] tracking-wide mb-6">
            {WHAT_WE_OFFER.subheading}
          </h3>
          <p className="text-body-large md:text-h4 text-text-secondary max-w-[800px] font-light leading-relaxed">
            {WHAT_WE_OFFER.description}
          </p>
        </motion.div>

        {/* Stacked Cards Container */}
        <div className="flex flex-col lg:flex-row w-full h-[800px] md:h-[600px] lg:h-[700px] gap-sm relative">
          {domains.map((domain, index) => (
            <DomainCard
              key={domain.id}
              domain={domain}
              isActive={activeIndex === index}
              isMobile={isMobile}
              onHoverStart={() => setHoverIndex(index)}
              onHoverEnd={() => setHoverIndex(null)}
              onClick={() => isMobile && setHoverIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;

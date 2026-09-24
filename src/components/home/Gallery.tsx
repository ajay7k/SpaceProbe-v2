import React from 'react';
import { motion } from 'framer-motion';
import { GALLERY_IMAGES } from '@/content/homepage';
import { GalleryItem } from './GalleryItem';

const EASE = [0.16, 1, 0.3, 1];

export function Gallery() {
  return (
    <section
      id="gallery"
      aria-label="Field Work, Research, and Academic Gallery"
      className="py-20 md:py-28 relative z-10 bg-[#0A0A0A] text-white overflow-hidden border-t border-[#D8ECF9]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            {/* Section Tag */}
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-xs font-mono text-[#00a8ff] tracking-widest font-semibold">
                [05]
              </span>
              <span className="h-px w-6 bg-[#004DC0]" />
              <span className="text-[11px] font-mono tracking-widest uppercase text-[#D8ECF9]/80 font-bold">
                FIELD & RESEARCH
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight mb-4">
              Field Work, Research & Academic Impact
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-text-secondary font-light leading-relaxed">
              Glimpses into our laboratories, research publications, instrumentation development,
              and educational outreach.
            </p>
          </motion.div>
        </div>

        {/* Curated Editorial Collage Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 md:gap-5 auto-rows-[240px] sm:auto-rows-[260px] lg:auto-rows-[290px]">
          {GALLERY_IMAGES.map((img, idx) => (
            <GalleryItem key={idx} index={idx} image={img} className={img.span} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;

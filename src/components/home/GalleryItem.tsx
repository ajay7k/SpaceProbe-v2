import React from 'react';
import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];

interface GalleryItemProps {
  image: {
    src: string;
    alt: string;
    category?: string;
  };
  index: number;
  className?: string;
}

export function GalleryItem({ image, index, className = '' }: GalleryItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: EASE, delay: index * 0.08 }}
      className={`relative rounded-3xl overflow-hidden cursor-pointer group border border-[#D8ECF9]/10 bg-[#0E1334] ${className}`}
    >
      <motion.img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.7, ease: EASE }}
        className="w-full h-full object-cover block"
      />

      {/* Subtle overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/95 via-[#0A0A0A]/40 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300" />

      {/* Content overlay */}
      <div className="absolute inset-0 p-5 sm:p-6 md:p-8 flex flex-col justify-end">
        <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-300 ease-out">
          {image.category && (
            <span className="text-[#00a8ff] font-bold text-[10px] sm:text-xs font-mono tracking-widest uppercase mb-1.5 block">
              {image.category}
            </span>
          )}
          <h3 className="text-white font-display font-bold text-base sm:text-lg md:text-xl leading-snug drop-shadow-md">
            {image.alt}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}

export default GalleryItem;

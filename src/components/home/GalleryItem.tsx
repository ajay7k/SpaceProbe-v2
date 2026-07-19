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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: EASE, delay: index * 0.1 }}
      className={`relative rounded-2xl overflow-hidden cursor-pointer group border border-[#D8ECF9]/10 bg-[#0E1334] ${className}`}
    >
      <motion.img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="w-full h-full object-cover block"
      />

      {/* Permanent subtle gradient for text readability + stronger on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content overlay */}
      <div className="absolute inset-0 p-lg flex flex-col justify-end">
        <motion.div
          initial={false}
          className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]"
        >
          {image.category && (
            <span className="text-[#004DC0] font-bold text-caption tracking-wider uppercase mb-1 block">
              {image.category}
            </span>
          )}
          <h3 className="text-white font-display font-medium text-[1.25rem] md:text-[1.5rem] leading-tight drop-shadow-md">
            {image.alt}
          </h3>
        </motion.div>
      </div>
    </motion.div>
  );
}

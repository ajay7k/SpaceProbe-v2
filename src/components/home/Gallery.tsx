import React from 'react';
import { motion } from 'framer-motion';
import classroomImg from '@/assets/images/classroom.jpg';
import cosmosImg from '@/assets/images/cosmos.jpg';
import earthImg from '@/assets/images/Earth.jpg';
import spaceWeatherImg from '@/assets/images/space_weather.jpg';
import backgroundImg from '@/assets/images/backround.jpg';
import { GalleryItem } from './GalleryItem';

const ALBUM_IMAGES = [
  {
    src: spaceWeatherImg,
    alt: 'Space Weather Monitoring',
    category: 'Research',
    span: 'col-span-12 md:col-span-8 md:row-span-2 min-h-[300px] md:min-h-[500px]',
  },
  {
    src: earthImg,
    alt: 'Geospatial Earth Observation',
    category: 'Analytics',
    span: 'col-span-12 sm:col-span-6 md:col-span-4 min-h-[250px]',
  },
  {
    src: cosmosImg,
    alt: 'Deep Space Exploration',
    category: 'Science',
    span: 'col-span-12 sm:col-span-6 md:col-span-4 min-h-[250px]',
  },
  {
    src: classroomImg,
    alt: 'STEM Education Outreach',
    category: 'Education',
    span: 'col-span-12 md:col-span-6 min-h-[300px]',
  },
  {
    src: backgroundImg,
    alt: 'Technology Innovation',
    category: 'Hardware',
    span: 'col-span-12 md:col-span-6 min-h-[300px]',
  },
];

const EASE = [0.16, 1, 0.3, 1];

export function Gallery() {
  return (
    <section
      id="gallery"
      className="py-32 md:py-48 relative z-10 bg-[#0A0A0A] text-white overflow-hidden"
    >
      <div className="max-w-[var(--width-container-max)] mx-auto px-lg md:px-xl flex flex-col">
        <div className="flex flex-col mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="text-h2 md:text-h1 font-display font-medium text-white tracking-tight">
              Gallery
            </h2>
            <p className="text-body-large md:text-h4 text-text-secondary mt-4 max-w-[600px] font-light">
              Glimpses of our research, field work, laboratories, and the people behind SpaceProbe.
            </p>
          </motion.div>
        </div>

        {/* Curated Editorial Grid without fixed aspect ratios conflicting with grid spans */}
        <div className="grid grid-cols-12 gap-4 md:gap-6 auto-rows-min">
          {ALBUM_IMAGES.map((img, idx) => (
            <GalleryItem key={idx} index={idx} image={img} className={img.span} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;

import React from 'react';
import { motion } from 'framer-motion';

import { Container } from '../layout/Container';
import { HeroLogo } from './HeroLogo';
import { HeroDropdown } from './HeroDropdown';
import { HeroActions } from './HeroActions';
import { staggerContainer, slideUp } from '@/motion/variants';

export function HeroContent() {
  return (
    <Container className="relative z-10 flex-1 flex flex-col justify-center items-center py-xxl md:py-xxxl">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="w-full flex flex-col items-center gap-md"
      >
        {/* Ported V1 Centered SpaceProbe Logo */}
        <motion.div variants={slideUp} className="w-full flex justify-center">
          <HeroLogo />
        </motion.div>

        {/* Deferred Secondary Actions */}
        <motion.div variants={slideUp}>
          <HeroActions />
        </motion.div>

        {/* Ported V1 Dropdown Toggle & Card */}
        <motion.div variants={slideUp} className="w-full flex justify-center">
          <HeroDropdown />
        </motion.div>
      </motion.div>
    </Container>
  );
}
export default HeroContent;

import type { Variants } from 'framer-motion';
import { EASINGS } from './transitions';

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: EASINGS.smooth,
    },
  },
};

export const slideUp: Variants = {
  hidden: { y: 16, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: EASINGS.smooth,
    },
  },
};

export const slideDown: Variants = {
  hidden: { y: -16, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: EASINGS.smooth,
    },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const scaleUp: Variants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: EASINGS.smooth,
    },
  },
};

export const hoverInteractive = {
  hover: {
    scale: 1.015,
    y: -2,
    transition: {
      duration: 0.2,
      ease: EASINGS.smooth,
    },
  },
  tap: {
    scale: 0.985,
    y: 0,
    transition: {
      duration: 0.1,
      ease: EASINGS.smooth,
    },
  },
};

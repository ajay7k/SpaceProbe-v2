import type { Transition } from 'framer-motion';

// Easing presets matching our CSS custom properties
export const EASINGS = {
  smooth: [0.16, 1, 0.3, 1] /* Out-quart curve */,
  bounce: [0.34, 1.56, 0.64, 1] /* Custom elastic spring bounce */,
  standard: [0.4, 0, 0.2, 1],
  linear: [0, 0, 1, 1],
} as const;

export const TRANSITIONS = {
  fast: {
    type: 'tween',
    ease: EASINGS.smooth,
    duration: 0.15,
  } as Transition,

  normal: {
    type: 'tween',
    ease: EASINGS.smooth,
    duration: 0.3,
  } as Transition,

  slow: {
    type: 'tween',
    ease: EASINGS.smooth,
    duration: 0.5,
  } as Transition,

  spring: {
    type: 'spring',
    stiffness: 100,
    damping: 15,
  } as Transition,
} as const;

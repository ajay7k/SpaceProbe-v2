import { HTMLMotionProps } from 'framer-motion';
import { slideUp, hoverInteractive } from './variants';
import { TRANSITIONS } from './transitions';

export const PRESETS = {
  // Reveal layout card when scrolled into view
  scrollReveal: {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true, margin: '-40px' },
    variants: slideUp,
  } as HTMLMotionProps<'div'>,

  // Hover animations for buttons, charts, and navigation anchors
  hoverScale: {
    whileHover: 'hover',
    whileTap: 'tap',
    variants: hoverInteractive,
  } as HTMLMotionProps<'div'>,

  // Standard spring dynamic entry transitions
  springEntry: {
    initial: { scale: 0.98, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: TRANSITIONS.spring,
  } as HTMLMotionProps<'div'>,
} as const;

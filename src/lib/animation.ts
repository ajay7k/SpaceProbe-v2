export const DURATION = {
  fast: 0.25,
  medium: 0.45,
  slow: 0.8,
};

export const EASING = {
  premium: [0.25, 1, 0.5, 1], // Apple-style snappy but smooth
  soft: [0.33, 1, 0.68, 1], // Linear/Vercel-style gentle glide
  linear: 'linear',
};

export const TRANSITION = {
  fast: { duration: DURATION.fast, ease: EASING.premium },
  medium: { duration: DURATION.medium, ease: EASING.premium },
  slow: { duration: DURATION.slow, ease: EASING.soft },
  layout: { type: 'tween', ease: EASING.soft, duration: 1.2 },
};

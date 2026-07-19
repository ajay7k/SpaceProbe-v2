/**
 * Global Feature Flag toggles to enable or disable system sections
 * without modifying application component routing logic.
 */
export const FEATURE_FLAGS = {
  spaceWeather: true /* Real-time telemetry dashboard */,
  blog: true /* Academic blogs feed */,
  education: false /* Outreach/Guides portal (Deferred for Phase 2) */,
  analytics: true /* Advanced geospatial statistics tools */,
  developerPortal: false /* API SDK integrations guides (Deferred for Phase 2) */,
} as const;

export type FeatureFlag = keyof typeof FEATURE_FLAGS;

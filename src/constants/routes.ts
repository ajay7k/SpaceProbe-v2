/**
 * Centralized Route definitions for SpaceProbe Website v2.
 */
export const ROUTES = {
  home: '/',
  about: '/about',
  solutions: '/solutions',
  posters: '/posters',
  support: '/support',

  // Space Weather Platform
  spaceWeather: {
    dashboard: '/space-weather',
    alerts: '/space-weather/alerts',
    learn: '/space-weather/learn',
    industries: '/space-weather/industries',
    subscription: '/space-weather/subscription',
    auth: '/space-weather/auth',
    admin: {
      alerts: '/space-weather/admin/alerts',
      users: '/space-weather/admin/users',
      subscriptions: '/space-weather/admin/subscriptions',
      status: '/space-weather/admin/system-status',
    },
  },
} as const;

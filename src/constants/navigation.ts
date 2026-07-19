import { ROUTES } from './routes';
import { NavigationItem, NavigationSection } from '@/types/navigation';

export const MAIN_NAVIGATION: NavigationItem[] = [
  { label: 'Home', path: ROUTES.home },
  { label: 'Space Weather', path: ROUTES.spaceWeather.dashboard },
  { label: 'Research Posters', path: ROUTES.posters },
  { label: 'About Us', path: ROUTES.about },
];

export const SPACE_WEATHER_NAVIGATION: NavigationItem[] = [
  { label: 'Dashboard', path: ROUTES.spaceWeather.dashboard },
  { label: 'Alerts', path: ROUTES.spaceWeather.alerts },
  { label: 'Industries', path: ROUTES.spaceWeather.industries },
  { label: 'Learn', path: ROUTES.spaceWeather.learn },
  { label: 'Subscription', path: ROUTES.spaceWeather.subscription },
];

export const FOOTER_NAVIGATION: NavigationSection[] = [
  {
    title: 'Platform',
    items: [
      { label: 'Real-Time Dashboard', path: ROUTES.spaceWeather.dashboard },
      { label: 'Geomagnetic Alerts', path: ROUTES.spaceWeather.alerts },
      { label: 'Impact Vectors', path: ROUTES.spaceWeather.industries },
    ],
  },
  {
    title: 'Research',
    items: [
      { label: 'Research Posters', path: ROUTES.posters },
      { label: 'Academic Publications', path: ROUTES.about + '#publications' },
    ],
  },
  {
    title: 'Corporate',
    items: [
      { label: 'About SpaceProbe', path: ROUTES.about },
      { label: 'Funding & Support', path: ROUTES.support },
    ],
  },
];

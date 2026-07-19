import { useEffect, useState } from 'react';

interface ScrollState {
  y: number;
  x: number;
  direction: 'up' | 'down' | null;
}

/**
 * Custom hook tracking scroll offset coordinates and direction.
 */
export function useScroll(): ScrollState {
  const [scrollState, setScrollState] = useState<ScrollState>({
    y: 0,
    x: 0,
    direction: null,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? 'down' : 'up';

      setScrollState({
        y: currentScrollY,
        x: window.scrollX,
        direction: currentScrollY === 0 ? null : direction,
      });

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollState;
}

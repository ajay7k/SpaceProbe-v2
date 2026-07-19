import React, { useEffect, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useMotionValueEvent,
} from 'framer-motion';
import logoUrl from '@/assets/logos/logo.svg';

export function Navbar() {
  const { scrollY } = useScroll();
  const [heroHeight, setHeroHeight] = useState(800);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const updateHeight = () => setHeroHeight(window.innerHeight || 800);
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() || 0;

    // Smoothly transition the scrolled state when past threshold
    if (latest > 50 && !isScrolled) setIsScrolled(true);
    if (latest <= 50 && isScrolled) setIsScrolled(false);

    // Hide navbar when scrolling down (if past hero), show when scrolling up
    if (latest > heroHeight * 0.5 && latest > previous + 5) {
      setIsHidden(true);
    } else if (latest < previous - 5 || latest < heroHeight * 0.5) {
      setIsHidden(false);
    }
  });

  // Continuous Interpolation Hooks
  const scrollRange = [0, heroHeight * 0.8];

  const bgOpacity = useTransform(scrollY, scrollRange, [0, 0.65]);
  const blurValue = useTransform(scrollY, scrollRange, [0, 24]);
  const borderOpacity = useTransform(scrollY, scrollRange, [0, 0.15]);
  const shadowOpacity = useTransform(scrollY, scrollRange, [0, 0.6]);

  // Responsive Floating Width Logic
  const width = useTransform(scrollY, scrollRange, ['100%', '88%']);
  const maxWidth = useTransform(scrollY, scrollRange, ['2560px', '1400px']);

  const borderRadius = useTransform(scrollY, scrollRange, ['0px', '26px']);
  const marginTop = useTransform(scrollY, scrollRange, ['0px', '24px']);

  const navItems = [
    { label: 'About Us', href: '#about' },
    { label: 'Solutions', href: '#services' },
    { label: 'Outreach', href: '#outreach' },
    { label: 'Resources', href: '#resources' },
    { label: 'Connect With Us', href: '#connect' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full px-4 md:px-0 pointer-events-none">
      <motion.div
        className="pointer-events-auto w-full flex items-center justify-between"
        animate={{
          paddingTop: isScrolled ? '12px' : '24px',
          paddingBottom: isScrolled ? '12px' : '24px',
          paddingLeft: isScrolled ? '24px' : '32px',
          paddingRight: isScrolled ? '24px' : '32px',
          y: isHidden ? '-120%' : '0%',
        }}
        transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
        style={{
          width,
          maxWidth,
          borderRadius,
          marginTop,
          backgroundColor: useMotionTemplate`rgba(10, 10, 10, ${bgOpacity})`,
          backdropFilter: useMotionTemplate`blur(${blurValue}px)`,
          WebkitBackdropFilter: useMotionTemplate`blur(${blurValue}px)`,
          borderColor: useMotionTemplate`rgba(216, 236, 249, ${borderOpacity})`,
          boxShadow: useMotionTemplate`0 16px 40px -12px rgba(0,0,0,${shadowOpacity})`,
          borderWidth: '1px',
          borderStyle: 'solid',
        }}
      >
        {/* Left: SpaceProbe Logo */}
        <a
          href="/"
          onClick={(e) => {
            if (window.location.pathname === '/') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          aria-label="SpaceProbe Homepage"
          className="flex items-center gap-sm shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-[#004DC0] rounded-sm transition-opacity hover:opacity-90"
        >
          <img
            src={logoUrl}
            alt="SpaceProbe Logo"
            className="h-8 md:h-10 w-auto select-none pointer-events-none transition-all duration-300"
          />
        </a>

        {/* Center: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[12px] uppercase tracking-widest font-semibold text-white/75 hover:text-[#D8ECF9] transition-colors relative group py-xs outline-none focus-visible:ring-2 focus-visible:ring-[#004DC0] rounded-sm"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#004DC0] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          ))}
        </nav>

        {/* Right: What's New CTA Button */}
        <div className="flex items-center shrink-0">
          <button className="px-lg py-2.5 md:py-3 rounded border border-[#D8ECF9]/30 hover:border-[#D8ECF9] bg-transparent text-[10px] uppercase tracking-widest font-bold text-white hover:bg-[#D8ECF9]/10 transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[#004DC0]">
            What's New
          </button>
        </div>
      </motion.div>
    </header>
  );
}
export default Navbar;

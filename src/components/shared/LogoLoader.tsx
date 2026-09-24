import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoUrl from '@/assets/logos/logo.svg';

interface LogoLoaderProps {
  onComplete?: () => void;
}

export function LogoLoader({ onComplete }: LogoLoaderProps) {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window !== 'undefined') {
      return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return true;
  });

  useEffect(() => {
    if (!isVisible) {
      onComplete?.();
      return;
    }

    // Fast, subtle appearance (under 850ms total)
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, 850);

    return () => clearTimeout(timer);
  }, [isVisible, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="logo-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          role="status"
          aria-label="Loading SpaceProbe"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0A0A0A] pointer-events-none select-none"
        >
          <div className="relative flex flex-col items-center gap-4">
            {/* Ambient Radial Aura */}
            <motion.div
              animate={{ opacity: [0.2, 0.5, 0.2], scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -inset-8 bg-[radial-gradient(circle,rgba(0,77,192,0.35)_0%,transparent_70%)] blur-2xl"
            />

            {/* SpaceProbe Vector Logo */}
            <motion.img
              src={logoUrl}
              alt="SpaceProbe"
              initial={{ scale: 0.92, opacity: 0, filter: 'blur(8px)' }}
              animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="h-10 md:h-12 w-auto relative z-10"
            />

            {/* Subtle Progress Bar */}
            <div className="w-32 h-[2px] bg-white/10 rounded-full overflow-hidden relative z-10 mt-2">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                className="h-full bg-gradient-to-r from-[#004DC0] via-[#D8ECF9] to-white"
              />
            </div>

            <span className="text-[10px] uppercase font-mono tracking-widest text-[#D8ECF9]/60">
              Initializing Space Intelligence
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LogoLoader;

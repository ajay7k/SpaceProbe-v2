import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface DomainCardProps {
  domain: {
    id: string;
    title: string;
    description: string;
    image: string;
    href: string;
  };
  isActive: boolean;
  isMobile: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
  onClick: () => void;
}

export function DomainCard({
  domain,
  isActive,
  isMobile,
  onHoverStart,
  onHoverEnd,
  onClick,
}: DomainCardProps) {
  // We use pure CSS flex transition for smooth, performant layout animations instead of React state-driven framer-motion layout
  const flexGrowValue = isActive ? (isMobile ? 5 : 7) : 1;
  const minHeightValue = isMobile ? (isActive ? '400px' : '100px') : 'auto';

  return (
    <div
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      onClick={onClick}
      className={cn(
        'relative rounded-3xl overflow-hidden cursor-pointer flex-shrink-0 flex flex-col justify-end group transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] border',
        isActive
          ? 'border-[#D8ECF9]/30 shadow-[0_0_40px_rgba(0,77,192,0.15)]'
          : 'border-[#D8ECF9]/10 hover:border-[#D8ECF9]/20'
      )}
      style={{ flex: flexGrowValue, minHeight: minHeightValue }}
    >
      {/* Background Image Layer */}
      <div
        className={cn(
          'absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]',
          isActive
            ? 'scale-105 opacity-100 grayscale-0 saturate-100'
            : 'scale-100 opacity-40 grayscale saturate-0'
        )}
      >
        <img
          src={domain.image}
          alt={domain.title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/30 to-transparent" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 w-full h-full flex items-end">
        {/* Vertical / Collapsed Title */}
        <div
          className={cn(
            'absolute inset-0 p-lg md:p-xl flex items-end lg:items-start lg:justify-end flex-col transition-opacity duration-400',
            isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'
          )}
        >
          {!isMobile ? (
            <h3 className="text-body font-display font-bold tracking-widest text-[#D8ECF9] whitespace-nowrap origin-bottom-left -rotate-90 translate-y-[-20px] uppercase opacity-70">
              {domain.title}
            </h3>
          ) : (
            <h3 className="text-small font-display font-bold tracking-widest text-[#D8ECF9] uppercase opacity-70">
              {domain.title}
            </h3>
          )}
        </div>

        {/* Expanded Active Content with Staggered Reveal */}
        <AnimatePresence mode="wait">
          {isActive && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                exit: { opacity: 0, transition: { duration: 0.2 } },
              }}
              className="flex flex-col max-w-[650px] p-lg md:p-xl w-full"
            >
              <motion.h3
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                className="text-h2 md:text-h1 font-display font-bold text-white mb-sm leading-tight drop-shadow-lg whitespace-nowrap"
              >
                {domain.title}
              </motion.h3>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                className="text-body-large text-white/90 leading-[1.8] mb-xl font-light drop-shadow-md whitespace-pre-line"
              >
                {domain.description}
              </motion.p>

              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
              >
                <a
                  href={domain.href}
                  className="inline-flex items-center gap-xs px-lg py-sm bg-white/10 hover:bg-[#D8ECF9] text-white hover:text-black rounded backdrop-blur-md border border-[#D8ECF9]/30 transition-all duration-300 font-bold tracking-wider uppercase text-caption group/btn outline-none focus-visible:ring-2 focus-visible:ring-[#004DC0]"
                >
                  Explore More
                  <span className="transition-transform group-hover/btn:translate-x-1">→</span>
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

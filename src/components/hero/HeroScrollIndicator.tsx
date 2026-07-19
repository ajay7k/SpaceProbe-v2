import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { IconWrapper } from '@/components/ui/icon-utils';

export function HeroScrollIndicator() {
  return (
    <div className="w-full flex justify-center py-sm pointer-events-none select-none z-20">
      <motion.div
        animate={{
          y: [0, 5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="flex flex-col items-center gap-xs opacity-50 text-text-muted"
      >
        <span className="font-mono text-[9px] uppercase tracking-widest font-semibold">
          Scroll to Explore
        </span>
        <IconWrapper icon={ChevronDown} size="xs" stroke="premium" />
      </motion.div>
    </div>
  );
}

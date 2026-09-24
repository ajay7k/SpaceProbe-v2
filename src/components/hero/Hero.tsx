import React, { MouseEvent } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { HERO_CONTENT } from '@/content/homepage';
import { HeroBackground } from './HeroBackground';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1];

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const handleSmoothScroll = (targetId: string) => {
    const el = document.querySelector(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      aria-label="SpaceProbe Introduction"
      className="relative min-h-[100svh] w-full flex flex-col justify-between overflow-hidden bg-[#0A0A0A] text-white pt-28 pb-8 md:pt-36 md:pb-12 group"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Cursor Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              700px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 77, 192, 0.18),
              transparent 75%
            )
          `,
          zIndex: 1,
        }}
      />

      {/* Atmospheric Horizon & Planetary Arc Aura */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] max-w-[1400px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(0,77,192,0.15)_0%,rgba(14,19,52,0.08)_45%,transparent_70%)] blur-3xl opacity-70" />
      </div>

      {/* Background Particle Canvas */}
      <HeroBackground />

      {/* Hero Central Content Container (Clean, authoritative, no duplicate center logo) */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 my-auto flex flex-col items-center text-center">
        {/* Eyebrow Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#D8ECF9]/20 backdrop-blur-md mb-8 shadow-inner"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#00a8ff] animate-pulse" />
          <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-[#D8ECF9]">
            {HERO_CONTENT.eyebrow}
          </span>
        </motion.div>

        {/* Semantic Single H1 Headline (Dominant visual focus) */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-display font-bold tracking-tight text-white max-w-4xl leading-[1.12] mb-6"
        >
          <span>{HERO_CONTENT.titleLine1}</span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D8ECF9] via-white to-[#00a8ff]">
            {HERO_CONTENT.titleLine2}
          </span>
        </motion.h1>

        {/* Concise Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl font-light leading-relaxed mb-10"
        >
          {HERO_CONTENT.description}
        </motion.p>

        {/* Primary and Secondary CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a
            href={HERO_CONTENT.primaryCta.href}
            onClick={(e) => {
              e.preventDefault();
              handleSmoothScroll(HERO_CONTENT.primaryCta.href);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#004DC0] to-[#0952BD] hover:from-[#0057D9] hover:to-[#0A5DDB] text-white font-bold text-xs uppercase tracking-widest shadow-xl shadow-[#004DC0]/30 hover:shadow-[#004DC0]/50 transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[#D8ECF9]"
          >
            <span>{HERO_CONTENT.primaryCta.label}</span>
            <ArrowRight size={14} />
          </a>

          <a
            href={HERO_CONTENT.secondaryCta.href}
            onClick={(e) => {
              e.preventDefault();
              handleSmoothScroll(HERO_CONTENT.secondaryCta.href);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 hover:border-[#D8ECF9]/40 text-white font-bold text-xs uppercase tracking-widest backdrop-blur-md transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[#004DC0]"
          >
            <span>{HERO_CONTENT.secondaryCta.label}</span>
          </a>
        </motion.div>

        {/* Four Domain Capability Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: EASE, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-12 md:mt-14 text-[10px] md:text-xs text-text-muted"
        >
          {HERO_CONTENT.badges.map((badge, idx) => (
            <span
              key={badge}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.02] border border-white/5 backdrop-blur-sm"
            >
              <Sparkles size={10} className="text-[#00a8ff]" />
              <span>{badge}</span>
              {idx < HERO_CONTENT.badges.length - 1 && (
                <span className="text-white/20 ml-1">/</span>
              )}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Bottom Scroll Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 flex flex-col items-center justify-center"
      >
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            handleSmoothScroll('#about');
          }}
          className="group flex flex-col items-center gap-1.5 text-[10px] uppercase font-mono tracking-widest text-text-muted hover:text-white transition-colors p-2 outline-none focus-visible:ring-2 focus-visible:ring-[#004DC0] rounded"
          aria-label="Scroll to Who We Are section"
        >
          <span>Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={14} className="text-[#00a8ff]" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;

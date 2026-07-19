import React from 'react';
import { motion } from 'framer-motion';
import logoUrl from '@/assets/logos/logo.svg';
import { Mail, MapPin } from 'lucide-react';
import { IconWrapper } from '@/components/ui/icon-utils';

const EASE = [0.16, 1, 0.3, 1];

export function Footer() {
  return (
    <footer className="relative z-10 bg-[#0a0a0a] border-t border-white/5 pt-16 pb-8 md:pt-24 text-text-secondary select-none">
      {/* Pre-Footer CTA */}
      <div className="max-w-[var(--width-container-max)] mx-auto px-lg mb-24 md:mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="flex flex-col md:flex-row items-center justify-between gap-xl py-xl border-b border-[#D8ECF9]/10"
        >
          <h2 className="text-h2 md:text-h1 font-display font-medium text-white tracking-tight leading-tight max-w-[600px]">
            Ready to integrate space intelligence?
          </h2>
          <a
            href="#connect"
            className="shrink-0 inline-flex items-center justify-center gap-xs px-xl py-md bg-white text-black hover:bg-[#D8ECF9] hover:scale-105 rounded-full transition-all duration-300 font-bold tracking-wider uppercase text-caption outline-none focus-visible:ring-2 focus-visible:ring-[#004DC0]"
          >
            Connect With Us
          </a>
        </motion.div>
      </div>

      <div className="max-w-[var(--width-container-max)] mx-auto px-lg flex flex-col md:flex-row flex-wrap justify-between gap-xl">
        {/* Left: Logo and Address */}
        <div className="flex flex-col gap-md max-w-[320px]">
          <div className="flex items-center">
            <img src={logoUrl} alt="SPACEPROBE Logo" className="h-8 w-auto" />
          </div>
          <p className="text-caption text-text-muted leading-relaxed">
            Bridging the gap between cutting-edge space research and real-world applications through
            technology, GIS, and outreach.
          </p>
          <div className="flex flex-col gap-sm mt-xs">
            <div className="flex items-center gap-sm">
              <IconWrapper icon={MapPin} size="xs" className="text-accent-cyan shrink-0" />
              <span className="text-caption text-text-muted">Borivali, Mumbai, India</span>
            </div>
            <div className="flex items-center gap-sm">
              <IconWrapper icon={Mail} size="xs" className="text-accent-cyan shrink-0" />
              <a
                href="mailto:director@spaceprobe.in"
                className="text-caption text-text-muted hover:text-white transition-colors"
              >
                director@spaceprobe.in
              </a>
            </div>
          </div>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex flex-col gap-sm min-w-[120px]">
          <h4 className="text-[11px] uppercase tracking-widest font-bold text-white mb-xs">
            Useful Links
          </h4>
          <div className="flex flex-col gap-xs">
            {[
              'About Us',
              'Solutions',
              'Space Weather 2.0',
              'Geospatial',
              'Outreach',
              'Resources',
              'Connect',
            ].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/ /g, '-')}`}
                className="text-caption text-text-muted hover:text-[#D8ECF9] transition-colors focus-visible:outline-none focus-visible:text-[#D8ECF9]"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Right: Subscription */}
        <div className="flex flex-col gap-sm max-w-[300px] w-full">
          <h4 className="text-[11px] uppercase tracking-widest font-bold text-white mb-xs">
            Newsletter
          </h4>
          <p className="text-caption text-text-muted leading-normal">
            Subscribe to our real-time updates and space weather alerts.
          </p>
          <div className="flex gap-xs w-full mt-xs">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-white/5 border border-white/10 rounded px-md py-sm text-caption text-white placeholder:text-text-muted focus:outline-none focus:border-[#D8ECF9]/50 flex-1 min-w-0 transition-colors"
            />
            <button className="px-md py-sm rounded border border-white/20 bg-transparent hover:border-[#D8ECF9]/50 hover:text-[#D8ECF9] hover:bg-[#D8ECF9]/10 transition-all text-caption uppercase tracking-wider font-bold">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[var(--width-container-max)] mx-auto px-lg mt-xl pt-lg border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-sm text-[10px] text-text-muted">
        <span>© {new Date().getFullYear()} SpaceProbe Pvt. Ltd. All rights reserved.</span>
        <div className="flex gap-lg">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;

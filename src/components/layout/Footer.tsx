import React from 'react';
import logoUrl from '@/assets/logos/logo.svg';
import { Mail, MapPin, ArrowUp, ShieldCheck, Award, ExternalLink } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      aria-label="SpaceProbe Corporate Footer"
      className="relative z-10 bg-[#070913] border-t border-[#D8ECF9]/10 pt-16 pb-10 text-text-secondary select-none overflow-hidden"
    >
      {/* Ambient Auroral Horizon Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-[#00a8ff]/40 to-transparent" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[150px] bg-[radial-gradient(ellipse_at_top,rgba(0,77,192,0.2)_0%,transparent_70%)] blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/5">
          {/* Col 1 & 2: Brand Identity & Incubation Credentials (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img src={logoUrl} alt="SpaceProbe" className="h-8 w-auto" />
            </div>

            <p className="text-xs md:text-sm text-text-muted leading-relaxed max-w-sm font-light">
              Bridging cutting-edge space research and real-world operational applications through
              heliophysics intelligence, geospatial analytics, and aerospace technology.
            </p>

            {/* Incubation Badges */}
            <div className="flex flex-col gap-2 pt-2">
              <div className="flex items-center gap-2 text-xs text-white/80">
                <ShieldCheck size={14} className="text-[#00a8ff] shrink-0" />
                <span>DPIIT-Recognized Deep-Tech Enterprise</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-white/80">
                <Award size={14} className="text-[#00a8ff] shrink-0" />
                <span>Incubated at the University of Mumbai</span>
              </div>
            </div>

            {/* Direct Address */}
            <div className="flex flex-col gap-1.5 pt-3 text-xs text-text-muted">
              <div className="flex items-center gap-2">
                <MapPin size={13} className="text-[#00a8ff] shrink-0" />
                <span>Borivali, Mumbai, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={13} className="text-[#00a8ff] shrink-0" />
                <a
                  href="mailto:director@spaceprobe.in"
                  className="hover:text-white transition-colors underline decoration-white/20 underline-offset-4"
                >
                  director@spaceprobe.in
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Solutions */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[11px] uppercase font-mono tracking-widest font-bold text-white mb-1">
              Solutions
            </h4>
            <ul className="flex flex-col gap-2 text-xs">
              <li>
                <a
                  href="#platform"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#platform');
                  }}
                  className="text-text-muted hover:text-[#D8ECF9] transition-colors"
                >
                  Space Weather Intelligence
                </a>
              </li>
              <li>
                <a
                  href="#platform"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#platform');
                  }}
                  className="text-text-muted hover:text-[#D8ECF9] transition-colors"
                >
                  Geospatial Analytics
                </a>
              </li>
              <li>
                <a
                  href="#platform"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#platform');
                  }}
                  className="text-text-muted hover:text-[#D8ECF9] transition-colors"
                >
                  Space Tech & Payloads
                </a>
              </li>
              <li>
                <a
                  href="#platform"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#platform');
                  }}
                  className="text-text-muted hover:text-[#D8ECF9] transition-colors"
                >
                  Education & Workforce
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Platform & Research */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[11px] uppercase font-mono tracking-widest font-bold text-white mb-1">
              Platform & Science
            </h4>
            <ul className="flex flex-col gap-2 text-xs">
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#about');
                  }}
                  className="text-text-muted hover:text-[#D8ECF9] transition-colors"
                >
                  Who We Are
                </a>
              </li>
              <li>
                <a
                  href="#impact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#impact');
                  }}
                  className="text-text-muted hover:text-[#D8ECF9] transition-colors"
                >
                  Operational Impact
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#gallery');
                  }}
                  className="text-text-muted hover:text-[#D8ECF9] transition-colors"
                >
                  Research & Field Work
                </a>
              </li>
              <li>
                <a
                  href="#connect"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#connect');
                  }}
                  className="text-text-muted hover:text-[#D8ECF9] transition-colors"
                >
                  Collaboration Portal
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Direct Inquiries & Actions */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[11px] uppercase font-mono tracking-widest font-bold text-white mb-1">
              Institutional Inquiries
            </h4>
            <p className="text-xs text-text-muted leading-relaxed font-light mb-2">
              For B2B telemetry integration, academic research publications, or government
              partnerships:
            </p>
            <a
              href="mailto:director@spaceprobe.in?subject=SpaceProbe%20Official%20Inquiry"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#D8ECF9]/30 text-white font-mono text-xs transition-colors"
            >
              <span>Inquire via Email</span>
              <ExternalLink size={12} className="opacity-70" />
            </a>
          </div>
        </div>

        {/* Bottom Legal / Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-text-muted">
          <div>
            <span>© {new Date().getFullYear()} SpaceProbe Pvt. Ltd. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span>DPIIT Recognition #DIPP124803</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[#00a8ff] hover:text-white transition-colors outline-none focus-visible:ring-1 focus-visible:ring-[#004DC0]"
              aria-label="Scroll back to top of page"
            >
              <span>Top</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import React from 'react';
import { motion } from 'framer-motion';
import { CONNECT_CONTENT } from '@/content/homepage';
import { Mail, MapPin, Handshake, ArrowRight } from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1];

const ICONS = [Mail, MapPin, Handshake];

export function Connect() {
  return (
    <section
      id="connect"
      aria-label="Connect with SpaceProbe"
      className="relative w-full bg-[#0A0A0A] text-white py-20 md:py-28 border-t border-[#D8ECF9]/10 overflow-hidden"
    >
      {/* Background Radial Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(circle,rgba(0,77,192,0.18)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          {/* Section Tag */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono text-[#00a8ff] tracking-widest font-semibold">
              [{CONNECT_CONTENT.sectionNumber}]
            </span>
            <span className="h-px w-6 bg-[#004DC0]" />
            <span className="text-[11px] font-mono tracking-widest uppercase text-[#D8ECF9]/80 font-bold">
              {CONNECT_CONTENT.tag}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight mb-4">
            {CONNECT_CONTENT.heading}
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-text-secondary font-light leading-relaxed">
            {CONNECT_CONTENT.subtitle}
          </p>
        </motion.div>

        {/* 3 Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {CONNECT_CONTENT.contacts.map((item, idx) => {
            const Icon = ICONS[idx] || Mail;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: EASE, delay: idx * 0.1 }}
                className="p-6 md:p-8 rounded-3xl bg-white/[0.02] hover:bg-white/[0.05] border border-[#D8ECF9]/10 hover:border-[#00a8ff]/30 backdrop-blur-md flex flex-col justify-between transition-all duration-300 group"
              >
                <div>
                  <div className="h-10 w-10 rounded-xl bg-[#004DC0]/20 border border-[#004DC0]/40 flex items-center justify-center text-[#00a8ff] mb-5 group-hover:scale-110 transition-transform">
                    <Icon size={20} />
                  </div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#00a8ff] block mb-1">
                    {item.label}
                  </span>
                  <h3 className="text-lg font-display font-bold text-white mb-2">{item.value}</h3>
                  <p className="text-xs sm:text-sm text-text-muted font-light leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {item.href.startsWith('mailto:') && (
                  <div className="pt-4 border-t border-white/5">
                    <a
                      href={item.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#00a8ff] hover:text-white transition-colors"
                    >
                      <span>Send Direct Email</span>
                      <ArrowRight size={13} />
                    </a>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Main Pre-Footer Collaboration CTA Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="rounded-3xl bg-gradient-to-r from-[#0E1334] via-[#0952BD]/30 to-[#0E1334] border border-[#00a8ff]/30 p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl"
        >
          <div className="max-w-xl text-center sm:text-left">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#00a8ff] block mb-1">
              Start The Conversation
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-white mb-2">
              Transforming Space Science into Operational Resilience
            </h3>
            <p className="text-xs sm:text-sm text-white/70 font-light">
              Connect with our heliophysicists and data engineers to explore customized telemetry
              and mission support.
            </p>
          </div>

          <a
            href="mailto:director@spaceprobe.in?subject=SpaceProbe%20Partnership%20and%20Telemetry%20Inquiry"
            className="shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-black hover:bg-[#D8ECF9] font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[#004DC0]"
          >
            <span>Initiate Collaboration</span>
            <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Connect;

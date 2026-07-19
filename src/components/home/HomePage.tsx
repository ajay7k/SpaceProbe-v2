import React from 'react';
import { Hero } from '../hero/Hero';
import { WhoWeAre } from './WhoWeAre';
import { WhatWeOffer } from './WhatWeOffer';
import { WhyItMatters } from './WhyItMatters';
import { Tagline } from './Tagline';
import { Gallery } from './Gallery';

export function HomePage() {
  return (
    <main className="relative bg-[#0A0A0A] overflow-x-hidden min-h-screen text-white">
      <Hero />
      <WhoWeAre />
      <WhatWeOffer />
      <WhyItMatters />
      <Tagline />
      <Gallery />
    </main>
  );
}
export default HomePage;

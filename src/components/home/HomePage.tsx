import React from 'react';
import { LogoLoader } from '../shared/LogoLoader';
import { Hero } from '../hero/Hero';
import { WhoWeAre } from './WhoWeAre';
import { WhatWeOffer } from './WhatWeOffer';
import { WhyItMatters } from './WhyItMatters';
import { ExploreSolutions } from './ExploreSolutions';
import { Tagline } from './Tagline';
import { Gallery } from './Gallery';
import { Connect } from './Connect';

export function HomePage() {
  return (
    <>
      <LogoLoader />
      <main className="relative bg-[#0A0A0A] overflow-x-hidden min-h-screen text-white">
        <Hero />
        <WhoWeAre />
        <WhatWeOffer />
        <WhyItMatters />
        <ExploreSolutions />
        <Tagline />
        <Gallery />
        <Connect />
      </main>
    </>
  );
}

export default HomePage;

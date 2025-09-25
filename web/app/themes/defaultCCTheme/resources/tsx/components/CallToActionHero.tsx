import React, { JSX } from 'react';
import { Button } from './ui/button';

export const CallToActionHero = (): JSX.Element => {
  return (
    <section className="relative bg-[#002266] rounded-[20px_20px_60px_20px] mx-4 py-24">
      <img
        className="absolute inset-0 w-full h-full object-cover rounded-[20px_20px_60px_20px]"
        alt="Mask group"
        src="/app/themes/defaultCCTheme/resources/images/mask-group.png"
      />
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Your idea. Our code. <br />
          Endless possibilities
        </h2>
        <p className="text-lg text-white/80 text-center leading-8 mb-8 mx-auto">
          From concept to impactful solution, we're here to build with you.
          <br />
          What's our next challenge together?
        </p>
        <Button className="bg-[#0156ff] hover:bg-[#0156ff]/90 text-white px-8 py-4 text-lg font-medium rounded-lg">
          Let's connect
        </Button>
      </div>
    </section>
  );
};

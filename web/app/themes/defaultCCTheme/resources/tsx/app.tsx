import React, { JSX } from 'react';
import { ImpactHighlightSection } from './screens/CraftcodeHomepage/sections/ImpactHighlightSection/ImpactHighlightSection';
import { InsightsSection } from './screens/CraftcodeHomepage/sections/InsightsSection/InsightsSection';
import { CollaborationSection } from './screens/CraftcodeHomepage/sections/CollaborationSection/CollaborationSection';
import { ProjectShowcaseSection } from './screens/CraftcodeHomepage/sections/ProjectShowcaseSection';
import { SolutionsSection } from './components/SolutionsSection';
import { CallToActionHero } from './components/CallToActionHero';
import { ServicesSection } from './components/ServicesSection';
import { HeroSection } from './components/HeroSection';
import { Navigation } from './components/Navigation';

export const CraftcodeHomepage = (): JSX.Element => {
  return (
    <div className="bg-white overflow-hidden w-full relative">
      <Navigation />

      <HeroSection />

      <ServicesSection />

      <SolutionsSection />

      <CallToActionHero />

      <ProjectShowcaseSection />
      <CollaborationSection />
      <ImpactHighlightSection />
      <InsightsSection />
    </div>
  );
};

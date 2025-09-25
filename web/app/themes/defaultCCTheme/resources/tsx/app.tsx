import React, { JSX } from 'react';
import { cn } from './lib/utils';
import { CodeShowcaseSection } from './screens/CraftcodeHomepage/sections/CodeShowcaseSection/CodeShowcaseSection';
import { ServicesOverviewSection } from './screens/CraftcodeHomepage/sections/ServicesOverviewSection/ServicesOverviewSection';
import { CallToActionSection } from './screens/CraftcodeHomepage/sections/CallToActionSection/CallToActionSection';
import { ImpactHighlightSection } from './screens/CraftcodeHomepage/sections/ImpactHighlightSection/ImpactHighlightSection';
import { InsightsSection } from './screens/CraftcodeHomepage/sections/InsightsSection/InsightsSection';
import { CollaborationSection } from './screens/CraftcodeHomepage/sections/CollaborationSection/CollaborationSection';
import { ProjectShowcaseSection } from './screens/CraftcodeHomepage/sections/ProjectShowcaseSection';
import LeftCodeEditor from './components/LeftCodeEditor';
import { Card, CardContent } from './components/ui/card';
import { Button } from './components/ui/button';
import RightTopCodeEditor from './components/RightCodeEditor';
import { JavaCodeEditor } from './components/JavaCodeEditor';
import { SolutionsSection } from './components/SolutionsSection';
import { TerminalWindow } from './components/TerminalWindow';

const navigationItems = [
  { label: 'What we do', hasDropdown: true },
  { label: 'Solutions', hasDropdown: true },
  { label: 'About Us', hasDropdown: false },
  { label: 'Careers', hasDropdown: false, isActive: true },
];

const collaborationFeatures = [
  {
    icon: '/app/themes/defaultCCTheme/resources/images/group-1000005847.png',
    title: 'Right People, Right Fit',
    description: 'Skills, values and ways-of-working matched to your team.',
  },
  {
    icon: '/app/themes/defaultCCTheme/resources/images/group-1000005849.png',
    title: 'Holistic by Default',
    description: 'Business, UX and tech decisions aligned from day one.',
  },
  {
    icon: '/app/themes/defaultCCTheme/resources/images/application-1.svg',
    title: 'Collaborative Challenge',
    description: 'We co-create, ask hard questions and raise the bar.',
  },
  {
    icon: '/app/themes/defaultCCTheme/resources/images/group-1000005848.png',
    title: 'Inclusive & Sustainable',
    description: 'Accessible, well-tested code that lasts beyond the project.',
  },
];

export const CraftcodeHomepage = (): JSX.Element => {
  return (
    <div className="bg-white overflow-hidden w-full relative">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-[181px] py-[42px] relative">
        <img
          className="w-56 h-12"
          alt="Logo color"
          src="/app/themes/defaultCCTheme/resources/images/logo-color.png"
        />
        <div className="flex items-center gap-8">
          {navigationItems.map((item, index) => (
            <div key={index} className="flex items-center gap-0.5">
              <div
                className={`[font-family:'Lexend',Helvetica] font-medium text-lg text-center tracking-[0] leading-[22px] whitespace-nowrap ${
                  item.isActive ? 'text-[#0156ff]' : 'text-[#010326]'
                }`}
              >
                {item.label}
              </div>
              {item.hasDropdown && (
                <img
                  className="w-2.5 h-1.5"
                  alt="Vector"
                  src="/app/themes/defaultCCTheme/resources/images/vector-1.svg"
                />
              )}
            </div>
          ))}

          <Button className="bg-[#0156ff] hover:bg-[#0156ff]/90 text-white px-[26px] py-4 h-auto">
            Contact Us
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-4 pb-[119px]">
        <div className="max-w-7xl mx-auto px-[117px]">
          <div
            className="w-full min-h-[1000px] bg-gray-50 rounded-[20px_20px_60px_20px] border border-solid border-[#f0f2f2] p-[54px] relative bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                'url(/app/themes/defaultCCTheme/resources/images/image-85.png)',
            }}
          >
            {/* Hero Content Overlay */}
            <div className="relative z-20 flex flex-col items-center text-center pt-[88px]">
              <h1 className="[font-family:'Lexend',Helvetica] font-medium text-[#010326] text-[62px] tracking-[0] leading-[70px] mb-[95px]">
                Our craftsmanship <br />
                defines your code
              </h1>
              <p className="w-[798px] [font-family:'Lexend',Helvetica] font-normal text-[#010326cc] text-lg text-center tracking-[0] leading-8 mb-[105px]">
                From strategic advisory to hands-on development,
                <br />
                we partner with you to create sustainable digital solutions that
                truly make a difference.
              </p>
              <Button className="bg-[#0156ff] hover:bg-[#0156ff]/90 text-white px-8 py-[26px] h-auto">
                Get to know us
              </Button>
            </div>

            {/* Left Code Editor */}
            <LeftCodeEditor />
            <RightTopCodeEditor />

            {/* Terminal Window - Right side */}
            <TerminalWindow className="right-8 lg:right-24 bottom-32 lg:bottom-40" />

            {/* Background decorative image */}
            <img
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-auto z-5 opacity-60"
              alt="Background decoration"
              src="/app/themes/defaultCCTheme/resources/images/frame-73.svg"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column */}
            <div>
              <p className="text-blue-600 font-medium mb-4">What we do</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Our services, <br />
                your success
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At CraftCode, we excel in crafting clean, efficient code that
                drives your business forward. Our craftsmanship sets the
                standard for quality, ensuring that your digital vision is not
                only realized but built to the highest standards.
              </p>
            </div>

            {/* Right Column */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 text-blue-600">💻</div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Developer as a Service
                </h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our developers go beyond coding. They think with you and
                strengthen your team exactly when you need it.
              </p>
              <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </section>

      <SolutionsSection />

      {/* Collaboration Section */}
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
          <p className="text-lg text-white/80 text-center leading-8 mb-8 max-w-2xl mx-auto">
            From concept to impactful solution, we're here to build with you.
            <br />
            What's our next challenge together?
          </p>
          <Button className="bg-[#0156ff] hover:bg-[#0156ff]/90 text-white px-8 py-4 text-lg font-medium rounded-lg">
            Let's connect
          </Button>
        </div>
      </section>
      <ProjectShowcaseSection />

      <CollaborationSection />

      <ImpactHighlightSection />
      <InsightsSection />
    </div>
  );
};

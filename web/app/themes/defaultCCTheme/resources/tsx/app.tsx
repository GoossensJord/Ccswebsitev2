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

const navigationItems = [
  { label: 'What we do', hasDropdown: true },
  { label: 'Solutions', hasDropdown: true },
  { label: 'About Us', hasDropdown: false },
  { label: 'Careers', hasDropdown: false, isActive: true },
];

const solutionCards = [
  {
    title: 'Architecture',
    description:
      'We design solid foundations that grow with your ambitions. Clear, maintainable and ready for the future.',
    className: 'rounded-[40px_20px_20px_20px]',
  },
  {
    title: 'Front-end Development',
    description:
      "We craft user interfaces that don't just look good but feel intuitive and responsive. Whether it's a web app, dashboard or customer portal, our front-end developers ensure smooth interactions, accessible experiences and high performance across all devices.",
    className: 'rounded-[20px]',
  },
  {
    title: 'Back-end Development',
    description:
      "Behind every great interface is a solid engine. Our back-end experts build scalable, secure and future-ready systems that handle complex logic and data with ease. We focus on clean architecture, smart integrations and code that's built to last.",
    className: 'rounded-[20px]',
  },
  {
    title: 'Integration',
    description:
      'We connect systems in ways that just work. Smooth, safe and without the usual hassle.',
    className: 'rounded-[20px_20px_40px_20px]',
  },
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
            <div className="absolute right-8 lg:right-24 bottom-32 lg:bottom-40 w-80 lg:w-96 bg-gray-900 rounded-lg shadow-2xl rotate-1 z-20">
              <div className="bg-gray-800 px-4 py-2 border-b border-gray-700 rounded-t-lg">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-2.5 h-2.5 bg-red-400 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
                  </div>
                  <span className="text-xs text-gray-300 ml-2">zsh</span>
                </div>
              </div>
              <div className="p-4 font-mono text-xs text-green-400 bg-gray-900">
                <div>$ npm run dev</div>
                <div className="text-gray-400 mt-1">
                  <span className="text-green-400">{'✓'}</span> Build successful
                  (2.1s)
                </div>
                <div className="text-gray-400">
                  <span className="text-green-400">{'✓'}</span> Server on :3000
                </div>
                <div className="mt-1 text-gray-400">
                  <span className="text-green-400">{'✓'}</span> Ready
                </div>
                <div className="text-gray-400">
                  <span className="text-green-400">{'✓'}</span> Tests passed
                </div>
                <div className="text-gray-400">
                  <span className="text-green-400">{'✓'}</span> Hot reloaded
                </div>
                <div className="mt-2 text-green-400">
                  $<span className="animate-pulse">{'_'}</span>
                </div>
              </div>
            </div>

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

      {/* Clean Code Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-medium mb-4">Our solutions</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Clean code, Real impact
            </h2>
            <p className="max-w-4xl mx-auto text-lg text-gray-600 leading-relaxed text-center">
              We take pride in adapting to your needs with clean, scalable
              solutions. From architecture to front-end and back-end
              development, we build what works best for you using technologies
              that fit, without being tied to any one framework.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-4 gap-8">
            {/* First Row: Architecture (1 col) + Front-end Development (3 cols) */}
            <Card
              className={cn(
                'bg-gray-50 border border-solid border-[#f0f2f2] p-8',
                solutionCards[0].className
              )}
            >
              <CardContent className="p-0">
                <img
                  className="w-full h-[212px] mb-8 object-cover"
                  alt="Architecture"
                  src="/app/themes/defaultCCTheme/resources/images/group-1000005876.png"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {solutionCards[0].title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {solutionCards[0].description}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 border border-solid border-[#f0f2f2] p-8 rounded-[20px] col-span-3">
              <CardContent className="p-0">
                <img
                  className="w-full h-[275px] mb-8 object-cover"
                  alt="Front-end Development"
                  src="/app/themes/defaultCCTheme/resources/images/frame-73.svg"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {solutionCards[1].title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {solutionCards[1].description}
                </p>
              </CardContent>
            </Card>

            {/* Second Row: Back-end Development (3 cols) + Integration (1 col) */}
            <Card className="bg-gray-50 border border-solid border-[#f0f2f2] p-8 rounded-[20px] col-span-3 relative">
              <CardContent className="p-0">
                {/* Overlapping Code Windows */}
                <div className="relative mb-8 h-[280px]">
                  {/* Java Code Editor - Front, slightly rotated left */}
                  <JavaCodeEditor className="left-0 top-0 transform z-20" />

                  {/* Terminal Window - Behind, overlapping, slightly rotated right */}
                  <div className="absolute left-24 top-12 w-[357px] h-[241px] bg-white rounded-lg shadow-xl border border-gray-200 transform rotate-1 z-10">
                    <div className="flex items-start bg-gray-100 border-b border-gray-200 rounded-t-lg">
                      <div className="inline-flex items-center gap-2 px-3 py-[11px] rounded-[10px_0px_0px_0px]">
                        <div className="inline-flex items-center gap-1.5">
                          <div className="w-2 h-2 bg-red-400 rounded-full" />
                          <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                          <div className="w-2 h-2 bg-green-400 rounded-full" />
                        </div>
                      </div>
                      <div className="inline-flex items-center gap-2 px-3 py-[11px]">
                        <div className="text-xs text-gray-600 font-medium">
                          zsh.
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-white font-mono text-xs leading-relaxed">
                      <div className="text-gray-800">
                        local@MacBook %{' '}
                        <span className="text-blue-600">
                          ./mvnw spring-boot:run
                        </span>
                      </div>
                      <div className="text-gray-600 mt-1">
                        <span className="text-green-600">✔</span> Dependencies
                        resolved
                      </div>
                      <div className="text-gray-600">
                        <span className="text-green-600">✔</span> Build
                        successful (14s)
                      </div>
                      <div className="text-gray-600">
                        <span className="text-blue-600">[craftcode-demo]</span>{' '}
                        Booting backend...
                      </div>
                      <div className="text-gray-600">
                        <span className="text-green-600">☑</span> Database
                        connected
                      </div>
                      <div className="text-gray-600">
                        <span className="text-green-600">☑</span> Flyway
                        migrations: 3 applied
                      </div>
                      <div className="text-gray-600">
                        <span className="text-green-600">☑</span> HTTP server
                        started on :8080
                      </div>
                      <div className="text-gray-600 mt-1">
                        <span className="text-green-600">[READY]</span>{' '}
                        Craftcode backend is up{' '}
                        <span className="text-green-600">✔</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {solutionCards[2].title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {solutionCards[2].description}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 border border-solid border-[#f0f2f2] p-8 rounded-[20px_20px_40px_20px]">
              <CardContent className="p-0">
                <img
                  className="w-full h-[212px] mb-8 object-cover"
                  alt="Integration"
                  src="/app/themes/defaultCCTheme/resources/images/group-1000005874.png"
                />

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {solutionCards[3].title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {solutionCards[3].description}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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

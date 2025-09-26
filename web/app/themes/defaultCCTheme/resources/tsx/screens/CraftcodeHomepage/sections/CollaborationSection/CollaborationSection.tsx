import React from 'react';
import { Card, CardContent } from '../../../../components/ui/card';
import { Button } from '../../../../components/ui/button';

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

export const CollaborationSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Two Column Layout: Content on Left, Decorative on Right */}
        <div className="grid grid-cols-2 gap-16 items-start">
          {/* Left Column - Content and Features */}
          <div>
            {/* Content Section */}
            <div className="mb-12">
              <p className="text-blue-600 font-medium mb-4">Why Craftcode</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Turn your vision <br />
                into reliable code
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We match the right people to your context, align on outcomes and
                build maintainable systems.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-8">
              {collaborationFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className={`bg-gray-50 border border-solid border-[#f3f5f5] p-6 ${
                    index === 2
                      ? 'rounded-[16px_16px_16px_32px]'
                      : 'rounded-2xl'
                  }`}
                >
                  <CardContent className="p-0 space-y-8">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <img
                          className="w-5 h-4"
                          alt="Icon"
                          src={feature.icon}
                        />
                        <h3 className="[font-family:'Lexend',Helvetica] font-medium text-[#010326cc] text-lg tracking-[0] leading-[30px]">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="[font-family:'Lexend',Helvetica] font-normal text-[#010326cc] text-base tracking-[0] leading-[26px]">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column - Decorative Elements */}
          <div className="relative h-full bg-gray-50">
            <div className="relative w-full h-full rounded-[20px_40px_20px_20px] border border-solid border-[#f3f5f5]">
              <img
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[370px] h-[370px]"
                alt="Ellipse"
                src="/app/themes/defaultCCTheme/resources/images/ellipse-24.svg"
              />
              <img
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px]"
                alt="Ellipse"
                src="/app/themes/defaultCCTheme/resources/images/ellipse-23.svg"
              />
              <img
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60"
                alt="Ellipse"
                src="/app/themes/defaultCCTheme/resources/images/ellipse-22.svg"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-[96px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(153,187,255,1)_74%,rgba(0,85,255,1)_100%)] opacity-30" />
              <img
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[101px] h-28"
                alt="Logo color"
                src="/app/themes/defaultCCTheme/resources/images/logo-color-1.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Card, CardContent } from '../../../../components/ui/card';
import { JSX } from 'react/jsx-runtime';

export const ProjectShowcaseSection = (): JSX.Element => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-medium mb-4">Our Success Stories</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Proven craftsmanship, real outcomes
          </h2>
          <p className="mx-auto text-lg text-gray-600 leading-relaxed">
            We focus on people, fit, and craft. From architecture to front-end
            and back-end,
            <br /> we build what servers your goals and users best
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* CEPA Project */}
          <Card className="bg-gray-50 rounded-[20px_20px_60px_20px] border border-solid border-[#f0f2f2] p-6">
            <CardContent className="p-0 flex gap-6 items-start">
              {/* Text Content */}
              <div className="flex-1 flex flex-col justify-between min-h-[234px]">
                <div>
                  <p className="font-normal text-[#010326cc] text-lg tracking-[0] leading-7 mb-4">
                    With CraftCode's guidance, we transformed our digital
                    processes, achieving operational efficiency that exceeded
                    our expectations.
                  </p>
                </div>

                <div>
                  <p className="font-medium text-[#0156ff] text-base tracking-[0] leading-7">
                    CEPA
                  </p>
                </div>
              </div>

              {/* Image Content with Logo Overlay */}
              <div className="flex-shrink-0 relative">
                <img
                  className="w-[200px] h-[200px] rounded-2xl object-cover"
                  alt="CEPA Project"
                  src="/app/themes/defaultCCTheme/resources/images/rectangle-5954.png"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    className="w-[121px] h-[46px]"
                    alt="CEPA Logo"
                    src="/app/themes/defaultCCTheme/resources/images/logo.svg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Royal Belgian Football Association Project */}
          <Card className="bg-gray-50 rounded-[20px_20px_60px_20px] border border-solid border-[#f0f2f2] p-6">
            <CardContent className="p-0 flex gap-6 items-start">
              {/* Text Content */}
              <div className="flex-1 flex flex-col justify-between min-h-[234px]">
                <div>
                  <p className="font-normal text-[#010326cc] text-lg tracking-[0] leading-7 mb-4">
                    CraftCode's collaborative approach meant we weren't just
                    getting a development team; we were getting partners who
                    cared about our growth.
                  </p>
                </div>

                <div>
                  <p className="font-medium text-[#0156ff] text-base tracking-[0] leading-7">
                    Royal Belgian Football Association
                  </p>
                </div>
              </div>

              {/* Image Content with Logo Overlay */}
              <div className="flex-shrink-0 relative">
                <img
                  className="w-[200px] h-[200px] rounded-2xl object-cover"
                  alt="RBFA Project"
                  src="/app/themes/defaultCCTheme/resources/images/rectangle-5969.png"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    className="w-[150px] h-[61px]"
                    alt="RBFA Logo"
                    src="/app/themes/defaultCCTheme/resources/images/kbvb-logo-1.svg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

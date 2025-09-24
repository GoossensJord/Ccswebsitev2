import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ProjectShowcaseSection = (): JSX.Element => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-medium mb-4">Client Success Stories</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Projects that make a difference
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            See how we've helped organizations transform their digital landscape
            with clean code and strategic thinking.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* CEPA Project */}
          <Card className="bg-gray-50 rounded-[20px_20px_60px_20px] border border-solid border-[#f0f2f2] h-[286px] relative">
            <CardContent className="p-0 h-full relative">
              <img
                className="absolute top-[43px] right-[44px] w-[200px] h-[200px] rounded-2xl object-cover"
                alt="CEPA Project"
                src="/app/themes/defaultCCTheme/resources/images/rectangle-5954.png"
              />

              <div className="absolute top-[87px] left-[29px] w-[337px] font-normal text-[#010326cc] text-lg tracking-[0] leading-7">
                With CraftCode's guidance, we transformed our digital processes,
                achieving operational efficiency that exceeded our expectations.
              </div>

              <div className="absolute top-[243px] left-[29px] w-[337px] font-medium text-[#0156ff] text-base tracking-[0] leading-7">
                CEPA
              </div>

              <img
                className="absolute top-[120px] left-[408px] w-[121px] h-[46px]"
                alt="CEPA Logo"
                src="/app/themes/defaultCCTheme/resources/images/logo.svg"
              />
            </CardContent>
          </Card>

          {/* Royal Belgian Football Association Project */}
          <Card className="bg-gray-50 rounded-[20px_20px_60px_20px] border border-solid border-[#f0f2f2] h-[286px] relative">
            <CardContent className="p-0 h-full relative">
              <img
                className="absolute top-[43px] right-[40px] w-[200px] h-[200px] rounded-2xl object-cover"
                alt="RBFA Project"
                src="/app/themes/defaultCCTheme/resources/images/rectangle-5969.png"
              />

              <div className="absolute top-[87px] left-[39px] w-[337px] font-normal text-[#010326cc] text-lg tracking-[0] leading-7">
                CraftCode's collaborative approach meant we weren't just
                getting a development team; we were getting partners who cared about
                our growth.
              </div>

              <div className="absolute top-[243px] left-[39px] w-[337px] font-medium text-[#0156ff] text-base tracking-[0] leading-7">
                Royal Belgian Football Association
              </div>

              <img
                className="absolute top-[113px] right-[65px] w-[150px] h-[61px]"
                alt="RBFA Logo"
                src="/app/themes/defaultCCTheme/resources/images/kbvb-logo-1.svg"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

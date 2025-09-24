import React, { JSX } from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const UserFeedbackSection = (): JSX.Element => {
  return (
    <section className="w-full relative">
      <Card className="w-full max-w-[612px] h-[286px] bg-gray-50 rounded-[20px_20px_60px_20px] border border-solid border-[#f0f2f2]">
        <CardContent className="relative p-0 h-full">
          <img
            className="absolute top-[43px] right-[44px] w-[200px] h-[200px] rounded-2xl object-cover"
            alt="Rectangle"
            src="/app/themes/defaultCCTheme/resources/images/rectangle-5954.png"
          />

          <div className="absolute top-[87px] left-[29px] w-[337px] [font-family:'Lexend',Helvetica] font-normal text-[#010326cc] text-lg tracking-[0] leading-7">
            With CraftCode&#39;s guidance, we transformed our digital processes,
            achieving operational efficiency that exceeded our expectations.
          </div>

          <div className="absolute top-[243px] left-[29px] w-[337px] [font-family:'Lexend',Helvetica] font-medium text-[#0156ff] text-base tracking-[0] leading-7">
            CEPA
          </div>

          <img
            className="absolute top-[120px] left-[408px] w-[121px] h-[46px]"
            alt="Logo"
            src="/app/themes/defaultCCTheme/resources/images/logo.svg"
          />
        </CardContent>
      </Card>
    </section>
  );
};

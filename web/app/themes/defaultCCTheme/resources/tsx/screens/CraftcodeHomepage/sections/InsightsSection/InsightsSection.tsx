import React, { JSX } from "react";
import { Button } from "../../../../components/ui/button";

export const InsightsSection = (): JSX.Element => {
  return (
    <section className="relative w-full">
      <div className="relative bg-gray-50 rounded-[20px] border border-solid border-[#f0f2f2] pt-[133px] pb-[150px]">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[1406px] h-[285px] bg-[#0039a6] rounded-[20px_20px_20px_60px] flex items-center justify-between px-[85px] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url(/app/themes/defaultCCTheme/resources/images/image-85.png)] bg-contain bg-bottom bg-right bg-no-repeat opacity-20 z-0"></div>
          <div className="flex flex-col items-start gap-[15px] max-w-[822px] relative z-10">
            <h2 className="[font-family:'Lexend',Helvetica] font-medium text-white text-5xl tracking-[0] leading-[68px]">
              Let&#39;s build the future together
            </h2>
            <p className="[font-family:'Lexend',Helvetica] font-normal text-[#ffffffcc] text-lg tracking-[0] leading-8">
              Ready to take your digital ambitions to the next level? <br />
              Let&#39;s collaborate and create something exceptional.
            </p>
          </div>
          <Button className="w-[143px] h-auto px-8 py-[26px] bg-[#0156ff] rounded-md hover:bg-[#0156ff]/90 relative z-10">
            <span className="[font-family:'Lexend',Helvetica] font-medium text-white text-lg text-center tracking-[0] leading-[22px] whitespace-nowrap">
              Let&apos;s talk
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

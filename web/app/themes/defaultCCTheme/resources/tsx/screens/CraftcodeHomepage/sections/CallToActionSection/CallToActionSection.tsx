import React, { JSX } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const CallToActionSection = (): JSX.Element => {
  return (
    <Card className="w-full max-w-[504px] bg-white rounded-[20px_20px_20px_40px] border border-solid border-[#f0f2f2]">
      <CardContent className="flex flex-col items-start gap-[30px] p-[30px]">
        <div className="flex flex-col gap-[15px] w-full">
          <img className="w-[50px] h-[50px]" alt="Frame" src="/app/themes/defaultCCTheme/resources/images/frame-8.svg" />

          <h3 className="font-craftcode-h3 font-[number:var(--craftcode-h3-font-weight)] text-[#010326] text-[length:var(--craftcode-h3-font-size)] tracking-[var(--craftcode-h3-letter-spacing)] leading-[var(--craftcode-h3-line-height)] [font-style:var(--craftcode-h3-font-style)]">
            Developer as a Service
          </h3>
        </div>

        <p className="font-craftcode-text font-[number:var(--craftcode-text-font-weight)] text-[#010326cc] text-[length:var(--craftcode-text-font-size)] tracking-[var(--craftcode-text-letter-spacing)] leading-[var(--craftcode-text-line-height)] [font-style:var(--craftcode-text-font-style)]">
          Our developers go beyond coding. They think with you and strengthen
          your team exactly when you need it.
        </p>

        <Button
          variant="outline"
          className="h-auto inline-flex items-center justify-center gap-2.5 px-8 py-[18px] bg-gray-50 rounded-md border border-solid border-[#f0f2f2] [font-family:'Lexend',Helvetica] font-medium text-[#010326] text-base text-center tracking-[0] leading-[22px]"
        >
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};

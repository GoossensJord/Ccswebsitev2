import React, { JSX } from 'react';
import { Button } from './ui/button';
import LeftCodeEditor from './LeftCodeEditor';
import RightTopCodeEditor from './RightCodeEditor';
import { TerminalWindow } from './TerminalWindow';

export const HeroSection = (): JSX.Element => {
  return (
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
  );
};

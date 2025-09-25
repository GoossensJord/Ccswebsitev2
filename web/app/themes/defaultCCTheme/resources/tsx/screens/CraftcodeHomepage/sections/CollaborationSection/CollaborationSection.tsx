import React from "react";

export const CollaborationSection = () => {
  return (
    <section className="relative w-full py-16">
      <div className="relative max-w-7xl mx-auto px-4">
        <h2 className="text-center [font-family:'Lexend',Helvetica] font-medium text-[#010326] text-[32px] tracking-[0] leading-[68px] mb-4">
          Trusted by leading companies
        </h2>

        <p className="text-center mx-auto [font-family:'Lexend',Helvetica] font-normal text-[#010326cc] text-lg tracking-[0] leading-8 mb-16">
          We are proud to have worked with leading names in various industries
          across Belgium and beyond, helping them navigate and master their
          digital transformation journey.
        </p>

        <div className="relative">
          <img
            className="w-full max-w-[1652px] h-[316px] mx-auto object-contain"
            alt="Group"
            src="/app/themes/defaultCCTheme/resources/images/group-1000005843.png"
          />

          <div className="absolute top-0 left-0 w-[318px] h-full bg-[linear-gradient(270deg,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_100%)] pointer-events-none" />

          <div className="absolute top-0 right-0 w-[318px] h-full bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_100%)] pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

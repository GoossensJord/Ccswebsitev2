import React from "react";

export const CodeShowcaseSection = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col">
      <div className="ml-0.5 w-[117px] h-5 [font-family:'Lexend',Helvetica] font-medium text-[#0156ff] text-base tracking-[0] leading-[normal]">
        Why Craftcode
      </div>

      <h2 className="w-[506px] h-28 mt-[9px] font-craftcode-h2 font-[number:var(--craftcode-h2-font-weight)] text-[#010326] text-[length:var(--craftcode-h2-font-size)] tracking-[var(--craftcode-h2-letter-spacing)] leading-[var(--craftcode-h2-line-height)] [font-style:var(--craftcode-h2-font-style)]">
        Turn your vision <br />
        into reliable code
      </h2>

      <p className="ml-0.5 w-[587px] h-14 mt-[22px] [font-family:'Lexend',Helvetica] font-normal text-[#010326cc] text-lg tracking-[0] leading-7">
        We match the right people to your context, align on outcomes
        <br />
        and build maintainable systems.
      </p>
    </section>
  );
};

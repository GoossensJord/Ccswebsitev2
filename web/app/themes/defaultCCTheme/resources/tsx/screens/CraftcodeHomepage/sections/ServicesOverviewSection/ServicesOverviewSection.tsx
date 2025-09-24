import React from "react";

export const ServicesOverviewSection = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col">
      <div className="text-[#0156ff] text-base leading-normal [font-family:'Lexend',Helvetica] font-medium tracking-[0]">
        What we do
      </div>

      <h2 className="mt-[9px] font-craftcode-h2 font-[number:var(--craftcode-h2-font-weight)] text-[#010326] text-[length:var(--craftcode-h2-font-size)] tracking-[var(--craftcode-h2-letter-spacing)] leading-[var(--craftcode-h2-line-height)] [font-style:var(--craftcode-h2-font-style)]">
        Our services, <br />
        your succes
      </h2>

      <p className="mt-8 [font-family:'Lexend',Helvetica] font-normal text-[#010326cc] text-lg tracking-[0] leading-7">
        At CraftCode, we excel in crafting clean, efficient code that drives
        your business forward. Our craftsmanship sets the standard for quality,
        ensuring that your digital vision is not only realized but built to the
        highest standards.
      </p>
    </section>
  );
};

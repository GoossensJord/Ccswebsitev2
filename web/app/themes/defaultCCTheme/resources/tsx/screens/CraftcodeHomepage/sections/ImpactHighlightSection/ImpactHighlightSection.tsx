import React from "react";

const impactHighlightData = [
  {
    type: "Blog",
    date: "28 Aug 2025",
    title: "End-to-end tracing get grip on your microservices",
    titleColor: "text-[#010326]",
  },
  {
    type: "Whitepaper",
    date: "13 Aug 2025",
    title: "Scaling without chaos: team topology & delivery pipelines",
    titleColor: "text-black",
  },
  {
    type: "Blog",
    date: "7 Jul 2025",
    title: "Team-as-a-Service vs staffing: outcomes, not headcount",
    titleColor: "text-black",
  },
];

export const ImpactHighlightSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[460px] items-start">
      {impactHighlightData.map((item, index) => (
        <article
          key={index}
          className="flex flex-col items-start gap-2 pt-0 pb-4 px-0 w-full border-b border-solid border-[#f0f2f2] last:border-b-0"
        >
          <header className="inline-flex items-center gap-2">
            <span className="[font-family:'Lexend',Helvetica] font-medium text-[#0156ff] text-base text-center tracking-[0] leading-[normal]">
              {item.type}
            </span>
            <span className="[font-family:'Lexend',Helvetica] font-medium text-[#709df6] text-base tracking-[0] leading-[normal]">
              &lt;/&gt;
            </span>
            <time className="[font-family:'Lexend',Helvetica] font-medium text-[#0156ff] text-base tracking-[0] leading-[normal]">
              {item.date}
            </time>
          </header>
          <h3
            className={`font-craftcode-h4 font-[number:var(--craftcode-h4-font-weight)] ${item.titleColor} text-[length:var(--craftcode-h4-font-size)] tracking-[var(--craftcode-h4-letter-spacing)] leading-[var(--craftcode-h4-line-height)] [font-style:var(--craftcode-h4-font-style)]`}
          >
            {item.title}
          </h3>
        </article>
      ))}
    </section>
  );
};

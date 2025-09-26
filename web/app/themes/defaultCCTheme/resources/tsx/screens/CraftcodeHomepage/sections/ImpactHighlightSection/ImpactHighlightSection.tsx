import React, { JSX } from "react";

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

const mainArticle = {
  type: "Blog",
  date: "28 Aug 2025",
  title: "Choosing your 2025 tech stack: a pragmatic guide",
  description: "Short reads and deep dives from our team. Blogs, webinars and whitepapers to help you plan, build, and ship with confidence.",
  image: "/app/themes/defaultCCTheme/resources/images/5d1b6da0a293e6d75669eecef0cf7acf66e9da93.png",
};

export const ImpactHighlightSection = (): JSX.Element => {
  return (
    <section className="w-full max-w-[1200px] mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="[font-family:'Lexend',Helvetica] font-medium text-[#0156ff] text-base tracking-[0] leading-[normal] mb-4">
          Insights & Resources
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Turn insights into better code
        </h2>
        <p className="[font-family:'Lexend',Helvetica] font-normal text-[#010326cc] text-lg tracking-[0] leading-7 mx-auto">
          Short reads and deep dives from our team. Blogs, webinars and whitepapers to help you plan, build, and ship with confidence.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Main Article - Left Side */}
        <article className="relative">
          <div className="relative h-64 lg:h-80 mb-4">
            <img
              src={mainArticle.image}
              alt={mainArticle.title}
              className="w-full h-full object-cover"
            />
          </div>
          <header className="inline-flex items-center gap-2 mb-2">
            <span className="[font-family:'Lexend',Helvetica] font-medium text-[#0156ff] text-base text-center tracking-[0] leading-[normal]">
              {mainArticle.type}
            </span>
            <span className="[font-family:'Lexend',Helvetica] font-medium text-[#709df6] text-base tracking-[0] leading-[normal]">
              &lt;/&gt;
            </span>
            <time className="[font-family:'Lexend',Helvetica] font-medium text-[#0156ff] text-base tracking-[0] leading-[normal]">
              {mainArticle.date}
            </time>
          </header>
          <h3 className="font-craftcode-h4 font-bold text-[#010326] text-xl tracking-[var(--craftcode-h4-letter-spacing)] leading-[var(--craftcode-h4-line-height)] [font-style:var(--craftcode-h4-font-style)]">
            {mainArticle.title}
          </h3>
        </article>

        {/* Smaller Articles - Right Side */}
        <div className="flex flex-col w-full max-w-[460px] items-start h-full justify-between">
          {impactHighlightData.map((item, index) => (
            <article
              key={index}
              className="flex flex-col items-start gap-2 pt-0 pb-4 px-0 w-full border-b border-solid border-[#f0f2f2] last:border-b-0 flex-1 justify-center"
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
                className={`font-craftcode-h4 font-bold ${item.titleColor} text-xl tracking-[var(--craftcode-h4-letter-spacing)] leading-[var(--craftcode-h4-line-height)] [font-style:var(--craftcode-h4-font-style)]`}
              >
                {item.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

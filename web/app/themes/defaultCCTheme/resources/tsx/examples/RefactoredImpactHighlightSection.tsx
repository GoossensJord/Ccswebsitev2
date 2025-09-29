import React, { JSX } from "react";
import { theme } from "../styles/theme";

// Example of how to refactor components to use the theme system
const impactHighlightData = [
  {
    type: "Blog",
    date: "28 Aug 2025",
    title: "End-to-end tracing get grip on your microservices",
    titleColor: theme.colors.neutral.dark,
  },
  {
    type: "Whitepaper",
    date: "13 Aug 2025",
    title: "Scaling without chaos: team topology & delivery pipelines",
    titleColor: theme.colors.neutral.dark,
  },
  {
    type: "Blog",
    date: "7 Jul 2025",
    title: "Team-as-a-Service vs staffing: outcomes, not headcount",
    titleColor: theme.colors.neutral.dark,
  },
];

const mainArticle = {
  type: "Blog",
  date: "28 Aug 2025",
  title: "Choosing your 2025 tech stack: a pragmatic guide",
  description: "Short reads and deep dives from our team. Blogs, webinars and whitepapers to help you plan, build, and ship with confidence.",
  image: "/app/themes/defaultCCTheme/resources/images/5d1b6da0a293e6d75669eecef0cf7acf66e9da93.png",
};

export const RefactoredImpactHighlightSection = (): JSX.Element => {
  // Define reusable styles
  const subtitleStyle = {
    fontFamily: theme.fonts.primary,
    fontSize: theme.fontSize.base,
    fontWeight: theme.fontWeight.medium,
    color: theme.colors.primary.blue,
    letterSpacing: theme.letterSpacing.normal,
    lineHeight: theme.lineHeight.normal,
  };

  const mainTitleStyle = {
    fontSize: theme.fontSize['4xl'],
    fontWeight: theme.fontWeight.bold,
    color: theme.colors.neutral.dark,
    lineHeight: theme.lineHeight.tight,
  };

  const bodyTextStyle = {
    fontFamily: theme.fonts.primary,
    fontSize: theme.fontSize.lg,
    fontWeight: theme.fontWeight.normal,
    color: theme.colors.neutral.darkMuted,
    letterSpacing: theme.letterSpacing.normal,
    lineHeight: theme.lineHeight.loose,
  };

  const articleTitleStyle = {
    fontFamily: theme.fonts.craftcode.h4,
    fontSize: theme.fontSize.xl,
    fontWeight: theme.fontWeight.bold,
    letterSpacing: theme.letterSpacing.craftcode.h4,
    lineHeight: theme.lineHeight.craftcode.h4,
  };

  const metaTextStyle = {
    fontFamily: theme.fonts.primary,
    fontSize: theme.fontSize.base,
    fontWeight: theme.fontWeight.medium,
    letterSpacing: theme.letterSpacing.normal,
    lineHeight: theme.lineHeight.normal,
  };

  return (
    <section className="w-full max-w-[1200px] mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div style={subtitleStyle} className="mb-4">
          Insights & Resources
        </div>
        <h2 style={mainTitleStyle} className="mb-6 lg:text-5xl">
          Turn insights into better code
        </h2>
        <p style={bodyTextStyle} className="mx-auto">
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
            <span style={{...metaTextStyle, color: theme.colors.primary.blue}}>
              {mainArticle.type}
            </span>
            <span style={{...metaTextStyle, color: theme.colors.primary.lightBlue}}>
              &lt;/&gt;
            </span>
            <time style={{...metaTextStyle, color: theme.colors.primary.blue}}>
              {mainArticle.date}
            </time>
          </header>
          <h3 style={{...articleTitleStyle, color: theme.colors.neutral.dark}}>
            {mainArticle.title}
          </h3>
        </article>

        {/* Smaller Articles - Right Side */}
        <div className="flex flex-col w-full max-w-[460px] items-start h-full justify-between">
          {impactHighlightData.map((item, index) => (
            <article
              key={index}
              className="flex flex-col items-start gap-2 pt-0 pb-4 px-0 w-full border-b border-solid flex-1 justify-center last:border-b-0"
              style={{borderColor: theme.colors.neutral.gray}}
            >
              <header className="inline-flex items-center gap-2">
                <span style={{...metaTextStyle, color: theme.colors.primary.blue}}>
                  {item.type}
                </span>
                <span style={{...metaTextStyle, color: theme.colors.primary.lightBlue}}>
                  &lt;/&gt;
                </span>
                <time style={{...metaTextStyle, color: theme.colors.primary.blue}}>
                  {item.date}
                </time>
              </header>
              <h3 style={{...articleTitleStyle, color: item.titleColor}}>
                {item.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

import React, { JSX } from "react";
import { createTextStyle, getColor, editableStyles } from "../../../../config/editable-styles";

const impactHighlightData = [
  {
    type: "Blog",
    date: "28 Aug 2025",
    title: "End-to-end tracing get grip on your microservices",
    titleColor: editableStyles.colors.text.primary,
  },
  {
    type: "Whitepaper",
    date: "13 Aug 2025",
    title: "Scaling without chaos: team topology & delivery pipelines",
    titleColor: editableStyles.colors.text.primary,
  },
  {
    type: "Blog",
    date: "7 Jul 2025",
    title: "Team-as-a-Service vs staffing: outcomes, not headcount",
    titleColor: editableStyles.colors.text.primary,
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
  // Define reusable styles using editable configuration
  const subtitleStyle = createTextStyle('small');
  const mainTitleStyle = createTextStyle('h2');
  const bodyTextStyle = createTextStyle('body');
  const metaTextStyle = createTextStyle('small');
  const articleTitleStyle = createTextStyle('h4');
  
  return (
    <section className="w-full" style={{maxWidth: editableStyles.layout.maxWidth, margin: '0 auto'}}>
      {/* Section Header */}
      <div className="text-center" style={{marginBottom: editableStyles.spacing.sections.medium}}>
        <div style={{...subtitleStyle, color: editableStyles.colors.brand.primary, marginBottom: editableStyles.spacing.components.normal}}>
          Insights & Resources
        </div>
        <h2 style={{...mainTitleStyle, marginBottom: editableStyles.spacing.components.loose}} className="lg:text-5xl">
          Turn insights into better code
        </h2>
        <p style={{...bodyTextStyle, margin: '0 auto'}}>
          Short reads and deep dives from our team. Blogs, webinars and whitepapers to help you plan, build, and ship with confidence.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2" style={{gap: editableStyles.layout.gridGap.large}}>
        {/* Main Article - Left Side */}
        <article className="relative">
          <div className="relative h-64 lg:h-80" style={{marginBottom: editableStyles.spacing.components.normal}}>
            <img
              src={mainArticle.image}
              alt={mainArticle.title}
              className="w-full h-full object-cover"
            />
          </div>
          <header className="inline-flex items-center" style={{gap: editableStyles.spacing.components.tight, marginBottom: editableStyles.spacing.components.tight}}>
            <span style={{...metaTextStyle, color: editableStyles.colors.brand.primary}}>
              {mainArticle.type}
            </span>
            <span style={{...metaTextStyle, color: editableStyles.colors.brand.secondary}}>
              &lt;/&gt;
            </span>
            <time style={{...metaTextStyle, color: editableStyles.colors.brand.primary}}>
              {mainArticle.date}
            </time>
          </header>
          <h3 style={{...articleTitleStyle, color: editableStyles.colors.text.primary}}>
            {mainArticle.title}
          </h3>
        </article>

        {/* Smaller Articles - Right Side */}
        <div className="flex flex-col w-full max-w-[460px] items-start h-full justify-between">
          {impactHighlightData.map((item, index) => (
            <article
              key={index}
              className="flex flex-col items-start pt-0 px-0 w-full border-b border-solid last:border-b-0 flex-1 justify-center"
              style={{
                gap: editableStyles.spacing.components.tight,
                paddingBottom: editableStyles.spacing.components.normal,
                borderColor: editableStyles.colors.borders.light
              }}
            >
              <header className="inline-flex items-center" style={{gap: editableStyles.spacing.components.tight}}>
                <span style={{...metaTextStyle, color: editableStyles.colors.brand.primary}}>
                  {item.type}
                </span>
                <span style={{...metaTextStyle, color: editableStyles.colors.brand.secondary}}>
                  &lt;/&gt;
                </span>
                <time style={{...metaTextStyle, color: editableStyles.colors.brand.primary}}>
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

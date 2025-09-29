import React from 'react';
import { Card, CardContent } from '../../../../components/ui/card';
import { JSX } from 'react/jsx-runtime';
import { createTextStyle, editableStyles } from '../../../../config/editable-styles';

export const ProjectShowcaseSection = (): JSX.Element => {
  // Define reusable styles
  const subtitleStyle = createTextStyle('small');
  const titleStyle = createTextStyle('h2');
  const bodyStyle = createTextStyle('body');
  const quoteStyle = createTextStyle('body');
  const companyStyle = createTextStyle('small');

  return (
    <section style={{padding: `${editableStyles.spacing.sections.large} 0`}}>
      <div className="mx-auto" style={{maxWidth: editableStyles.layout.maxWidth, padding: `0 ${editableStyles.layout.containerPadding}`}}>
        <div className="text-center" style={{marginBottom: editableStyles.spacing.sections.medium}}>
          <p style={{...subtitleStyle, color: editableStyles.colors.brand.primary, marginBottom: editableStyles.spacing.components.normal}}>Our Success Stories</p>
          <h2 style={{...titleStyle, marginBottom: editableStyles.spacing.components.loose}} className="lg:text-5xl">
            Proven craftsmanship, real outcomes
          </h2>
          <p style={{...bodyStyle, margin: '0 auto'}}>
            We focus on people, fit, and craft. From architecture to front-end
            and back-end,
            <br /> we build what serves your goals and users best
          </p>
        </div>

        <div className="grid lg:grid-cols-2" style={{gap: editableStyles.layout.gridGap.large}}>
          {/* CEPA Project */}
          <Card className="rounded-[20px_20px_60px_20px] border border-solid" 
                style={{
                  backgroundColor: editableStyles.colors.backgrounds.light,
                  borderColor: editableStyles.colors.borders.light,
                  padding: editableStyles.components.cards.padding
                }}>
            <CardContent className="p-0 flex items-start" style={{gap: editableStyles.spacing.components.loose}}>
              {/* Text Content */}
              <div className="flex-1 flex flex-col justify-between min-h-[234px]">
                <div>
                  <p style={{...quoteStyle, marginBottom: editableStyles.spacing.components.normal}}>
                    With CraftCode's guidance, we transformed our digital
                    processes, achieving operational efficiency that exceeded
                    our expectations.
                  </p>
                </div>

                <div>
                  <p style={{...companyStyle, color: editableStyles.colors.brand.primary}}>
                    CEPA
                  </p>
                </div>
              </div>

              {/* Image Content with Logo Overlay */}
              <div className="flex-shrink-0 relative">
                <img
                  className="w-[200px] h-[200px] rounded-2xl object-cover"
                  alt="CEPA Project"
                  src="/app/themes/defaultCCTheme/resources/images/rectangle-5954.png"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    className="w-[121px] h-[46px]"
                    alt="CEPA Logo"
                    src="/app/themes/defaultCCTheme/resources/images/logo.svg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Royal Belgian Football Association Project */}
          <Card className="bg-gray-50 rounded-[20px_20px_60px_20px] border border-solid border-[#f0f2f2] p-6">
            <CardContent className="p-0 flex gap-6 items-start">
              {/* Text Content */}
              <div className="flex-1 flex flex-col justify-between min-h-[234px]">
                <div>
                  <p className="font-normal text-[#010326cc] text-lg tracking-[0] leading-7 mb-4">
                    CraftCode's collaborative approach meant we weren't just
                    getting a development team; we were getting partners who
                    cared about our growth.
                  </p>
                </div>

                <div>
                  <p className="font-medium text-[#0156ff] text-base tracking-[0] leading-7">
                    Royal Belgian Football Association
                  </p>
                </div>
              </div>

              {/* Image Content with Logo Overlay */}
              <div className="flex-shrink-0 relative">
                <img
                  className="w-[200px] h-[200px] rounded-2xl object-cover"
                  alt="RBFA Project"
                  src="/app/themes/defaultCCTheme/resources/images/rectangle-5969.png"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    className="w-[150px] h-[61px]"
                    alt="RBFA Logo"
                    src="/app/themes/defaultCCTheme/resources/images/kbvb-logo-1.svg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

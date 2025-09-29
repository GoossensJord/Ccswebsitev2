import React, { JSX } from "react";
import { Button } from "../../../../components/ui/button";
import { createTextStyle, editableStyles } from "../../../../config/editable-styles";

export const InsightsSection = (): JSX.Element => {
  // Define reusable styles
  const titleStyle = createTextStyle('h2');
  const bodyStyle = createTextStyle('body');
  const buttonTextStyle = createTextStyle('small');

  return (
    <section className="relative w-full">
      <div className="relative rounded-[20px] border border-solid" 
           style={{
             backgroundColor: editableStyles.colors.backgrounds.light,
             borderColor: editableStyles.colors.borders.light,
             paddingTop: editableStyles.spacing.sections.large,
             paddingBottom: '150px'
           }}>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full rounded-[20px_20px_20px_60px] flex items-center justify-between relative overflow-hidden" 
             style={{
               maxWidth: editableStyles.layout.maxWidth,
               height: '285px',
               backgroundColor: editableStyles.colors.brand.accent,
               padding: `0 ${editableStyles.spacing.sections.large}`
             }}>
          <div className="absolute inset-0 bg-[url(/app/themes/defaultCCTheme/resources/images/image-85.png)] bg-contain bg-bottom bg-right bg-no-repeat opacity-20 z-0"></div>
          <div className="flex flex-col items-start max-w-[822px] relative z-10" style={{gap: editableStyles.spacing.components.normal}}>
            <h2 style={{...titleStyle, color: 'white', fontSize: editableStyles.typography.headingSizes.h1}}>
              Let&#39;s build the future together
            </h2>
            <p style={{...bodyStyle, color: '#ffffffcc'}}>
              Ready to take your digital ambitions to the next level? <br />
              Let&#39;s collaborate and create something exceptional.
            </p>
          </div>
          <Button className="w-[143px] h-auto rounded-md hover:bg-[#0156ff]/90 relative z-10" 
                  style={{
                    backgroundColor: editableStyles.colors.brand.primary,
                    padding: editableStyles.components.buttons.primary.padding
                  }}>
            <span style={{...buttonTextStyle, color: 'white'}}>
              Let&apos;s talk
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

import React, { JSX } from 'react';
import { Button } from './ui/button';
import { createTextStyle, editableStyles } from '../config/editable-styles';

export const CallToActionHero = (): JSX.Element => {
  // Define reusable styles
  const titleStyle = createTextStyle('h2');
  const bodyStyle = createTextStyle('body');
  const buttonTextStyle = createTextStyle('small');

  return (
    <section className="relative rounded-[20px_20px_60px_20px]" 
             style={{
               backgroundColor: editableStyles.colors.brand.accent,
               margin: `0 ${editableStyles.layout.containerPadding}`,
               padding: `${editableStyles.spacing.sections.large} 0`
             }}>
      <img
        className="absolute inset-0 h-full object-cover rounded-[20px_20px_60px_20px]"
        alt="Mask group"
        src="/app/themes/defaultCCTheme/resources/images/mask-group.png"
      />
      <div className="relative z-10 text-center mx-auto" 
           style={{
             maxWidth: '896px',
             padding: `0 ${editableStyles.layout.containerPadding}`
           }}>
        <h2 style={{...titleStyle, color: 'white', marginBottom: editableStyles.spacing.components.loose}} className="lg:text-5xl">
          Your idea. Our code. <br />
          Endless possibilities
        </h2>
        <p style={{
          ...bodyStyle,
          color: 'rgba(255, 255, 255, 0.8)',
          textAlign: 'center',
          marginBottom: editableStyles.layout.gridGap.large,
          margin: '0 auto'
        }}>
          From concept to impactful solution, we're here to build with you.
          <br />
          What's our next challenge together?
        </p>
        <Button className="hover:bg-[#0156ff]/90 rounded-lg" 
                style={{
                  backgroundColor: editableStyles.colors.brand.primary,
                  color: 'white',
                  padding: editableStyles.components.buttons.primary.padding
                }}>
          <span style={buttonTextStyle}>Let's connect</span>
        </Button>
      </div>
    </section>
  );
};

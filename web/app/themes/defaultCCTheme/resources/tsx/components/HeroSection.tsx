import React, { JSX } from 'react';
import { Button } from './ui/button';
import LeftCodeEditor from './LeftCodeEditor';
import RightTopCodeEditor from './RightCodeEditor';
import { TerminalWindow } from './TerminalWindow';
import { createTextStyle, editableStyles } from '../config/editable-styles';

export const HeroSection = (): JSX.Element => {
  // Define reusable styles
  const heroTitleStyle = createTextStyle('h1');
  const heroBodyStyle = createTextStyle('body');
  const buttonTextStyle = createTextStyle('small');

  return (
    <section className="relative" style={{padding: `0 ${editableStyles.layout.containerPadding} ${editableStyles.spacing.sections.large}`}}>
      <div className="mx-auto" style={{maxWidth: editableStyles.layout.maxWidth, padding: `0 ${editableStyles.spacing.sections.large}`}}>
        <div
          className="w-full min-h-[1000px] rounded-[20px_20px_60px_20px] border border-solid relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundColor: editableStyles.colors.backgrounds.light,
            borderColor: editableStyles.colors.borders.light,
            padding: editableStyles.spacing.sections.small,
            backgroundImage: 'url(/app/themes/defaultCCTheme/resources/images/image-85.png)',
          }}
        >
          {/* Hero Content Overlay */}
          <div className="relative z-20 flex flex-col items-center text-center" style={{paddingTop: editableStyles.spacing.sections.large}}>
            <h1 style={{
              ...heroTitleStyle,
              fontSize: '62px',
              lineHeight: '70px',
              marginBottom: editableStyles.spacing.sections.large
            }}>
              Our craftsmanship <br />
              defines your code
            </h1>
            <p className="text-center" style={{
              ...heroBodyStyle,
              maxWidth: '798px',
              marginBottom: editableStyles.spacing.sections.large
            }}>
              From strategic advisory to hands-on development,
              <br />
              we partner with you to create sustainable digital solutions that
              truly make a difference.
            </p>
            <Button className="h-auto hover:bg-[#0156ff]/90" style={{
              backgroundColor: editableStyles.colors.brand.primary,
              color: 'white',
              padding: editableStyles.components.buttons.primary.padding
            }}>
              <span style={buttonTextStyle}>Get to know us</span>
            </Button>
          </div>

          {/* Left Code Editor */}
          <LeftCodeEditor />
          <RightTopCodeEditor />

          {/* Terminal Window - Right side */}
          <TerminalWindow className="right-8 lg:right-24 bottom-32 lg:bottom-40" />

          {/* Background decorative image */}
          <img
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-auto z-5 opacity-60"
            alt="Background decoration"
            src="/app/themes/defaultCCTheme/resources/images/frame-73.svg"
          />
        </div>
      </div>
    </section>
  );
};

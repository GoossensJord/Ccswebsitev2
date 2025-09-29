import React, { JSX } from 'react';
import { createTextStyle, editableStyles } from '../config/editable-styles';

export const ServicesSection = (): JSX.Element => {
  // Define reusable styles
  const subtitleStyle = createTextStyle('small');
  const titleStyle = createTextStyle('h2');
  const bodyStyle = createTextStyle('body');
  const cardTitleStyle = createTextStyle('h3');
  const cardBodyStyle = createTextStyle('body');

  return (
    <section style={{backgroundColor: 'white', padding: `${editableStyles.spacing.sections.large} 0`}}>
      <div className="mx-auto" style={{maxWidth: editableStyles.layout.maxWidth, padding: `0 ${editableStyles.layout.containerPadding}`}}>
        <div className="grid lg:grid-cols-2 items-center" style={{gap: editableStyles.layout.gridGap.large}}>
          {/* Left Column */}
          <div>
            <p style={{...subtitleStyle, color: editableStyles.colors.brand.primary, marginBottom: editableStyles.spacing.components.normal}}>What we do</p>
            <h2 style={{...titleStyle, marginBottom: editableStyles.spacing.components.loose}} className="lg:text-5xl">
              Our services, <br />
              your success
            </h2>
            <p style={bodyStyle}>
              At CraftCode, we excel in crafting clean, efficient code that
              drives your business forward. Our craftsmanship sets the standard
              for quality, ensuring that your digital vision is not only
              realized but built to the highest standards.
            </p>
          </div>

          {/* Right Column */}
          <div className="rounded-2xl" style={{
            backgroundColor: editableStyles.colors.backgrounds.light,
            padding: editableStyles.layout.gridGap.large
          }}>
            <div className="flex items-center mb-6" style={{gap: editableStyles.spacing.components.normal}}>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{backgroundColor: `${editableStyles.colors.brand.primary}20`}}>
                <div className="w-6 h-6" style={{color: editableStyles.colors.brand.primary}}>💻</div>
              </div>
              <h3 style={cardTitleStyle}>
                Developer as a Service
              </h3>
            </div>
            <p style={{...cardBodyStyle, marginBottom: editableStyles.spacing.components.loose}}>
              Our developers go beyond coding. They think with you and
              strengthen your team exactly when you need it.
            </p>
            <button className="font-medium hover:opacity-75 transition-colors" style={{color: editableStyles.colors.brand.primary}}>
              Learn More →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

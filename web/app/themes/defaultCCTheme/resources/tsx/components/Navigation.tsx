import React, { JSX } from 'react';
import { Button } from './ui/button';
import { createTextStyle, editableStyles } from '../config/editable-styles';

const navigationItems = [
  { label: 'What we do', hasDropdown: true },
  { label: 'Solutions', hasDropdown: true },
  { label: 'About Us', hasDropdown: false },
  { label: 'Careers', hasDropdown: false, isActive: true },
];

export const Navigation = (): JSX.Element => {
  // Define reusable styles
  const navLinkStyle = createTextStyle('body');
  const buttonTextStyle = createTextStyle('small');

  return (
    <nav className="flex items-center justify-between relative" 
         style={{
           padding: `${editableStyles.spacing.sections.small} ${editableStyles.spacing.sections.large}`
         }}>
      <img
        className="w-56 h-12"
        alt="Logo color"
        src="/app/themes/defaultCCTheme/resources/images/logo-color.png"
      />
      <div className="flex items-center" style={{gap: editableStyles.layout.gridGap.large}}>
        {navigationItems.map((item, index) => (
          <div key={index} className="flex items-center" style={{gap: editableStyles.spacing.components.tight}}>
            <div
              className="text-center whitespace-nowrap"
              style={{
                ...navLinkStyle,
                color: item.isActive ? editableStyles.colors.brand.primary : editableStyles.colors.text.primary
              }}
            >
              {item.label}
            </div>
            {item.hasDropdown && (
              <img
                className="w-2.5 h-1.5"
                alt="Vector"
                src="/app/themes/defaultCCTheme/resources/images/vector-1.svg"
              />
            )}
          </div>
        ))}

        <Button className="h-auto hover:bg-[#0156ff]/90" 
                style={{
                  backgroundColor: editableStyles.colors.brand.primary,
                  color: 'white',
                  padding: `${editableStyles.spacing.components.normal} ${editableStyles.spacing.components.loose}`
                }}>
          <span style={buttonTextStyle}>Contact Us</span>
        </Button>
      </div>
    </nav>
  );
};

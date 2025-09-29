import React, { JSX } from "react";
import { editableStyles } from "../../config/editable-styles";

export const CompanyLogoCarrousel = (): JSX.Element => {
  const companies = [
    // Top row
    "Contribute",
    "Royal Belgian Football Association", 
    "CEPA",
    "Proximus",
    "UZA",
    // Bottom row
    "Christelijke Mutualiteit",
    "Collibra", 
    "Johnson & Johnson",
    "Randstad",
    "Vlaamse Overheid"
  ];

  return (
    <div className="w-full mx-auto relative" style={{maxWidth: editableStyles.layout.maxWidth}}>
      {/* Fade overlay for left and right edges */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent"></div>
      </div>
      
      <div className="grid grid-cols-5" style={{gap: editableStyles.layout.gridGap.small, marginBottom: editableStyles.spacing.components.normal}}>
        {companies.slice(0, 5).map((company, index) => (
          <div key={index} className="flex items-center justify-center min-h-[80px]" style={editableStyles.components.cards}>
            <img
              src="/app/themes/defaultCCTheme/resources/images/logo-color.png"
              alt={company}
              className="max-w-full max-h-8 object-contain"
            />
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-5" style={{gap: editableStyles.layout.gridGap.small}}>
        {companies.slice(5, 10).map((company, index) => (
          <div key={index + 5} className="flex items-center justify-center min-h-[80px]" style={editableStyles.components.cards}>
            <img
              src="/app/themes/defaultCCTheme/resources/images/logo-color.png"
              alt={company}
              className="max-w-full max-h-8 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};


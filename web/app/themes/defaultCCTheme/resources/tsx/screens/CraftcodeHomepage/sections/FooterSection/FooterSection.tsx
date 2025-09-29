import React, { JSX } from "react";
import { createTextStyle, editableStyles } from "../../../../config/editable-styles";

export const FooterSection = () => {
  const footerColumns = [
    {
      title: "WHAT WE DO",
      items: [
        "Developer as a service",
        "Team as a service",
        "Coaching and Guidance",
      ],
    },
    {
      title: "SOLUTIONS",
      items: [
        "Architecture",
        "Front-end Development",
        "Back-end Development",
        "Integration",
      ],
    },
    {
      title: "ABOUT US",
      items: ["Who are we", "Careers", "Internships"],
    },
    {
      title: "INSIGHTS",
      items: ["Blogs", "Webinars", "Whitepapers"],
    },
    {
      title: "FEEL FREE TO REACH OUT",
      items: [
        "+32 (0)3 451 24 77",
        "info@craftcode.be",
        "",
        "Prins Boudewijnlaan 43\n2650 Edegem",
      ],
    },
  ];

  // Define reusable styles
  const titleStyle = createTextStyle('small');
  const linkStyle = createTextStyle('small');
  const copyrightStyle = createTextStyle('small');

  return (
    <section className="relative w-full">
      <div className="relative rounded-[20px] border border-solid" 
           style={{
             backgroundColor: editableStyles.colors.backgrounds.light,
             borderColor: editableStyles.colors.borders.light,
             paddingTop: editableStyles.spacing.sections.small,
             paddingBottom: '150px'
           }}>
        <div className="relative z-10 mx-auto" 
             style={{
               maxWidth: editableStyles.layout.maxWidth,
               padding: `0 ${editableStyles.layout.containerPadding}`
             }}>
          <div className="grid grid-cols-5" 
               style={{
                 gap: editableStyles.layout.gridGap.large,
                 marginBottom: '326px'
               }}>
            {footerColumns.map((column, index) => (
              <div key={index} className="flex flex-col items-start" style={
                {
                  gap: editableStyles.spacing.components.tight
                }
                }>
                <div style={{...titleStyle, color: editableStyles.colors.text.light}}>
                  {column.title}
                </div>
                <div className="flex flex-col items-start w-full" style={{gap: '1px'}}>
                  {column.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="whitespace-pre-line"
                      style={{...linkStyle, color: editableStyles.colors.text.secondary}}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Dark Footer Bar - Full Width */}
      <div className="w-full flex items-center justify-between" 
           style={{
             height: '80px',
             backgroundColor: editableStyles.colors.backgrounds.dark,
             padding: `0 ${editableStyles.spacing.sections.large}`
           }}>
        {/* Left side - Logo and Copyright */}
        <div className="flex items-center" style={{gap: editableStyles.spacing.sections.large}}>
          <img
            className="w-[132px] h-7"
            alt="CraftCode Logo"
            src="/app/themes/defaultCCTheme/resources/images/logo-color-2.png"
          />
          <div style={{...copyrightStyle, color: 'white'}}>
            Copyright © 2025 | All rights reserved | Part of the Fieldside group
          </div>
        </div>
        
        {/* Right side - Privacy Links */}
        <div style={{...copyrightStyle, color: 'white'}}>
          Privacy statement | Cookie policy
        </div>
      </div>
    </section>
  );
};

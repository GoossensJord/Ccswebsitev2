import React, { JSX } from "react";


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

  return (
    <section className="relative w-full">
      <div className="relative bg-gray-50 rounded-[20px] border border-solid border-[#f0f2f2] pt-[60px] pb-[150px]">
        <div className="relative z-10 max-w-[1406px] mx-auto px-4">
          <div className="grid grid-cols-5 gap-8 mb-[326px]">
            {footerColumns.map((column, index) => (
              <div key={index} className="flex flex-col items-start gap-2">
                <div className="[font-family:'Lexend',Helvetica] font-medium text-[#01032699] text-xs tracking-[0] leading-7">
                  {column.title}
                </div>
                <div className="flex flex-col items-start gap-px w-full">
                  {column.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="[font-family:'Lexend',Helvetica] font-semibold text-[#010326cc] text-sm tracking-[0] leading-7 whitespace-pre-line"
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
      <div className="w-full h-[80px] bg-[#131e32] flex items-center justify-between px-[87px]">
        {/* Left side - Logo and Copyright */}
        <div className="flex items-center gap-[76px]">
          <img
            className="w-[132px] h-7"
            alt="CraftCode Logo"
            src="/app/themes/defaultCCTheme/resources/images/logo-color-2.png"
          />
          <div className="[font-family:'Lexend',Helvetica] font-normal text-sm text-white tracking-[0] leading-7">
            Copyright © 2025 | All rights reserved | Part of the Fieldside group
          </div>
        </div>
        
        {/* Right side - Privacy Links */}
        <div className="[font-family:'Lexend',Helvetica] font-normal text-sm text-white tracking-[0] leading-7">
          Privacy statement | Cookie policy
        </div>
      </div>
    </section>
  );
};

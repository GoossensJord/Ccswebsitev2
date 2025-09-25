import React, { JSX } from 'react';
import { Button } from './ui/button';

const navigationItems = [
  { label: 'What we do', hasDropdown: true },
  { label: 'Solutions', hasDropdown: true },
  { label: 'About Us', hasDropdown: false },
  { label: 'Careers', hasDropdown: false, isActive: true },
];

export const Navigation = (): JSX.Element => {
  return (
    <nav className="flex items-center justify-between px-[181px] py-[42px] relative">
      <img
        className="w-56 h-12"
        alt="Logo color"
        src="/app/themes/defaultCCTheme/resources/images/logo-color.png"
      />
      <div className="flex items-center gap-8">
        {navigationItems.map((item, index) => (
          <div key={index} className="flex items-center gap-0.5">
            <div
              className={`[font-family:'Lexend',Helvetica] font-medium text-lg text-center tracking-[0] leading-[22px] whitespace-nowrap ${
                item.isActive ? 'text-[#0156ff]' : 'text-[#010326]'
              }`}
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

        <Button className="bg-[#0156ff] hover:bg-[#0156ff]/90 text-white px-[26px] py-4 h-auto">
          Contact Us
        </Button>
      </div>
    </nav>
  );
};

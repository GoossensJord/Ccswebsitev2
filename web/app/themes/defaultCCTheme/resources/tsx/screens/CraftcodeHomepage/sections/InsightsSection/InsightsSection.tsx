import React from "react";
import { Button } from "../../../../components/ui/button";

export const InsightsSection = (): JSX.Element => {
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
      <div className="relative bg-gray-50 rounded-[20px] border border-solid border-[#f0f2f2] pt-[133px] pb-[150px]">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[1406px] h-[285px] bg-[#002266] rounded-[20px_20px_20px_60px]" />

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[1406px] h-[285px] bg-[#131e32] rounded-[20px]" />

        <div className="relative z-10 max-w-[1406px] mx-auto px-4">
          <div className="grid grid-cols-5 gap-8 mb-[326px] mt-[222px]">
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

          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[1406px] h-[285px] flex gap-[269px] bg-[url(/mask-group-1.png)] bg-[100%_100%]">
            <div className="mt-[61px] w-[822px] h-[147px] ml-[85px] flex flex-col items-center gap-[15px]">
              <h2 className="-ml-1 h-[68px] w-[818px] [font-family:'Lexend',Helvetica] font-medium text-white text-5xl tracking-[0] leading-[68px]">
                Let&#39;s build the future together
              </h2>
              <p className="ml-[-231px] h-16 w-[587px] [font-family:'Lexend',Helvetica] font-normal text-[#ffffffcc] text-lg tracking-[0] leading-8">
                Ready to take your digital ambitions to the next level? <br />
                Let&#39;s collaborate and create something exceptional.
              </p>
            </div>
            <Button className="mt-[143px] w-[143px] h-auto px-8 py-[26px] bg-[#0156ff] rounded-md hover:bg-[#0156ff]/90">
              <span className="[font-family:'Lexend',Helvetica] font-medium text-white text-lg text-center tracking-[0] leading-[22px] whitespace-nowrap">
                Let&apos;s talk
              </span>
            </Button>
          </div>

          <div className="absolute bottom-[41px] left-[87px] flex items-center gap-[76px]">
            <img
              className="w-[132px] h-7"
              alt="Logo color"
              src="/app/themes/defaultCCTheme/resources/images/logo-color-2.png"
            />
            <div className="[font-family:'Lexend',Helvetica] font-normal text-sm tracking-[0] leading-7 whitespace-nowrap">
              <span className="text-white">
                Copyright © 2025 | All rights reserved | Part of the Fieldside
                group&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Privacy
                statement | Cookie policy
              </span>
            </div>
          </div>

          <img
            className="absolute bottom-[126px] left-[87px] w-[1232px] h-20"
            alt="Frame"
            src="/app/themes/defaultCCTheme/resources/images/frame-66.svg"
          />
        </div>
      </div>
    </section>
  );
};

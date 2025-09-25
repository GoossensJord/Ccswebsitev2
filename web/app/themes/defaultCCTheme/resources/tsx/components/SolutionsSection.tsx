import React, { JSX } from 'react';
import { cn } from '../lib/utils';
import { Card, CardContent } from './ui/card';
import { JavaCodeEditor } from './JavaCodeEditor';

const solutionCards = [
  {
    title: 'Architecture',
    description:
      'We design solid foundations that grow with your ambitions. Clear, maintainable and ready for the future.',
    className: 'rounded-[40px_20px_20px_20px]',
  },
  {
    title: 'Front-end Development',
    description:
      "We craft user interfaces that don't just look good but feel intuitive and responsive. Whether it's a web app, dashboard or customer portal, our front-end developers ensure smooth interactions, accessible experiences and high performance across all devices.",
    className: 'rounded-[20px]',
  },
  {
    title: 'Back-end Development',
    description:
      "Behind every great interface is a solid engine. Our back-end experts build scalable, secure and future-ready systems that handle complex logic and data with ease. We focus on clean architecture, smart integrations and code that's built to last.",
    className: 'rounded-[20px]',
  },
  {
    title: 'Integration',
    description:
      'We connect systems in ways that just work. Smooth, safe and without the usual hassle.',
    className: 'rounded-[20px_20px_40px_20px]',
  },
];

export const SolutionsSection = (): JSX.Element => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div>
            <p className="text-blue-600 font-medium mb-2">Our solutions</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Clean code, Real impact
            </h2>
          </div>
          <p className="mx-auto text-lg text-gray-600 leading-relaxed text-center">
            We take pride in adapting to your needs with clean, scalable
            solutions. From architecture to front-end and back-end development,
            we build what works best for you using technologies that fit,
            without being tied to any one framework.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-6 gap-10">
          {/* First Row: Architecture (2 cols) + Front-end Development (4 cols) */}
          <Card
            className={cn(
              'bg-gray-50 border border-solid border-[#f0f2f2] p-6',
              solutionCards[0].className,
              'col-span-2'
            )}
          >
            <CardContent className="p-0">
              <div className="w-full h-[280px] mb-8 flex items-center justify-center">
                <img
                  className="w-full h-[212px] object-cover"
                  alt="Architecture"
                  src="/app/themes/defaultCCTheme/resources/images/group-1000005876.png"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {solutionCards[0].title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {solutionCards[0].description}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-50 border border-solid border-[#f0f2f2] p-6 rounded-[20px] col-span-4">
            <CardContent className="p-0">
              <div className="w-full h-[280px] mb-8 flex items-center justify-center">
                <img
                  className="w-full h-[275px] object-cover"
                  alt="Front-end Development"
                  src="/app/themes/defaultCCTheme/resources/images/frame-73.svg"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {solutionCards[1].title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {solutionCards[1].description}
              </p>
            </CardContent>
          </Card>

          {/* Second Row: Back-end Development (4 cols) + Integration (2 cols) */}
          <Card className="bg-gray-50 border border-solid border-[#f0f2f2] p-6 rounded-[20px] col-span-4 relative">
            <CardContent className="p-0">
              {/* Overlapping Code Windows */}
              <div className="relative mb-8 h-[280px]">
                {/* Java Code Editor - Front, slightly rotated left */}
                <JavaCodeEditor className="left-0 top-0 transform z-20" />

                {/* Terminal Window - Behind, overlapping, slightly rotated right */}
                <div className="absolute left-24 top-12 w-[357px] h-[241px] bg-white rounded-lg shadow-xl border border-gray-200 transform rotate-1 z-10">
                  <div className="flex items-start bg-gray-100 border-b border-gray-200 rounded-t-lg">
                    <div className="inline-flex items-center gap-2 px-3 py-[11px] rounded-[10px_0px_0px_0px]">
                      <div className="inline-flex items-center gap-1.5">
                        <div className="w-2 h-2 bg-red-400 rounded-full" />
                        <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                        <div className="w-2 h-2 bg-green-400 rounded-full" />
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-[11px]">
                      <div className="text-xs text-gray-600 font-medium">
                        zsh.
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-white font-mono text-xs leading-relaxed">
                    <div className="text-gray-800">
                      local@MacBook %{' '}
                      <span className="text-blue-600">
                        ./mvnw spring-boot:run
                      </span>
                    </div>
                    <div className="text-gray-600 mt-1">
                      <span className="text-green-600">✔</span> Dependencies
                      resolved
                    </div>
                    <div className="text-gray-600">
                      <span className="text-green-600">✔</span> Build successful
                      (14s)
                    </div>
                    <div className="text-gray-600">
                      <span className="text-blue-600">[craftcode-demo]</span>{' '}
                      Booting backend...
                    </div>
                    <div className="text-gray-600">
                      <span className="text-green-600">☑</span> Database
                      connected
                    </div>
                    <div className="text-gray-600">
                      <span className="text-green-600">☑</span> Flyway
                      migrations: 3 applied
                    </div>
                    <div className="text-gray-600">
                      <span className="text-green-600">☑</span> HTTP server
                      started on :8080
                    </div>
                    <div className="text-gray-600 mt-1">
                      <span className="text-green-600">[READY]</span> Craftcode
                      backend is up <span className="text-green-600">✔</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {solutionCards[2].title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {solutionCards[2].description}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-50 border border-solid border-[#f0f2f2] p-6 rounded-[20px_20px_40px_20px] col-span-2">
            <CardContent className="p-0">
              <div className="w-full h-[280px] mb-8 flex items-center justify-center">
                <img
                  className="w-full h-[212px] object-cover"
                  alt="Integration"
                  src="/app/themes/defaultCCTheme/resources/images/group-1000005874.png"
                />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {solutionCards[3].title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {solutionCards[3].description}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

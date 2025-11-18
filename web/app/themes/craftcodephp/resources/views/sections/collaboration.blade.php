{{-- Collaboration Section --}}
<section class="pt-24 pb-32 bg-white">
  <div class="mx-auto" style="max-width: 1200px; padding: 0 2rem;">
    {{-- Two Column Layout: Content on Left, Decorative on Right --}}
    <div class="flex items-start" style="gap: 6rem; min-height: 600px;">
      {{-- Left Column - Content and Features --}}
      <div style="flex: 1; max-width: 50%; height: 600px; display: flex; flex-direction: column;">
        {{-- Content Section --}}
        <div style="margin-bottom: 2rem; padding-top: 1.5rem;">
          <p style="
            font-family: 'Lexend', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
            font-size: 0.875rem;
            font-weight: 500;
            color: #0156ff;
            line-height: 1.5;
            margin-bottom: 1rem;
          ">
            Why Craftcode
          </p>
          <h2 style="
            font-family: 'Lexend', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
            font-size: 2.5rem;
            font-weight: 700;
            color: #1a202c;
            line-height: 1.2;
            margin-bottom: 1.5rem;
          ">
            Turn your vision<br />
            into reliable code
          </h2>
          <p style="
            font-family: 'Lexend', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
            font-size: 1rem;
            font-weight: 400;
            color: #4a5568;
            line-height: 1.6;
            margin-bottom: 2rem;
          ">
            We match the right people to your context, align on outcomes and
            build maintainable systems.
          </p>
        </div>

        {{-- Features Grid - Simple 2x2 --}}
        <div style="display: flex; flex-direction: column; gap: 0.75rem; flex: 1;">
          {{-- First Row --}}
          <div style="display: flex; gap: 0.75rem;">
            {{-- Feature 1: Right People, Right Fit --}}
            <div class="bg-gray-50 rounded-xl flex" style="width: calc(50% - 0.375rem); height: 110px; padding: 1rem; overflow: hidden;">
              <div class="flex items-start gap-2 w-full">
                <img
                  class="w-4 h-4 mt-0.5 flex-shrink-0"
                  alt="Icon"
                  src="/app/themes/craftcodephp/resources/images/group-1000005847.png"
                />
                <div class="flex flex-col overflow-hidden">
                  <h3 class="font-lexend font-semibold text-gray-900 leading-tight mb-1" style="font-size: 0.875rem;">
                    Right People, Right Fit
                  </h3>
                  <p class="font-lexend font-normal text-gray-600 leading-tight overflow-hidden" style="font-size: 0.75rem; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical;">
                    Skills, values and ways-of-working matched to your team.
                  </p>
                </div>
              </div>
            </div>

            {{-- Feature 2: Holistic by Default --}}
            <div class="bg-gray-50 rounded-xl flex" style="width: calc(50% - 0.375rem); height: 110px; padding: 1rem; overflow: hidden;">
              <div class="flex items-start gap-2 w-full">
                <img
                  class="w-4 h-4 mt-0.5 flex-shrink-0"
                  alt="Icon"
                  src="/app/themes/craftcodephp/resources/images/group-1000005849.png"
                />
                <div class="flex flex-col overflow-hidden">
                  <h3 class="font-lexend font-semibold text-gray-900 leading-tight mb-1" style="font-size: 0.875rem;">
                    Holistic by Default
                  </h3>
                  <p class="font-lexend font-normal text-gray-600 leading-tight overflow-hidden" style="font-size: 0.75rem; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical;">
                    Business, UX and tech decisions aligned from day one.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {{-- Second Row --}}
          <div style="display: flex; gap: 0.75rem;">
            {{-- Feature 3: Collaborative Challenge --}}
            <div class="bg-gray-50 rounded-xl flex" style="width: calc(50% - 0.375rem); height: 110px; padding: 1rem; overflow: hidden;">
              <div class="flex items-start gap-2 w-full">
                <img
                  class="w-4 h-4 mt-0.5 flex-shrink-0"
                  alt="Icon"
                  src="/app/themes/craftcodephp/resources/images/application-1.svg"
                />
                <div class="flex flex-col overflow-hidden">
                  <h3 class="font-lexend font-semibold text-gray-900 leading-tight mb-1" style="font-size: 0.875rem;">
                    Collaborative Challenge
                  </h3>
                  <p class="font-lexend font-normal text-gray-600 leading-tight overflow-hidden" style="font-size: 0.75rem; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical;">
                    We co-create, ask hard questions and raise the bar.
                  </p>
                </div>
              </div>
            </div>

            {{-- Feature 4: Inclusive & Sustainable --}}
            <div class="bg-gray-50 rounded-xl flex" style="width: calc(50% - 0.375rem); height: 110px; padding: 1rem; overflow: hidden;">
              <div class="flex items-start gap-2 w-full">
                <img
                  class="w-4 h-4 mt-0.5 flex-shrink-0"
                  alt="Icon"
                  src="/app/themes/craftcodephp/resources/images/group-1000005848.png"
                />
                <div class="flex flex-col overflow-hidden">
                  <h3 class="font-lexend font-semibold text-gray-900 leading-tight mb-1" style="font-size: 0.875rem;">
                    Inclusive & Sustainable
                  </h3>
                  <p class="font-lexend font-normal text-gray-600 leading-tight overflow-hidden" style="font-size: 0.75rem; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical;">
                    Accessible, well-tested code that lasts beyond the project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {{-- Right Column - Decorative Elements --}}
      <div class="relative bg-gray-100 rounded-lg" style="flex: 1; max-width: 50%; height: 600px; padding-top: 1.5rem;">
        <div class="relative w-full h-full flex items-center justify-center">
          {{-- Each element centered within the container --}}
          <div class="relative flex items-center justify-center" style="width: 370px; height: 370px;">
            <img
              class="absolute"
              style="width: 370px; height: 370px;"
              alt="Ellipse"
              src="/app/themes/craftcodephp/resources/images/ellipse-24.svg"
            />
            <div class="relative flex items-center justify-center" style="width: 300px; height: 300px;">
              <img
                class="absolute"
                style="width: 300px; height: 300px;"
                alt="Ellipse"
                src="/app/themes/craftcodephp/resources/images/ellipse-23.svg"
              />
              <div class="relative flex items-center justify-center" style="width: 240px; height: 240px;">
                <img
                  class="absolute"
                  style="width: 240px; height: 240px;"
                  alt="Ellipse"
                  src="/app/themes/craftcodephp/resources/images/ellipse-22.svg"
                />
                <div class="relative flex items-center justify-center" style="width: 192px; height: 192px;">
                  <div 
                    class="absolute rounded-full opacity-30"
                    style="
                      width: 192px; 
                      height: 192px;
                      background: radial-gradient(50% 50% at 50% 50%, rgba(153,187,255,1) 74%, rgba(0,85,255,1) 100%);
                    ">
                  </div>
                  <img
                    class="relative z-10"
                    style="width: 101px; height: 112px;"
                    alt="Logo color"
                    src="/app/themes/craftcodephp/resources/images/logo-color-1.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

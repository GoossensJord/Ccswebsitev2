<?php
/**
 * Project Showcase Section
 * Updated to match uniform styling across the theme
 */
?>

<section style="background-color: white; padding: 6rem 0;">
  <div class="mx-auto" style="max-width: 1200px; padding: 0 2rem;">
    <!-- Header Section -->
    <div class="text-center" style="margin-bottom: 3rem;">
      <p style="
        font-family: 'Lexend', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
        font-size: 0.875rem;
        font-weight: 500;
        color: #0156ff;
        line-height: 1.5;
        margin-bottom: 1rem;
      ">
        Our Success Stories
      </p>
      <h2 style="
        font-family: 'Lexend', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
        font-size: 2.5rem;
        font-weight: 700;
        color: #010326;
        line-height: 1.2;
        margin-bottom: 1.5rem;
      ">
        Proven craftsmanship, real outcomes
      </h2>
      <p style="
        font-family: 'Lexend', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: 400;
        color: #010326cc;
        line-height: 1.6;
        margin: 0 auto;
      ">
        We focus on people, fit, and craft. From architecture to front-end
        and back-end,
        <br /> we build what serves your goals and users best
      </p>
    </div>

    <!-- Project Cards Grid -->
    <div class="grid lg:grid-cols-2" style="gap: 2rem;">
      <!-- CEPA Project Card -->
      <div class="rounded-[20px_20px_60px_20px] border border-solid" style="
        background-color: white;
        border-color: #e5e7eb;
        padding: 2rem;
      ">
        <div class="flex items-start" style="gap: 2rem;">
          <!-- Text Content -->
          <div class="flex-1 flex flex-col justify-between" style="min-height: 120px;">
            <div>
              <p style="
                font-family: 'Lexend', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
                font-size: 1rem;
                font-weight: 400;
                color: #010326cc;
                line-height: 1.6;
                margin-bottom: 1rem;
              ">
                With CraftCode's guidance, we transformed our digital
                processes, achieving operational efficiency that exceeded
                our expectations.
              </p>
            </div>

            <div>
              <p style="
                font-family: 'Lexend', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
                font-size: 0.875rem;
                font-weight: 500;
                color: #0156ff;
                line-height: 1.5;
              ">
                CEPA
              </p>
            </div>
          </div>

          <!-- Image Content with Logo Overlay -->
          <div class="flex-shrink-0 relative" style="width: 200px; height: 200px;">
            <img
              class="w-full h-full rounded-2xl object-cover opacity-70"
              alt="CEPA Project"
              src="/app/themes/craftcodephp/resources/images/rectangle-5954.png"
            />
            <!-- Fade overlay for better logo visibility -->
            <div class="absolute inset-0 bg-white bg-opacity-20 rounded-2xl"></div>
            <div class="absolute top-2 left-2 right-2 flex justify-center z-10">
              <img
                class="w-[50px] h-[19px] drop-shadow-lg"
                alt="CEPA Logo"
                src="/app/themes/craftcodephp/resources/images/logo.svg"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Royal Belgian Football Association Project Card -->
      <div class="rounded-[20px_20px_60px_20px] border border-solid" style="
        background-color: white;
        border-color: #e5e7eb;
        padding: 2rem;
      ">
        <div class="flex items-start" style="gap: 2rem;">
          <!-- Text Content -->
          <div class="flex-1 flex flex-col justify-between" style="min-height: 120px;">
            <div>
              <p style="
                font-family: 'Lexend', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
                font-size: 1rem;
                font-weight: 400;
                color: #010326cc;
                line-height: 1.6;
                margin-bottom: 1rem;
              ">
                CraftCode's collaborative approach meant we weren't just
                getting a development team; we were getting partners who
                cared about our growth.
              </p>
            </div>

            <div>
              <p style="
                font-family: 'Lexend', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
                font-size: 0.875rem;
                font-weight: 500;
                color: #0156ff;
                line-height: 1.5;
              ">
                Royal Belgian Football Association
              </p>
            </div>
          </div>

          <!-- Image Content with Logo Overlay -->
          <div class="flex-shrink-0 relative" style="width: 200px; height: 200px;">
            <img
              class="w-full h-full rounded-2xl object-cover opacity-70"
              alt="RBFA Project"
              src="/app/themes/craftcodephp/resources/images/rectangle-5969.png"
            />
            <!-- Fade overlay for better logo visibility -->
            <div class="absolute inset-0 bg-white bg-opacity-20 rounded-2xl"></div>
            <div class="absolute top-2 left-2 right-2 flex justify-center z-10">
              <img
                class="w-[60px] h-[24px] drop-shadow-lg"
                alt="RBFA Logo"
                src="/app/themes/craftcodephp/resources/images/kbvb-logo-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
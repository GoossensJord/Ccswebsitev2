<?php
/**
 * Company Logo Carousel Section
 * Updated to match image reference with header text and proper formatting
 */
?>

<section style="background-color: white; padding: 6rem 0;">
    <div class="w-full mx-auto relative" style="max-width: 1200px; padding: 0 2rem;">
        <!-- Header Section -->
        <div class="text-center" style="margin-bottom: 3rem;">
            <h2 style="
                font-family: 'Lexend', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
                font-size: 2.5rem;
                font-weight: 700;
                color: #010326;
                line-height: 1.2;
                margin-bottom: 1.5rem;
            ">
                Trusted by leading companies
            </h2>
            <p style="
                font-family: 'Lexend', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
                font-size: 1rem;
                font-weight: 400;
                color: #010326cc;
                line-height: 1.6;
                margin: 0 auto;
                max-width: 800px;
            ">
                We are proud to have worked with leading names in various industries across Belgium and beyond,
                helping them navigate and master their digital transformation journey.
            </p>
        </div>

        <!-- Logo Grid Container with Fade Edges -->
        <div class="relative">
            <!-- Fade overlay for left and right edges -->
            <div class="absolute inset-0 pointer-events-none z-10">
                <div class="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent"></div>
                <div class="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent"></div>
            </div>
            
            <!-- Top row of company logos -->
            <div class="grid" style="grid-template-columns: repeat(5, 1fr); gap: 8px; margin-bottom: 8px; transform: translateX(20px);">
                <div class="flex items-center justify-center" style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 16px; width: 296px; height: 148px; border-radius: 12px;">
                    <img
                        src="/app/themes/defaultCCTheme/resources/images/logo-color.png"
                        alt="Contribute"
                        class="max-w-full max-h-[60px] object-contain"
                    />
                </div>
                <div class="flex items-center justify-center" style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 16px; width: 296px; height: 148px; border-radius: 12px;">
                    <img
                        src="/app/themes/defaultCCTheme/resources/images/logo-color.png"
                        alt="Royal Belgian Football Association"
                        class="max-w-full max-h-[60px] object-contain"
                    />
                </div>
                <div class="flex items-center justify-center" style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 16px; width: 296px; height: 148px; border-radius: 12px;">
                    <img
                        src="/app/themes/defaultCCTheme/resources/images/logo-color.png"
                        alt="CEPA"
                        class="max-w-full max-h-[60px] object-contain"
                    />
                </div>
                <div class="flex items-center justify-center" style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 16px; width: 296px; height: 148px; border-radius: 12px;">
                    <img
                        src="/app/themes/defaultCCTheme/resources/images/logo-color.png"
                        alt="Proximus"
                        class="max-w-full max-h-[60px] object-contain"
                    />
                </div>
                <div class="flex items-center justify-center" style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 16px; width: 296px; height: 148px; border-radius: 12px;">
                    <img
                        src="/app/themes/defaultCCTheme/resources/images/logo-color.png"
                        alt="UZA"
                        class="max-w-full max-h-[60px] object-contain"
                    />
                </div>
            </div>
            
            <!-- Bottom row of company logos -->
            <div class="grid" style="grid-template-columns: repeat(5, 1fr); gap: 8px; transform: translateX(-20px);">
                <div class="flex items-center justify-center" style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 16px; width: 296px; height: 148px; border-radius: 12px;">
                    <img
                        src="/app/themes/defaultCCTheme/resources/images/logo-color.png"
                        alt="Christelijke Mutualiteit"
                        class="max-w-full max-h-[60px] object-contain"
                    />
                </div>
                <div class="flex items-center justify-center" style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 16px; width: 296px; height: 148px; border-radius: 12px;">
                    <img
                        src="/app/themes/defaultCCTheme/resources/images/logo-color.png"
                        alt="Collibra"
                        class="max-w-full max-h-[60px] object-contain"
                    />
                </div>
                <div class="flex items-center justify-center" style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 16px; width: 296px; height: 148px; border-radius: 12px;">
                    <img
                        src="/app/themes/defaultCCTheme/resources/images/logo-color.png"
                        alt="Johnson & Johnson"
                        class="max-w-full max-h-[60px] object-contain"
                    />
                </div>
                <div class="flex items-center justify-center" style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 16px; width: 296px; height: 148px; border-radius: 12px;">
                    <img
                        src="/app/themes/defaultCCTheme/resources/images/logo-color.png"
                        alt="Randstad"
                        class="max-w-full max-h-[60px] object-contain"
                    />
                </div>
                <div class="flex items-center justify-center" style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 16px; width: 296px; height: 148px; border-radius: 12px;">
                    <img
                        src="/app/themes/defaultCCTheme/resources/images/logo-color.png"
                        alt="Vlaamse Overheid"
                        class="max-w-full max-h-[60px] object-contain"
                    />
                </div>
            </div>
        </div>
    </div>
</section>
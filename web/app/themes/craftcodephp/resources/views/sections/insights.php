<?php
/**
 * Insights Section (Call to Action)
 * Extracted from InsightsSection.tsx React component
 */
?>

<section class="relative w-full">
    <div class="relative rounded-[20px]" style="background-color: #f9fafb; padding-top: 6rem;">
        <!-- Container to center and constrain the blue div -->
        <div class="w-full flex justify-center">
            <div class="w-full rounded-[20px_20px_20px_60px] flex items-center justify-between relative overflow-hidden" style="
                max-width: 1200px;
                height: 285px;
                background-color: #0156ff;
                padding: 0 6rem;
                margin-left: auto;
                margin-right: auto;
            ">
                <!-- Background Image -->
                <div class="absolute inset-0 bg-[url(/app/themes/defaultCCTheme/resources/images/image-85.png)] bg-contain bg-bottom bg-right bg-no-repeat opacity-20 z-0"></div>
                
                <!-- Content -->
                <div class="flex flex-col items-start max-w-[822px] relative z-10" style="gap: 1rem;">
                    <h2 style="
                        font-family: 'Lexend', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
                        font-size: 3rem;
                        font-weight: 700;
                        color: white;
                        line-height: 1.2;
                    ">
                        Let's build the future together
                    </h2>
                    <p style="
                        font-family: 'Lexend', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
                        font-size: 1rem;
                        font-weight: 400;
                        color: #ffffffcc;
                        line-height: 1.6;
                    ">
                        Ready to take your digital ambitions to the next level? <br />
                        Let's collaborate and create something exceptional.
                    </p>
                </div>
                
                <!-- Button -->
                <button class="w-[143px] h-auto rounded-md hover:bg-[#0156ff]/90 relative z-10" style="
                    background-color: #0156ff;
                    padding: 16px 24px;
                ">
                    <span style="
                        font-family: 'Lexend', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
                        font-size: 0.875rem;
                        font-weight: 500;
                        color: white;
                        line-height: 1.5;
                    ">
                        Let's talk
                    </span>
                </button>
            </div>
        </div>
    </div>
</section>

